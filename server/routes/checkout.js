const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  POST /api/checkout/create-invoice
// #desc:   Create a session id for a user
// #access: Private
router.post("/create-invoice", verifyToken, async (req, res) => {
  console.log("req.body: ", req.body);

  // TODO check for stripe customerId

  // TODO create & attach stripe customer to user || update stripe customer
  // https://stripe.com/docs/api/customers
  // incl. user._id

  // TODO get price from stripe
  // https://stripe.com/docs/api/prices

  // TODO check for discounts
  // https://stripe.com/docs/api/promotion_codes/list

  // TODO create invoice items for customer w/ discounts
  // https://stripe.com/docs/api/invoiceitems

  // TODO create invoice & auto send
  // https://stripe.com/docs/api/invoices
  // https://stripe.com/docs/invoicing/integration

  // TODO save payment reference w/ invoice id through webhook /+ save to gdrive
  // incl. status = open

  // TODO set job online or others

  res.sendStatus(200);
});

// TODO update checkout frontend page

// TODO create webhook to set payment to paid

// TODO flush jobAdPackageCache in webhooks for updated products / prices

module.exports = router;
