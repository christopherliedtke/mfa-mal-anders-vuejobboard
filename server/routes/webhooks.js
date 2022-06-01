const express = require("express");
const router = express.Router();
const download = require("download");
const config = require("../config/config");
const recachePrerender = require("../lib/recachePrerender");
const emailService = require("../lib/nodemailer");
const internalJobsCache = require("../cache/internalJobsCache");
const { User } = require("../database/models/user");
const { Job } = require("../database/models/job");
const { Payment } = require("../database/models/payment");
const { googleIndexing } = require("../lib/googleJobIndexing");
const saveInvoiceToGDrive = require("../lib/saveInvoiceToGDrive");
const jobToAsanaTask = require("../lib/jobToAsanaTask");
// const { postToFacebook } = require("../lib/postToFacebook");

const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  POST /api/webhooks/stripe/invoice-updated
// #desc:   Upsert payment when invoice updated
// #access: Public
router.post(
  "/stripe/invoice-updated",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET_INVOICE_UPDATED;
      const sig = req.headers["stripe-signature"];

      let event;

      try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }

      // console.log("event.type: ", event.type);

      if (
        [
          "invoice.finalized",
          "invoice.updated",
          "invoice.voided",
          "invoice.paid",
        ].every(eventType => eventType != event.type)
      ) {
        console.info(
          "Unhandled webhook event in invoice-updated: ",
          event.type
        );

        res.send();
        return;
      }

      const invoice = await stripe.invoices.retrieve(event.data.object.id, {
        expand: ["payment_intent"],
      });

      // console.log("invoice: ", invoice);

      if (!invoice) {
        throw new Error("Invoice object is not valid.");
      }

      const filter = { stripeInvoiceId: invoice.id };
      const update = {
        stripeInvoiceStatus: invoice.status,
        stripeHostedInvoiceUrl: invoice.hosted_invoice_url,
        stripeInvoicePdf: invoice.invoice_pdf,
        stripePaymentIntentStatus: invoice.payment_intent
          ? invoice.payment_intent.status
          : null,
        total: invoice.total,
        tax: invoice.tax,
        number: invoice.number,
        finalizedAt: invoice.status_transitions.finalized_at * 1000,
        paidAt: invoice.status_transitions.paid_at
          ? invoice.status_transitions.paid_at * 1000
          : undefined,
      };

      const payment = await Payment.findOneAndUpdate(filter, update, {
        new: true,
        upsert: event.type == "invoice.finalized",
      });

      // console.log("payment: ", payment);

      if (event.type == "invoice.finalized" || event.type == "invoice.paid") {
        let invoiceItems = await stripe.invoiceItems.list({
          invoice: invoice.id,
          expand: ["data.price.product"],
        });

        // console.log("invoiceItems: ", invoiceItems);

        const jobs = await Promise.all(
          invoiceItems.data
            .filter(invoiceItem => invoiceItem.metadata.jobId)
            .map(invoiceItem =>
              Job.findOneAndUpdate(
                { _id: invoiceItem.metadata.jobId },
                {
                  status:
                    (event.type == "invoice.finalized" &&
                      invoiceItem.price.product.metadata.publish_immediately) ||
                    event.type == "invoice.paid"
                      ? "published"
                      : undefined,
                  paymentId: payment._id,
                  paid: invoice.paid,
                  stripeInvoiceStatus: invoice.status,
                  publishedAt: invoiceItem.price.product.metadata
                    .publish_immediately
                    ? invoice.status_transitions.finalized_at * 1000
                    : undefined,
                  paidExpiresAt:
                    (event.type == "invoice.finalized" &&
                      invoiceItem.price.product.metadata.publish_immediately) ||
                    event.type == "invoice.paid"
                      ? new Date(
                          invoice.status_transitions.finalized_at * 1000
                        ).setHours(23, 59, 59, 999) +
                        1000 *
                          60 *
                          60 *
                          24 *
                          parseInt(
                            invoiceItem.price.product.metadata.duration || 60
                          )
                      : undefined,
                  refreshFrequency: Math.max(
                    parseInt(
                      invoiceItem.price.product.metadata.refreshFrequency || 0
                    ),
                    parseInt(
                      invoice.discount &&
                        invoice.discount.coupon &&
                        invoice.discount.coupon.metadata.refreshFrequency
                        ? invoice.discount.coupon.metadata.refreshFrequency
                        : 0
                    )
                  ),
                },
                { new: true }
              )
            )
        );

        // console.log("jobs: ", jobs);

        if (event.type == "invoice.finalized") {
          sendOrderConfirmation(invoice, jobs);
        }

        if (event.type == "invoice.finalized" && !payment.user) {
          attachUserToPayment(invoice.customer, payment._id);
        }

        if (jobs) {
          if (event.type == "invoice.paid") {
            Promise.all(jobs.map(job => jobToAsanaTask(job)));
            // if (config.facebook.autoPost) postToFacebook();

            attachInvoiceNoToPaymentIntent(invoice.payment_intent, invoice);
          }

          internalJobsCache.flush();

          jobs.forEach(job => {
            googleIndexing(
              process.env.WEBSITE_URL +
                config.googleIndexing.pathPrefix +
                job._id +
                "/" +
                job.slug,
              "URL_UPDATED"
            );

            recachePrerender(`${process.env.WEBSITE_URL}/job/${job._id}`);
          });
        }

        sendAdminNotification(invoice, jobs);

        if (event.type == "invoice.finalized") {
          remoteInvoiceToGDrive(invoice.invoice_pdf, invoice.number + ".pdf");
        }
      }
    } catch (error) {
      console.error("Error in /invoice-updated webhook: ", error);
    }
    res.send();
  }
);

