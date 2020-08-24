const express = require("express");
const router = express.Router();
const config = require("../utils/config");
const { Job } = require("../utils/models/job");
const { Coupon } = require("../utils/models/coupon");
const { UsedCoupon } = require("../utils/models/usedCoupon");

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
    } = req.body.data.object.metadata;

    try {
        const intent = await stripe.paymentIntents.retrieve(
            req.body.data.object.payment_intent
        );

        const status = "published";
        const paidAt = new Date();
        const paidExpiresAt = new Date();
        paidExpiresAt.setDate(
            paidExpiresAt.getDate() + config.stripe.paymentExpirationDays
        );

        if (intent.status === "succeeded") {
            await Promise.all([
                Job.updateOne(
                    { _id: jobId, userId: userId },
                    {
                        status,
                        paid: true,
                        paidAt,
                        paidExpiresAt,
                    }
                ),
                Coupon.deleteOne({ code: couponCode, usage: "single" }),
            ]);

            if (couponUsage === "singlePerUser") {
                const newUsedCoupon = new UsedCoupon({
                    userId: userId,
                    couponId: couponId,
                    code: couponCode,
                });
                await newUsedCoupon.save();
            }
        }

        res.json({ received: true });
    } catch (err) {
        console.log("Error on /checkout-completed: ", err);
        res.json({ received: false });
    }
});

module.exports = router;