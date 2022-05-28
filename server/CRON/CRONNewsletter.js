const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { sendNewsletter } = require("../lib/sendNewsletter");

module.exports.CRONNewsletter = new CronJob(
  config.newsletter.interval,
  () => sendNewsletter(),
  null, //onComplete
  false, // start directly
  "Europe/Berlin"
);
