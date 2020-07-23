const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");
const { User } = require("../utils/models/user");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("../utils/secrets");
}

const stripe = require("stripe")(secrets.STRIPE_SK);

// #route:  POST /api/stripe/create-payment-intent
// #desc:   Create a payment intent for a user
// #access: Private
// router.post("/create-payment-intent", authenticateToken, async (req, res) => {
//     const orderAmount = 2900;

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: orderAmount,
//         currency: "usd",
//     });

//     res.json({
//         clientSecret: paymentIntent.client_secret,
//     });
// });

// #route:  POST /api/stripe/create-session-id
// #desc:   Create a session id for a user
// #access: Private
router.post("/create-session-id", authenticateToken, async (req, res) => {
    try {
        const user = await User.findOne(
            {
                _id: req.userId,
            },
            "email"
        );

        const session = await stripe.checkout.sessions.create({
            customer_email: user.email,
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: secrets.CURRENCY,
                        product_data: {
                            name: req.body.job.title,
                            description: `Publishing the job ad on website.`,
                            images: [],
                        },
                        unit_amount: secrets.AMOUNT_PER_JOB,
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                jobId: req.body.job._id,
                userId: req.userId,
            },
            mode: "payment",
            success_url: `${req.body.url}?success=true&job_id=${req.body.job._id}`,
            cancel_url: `${req.body.url}?success=false`,
        });

        res.json({
            success: true,
            sessionId: session.id,
            amount: secrets.AMOUNT_PER_JOB,
            currency: secrets.CURRENCY,
        });
    } catch (err) {
        console.log("Error on /create-session-id: ", err);
        res.json({ success: false });
    }
});

module.exports = router;
