const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { Job } = require("../database/models/job");
const sendJobAdUnpublishedEmail = require("./sendJobAdUnpublishedEmail");

module.exports.unpublishJobs = new CronJob(
    config.unpublishJobs.interval,
    async function () {
        try {
            console.log("Unpublishing Jobs...");

            await sendJobAdUnpublishedEmail();

            await Job.updateMany(
                {
                    paid: true,
                    paidExpiresAt: {
                        $lt: new Date(),
                    },
                    status: "published",
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
                    status: "published",
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
