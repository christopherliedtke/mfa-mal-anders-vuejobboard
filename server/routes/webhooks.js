const express = require("express");
const router = express.Router();
const config = require("../config/config");
const recachePrerender = require("../middleware/recachePrerender");
const emailService = require("../utils/nodemailer");
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
    const billingEmail = req.body.data.object["customer_email"];
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

            const paymentObj = {
                status: "paid",
                paymentType: "stripe",
                amount,
                fee: config.stripe.feeFix + config.stripe.feeVar * amount,
                taxes: config.payment.tax * amount,
                billingEmail,
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

            googleIndexing(
                process.env.WEBSITE_URL +
                    config.googleIndexing.pathPrefix +
                    jobId,
                "URL_UPDATED"
            );

            recachePrerender(
                `${process.env.WEBSITE_URL}/jobboard/job/${jobId}`
            );

            if (config.facebook.autoPost) {
                postToFacebook();
            }

            const dataMailToMfa = {
                from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
                to: config.website.contactEmail,
                subject: `[Neue Stelle veröffentlicht] - ${
                    payment.amount / 100
                }€`,
                text: `
                        Soeben wurde eine neue Stelle für ${
                            payment.amount / 100
                        }€ veröffentlicht: ${
                    process.env.WEBSITE_URL +
                    config.googleIndexing.pathPrefix +
                    jobId
                }
                `,
                html: `
                    <h2>Veröffentlichung einer neuen Stelle</h2>
                    <p>
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
                    process.env.WEBSITE_URL +
                    config.googleIndexing.pathPrefix +
                    jobId
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

            emailService.sendMail(dataMailToMfa);

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
                    process.env.WEBSITE_URL +
                    config.googleIndexing.pathPrefix +
                    jobId
                }</a>
                    </p>
                    <p>
                        Bitte beachten Sie, dass Ihre Stellenanzeige nur solange abrufbar ist, wie auch Ihre Bewerbungsfrist nicht überschritten ist. Über Ihre Zugangsdaten haben Sie weiterhin Zugriff auf Ihre Stellenanzeigen und können diese jederzeit anpassen.
                    </p>
                    <p>
                        Sollten Sie noch Fragen, Anregungen oder weiteren Beratungsbedarf haben, melden Sie sich gern bei uns über unser <a href="${
                            process.env.WEBSITE_URL
                        }/page/contact">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:${
                    config.website.contactEmail
                }">${config.website.contactEmail}</a>.
                    </p>
                    <p>
                        Wir wünschen Ihnen viele qualifizierte BewerberInnen und verbleiben mit freundlichen Grüßen
                    </p>
                    <p>Kristin Maurach</p>
                    <p>
                        <img style="width: 60px" src="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/09/logo.png" />
                    </p>
                    <p>
                        MFA mal anders <br>
                        Das Karriereportal für Medizinische Fachangestellte
                    </p>
                `,
            };

            emailService.sendMail(dataMailToCustomer);
        }
    } catch (err) {
        console.log("Error STRIPE on /checkout-completed: ", err);
    }

    res.json({ received: true });
});

module.exports = router;
