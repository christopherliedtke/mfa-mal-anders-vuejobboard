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
    if (!req.body.pricingPackage) {
      throw new Error(
        "Error on /job/create-session-id - no pricingPackage provided!"
      );
    }

    const { pricingPackage, code } = req.body;

    let amount = config.payment.pricingPackages.find(
      pkg => pkg.name.toLowerCase() === pricingPackage.toLowerCase()
    ).price;
    let refreshFrequency = config.payment.pricingPackages.find(
      pkg => pkg.name.toLowerCase() === pricingPackage.toLowerCase()
    ).refreshFrequency;

    if (!amount) {
      throw new Error(
        `Error on /job/create-session-id - ${pricingPackage} not found in pricingPackages!`
      );
    }

    let validatedCoupon = {};

    if (code) {
      validatedCoupon = await validateCoupon(code, req.user._id);
    }

    console.info("validatedCoupon: ", validatedCoupon);

    const couponId = validatedCoupon._id || "";
    const discount = validatedCoupon.discount || 0;

    if (
      validatedCoupon.refreshFrequency > 0 &&
      validatedCoupon.refreshFrequency < refreshFrequency
    ) {
      refreshFrequency = validatedCoupon.refreshFrequency;
    }

    amount = Math.round(amount * (1 - discount));
    const taxRate = config.invoice.sender(new Date()).taxRate;

    const session = await stripe.checkout.sessions.create({
      customer_email: req.user.email,
      client_reference_id: req.user._id,
      payment_method_types: config.stripe.paymentMethods,
      line_items: [
        {
          price_data: {
            currency: config.payment.currency,
            product_data: {
              name: req.body.title,
              description: `Veröffentlichung Ihrer Stellenanzeige "${req.body.title}" auf ${config.website.name} | Paket '${pricingPackage}'`,
              images: [],
            },
            unit_amount: amount * (1 + taxRate),
            tax_behavior: "inclusive",
          },
          quantity: 1,
        },
      ],
      billing_address_collection: "required",
      metadata: {
        type: req.body.type,
        jobId: req.body.id,
        userId: req.user._id,
        pricingPackage,
        couponId: couponId ? couponId.toString() : "",
        couponCode: req.body.code,
        amount,
        discount,
        taxRate,
        refreshFrequency,
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
      amount,
    });
  } catch (err) {
    console.log("Error STRIPE on /job/create-session-id: ", err);
    res.json({ success: false });
  }
});

module.exports = router;
