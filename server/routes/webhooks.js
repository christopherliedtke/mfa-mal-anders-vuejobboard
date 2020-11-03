const express = require("express");
const router = express.Router();
const config = require("../utils/config");
const emailService = require("../utils/nodemailer");
const { Job } = require("../utils/models/job");
const { Coupon } = require("../utils/models/coupon");
const { UsedCoupon } = require("../utils/models/usedCoupon");
const { googleIndexing } = require("../utils/middleware/googleJobIndexing");
const { postToFacebook } = require("../utils/middleware/postToFacebook");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("../utils/secrets");
}

const stripe = require("stripe")(secrets.STRIPE_SK);

// #route:  POST /api/webhooks/checkout-completed
// #desc:   Check if payment is completed and update job.paid
// #access: Private
router.post("/checkout-completed", async (req, res) => {
    const {
        jobId,
        userId,
        couponId,
        couponCode,
        couponUsage,
        refreshFrequency: couponRefreshFrequency,
    } = req.body.data.object.metadata;

    const amount = req.body.data.object["amount_total"];

    try {
        const intent = await stripe.paymentIntents.retrieve(
            req.body.data.object["payment_intent"]
        );

        if (intent.status === "succeeded") {
            const status = "published";
            const paidAt = new Date();
            const paidExpiresAt = new Date();
            paidExpiresAt.setDate(
                paidExpiresAt.getDate() + config.stripe.paymentExpirationDays
            );

            let refreshFrequency = couponRefreshFrequency || 0;

            if (refreshFrequency == 0) {
                config.stripe.refreshFrequencies.forEach((frequency) => {
                    if (amount >= frequency.amount) {
                        refreshFrequency = frequency.refreshAfterDays;
                    }
                });
            }

            const updatedJob = await Job.findOneAndUpdate(
                { _id: jobId, userId: userId },
                {
                    status,
                    paid: true,
                    paidAt,
                    paidExpiresAt,
                    paidAmount: amount,
                    refreshFrequency,
                },
                { new: true }
            )
                .populate("company")
                .populate("userId");

            if (couponCode && couponUsage === "single") {
                Coupon.deleteOne({ code: couponCode, usage: "single" });
            }

            if (couponUsage === "singlePerUser") {
                const newUsedCoupon = new UsedCoupon({
                    userId: userId,
                    couponId: couponId,
                    code: couponCode,
                });
                await newUsedCoupon.save();
            }

            if (config.googleIndexing.active) {
                googleIndexing(
                    res.locals.secrets.WEBSITE_URL +
                        config.googleIndexing.pathPrefix +
                        jobId,
                    "URL_UPDATED"
                );
            }

            if (config.facebook.autoPost) {
                postToFacebook();
            }

            const dataMailToMfa = {
                from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                to: config.website.contactEmail,
                subject: `[Neue Stelle veröffentlicht] - ${amount / 100}€`,
                text: `
                        Soeben wurde eine neue Stelle für ${
                            amount / 100
                        }€ veröffentlicht: ${
                    res.locals.secrets.WEBSITE_URL +
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
                    <strong>Preis:</strong> ${
                        updatedJob.paidAmount / 100
                    } EURO <br>
                    <strong>Link:</strong> <a href="${
                        res.locals.secrets.WEBSITE_URL +
                        config.googleIndexing.pathPrefix +
                        jobId
                    }">${
                    res.locals.secrets.WEBSITE_URL +
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
                        res.locals.secrets.WEBSITE_URL +
                        config.googleIndexing.pathPrefix +
                        jobId
                    }
                    <br>
                    <br>
                    #mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${updatedJob.company.location
                        .toLowerCase()
                        .replace("-", "")
                        .trim()}jobs
                </p>
                `,
            };

            emailService.sendMail(dataMailToMfa);

            const dataMailToCustomer = {
                from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
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
                            res.locals.secrets.WEBSITE_URL +
                            config.googleIndexing.pathPrefix +
                            jobId
                        }">${
                    res.locals.secrets.WEBSITE_URL +
                    config.googleIndexing.pathPrefix +
                    jobId
                }</a>
                    </p>
                    <p>
                        Bitte beachten Sie, dass Ihre Stellenanzeige nur solange abrufbar ist, wie auch Ihre Bewerbungsfrist nicht überschritten ist. Über Ihre Zugangsdaten haben Sie weiterhin Zugriff auf Ihre Stellenanzeigen und können diese jederzeit anpassen.
                    </p>
                    <p>
                        Sollten Sie noch Fragen, Anregungen oder weiteren Beratungsbedarf haben, melden Sie sich gern bei uns über unser <a href="${
                            res.locals.secrets.WEBSITE_URL
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
                        Das Karriereportal für medizinische Fachangestellte
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
