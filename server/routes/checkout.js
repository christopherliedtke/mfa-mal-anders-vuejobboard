const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { User } = require("../database/models/user");
const { Payment } = require("../database/models/payment");
const { stripeTaxId } = require("../config/taxes.json");
const { job } = require("cron");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  POST /api/checkout/create-invoice
// #desc:   Create a session id for a user
// #access: Private
router.post("/create-invoice", verifyToken, async (req, res) => {
  console.log("req.body: ", req.body);

  if (!req.user) {
    return res
      .status(401)
      .send(
        "Ihre Session ist abgelaufen. Bitte laden Sie die Seite neu und loggen Sie sich erneut ein."
      );
  }

  let { customer, coupons, invoiceItems, accepted, jobId } = req.body;

  try {
    if (
      !customer ||
      !customer.name ||
      !customer.email ||
      !customer.address ||
      !invoiceItems ||
      invoiceItems.length === 0 ||
      !accepted
    ) {
      return res.status(400).send("Bad request");
    }

    const user = await User.findOne(
      { _id: req.user._id },
      "_id stripeCustomerId"
    );

    // console.log("user: ", user);

    customer.metadata = {
      userId: req.user._id,
      acceptedTimeStamp: new Date(),
    };

    // https://stripe.com/docs/api/customers
    if (user.stripeCustomerId) {
      customer = await stripe.customers.update(user.stripeCustomerId, customer);
    } else {
      customer = await stripe.customers.create(customer);

      await User.findOneAndUpdate(
        { _id: req.user._id },
        { stripeCustomerId: customer.id },
        { new: true }
      );
    }

    console.log("customer: ", customer);

    if (!customer) {
      throw new Error("Customer could not be created/updated w/ stripe.");
    }

    // https://stripe.com/docs/api/invoiceitems
    let newInvoiceItems = null;
    try {
      newInvoiceItems = await Promise.all(
        invoiceItems.map(invoiceItem =>
          stripe.invoiceItems.create({ customer: customer.id, ...invoiceItem })
        )
      );

      console.log("newInvoiceItems: ", newInvoiceItems);
    } catch (error) {
      console.error("Error on creating invoiceItems in checkout: ", error);
      return res
        .status(400)
        .send("Rechnungsposten konnten nicht erstellt werden.");
    }

    // https://stripe.com/docs/api/invoices
    let invoice = null;
    try {
      invoice = await stripe.invoices.create({
        customer: customer.id,
        collection_method: "send_invoice",
        default_tax_rates: [stripeTaxId],
        days_until_due: 14,
        auto_advance: true,
        discounts:
          coupons && coupons.length > 0
            ? coupons.map(coupon => {
                return { coupon };
              })
            : [],
      });
    } catch (error) {
      console.error("Error on create invoice in checkout: ", error);
      await Promise.all(
        newInvoiceItems.map(newInvoiceItem =>
          stripe.invoiceItems.del(newInvoiceItem.id)
        )
      );
      return res.status(400).send("Rechnung konnte nicht erstellt werden.");
    }

    try {
      invoice = await stripe.invoices.finalizeInvoice(invoice.id);
    } catch (error) {
      console.error("Error when finalizing invoice in checkout: ", error);
      await stripe.invoices.del(invoice.id);
      return res.status(400).send("Rechnung konnte nicht erstellt werden.");
    }

    // Invoice will be sent to customer automatically in live mode
    // try {
    //   await stripe.invoices.sendInvoice(invoice.id);
    // } catch (error) {
    //   console.error("Error when sending invoice in checkout: ", error);
    // }

    console.log("invoice: ", invoice);

    try {
      const filter = { stripeInvoiceId: invoice.id };
      const update = {
        stripeInvoiceStatus: invoice.status,
        stripeHostedInvoiceUrl: invoice.hosted_invoice_url,
        stripeInvoicePdf: invoice.invoice_pdf,
        total: invoice.total,
        tax: invoice.tax,
        number: invoice.number,
        finalizedAt: invoice.status_transitions.finalized_at * 1000,
        user: req.user._id,
        job: jobId || null,
      };

      const payment = await Payment.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true,
      });

      console.log("payment: ", payment);
    } catch (error) {
      console.error("Error when saving payment in checkout: ", error);
    }

    res.json({
      hosted_invoice_url: invoice.hosted_invoice_url,
      invoice_pdf: invoice.invoice_pdf,
    });
  } catch (err) {
    console.error("err: ", err);
    res.sendStatus(500);
  }
});

// TODO save payment reference w/ invoice id through webhook /+ save to gdrive
// incl. status = open

// TODO set job online or others

// TODO update checkout frontend page

// TODO create webhook to set payment to paid

// TODO flush jobAdPackageCache in webhooks for updated products / prices

// TODO handle open invoice for published jobs

module.exports = router;
