const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { refreshJobs } = require("../lib/refreshJobs");

module.exports.CRONRefreshJobs = new CronJob(
  config.refreshJobs.interval,
  () => refreshJobs(),
  null, // onComplete
  false, // start directly
  "Europe/Berlin"
);
