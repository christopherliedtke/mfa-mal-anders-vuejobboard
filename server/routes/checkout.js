const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { User } = require("../database/models/user");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  POST /api/checkout/create-invoice
// #desc:   Create a session id for a user
// #access: Private
router.post("/create-invoice", verifyToken, async (req, res) => {
  console.log("req.body: ", req.body);

  let { customer, coupons, invoiceItems, accepted } = req.body;

  try {
    if (
      !customer ||
      !customer.name ||
      !customer.email ||
      !customer.address ||
      !invoiceItems ||
      !accepted
    ) {
      return res.status(400).send("Bad request");
    }

    const user = await User.findOne(
      { _id: req.user._id },
      "_id stripeCustomerId"
    );

    console.log("user: ", user);

    // TODO create & attach stripe customer to user || update stripe customer
    // https://stripe.com/docs/api/customers
    customer.metadata = { userId: req.user._id, acceptedTimeStamp: new Date() };

    if (user.stripeCustomerId) {
      customer = await stripe.customers.update(user.stripeCustomerId, customer);
    } else {
      customer = await stripe.customers.create(customer);
      await User.findOneAndUpdate(
        { _id: req.user._id },
        { stripeCustomerId: customer.id }
      );
    }

    console.log("customer: ", customer);

    if (!customer) {
      throw new Error("Customer could not be created/updated w/ stripe");
    }

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
  } catch (err) {
    console.error("err: ", err);
    res.sendStatus(500);
  }
});

// TODO update checkout frontend page

// TODO create webhook to set payment to paid

// TODO flush jobAdPackageCache in webhooks for updated products / prices

module.exports = router;
