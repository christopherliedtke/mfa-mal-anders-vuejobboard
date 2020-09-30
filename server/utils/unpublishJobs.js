const CronJob = require("cron").CronJob;
const config = require("../utils/config");
const { Job } = require("../utils/models/job");

module.exports.unpublishJobs = new CronJob(
    config.unpublishJobs.interval,
    async function () {
        try {
            console.log("Unpublishing Jobs...");
            await Job.updateMany(
                {
                    paid: true,
                    paidExpiresAt: {
                        $lt: new Date(),
                    },
                },
                { paid: false, status: "unpublished" }
            );
            await Job.updateMany(
                {
                    applicationDeadline: {
                        $lt: new Date(
                            new Date().valueOf() - 1000 * 60 * 60 * 24
                        ).toISOString(),
                    },
                },
                { status: "unpublished" }
            );
        } catch (error) {
            console.log("Error on unpublishJobs CRON: ", error);
        }
    },
    null, // onComplete
    false, // start directly
    "Europe/Berlin"
);
