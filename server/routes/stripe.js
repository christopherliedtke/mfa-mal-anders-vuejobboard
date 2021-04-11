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

// #route:  POST /api/stripe/job/create-session-id
// #desc:   Create a session id for a user
// #access: Private
router.post("/job/create-session-id", verifyToken, async (req, res) => {
  try {
    if (req.body.amount < config.payment.minPricePerJob) {
      throw new Error(
        "Error STRIPE Invalid amount entered for stripe checkout!"
      );
    }

    let validatedCoupon = {};

    if (req.body.code) {
      validatedCoupon = await validateCoupon(req.body.code, req.user._id);
    }

    const couponId = validatedCoupon._id || "";
    const discount = validatedCoupon.discount || 0;
    const couponUsage = validatedCoupon.usage || "";
    const couponRefreshFrequency = validatedCoupon.refreshFrequency || 0;

    const session = await stripe.checkout.sessions.create({
      customer_email: req.user.email,
      payment_method_types: config.stripe.paymentMethods,
      line_items: [
        {
          price_data: {
            currency: config.payment.currency,
            product_data: {
              name: req.body.title,
              description: `Veröffentlichung Ihrer Stellenanzeige "${req.body.title}" auf ${config.website.name}.`,
              images: [],
            },
            unit_amount: Math.round(req.body.amount * (1 - discount)),
          },
          quantity: 1,
        },
      ],
      billing_address_collection: "required",
      metadata: {
        type: req.body.type,
        jobId: req.body.id,
        userId: req.user._id,
        couponId: couponId ? toString(couponId) : "",
        couponCode: req.body.code,
        discount: discount,
        refreshFrequency: couponRefreshFrequency,
        couponUsage: couponUsage,
        accepted: req.body.accepted,
      },
      mode: "payment",
      success_url: `${process.env.WEBSITE_URL}${req.body.url}${
        req.body.url.includes("?") ? "&" : "?"
      }success=true&job_id=${req.body.id}`,
      cancel_url: `${process.env.WEBSITE_URL}${req.body.url}${
        req.body.url.includes("?") ? "&" : "?"
      }success=false&job_id=${req.body.id}`,
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
