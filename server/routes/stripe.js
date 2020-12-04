const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { Coupon } = require("../database/models/coupon");
const { UsedCoupon } = require("../database/models/usedCoupon");
const config = require("../config/config");

const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  GET /api/stripe/get-stripe-pk
// #desc:   Provide stripe public key
// #access: Private
router.get("/get-stripe-pk", (req, res) => {
    const stripePk = process.env.STRIPE_PK;
    res.json({ stripePk });
});

// #route:  GET /api/stripe/get-price-per-ad
// #desc:   Provide Price per job ad
// #access: Private
// router.get("/get-price-per-ad", verifyToken, (req, res) => {
//     res.json({
//         amount: config.stripe.pricePerJob,
//         currency: config.stripe.currency,
//         duration: config.stripe.paymentExpirationDays,
//     });
// });

// #route:  POST /api/stripe/validate-coupon
// #desc:   Validate discount coupon
// #access: Private
router.post("/validate-coupon", verifyToken, async (req, res) => {
    try {
        const coupon = await Coupon.findOne({ code: req.body.code });
        const usedCoupon = await UsedCoupon.findOne({
            userId: req.userId,
            code: req.body.code,
        });

        if (coupon && !usedCoupon) {
            if (coupon.userId && coupon.userId != req.userId) {
                res.json({ success: false });
            } else {
                res.json({
                    success: true,
                    discount: coupon.discount,
                    refreshFrequency: coupon.refreshFrequency,
                });
            }
        } else {
            res.json({ success: false });
        }
    } catch (err) {
        console.log("Error STRIPE  on /validate-coupon: ", err);
        res.json({ success: false });
    }
});

// #route:  POST /api/stripe/create-session-id
// #desc:   Create a session id for a user
// #access: Private
router.post("/job/create-session-id", verifyToken, async (req, res) => {
    try {
        if (req.body.amount < 2500) {
            throw new Error(
                "Error STRIPE Invalid amount entered for stripe checkout!"
            );
        }

        let discount = 0;
        let couponUsage = "";
        let couponId;
        let couponRefreshFrequency = 0;

        if (req.body.code) {
            const coupon = await Coupon.findOne({ code: req.body.code });
            const usedCoupon = await UsedCoupon.findOne({
                userId: req.user._id,
                code: req.body.code,
            });

            couponUsage = coupon.usage;
            couponId = coupon._id;
            couponRefreshFrequency = coupon.refreshFrequency;

            if (coupon && !usedCoupon) {
                if (coupon.userId && coupon.userId === req.user._id) {
                    discount = coupon.discount;
                } else if (!coupon.userId) {
                    discount = coupon.discount;
                }
            }
        }

        const session = await stripe.checkout.sessions.create({
            customer_email: req.user.email,
            payment_method_types: config.stripe.paymentMethods,
            line_items: [
                {
                    price_data: {
                        currency: config.stripe.currency,
                        product_data: {
                            name: req.body.title,
                            description: `Veröffentlichung Ihrer Stellenanzeige "${req.body.title}" auf ${config.website.name}.`,
                            images: [],
                        },
                        unit_amount: Math.round(
                            req.body.amount * (1 - discount)
                        ),
                    },
                    quantity: 1,
                },
            ],
            billing_address_collection: "required",
            metadata: {
                type: req.body.type,
                jobId: req.body.id,
                userId: req.user._id,
                couponId: couponId,
                couponCode: req.body.code,
                discount: discount,
                refreshFrequency: couponRefreshFrequency,
                couponUsage: couponUsage,
                accepted: req.body.accepted,
            },
            mode: "payment",
            success_url: `${req.body.url}?success=true&job_id=${req.body.id}`,
            cancel_url: `${req.body.url}?success=false`,
        });

        res.json({
            success: true,
            sessionId: session.id,
        });
    } catch (err) {
        console.log("Error STRIPE on /job/create-session-id: ", err);
        res.json({ success: false });
    }
});

module.exports = router;
