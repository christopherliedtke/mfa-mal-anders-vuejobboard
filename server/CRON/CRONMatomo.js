const CronJob = require("cron").CronJob;
const axios = require("axios");
const config = require("../config/config");

module.exports.CRONGenerateMatomoReport = new CronJob(
  config.generateMatomoReport.interval,
  () => generateMatomoReport(),
  null, //onComplete
  false, // start directly
  "Europe/Berlin"
);

const generateMatomoReport = () => {
  axios.get(
    "https://matomo.mfa-mal-anders.de/misc/cron/archive.php?token_auth=" +
      process.env.MATOMO_TOKEN
  );
};
