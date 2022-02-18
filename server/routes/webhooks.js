const express = require("express");
const router = express.Router();
// const fs = require("fs");
const download = require("download");
const config = require("../config/config");
const recachePrerender = require("../middleware/recachePrerender");
const emailService = require("../utils/nodemailer");
const internalJobsCache = require("../cache/internalJobsCache");
// const createInvoice = require("../middleware/createInvoice");
const { Job } = require("../database/models/job");
const { Payment } = require("../database/models/payment");
// const { UsedCoupon } = require("../database/models/usedCoupon");
const { googleIndexing } = require("../middleware/googleJobIndexing");
const saveInvoiceToGDrive = require("../utils/saveInvoiceToGDrive");
const jobToAsanaTask = require("../utils/jobToAsanaTask");
// const { postToFacebook } = require("../middleware/postToFacebook");

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

      console.log("event.type: ", event.type);

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

      const invoice = event.data.object;

      console.log("invoice: ", invoice);

      if (!invoice) {
        throw new Error("Invoice object is not valid.");
      }

      // TODO check if user w/ customerId exists and attach user._id || attach to customer.metadata.userId

      const filter = { stripeInvoiceId: invoice.id };
      const update = {
        stripeInvoiceStatus: invoice.status,
        stripeHostedInvoiceUrl: invoice.hosted_invoice_url,
        stripeInvoicePdf: invoice.invoice_pdf,
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

      console.log("payment: ", payment);

      if (event.type == "invoice.finalized" || event.type == "invoice.paid") {
        let invoiceItems = await stripe.invoiceItems.list({
          invoice: invoice.id,
          expand: ["data.price.product"],
        });

        console.log("invoiceItems: ", invoiceItems);

        const jobs = await Promise.all(
          invoiceItems.data
            .filter(invoiceItem => invoiceItem.metadata.jobId)
            .map(invoiceItem =>
              Job.findOneAndUpdate(
                { _id: invoiceItem.metadata.jobId },
                {
                  status:
                    event.type == "invoice.finalized" &&
                    invoiceItem.price.product.metadata.publish_immediately
                      ? "published"
                      : undefined,
                  paymentId: payment._id,
                  paid: invoice.paid,
                  stripeInvoiceStatus: invoice.status,
                  publishedAt: invoiceItem.price.product.metadata
                    .publish_immediately
                    ? invoice.status_transitions.finalized_at * 1000
                    : undefined,
                  paidExpiresAt: invoiceItem.price.product.metadata
                    .publish_immediately
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

        console.log("jobs: ", jobs);

        if (jobs) {
          if (event.type == "invoice.paid") {
            Promise.all(jobs.map(job => jobToAsanaTask(job)));
            // if (config.facebook.autoPost) postToFacebook();
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

            recachePrerender(
              `${process.env.WEBSITE_URL}/stellenangebote/job/${job._id}`
            );
          });
        }

        sendAdminNotification(invoice, jobs);

        if (event.type == "invoice.finalized") {
          remoteInvoiceToGDrive(invoice.invoice_pdf, invoice.number);
        }
      }
    } catch (error) {
      console.error("Error in /invoice-updated webhook: ", error);
    }
    res.send();
  }
);

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
      from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
      to: config.website.contactEmail,
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
          <strong><a href="${
            invoice.invoice_pdf
          }" target="_blank">Download</a></strong>  <br>
          <strong>Status:</strong> ${invoice.status} <br>
          <strong>Total:</strong> ${invoice.total / 100}€ <br>
          <strong>Tax:</strong> ${invoice.tax / 100}€ <br>
        </p>
      `,
    };

    if (jobs) {
      dataMailToAdmin.html += jobs
        .map(
          job =>
            `<p><strong>Stellentitel: </strong><a href="${process.env.WEBSITE_URL}/admin/jobs/preview/${job._id}" target="_blank">${job.title}</a> | <a href="${process.env.WEBSITE_URL}/admin/jobs?s=${job._id}" target="_blank">${job._id}</a></p>`
        )
        .join("");
    }

    await emailService.sendMail(dataMailToAdmin);
  } catch (error) {
    console.error("Error in sendAdminNotification: ", error);
  }

  return;
}

// router.get("/download-invoice", async (req, res) => {
//   remoteInvoiceToGDrive(
//     "https://pay.stripe.com/invoice/acct_1H7gA7BqHbQO3Nhw/test_YWNjdF8xSDdnQTdCcUhiUU8zTmh3LF9MQVRvTzczZHBUUHNRMVFkeFl1UjR0RE9VZ2xVVGRGLDM1NjQwNzU20200fBkQ9C8w/pdf?s=ap",
//     "testxy.pdf"
//   );
//   res.send();
// });

// #route:  POST /api/webhooks/checkout-completed
// #desc:   Check if payment is completed and update job
// #access: Private
// router.post("/checkout-completed", async (req, res) => {
//   const { jobId, userId, couponId, pricingPackage } =
//     req.body.data.object.metadata;

//   let { refreshFrequency, taxRate, amount } = req.body.data.object.metadata;
//   // const amount = req.body.data.object["amount_total"];
//   // const taxRate = Math.round(
//   //   amount * config.invoice.sender(new Date()).taxRate
//   // );

//   try {
//     const intent = await stripe.paymentIntents.retrieve(
//       req.body.data.object["payment_intent"]
//     );

//     if (intent.status === "succeeded") {
//       const paidExpiresAt = new Date(
//         new Date().setHours(23, 59, 59, 999) +
//           1000 *
//             60 *
//             60 *
//             24 *
//             config.payment.pricingPackages.find(
//               pkg => pkg.name.toLowerCase() === pricingPackage.toLowerCase()
//             ).duration
//       );

//       const succeededCharge = intent.charges.data.filter(
//         charge => charge.paid
//       )[0];

//       const job = await Job.findOne({ _id: jobId }).populate("company");

//       const lastInvoiceNo = await Payment.find({}, "invoiceNo")
//         .sort({ invoiceNo: -1 })
//         .limit(1);

//       const invoiceNo = lastInvoiceNo[0].invoiceNo + 1;
//       const invoiceDate = new Date().getTime();

//       const paymentObj = {
//         status: "paid",
//         invoiceNo,
//         invoiceDate,
//         paymentType: "stripe",
//         pricingPackage,
//         amount,
//         taxRate: taxRate,
//         fee: config.stripe.feeFix + config.stripe.feeVar * amount,
//         billingEmail: succeededCharge["billing_details"].email,
//         billingCompany: job ? job.company.name : "",
//         billingDepartment: "",
//         billingGender: "",
//         billingTitle: "",
//         billingFirstName: "",
//         billingLastName: succeededCharge["billing_details"].name,
//         billingStreet:
//           (succeededCharge["billing_details"].address.line1 || "") +
//           " " +
//           (succeededCharge["billing_details"].address.line2 || ""),
//         billingZipCode:
//           succeededCharge["billing_details"].address["postal_code"],
//         billingLocation: succeededCharge["billing_details"].address.city,
//         paidAt: new Date(),
//         paymentExpiresAt: paidExpiresAt,
//         job: jobId,
//         user: userId,
//         stripePaymentIntent: intent.id || "",
//         receiptUrl: succeededCharge["receipt_url"],
//         receiptNumber: succeededCharge["receipt_number"],
//       };

//       if (couponId) {
//         paymentObj.coupon = couponId;
//       }

//       const newPaymentObj = new Payment(paymentObj);
//       console.info("newPaymentObj: ", newPaymentObj);
//       const payment = await newPaymentObj.save();
//       console.info("payment: ", payment);

//       const updatedJob = await Job.findOneAndUpdate(
//         { _id: jobId, userId: userId },
//         {
//           status:
//             pricingPackage.toLowerCase() != "professional"
//               ? "published"
//               : "draft",
//           publishedAt: new Date().getTime(),
//           paid: true,
//           paidExpiresAt,
//           refreshFrequency,
//           payment: payment._id,
//         },
//         { new: true }
//       )
//         .populate("company")
//         .populate("userId");

//       if (couponId) {
//         const newUsedCoupon = new UsedCoupon({
//           userId: userId,
//           couponId: couponId,
//         });
//         await newUsedCoupon.save();
//       }

//       if (
//         pricingPackage.toLowerCase() != "professional" &&
//         updatedJob.status === "published"
//       ) {
//         internalJobsCache.flush();
//         googleIndexing(
//           process.env.WEBSITE_URL +
//             config.googleIndexing.pathPrefix +
//             jobId +
//             "/" +
//             job.slug,
//           "URL_UPDATED"
//         );

//         recachePrerender(
//           `${process.env.WEBSITE_URL}/stellenangebote/job/${jobId}`
//         );
//       }

//       // if (config.facebook.autoPost) postToFacebook();

//       const invoice = await createInvoice(payment, __dirname + "/../invoices/");

//       try {
//         await stripe.paymentIntents.update(
//           req.body.data.object["payment_intent"],
//           {
//             description:
//               "RE-" +
//               "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
//               payment.invoiceNo.toString(),
//           }
//         );
//       } catch (err) {
//         console.log("Error on updating paymentIntent in /webhooks: ", err);
//       }

//       await saveInvoiceToGDrive(invoice.path, invoice.fileName);

//       await jobToAsanaTask(updatedJob);

//       const dataMailToAdmin = {
//         from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
//         to: config.website.contactEmail,
//         subject: `[Stripe ${
//           "RE-" +
//           "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
//           payment.invoiceNo.toString()
//         }] - ${pricingPackage} | ${
//           parseInt(
//             payment.amount + Math.round(payment.amount * payment.taxRate)
//           ) / 100
//         }€ - Veröffentlichung Stellenanzeige '${updatedJob.title}'`,
//         html: `
//           <h2>Veröffentlichung einer neuen Stelle</h2>
//           <p>
//           <strong>InvoiceNo:</strong> <a href="${
//             process.env.WEBSITE_URL
//           }/api/invoice/download/${payment._id}" target="_blank">${
//           "RE-" +
//           "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
//           payment.invoiceNo.toString()
//         }</a>  <br>
//                     <strong>ID:</strong> ${updatedJob._id} <br>
//                     <strong>Paket:</strong> ${pricingPackage} <br>
//                     <strong>Stellentitel:</strong> ${updatedJob.title} <br>
//                     <strong>Unternehmen:</strong> ${
//                       updatedJob.company.name
//                     } <br>
//                     <strong>Unternehmensgröße:</strong> ${
//                       updatedJob.company.size
//                     } <br>
//                     <strong>Webseite:</strong> <a href="${
//                       updatedJob.company.url
//                     }">${updatedJob.company.url}</a> <br>
//                     <strong>Ort:</strong> ${updatedJob.company.location}, ${
//           updatedJob.company.state
//         } <br>
//                     <strong>Preis:</strong> ${payment.amount / 100} EURO <br>
//                     <strong>Link:</strong> <a href="${
//                       process.env.WEBSITE_URL +
//                       config.googleIndexing.pathPrefix +
//                       jobId
//                     }">${
//           process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + jobId
//         }</a>
//                 </p>
//                 <h3>Social Sharing</h3>
//                 <p>
//                     <a href="https://www.facebook.com/MFAmalanders">Facebook</a><br>
//                     <a href="https://twitter.com/MfaMalAnders">Twitter</a>
//                 </p>
//                 <h4>Body</h4>
//                 <p>
//                     ${updatedJob.title} | ${updatedJob.company.location}
//                     <br>
//                     <br>
//                     ${
//                       process.env.WEBSITE_URL +
//                       config.googleIndexing.pathPrefix +
//                       jobId
//                     }
//                     <br>
//                     <br>
//                     #mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${updatedJob.company.location
//                       .toLowerCase()
//                       .replace("-", "")
//                       .trim()}jobs #${updatedJob.company.location
//           .toLowerCase()
//           .replace("-", "")
//           .trim()}
//                 </p>
//                 `,
//         attachments: [
//           {
//             filename: invoice.fileName,
//             path: invoice.path,
//             contentType: "application/pdf",
//           },
//         ],
//       };

//       emailService.sendMail(dataMailToAdmin);

//       const dataMailToCustomer = {
//         from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
//         to: updatedJob.userId.email,
//         subject: `Veröffentlichung Ihrer Stellenanzeige auf 'MFA mal anders'`,
//         html: `
//                     <p>${
//                       updatedJob.userId.gender === "Herr"
//                         ? "Sehr geehrter Herr " +
//                           (updatedJob.userId.title != "null"
//                             ? updatedJob.userId.title + " "
//                             : "") +
//                           updatedJob.userId.lastName +
//                           ","
//                         : updatedJob.userId.gender === "Frau"
//                         ? "Sehr geehrte Frau " +
//                           (updatedJob.userId.title != "null"
//                             ? updatedJob.userId.title + " "
//                             : "") +
//                           updatedJob.userId.lastName +
//                           ","
//                         : "Sehr geehrte Damen und Herren,"
//                     }</p>
//                     <p>
//                         vielen Dank für die Veröffentlichung Ihrer Stellenanzeige <strong>'${
//                           updatedJob.title
//                         }'</strong> auf unserem Stellen- und Karriereportal speziell für MFA & ZFA – 'MFA mal anders'.
//                     </p>
//                     ${
//                       pricingPackage === "Professional"
//                         ? `
//                           <p>
//                             Mit Ihrem gewählten Stellenpaket "${pricingPackage}" erhalten Sie eine individuelle, persönliche Beratung zur Optimierung Ihrer Stellenanzeige. Wir werden Sie innerhalb von 2 Werktagen direkt kontaktieren und das weitere Vorgehen mit Ihnen besprechen. Ihre Stellenanzeige wird nach der Optimierung und Absprache mit Ihnen von uns veröffentlicht. Die Laufzeit beginnt natürlich erst nach erfolgter Veröffentlichung.
//                           </p>
//                         `
//                         : `
//                           <p>
//                           Ihre Stellenanzeige ist ab sofort für ${
//                             config.payment.pricingPackages.find(
//                               pkg =>
//                                 pkg.name.toLowerCase() ===
//                                 pricingPackage.toLowerCase()
//                             ).duration
//                           } Tage unter folgendem Link abrufbar: <a href="${
//                             process.env.WEBSITE_URL +
//                             config.googleIndexing.pathPrefix +
//                             jobId
//                           }">${
//                             process.env.WEBSITE_URL +
//                             config.googleIndexing.pathPrefix +
//                             jobId
//                           }</a>
//                           </p>
//                           <p>
//                             Gern können Sie diesen Link nutzen, um beispielsweise auf Ihrer Webseite oder über Ihre Social Media Kanäle auf die offene Stelle aufmerksam zu machen. Unserer Erfahrung nach ist dies eine weitere hilfreiche Möglichkeit, potentielle BewerberInnen auf sich aufmerksam zu machen.
//                           </p>
//                           <p>
//                             Mit Ihrer aktiven Stellenanzeige haben Sie zusätzlich die Möglichkeit, auf <a href="${
//                               process.env.WEBSITE_URL
//                             }/stellengesuche" target="_blank"><strong>Stellengesuche</strong></a> über unser Portal zu antworten und qualifiziertes Fachpersonal direkt anzusprechen. Das Angebot für Stellensuchende befindet sich aktuell noch im Aufbau, wird jedoch stetig erweitert.
//                           </p>
//                           <p>
//                             Bitte beachten Sie, dass Ihre Stellenanzeige nur solange abrufbar ist, wie auch Ihre Bewerbungsfrist nicht überschritten ist. Über Ihre Zugangsdaten haben Sie weiterhin Zugriff auf Ihre Stellenanzeigen und können diese jederzeit anpassen.
//                           </p>
//                         `
//                     }
//                     <p>
//                         Die zugehörige Rechnung zur getätigten Zahlung finden Sie in Ihrem Account unter KONTO -> RECHNUNGEN. Diese können Sie dort herunterladen.
//                     </p>
//                     ${
//                       pricingPackage === "Professional"
//                         ? `
//                           <p>
//                             Mit freundlichen Grüßen
//                           </p>
//                         `
//                         : `
//                           <p>
//                             Sollten Sie noch Fragen, Anregungen oder weiteren Beratungsbedarf haben, melden Sie sich gern bei uns über unser <a href="${process.env.WEBSITE_URL}/kontakt">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:${config.website.contactEmail}">${config.website.contactEmail}</a>.
//                           </p>
//                           <p>
//                             Wir wünschen Ihnen viele qualifizierte BewerberInnen und verbleiben mit freundlichen Grüßen
//                           </p>
//                         `
//                     }

//                     <p>Kristin Maurach</p>
//                     <p>__</p>
//                     <p>
//                         <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
//                         <strong>MFA mal anders</strong> <br>
//                         Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte Fachangestellte <br>
//                         <br>
//                         Tel: <a href="tel:017663393957">0176 633 939 57</a> <br>
//                         E-Mail: <a href="mailto:kontakt@mfa-mal-anders.de">kontakt@mfa-mal-anders.de</a> <br>
//                         Webseite: <a href="${process.env.WEBSITE_URL}">${
//           process.env.WEBSITE_URL
//         }</a>
//                     </p>
//                 `,
//         attachments: [
//           {
//             filename: "MfaMalAnders_logo_circle_bgdark_white.png",
//             path:
//               __dirname +
//               "/../../client/public/img/MfaMalAnders_logo_circle_bgdark_white.png",
//             cid: "mfa-mal-anders-logo", //same cid value as in the html img src
//           },
//         ],
//       };

//       emailService.sendMail(dataMailToCustomer);
//     }
//   } catch (err) {
//     console.log("Error STRIPE on /checkout-completed: ", err);
//   }

//   res.json({ received: true });
// });

module.exports = router;
