const express = require("express");
const router = express.Router();
const { Job } = require("../database/models/job");

// #route:  GET /api/admin/jobs-to-payments
// #desc:   Transfer paid jobs into payments.json
// #access: Admin
router.get("/jobs-to-payments", async (req, res) => {
    if (process.env.NODE_ENV === "production" && !req.user.isAdmin) {
        res.json({ success: false });
    }

    const jobs = await Job.find({
        paidAmount: {
            $gt: 0,
        },
    });

    const payments = jobs.map((job) => {
        return {
            job: job._id,
            user: job.userId,
            status: job.paidAt ? "paid" : "pending",
            invoiceNo: job.invoiceNo || undefined,
            paymentType: job.invoiceNo ? "invoice" : "stripe",
            amount: job.paidAmount,
            fee: !job.invoiceNo ? 25 + 0.014 * job.paidAmount : 0,
            taxes: 0,
            paidAt: job.paidAt || undefined,
            paymentExpiresAt: job.paidExpiresAt,
            createdAt: job.paidAt || new Date(),
            updatedAt: job.paidAt || new Date(),
        };
    });

    res.json(payments);
});

module.exports = router;
