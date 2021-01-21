const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { Job } = require("../database/models/job");

module.exports.CRONRefreshJobs = new CronJob(
    config.refreshJobs.interval,
    async function () {
        try {
            const jobs = await Job.find({
                paid: true,
                applicationDeadline: {
                    $gte: new Date(
                        new Date().valueOf() - 1000 * 60 * 60 * 24
                    ).toISOString(),
                },
                paidExpiresAt: {
                    $gte: new Date(),
                },
                refreshFrequency: {
                    $gt: 0,
                },
            });

            let jobsToRefresh = [];

            jobs.forEach((job) => {
                if (
                    new Date(
                        new Date(job.publishedAt).valueOf() +
                            1000 * 60 * 60 * 24 * job.refreshFrequency
                    ) < new Date()
                ) {
                    jobsToRefresh.push(job._id);
                }
            });

            console.log("Refreshing Jobs: ", jobsToRefresh);
            await Job.updateMany(
                { _id: { $in: jobsToRefresh } },
                { publishedAt: new Date() }
            );
        } catch (error) {
            console.log("Error on refreshJobs CRON: ", error);
        }
    },
    null, // onComplete
    false, // start directly
    "Europe/Berlin"
);
