const express = require("express");
const router = express.Router();
const path = require("path");
const verifyToken = require("../middleware/verifyToken");
const { Payment } = require("../database/models/payment");
const createInvoice = require("../lib/createInvoice");

// #route:  GET /api/invoice/download
// #desc:   Handle invoice request
// #access: Private
router.get("/download/:paymentId", verifyToken, async (req, res) => {
  try {
    const payment = await Payment.findOne({ _id: req.params.paymentId });

    if (!payment) {
      throw new Error("No payment found!");
    }

    if (!req.user.isAdmin && !req.user._id === payment.user) {
      throw new Error("Missing permission!");
    }

    const invoice = await createInvoice(payment, __dirname + "/../invoices/");

    const downloadPath = path.resolve(
      __dirname + "/../invoices/",
      invoice.fileName
    );

    res.download(downloadPath, invoice.FileName);
  } catch (err) {
    console.log("Error on /api/invoice/download: ", err);

    res.json({ success: false });
  }
});

module.exports = router;
