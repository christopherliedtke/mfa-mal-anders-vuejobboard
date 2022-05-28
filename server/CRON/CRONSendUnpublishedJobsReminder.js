const CronJob = require("cron").CronJob;
const config = require("../config/config");
const {
  sendUnpublishedJobReminderEmail,
} = require("../lib/sendUnpublishedJobReminderEmail");

module.exports.CRONSendUnpublishedJobsReminder = new CronJob(
  config.unpublishedJobsReminder.interval,
  () => sendUnpublishedJobReminderEmail(),
  null, //onComplete
  false, // start directly
  "Europe/Berlin"
);
