const express = require("express");
const router = express.Router();
const config = require("../config/config");
const recachePrerender = require("../middleware/recachePrerender");
const emailService = require("../utils/nodemailer");
const internalJobsCache = require("../cache/internalJobsCache");
const { Job } = require("../database/models/job");
const { Payment } = require("../database/models/payment");
const { UsedCoupon } = require("../database/models/usedCoupon");
const { googleIndexing } = require("../middleware/googleJobIndexing");
const { postToFacebook } = require("../middleware/postToFacebook");

const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  POST /api/webhooks/checkout-completed
// #desc:   Check if payment is completed and update job
// #access: Private
router.post("/checkout-completed", async (req, res) => {
  const { jobId, userId, couponId } = req.body.data.object.metadata;

  let { refreshFrequency } = req.body.data.object.metadata;
  // const billingEmail = req.body.data.object["customer_email"];
  const amount = req.body.data.object["amount_total"];

  try {
    const intent = await stripe.paymentIntents.retrieve(
      req.body.data.object["payment_intent"]
    );

    if (intent.status === "succeeded") {
      const paidExpiresAt = new Date(
        new Date().setHours(24) +
          1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays
      );

      if (refreshFrequency == 0) {
        config.payment.refreshFrequencies.forEach((frequency) => {
          if (amount >= frequency.amount) {
            refreshFrequency = frequency.refreshAfterDays;
          }
        });
      }

      const succeededCharge = intent.charges.data.filter(
        (charge) => charge.paid
      )[0];

      const job = await Job.findOne({ _id: jobId }).populate("company");

      const lastInvoiceNo = await Payment.find({}, "invoiceNo")
        .sort({ invoiceNo: -1 })
        .limit(1);

      const invoiceNo = lastInvoiceNo[0].invoiceNo + 1;

      const paymentObj = {
        status: "paid",
        invoiceNo,
        invoiceDate: new Date(),
        paymentType: "stripe",
        amount,
        fee: config.stripe.feeFix + config.stripe.feeVar * amount,
        taxes: config.payment.tax * amount,
        billingEmail: succeededCharge["billing_details"].email,
        billingCompany: job ? job.company.name : "",
        billingLastName: succeededCharge["billing_details"].name,
        billingStreet:
          succeededCharge["billing_details"].address.line1 +
          " " +
          succeededCharge["billing_details"].address.line2,
        billingZipCode:
          succeededCharge["billing_details"].address["postal_code"],
        billingLocation: succeededCharge["billing_details"].address.city,
        paidAt: new Date(),
        paymentExpiresAt: paidExpiresAt,
        job: jobId,
        user: userId,
        stripePaymentIntent: intent.id || "",
        receiptUrl: succeededCharge["receipt_url"],
        receiptNumber: succeededCharge["receipt_number"],
      };

      if (couponId) {
        paymentObj.coupon = couponId;
      }

      const newPaymentObj = new Payment(paymentObj);
      const payment = await newPaymentObj.save();
      console.log("payment: ", payment);

      const updatedJob = await Job.findOneAndUpdate(
        { _id: jobId, userId: userId },
        {
          status: "published",
          publishedAt: new Date().setHours(0),
          paid: true,
          // paidAt,
          paidExpiresAt,
          refreshFrequency,
          payment: payment._id,
        },
        { new: true }
      )
        .populate("company")
        .populate("userId");

      if (couponId) {
        const newUsedCoupon = new UsedCoupon({
          userId: userId,
          couponId: couponId,
        });
        await newUsedCoupon.save();
      }

      if (updatedJob.status === "published") {
        internalJobsCache.flush();
      }

      googleIndexing(
        process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + jobId,
        "URL_UPDATED"
      );

      recachePrerender(
        `${process.env.WEBSITE_URL}/stellenangebote/job/${jobId}`
      );

      if (config.facebook.autoPost) {
        postToFacebook();
      }

      const dataMailToAdmin = {
        from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
        to: config.website.contactEmail,
        subject: `[Stripe ${
          "RE-" +
          "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
          payment.invoiceNo.toString()
        }] - ${payment.amount / 100}€ - Veröffentlichung Stellenanzeige '${
          updatedJob.title
        }'`,
        html: `
                    <h2>Veröffentlichung einer neuen Stelle</h2>
                    <p>
                    <strong>InvoiceNo:</strong> <a href="${
                      process.env.WEBSITE_URL
                    }/api/invoice/download/${updatedJob._id}" target="_blank">${
          "RE-" +
          "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
          payment.invoiceNo.toString()
        }</a>  <br>
                    <strong>ID:</strong> ${updatedJob._id} <br>
                    <strong>Stellentitel:</strong> ${updatedJob.title} <br>
                    <strong>Unternehmen:</strong> ${
                      updatedJob.company.name
                    } <br>
                    <strong>Unternehmensgröße:</strong> ${
                      updatedJob.company.size
                    } <br>
                    <strong>Webseite:</strong> <a href="${
                      updatedJob.company.url
                    }">${updatedJob.company.url}</a> <br>
                    <strong>Ort:</strong> ${updatedJob.company.location}, ${
          updatedJob.company.state
        } <br>
                    <strong>Preis:</strong> ${payment.amount / 100} EURO <br>
                    <strong>Link:</strong> <a href="${
                      process.env.WEBSITE_URL +
                      config.googleIndexing.pathPrefix +
                      jobId
                    }">${
          process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + jobId
        }</a>
                </p>
                <h3>Social Sharing</h3>
                <p>
                    <a href="https://www.facebook.com/MFAmalanders">Facebook</a><br>
                    <a href="https://twitter.com/MfaMalAnders">Twitter</a>
                </p>
                <h4>Body</h4>
                <p>
                    ${updatedJob.title} | ${updatedJob.company.location}
                    <br>
                    <br>
                    ${
                      process.env.WEBSITE_URL +
                      config.googleIndexing.pathPrefix +
                      jobId
                    }
                    <br>
                    <br>
                    #mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${updatedJob.company.location
                      .toLowerCase()
                      .replace("-", "")
                      .trim()}jobs #${updatedJob.company.location
          .toLowerCase()
          .replace("-", "")
          .trim()}
                </p>
                `,
      };

      emailService.sendMail(dataMailToAdmin);

      const dataMailToCustomer = {
        from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
        to: updatedJob.userId.email,
        subject: `Veröffentlichung Ihrer Stellenanzeige auf 'MFA mal anders'`,
        html: `
                    <p>${
                      updatedJob.userId.gender === "Herr"
                        ? "Sehr geehrter Herr " +
                          (updatedJob.userId.title != "null"
                            ? updatedJob.userId.title + " "
                            : "") +
                          updatedJob.userId.lastName +
                          ","
                        : updatedJob.userId.gender === "Frau"
                        ? "Sehr geehrte Frau " +
                          (updatedJob.userId.title != "null"
                            ? updatedJob.userId.title + " "
                            : "") +
                          updatedJob.userId.lastName +
                          ","
                        : "Sehr geehrte Damen und Herren,"
                    }</p>
                    <p>
                        vielen Dank für die Veröffentlichung Ihrer Stellenanzeige <strong>'${
                          updatedJob.title
                        }'</strong> auf unserem Portal MFA mal anders. Ihre Stellenanzeige ist ab sofort für 60 Tage unter folgendem Link abrufbar:
                    </p>
                    <p>
                        <a href="${
                          process.env.WEBSITE_URL +
                          config.googleIndexing.pathPrefix +
                          jobId
                        }">${
          process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + jobId
        }</a>
                    </p>
                    <p>
                        Bitte beachten Sie, dass Ihre Stellenanzeige nur solange abrufbar ist, wie auch Ihre Bewerbungsfrist nicht überschritten ist. Über Ihre Zugangsdaten haben Sie weiterhin Zugriff auf Ihre Stellenanzeigen und können diese jederzeit anpassen.
                    </p>
                    <p>
                        Die zugehörige Rechnung zur getätigten Zahlung finden Sie in Ihrem Account unter MEIN KONTO -> ZAHLUNGEN. Diese können Sie dort herunterladen.
                    </p>
                    <p>
                        Sollten Sie noch Fragen, Anregungen oder weiteren Beratungsbedarf haben, melden Sie sich gern bei uns über unser <a href="${
                          process.env.WEBSITE_URL
                        }/kontakt">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:${
          config.website.contactEmail
        }">${config.website.contactEmail}</a>.
                    </p>
                    <p>
                        Wir wünschen Ihnen viele qualifizierte BewerberInnen und verbleiben mit freundlichen Grüßen
                    </p>
                    <p>Kristin Maurach</p>
                    <p>__</p>
                    <p>
                        <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
                        <strong>MFA mal anders</strong> <br>
                        Das Stellen- & Karriereportal für Medizinische / Zahnmedizinische Fachangestellte <br>
                        <br>
                        Tel: <a href="tel:017663393957">0176 633 939 57</a> <br>
                        E-Mail: <a href="mailto:kontakt@mfa-mal-anders.de">kontakt@mfa-mal-anders.de</a> <br>
                        Webseite: <a href="${process.env.WEBSITE_URL}">${
          process.env.WEBSITE_URL
        }</a>
                    </p>
                `,
        attachments: [
          {
            filename: "MfaMalAnders_logo_circle_dark.png",
            path:
              __dirname +
              "/../../client/public/img/MfaMalAnders_logo_circle_dark.png",
            cid: "mfa-mal-anders-logo", //same cid value as in the html img src
          },
        ],
      };

      emailService.sendMail(dataMailToCustomer);
    }
  } catch (err) {
    console.log("Error STRIPE on /checkout-completed: ", err);
  }

  res.json({ received: true });
});

module.exports = router;
