const express = require("express");
const { Job } = require("../database/models/job");
const router = express.Router();

// #route:  GET /api/feeds/jobs/meta-job
// #desc:   Check client version againt current version
// #access: Public
router.get("/jobs/meta-job", async (req, res) => {
  // const { clientVersion } = req.body;
  // const serverVersion = require("../../client/package.json").version;

  // let checkPassed = true;

  // if (
  //   typeof clientVersion === "string" &&
  //   typeof serverVersion === "string" &&
  //   clientVersion != serverVersion
  // ) {
  //   checkPassed = false;
  // }
  let jobs = [];

  try {
    jobs = await Job.find({
      status: "published",
      paidExpiresAt: { $gte: new Date() },
      publishedAt: { $lte: new Date() },
      $or: [
        { paid: true },
        { stripeInvoiceStatus: { $exists: true, $nin: ["draft", ""] } },
      ],
    })
      .sort({
        publishedAt: "desc",
        paidAt: "desc",
        createdAt: "desc",
      })
      .populate("company")
      .lean();

    jobs = jobs.map(job => ({
      title: job.title,
      location: `${job.company.zipCode} ${job.company.location}`,
      url: process.env.WEBSITE_URL + `/job/` + job._id,
      company: job.company.name,
      published: job.publishedAt.toISOString().split("T")[0],
      description: job.description,
      logoUrl: job.company.logoUrl,
    }));
  } catch (error) {
    console.error("Error in /feeds/jobs/meta-job: ", error);
  }

  res.json(jobs);
});

module.exports = router;
