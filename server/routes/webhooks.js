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

            if (refreshFrequency === 0) {
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
            ).populate("company");

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

            const data = {
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
                    ${updatedJob.title}
                    <br>
                    <br>
                    ${
                        res.locals.secrets.WEBSITE_URL +
                        config.googleIndexing.pathPrefix +
                        jobId
                    }
                    <br>
                    <br>
                    #mfamalanders #mfa #arzthelfer #arzthelferIn #mfajobs #${updatedJob.company.location
                        .toLowerCase()
                        .replace("-", "")}jobs
                </p>
                `,
            };

            emailService.sendMail(data);
        }
    } catch (err) {
        console.log("Error STRIPE on /checkout-completed: ", err);
    }

    res.json({ received: true });
});

module.exports = router;