async function attachInvoiceNoToPaymentIntent(paymentIntent, invoice) {
  try {
    if (paymentIntent) {
      await stripe.paymentIntents.update(paymentIntent.id, {
        description: invoice.number,
      });
    }
  } catch (error) {
    console.error(
      "Error attaching invoiceNo to paymentIntens in /invoice-updated: ",
      error
    );
  }
}

async function attachUserToPayment(stripeCustomerId, paymentId) {
  try {
    if (!stripeCustomerId || !paymentId) {
      throw new Error(
        `stripeCustomerId: ${stripeCustomerId} or paymentId: ${paymentId} not provided!`
      );
    }
    const user = await User.findOne({ stripeCustomerId });

    if (user) {
      await Payment.findOneAndUpdate({ _id: paymentId }, { user: user._id });
    } else {
      const customer = await stripe.customers.retrieve(stripeCustomerId);

      if (!customer || customer.error) {
        console.error(
          "Customer not found in attachUserToPayment(): ",
          customer.error
        );
      }

      if (customer.metadata.userId) {
        await Payment.findOneAndUpdate(
          { _id: paymentId },
          { user: customer.metadata.userId }
        );
      }
    }
  } catch (error) {
    console.error("Error in attachUserToPayment(): ", error);
  }

  return;
}

async function remoteInvoiceToGDrive(remoteUrl, filename) {
  try {
    if (!remoteUrl || !filename) {
      throw new Error(
        `remoteUrl or filename not given - argumtents: ${arguments}`
      );
    }

    await download(remoteUrl, __dirname + "/../invoices/", { filename });
    await saveInvoiceToGDrive(__dirname + "/../invoices/" + filename, filename);
  } catch (error) {
    console.error("Error on remoteInvoiceToGDrive: ", error);
  }

  return;
}

async function sendAdminNotification(invoice, jobs) {
  try {
    const dataMailToAdmin = {
      from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
      to: process.env.CONTACT_EMAIL_ADRESS,
      subject: `[${invoice.number} - ${invoice.status.toUpperCase()}] | ${
        invoice.total / 100
      }€`,
      html: `
        <h2>Rechnung – ${invoice.number}</h2>
        <p>
          <strong>StripeInvoiceID:</strong> <a href="https://dashboard.stripe.com/search?query=${
            invoice.id
          }" target="_blank">${invoice.id}</a> <br>
          <strong>StripeInvoiceNo:</strong> <a href="https://dashboard.stripe.com/search?query=${
            invoice.number
          }" target="_blank">${invoice.number}</a>  <br>
          <strong>StripeCustomer:</strong> <a href="https://dashboard.stripe.com/search?query=${
            invoice.customer
          }" target="_blank">${invoice.customer}</a>  <br>
          <strong><a href="${
            invoice.invoice_pdf
          }" target="_blank">Download</a></strong>  <br>
          <strong>Status:</strong> ${invoice.status} <br>
          <strong>Total:</strong> ${invoice.total / 100}€ <br>
          <strong>Tax:</strong> ${invoice.tax / 100}€ <br>
        </p>
      `,
    };

    if (jobs && Array.isArray(jobs) && jobs.length > 0) {
      dataMailToAdmin.html += jobs
        .map(
          job =>
            `<p><strong>Stellentitel: </strong><a href="${process.env.WEBSITE_URL}/admin/jobs/preview/${job._id}" target="_blank">${job.title}</a> | <a href="${process.env.WEBSITE_URL}/admin/jobs?s=${job._id}" target="_blank">${job._id}</a></p>`
        )
        .join("");
    } else {
      dataMailToAdmin.html += `<p><strong>NO JOBS ATTACHED --> CHECK INVOICE</p>`;
    }

    await emailService.sendMail(dataMailToAdmin);
  } catch (error) {
    console.error("Error in sendAdminNotification: ", error);
  }

  return;
}

