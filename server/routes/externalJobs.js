const express = require("express");
const router = express.Router();
const config = require("../config/config");
const jobLiftCache = require("../cache/jobLiftCache");
const stepstoneCache = require("../cache/stepstoneCache");

// #route:  GET /api/
// #desc:   get externtal jobs
// #access: Public
router.get("/", async (req, res) => {
  let externalJobs = await Promise.all([
    config.externalJobs.joblift ? jobLiftCache.get("jobs") : null,
    config.externalJobs.stepstone ? stepstoneCache.get("jobs") : null,
  ]);

  externalJobs = externalJobs.filter((jobs) => jobs).flat();

  // console.log("externalJobs: ", externalJobs);

  res.json(externalJobs);
});

module.exports = router;
