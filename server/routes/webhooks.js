const express = require("express");
const router = express.Router();
const config = require("../utils/config");
const { Job } = require("../utils/models/job");

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
    const { jobId, userId } = req.body.data.object.metadata;

    try {
        const intent = await stripe.paymentIntents.retrieve(
            req.body.data.object.payment_intent
        );

        const paidAt = new Date();
        const paidExpiresAt = new Date();
        paidExpiresAt.setDate(
            paidExpiresAt.getDate() + config.stripe.paymentExpirationDays
        );

        if (intent.status === "succeeded") {
            await Job.updateOne(
                { _id: jobId, userId: userId },
                {
                    paid: true,
                    paidAt,
                    paidExpiresAt,
                }
            );
        }

        res.json({ received: true });
    } catch (err) {
        console.log("Error on /checkout-completed: ", err);
        res.json({ received: false });
    }
});

module.exports = router;
