const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");
const { User } = require("../utils/models/user");
const { Coupon } = require("../utils/models/coupon");
const { UsedCoupon } = require("../utils/models/usedCoupon");
const config = require("../utils/config");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("../utils/secrets");
}

const stripe = require("stripe")(secrets.STRIPE_SK);

// #route:  GET /api/stripe/get-stripe-pk
// #desc:   Provide stripe public key
// #access: Private
router.get("/get-stripe-pk", (req, res) => {
    const stripePk = secrets.STRIPE_PK;
    res.json({ stripePk });
});

// #route:  GET /api/stripe/get-price-per-ad
// #desc:   Provide Price per job ad
// #access: Private
router.get("/get-price-per-ad", authenticateToken, (req, res) => {
    res.json({
        amount: config.stripe.pricePerJob,
        currency: config.stripe.currency,
        duration: config.stripe.paymentExpirationDays,
    });
});

// #route:  POST /api/stripe/validate-coupon
// #desc:   Validate discount coupon
// #access: Private
router.post("/validate-coupon", authenticateToken, async (req, res) => {
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
        console.log("Error on /validate-coupon: ", err);
        res.json({ success: false });
    }
});

// #route:  POST /api/stripe/create-session-id
// #desc:   Create a session id for a user
// #access: Private
router.post("/create-session-id", authenticateToken, async (req, res) => {
    try {
        if (req.body.amount < 2500) {
            throw new Error("Invalid amount entered for stripe checkout!");
        }

        const user = await User.findOne(
            {
                _id: req.userId,
            },
            "email"
        );

        let discount = 0;
        let couponUsage = "";
        let couponId;
        let couponRefreshFrequency;

        if (req.body.code) {
            const coupon = await Coupon.findOne({ code: req.body.code });
            const usedCoupon = await UsedCoupon.findOne({
                userId: req.userId,
                code: req.body.code,
            });

            couponUsage = coupon.usage;
            couponId = coupon._id;
            couponRefreshFrequency = coupon.refreshFrequency;

            if (coupon && !usedCoupon) {
                if (coupon.userId && coupon.userId === req.userId) {
                    discount = coupon.discount;
                } else if (!coupon.userId) {
                    discount = coupon.discount;
                }
            }
        }

        const session = await stripe.checkout.sessions.create({
            customer_email: user.email,
            payment_method_types: config.stripe.paymentMethods,
            line_items: [
                {
                    price_data: {
                        currency: config.stripe.currency,
                        product_data: {
                            name: req.body.job.title,
                            description: `Veröffentlichung Ihrer Stellenanzeige "${req.body.job.title}" auf ${config.website.name}.`,
                            images: [],
                        },
                        unit_amount: Math.round(
                            req.body.amount * (1 - discount)
                        ),
                        // unit_amount: Math.round(
                        //     config.stripe.pricePerJob * (1 - discount)
                        // ),
                    },
                    quantity: 1,
                },
            ],
            billing_address_collection: "required",
            metadata: {
                jobId: req.body.job._id,
                userId: req.userId,
                couponId: couponId,
                couponCode: req.body.code,
                discount: discount,
                refreshFrequency: couponRefreshFrequency,
                couponUsage: couponUsage,
                accepted: req.body.accepted,
            },
            mode: "payment",
            success_url: `${req.body.url}?success=true&job_id=${req.body.job._id}`,
            cancel_url: `${req.body.url}?success=false`,
        });

        res.json({
            success: true,
            sessionId: session.id,
        });
    } catch (err) {
        console.log("Error on /create-session-id: ", err);
        res.json({ success: false });
    }
});

module.exports = router;
