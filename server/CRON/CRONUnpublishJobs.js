const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { unpublishJobs } = require("../lib/unpublishJobs");

module.exports.CRONUnpublishJobs = new CronJob(
  config.unpublishJobs.interval,
  () => unpublishJobs(),
  null, // onComplete
  false, // start directly
  "Europe/Berlin"
);
