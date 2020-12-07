const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { sendUnpublishedJobReminder } = require("./sendUnpublishedJobReminder");

module.exports.CRONUnpublishedJobs = new CronJob(
    config.unpublishedJobsReminder.interval,
    () => sendUnpublishedJobReminder(),
    null, //onComplete
    false, // start directly
    "Europe/Berlin"
);
