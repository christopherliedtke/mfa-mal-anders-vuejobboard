const CronJob = require("cron").CronJob;
const config = require("../utils/config");
const { sendNewsletter } = require("./middleware/sendNewsletter");

module.exports.CRONNewsletter = new CronJob(
    config.newsletter.interval,
    () => sendNewsletter(),
    null, //onComplete
    false, // start directly
    "Europe/Berlin"
);
