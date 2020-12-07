const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const validateCoupon = require("../middleware/validateCoupon");
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
    const validatedCoupon = await validateCoupon(req.body.code, req.user._id);

    if (validatedCoupon.success) {
        res.json({
            success: true,
            discount: validatedCoupon.discount,
            refreshFrequency: validatedCoupon.couponRefreshFrequency,
        });
    } else {
        res.json({ success: false });
    }
});

// #route:  POST /api/stripe/job/create-session-id
// #desc:   Create a session id for a user
// #access: Private
router.post("/job/create-session-id", verifyToken, async (req, res) => {
    try {
        if (req.body.amount < 2500) {
            throw new Error(
                "Error STRIPE Invalid amount entered for stripe checkout!"
            );
        }

        let validatedCoupon = {};

        if (req.body.code) {
            validatedCoupon = await validateCoupon(req.body.code, req.user._id);
        }

        const discount = validatedCoupon.discount || 0;
        const couponUsage = validatedCoupon.couponUsage || "";
        const couponId = validatedCoupon.couponId || "";
        const couponRefreshFrequency =
            validatedCoupon.couponRefreshFrequency || 0;

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
