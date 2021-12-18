const express = require("express");
const router = express.Router();
// const { Job } = require("../database/models/job");
// const { Payment } = require("../database/models/payment");
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/verifyToken");
const wpContentCache = require("../cache/wpContentCache");

// #route:  GET /api/admin/flush-wp-content-cache
// #desc:   Flush WordPress Cache
// #access: Admin
router.get(
  "/flush-wp-content-cache",
  verifyToken,
  isAdmin,
  async (req, res) => {
    wpContentCache.flush();
    res.sendStatus(200);
  }
);

// #route:  GET /api/admin/jobs-to-payments
// #desc:   Transfer paid jobs into payments
// #access: Admin
// router.get("/jobs-to-payments", verifyToken, async (req, res) => {
//   if (process.env.NODE_ENV === "production" && !req.user.isAdmin) {
//     res.json({ success: false });
//   }

//   const jobs = await Job.find({
//     paidAmount: {
//       $gt: 0,
//     },
//   });

//   const payments = jobs.map((job) => {
//     return {
//       job: job._id,
//       user: job.userId,
//       status: job.paidAt ? "paid" : "pending",
//       invoiceNo: job.invoiceNo || undefined,
//       paymentType: job.invoiceNo ? "invoice" : "stripe",
//       amount: job.paidAmount,
//       fee: !job.invoiceNo
//         ? Math.round((25 + 0.014 * job.paidAmount) * 100) / 100
//         : 0,
//       taxes: 0,
//       paidAt: job.paidAt || undefined,
//       paymentExpiresAt: job.paidExpiresAt,
//       createdAt: job.paidAt || new Date(),
//       updatedAt: job.paidAt || new Date(),
//     };
//   });

//   res.json(payments);

//   // const insertedPayments = await Payment.insertMany(payments);
//   // res.json(insertedPayments);
// });

module.exports = router;
