const CronJob = require("cron").CronJob;
const config = require("../utils/config");
const {
    sendUnpublishedJobReminder,
} = require("./middleware/sendUnpublishedJobReminder");

module.exports.CRONUnpublishedJobs = new CronJob(
    config.newsletter.interval,
    () => sendUnpublishedJobReminder(),
    null, //onComplete
    false, // start directly
    "Europe/Berlin"
);
