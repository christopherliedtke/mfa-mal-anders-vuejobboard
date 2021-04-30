const express = require("express");
const router = express.Router();
const jobLiftCache = require("../cache/jobLiftCache");

// #route:  GET /api/
// #desc:   get externtal jobs
// #access: Public
router.get("/", async (req, res) => {
  const jobLiftJobs = await jobLiftCache.get("jobs");
  res.json(jobLiftJobs);
});

module.exports = router;
