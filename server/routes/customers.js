const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { User } = require("../database/models/user");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  GET /api/customers/me
// #desc:   Fetch stripe customer from user._id
// #access: Private
router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id }, "stripeCustomerId");

    if (!user.stripeCustomerId) {
      throw new Error("Customer does not exist for this user.");
    }

    const customer = await stripe.customers.retrieve(user.stripeCustomerId);

    if (!customer) {
      throw new Error("Could not find customer.");
    }

    res.json({
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: {
          city: customer.address.city,
          line1: customer.address.line1,
          line2: customer.address.line2,
          postal_code: customer.address.postal_code,
          country: customer.address.country,
        },
      },
    });
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;
