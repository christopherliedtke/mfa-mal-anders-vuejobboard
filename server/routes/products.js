const express = require("express");
const router = express.Router();
const jobAdPackagesCache = require("../cache/jobAdPackagesCache");

// #route:  GET /api/products/job-ad-packages
// #desc:   Fetch jobAdPackages
// #access: Public
router.get("/job-ad-packages", async (req, res) => {
  const jobAdPackages = await jobAdPackagesCache.get("jobAdPackages");
  res.json({ jobAdPackages });
});

module.exports = router;
