const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  POST /api/checkout/stripe/create-invoice
// #desc:   Create a session id for a user
// #access: Private
router.post("/stripe/create-invoice", verifyToken, async (req, res) => {
  // TODO check for stripe customerId
  // TODO create & attach stripe customer to user || update stripe customer
  // https://stripe.com/docs/api/customers
  // TODO get price from stripe
  // https://stripe.com/docs/api/prices
  // TODO check for discounts
  // https://stripe.com/docs/api/promotion_codes/list
  // TODO create invoice items
  // https://stripe.com/docs/api/invoiceitems
  // TODO create invoice & auto send
  // https://stripe.com/docs/api/invoices
  // https://stripe.com/docs/invoicing/integration
  // TODO save payment reference w/ invoice id through webhook /+ save to gdrive
  // incl. status = open
  // TODO set job online or others
});

// TODO update checkout frontend page

// TODO create webhook to set payment to paid

// TODO fetch prices from backend instead of frontend integration (use pricingPackages.js)

// TODO flush jobAdPackageCache in webhooks for updated products / prices