async function sendOrderConfirmation(invoice, jobs) {
  try {
    if (!invoice) {
      throw new Error("Missing invoice in sendOrderConfirmation()");
    }

    if (!invoice.metadata.send_confirmation) {
      return;
    }

    if (!invoice.customer_email) {
      throw new Error(
        "Missing invoice.customer_email in sendOrderConfirmation()"
      );
    }

    const dataMailToCustomer = {
      from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
      to: invoice.customer_email,
      subject: `Auftragsbestätigung - Ihr Auftrag auf 'MFA-mal-anders.de'`,
      html: `
        <p>Guten Tag,</p>
        <p>
          vielen Dank für Ihr Bestellung und Ihr Vertrauen. Ihr Auftrag ist erfolgreich bei uns eingegangen und wird nun verarbeitet. Die dazugehörige Rechnung inklusive sämtlicher Positionen erhalten Sie in einer separaten E-Mail.
        </p>

        ${
          Array.isArray(jobs) && jobs.length > 0
            ? `
              <p>
                Ihre ${
                  jobs.length > 1
                    ? "Stellenanzeigen sind"
                    : "Stellenanzeige ist"
                } ab sofort entsprechend des gebuchten Stellenpakets auf <em>MFA mal anders</em> veröffentlicht. Gern können Sie Links zu Ihren Stellenanzeigen beispielsweise auf Ihrer Webseite oder über Ihre Social Media Kanäle veröffentlichen. Unserer Erfahrung nach ist dies eine weitere gute Möglichkeit, potentielle BewerberInnen auf sich aufmerksam zu machen.
              </p>
              <p style="margin-left:1rem">
                ${jobs.map(
                  job =>
                    `<a href="${process.env.WEBSITE_URL}/job/${job._id}" target="_blank"><strong>${job.title}</strong></a><br>`
                )}
              </p>
            `
            : ""
        }

        <p>
          Sollten Sie noch Fragen, Anregungen oder weiteren Beratungsbedarf haben, melden Sie sich gern bei uns über unser <a href="${
            process.env.WEBSITE_URL
          }/kontakt">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:${
        process.env.CONTACT_EMAIL_ADRESS
      }">${process.env.CONTACT_EMAIL_ADRESS}</a>.
        </p>

        <p>
          Bitte beachten Sie unsere Widerrufsbelehrung im Anhang dieser E-Mail.
        </p>

        <p>Ihr <em>MFA mal anders</em> Team</p>
        <p>__</p>
        <p>
          <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
          <strong>MFA mal anders</strong> <br>
          Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte Fachangestellte <br>
          <br>
          Telefon: <a href="tel:+4917645282858">+49 176 / 45 28 28 58</a> <br>
          E-Mail: <a href="mailto:${process.env.CONTACT_EMAIL_ADRESS}">${
        process.env.CONTACT_EMAIL_ADRESS
      }</a> <br>
          Webseite: <a href="${process.env.WEBSITE_URL}">${
        process.env.WEBSITE_URL
      }</a>
        </p>
      `,
      attachments: [
        {
          filename: "MfaMalAnders_logo_circle_bgdark_white.png",
          path:
            __dirname +
            "/../../client/public/img/MfaMalAnders_logo_circle_bgdark_white.png",
          cid: "mfa-mal-anders-logo", //same cid value as in the html img src
        },
        {
          filename: "MfaMalAnders_AGBs.pdf",
          path: __dirname + "/../downloads/MfaMalAnders_AGBs.pdf",
        },
      ],
    };

    emailService.sendMail(dataMailToCustomer);
  } catch (error) {
    console.error(
      "Error in sendOrderConfirmation() in /invoice-updated: ",
      error
    );
  }
}

router.get("/download-invoice", async (req, res) => {
  remoteInvoiceToGDrive(
    "https://pay.stripe.com/invoice/acct_1H7gA7BqHbQO3Nhw/test_YWNjdF8xSDdnQTdCcUhiUU8zTmh3LF9MQVRvTzczZHBUUHNRMVFkeFl1UjR0RE9VZ2xVVGRGLDM1NjQwNzU20200fBkQ9C8w/pdf?s=ap",
    "testxy.pdf"
  );
  res.send();
});

module.exports = router;
