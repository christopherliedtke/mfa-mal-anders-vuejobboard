const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// #route:  POST /api/checkout/stripe/create-invoice
// #desc:   Create a session id for a user
// #access: Private
router.post("/stripe/create-invoice", verifyToken, async (req, res) => {
  const stripe = require("stripe")(process.env.STRIPE_SK);

  // TODO check for stripe customerId

  // TODO create & attach stripe customer to user || update stripe customer
  // https://stripe.com/docs/api/customers

  // TODO get price from stripe
  // https://stripe.com/docs/api/prices

  // TODO check for discounts
  // https://stripe.com/docs/api/promotion_codes/list

  // TODO create invoice items
  // https://stripe.com/docs/api/invoiceitems

  // TODO create invoice
  // https://stripe.com/docs/api/invoices
  // https://stripe.com/docs/invoicing/integration

  // TODO send invoice

  // TODO save payment reference w/ invoice id

  // TODO set job online or others
});

// TODO update checkout frontend page
