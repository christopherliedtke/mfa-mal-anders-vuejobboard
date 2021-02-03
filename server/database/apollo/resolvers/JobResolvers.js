const config = require("../../../config/config.json");
const { googleIndexing } = require("../../../middleware/googleJobIndexing");
const recachePrerender = require("../../../middleware/recachePrerender");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const { Job } = require("../../models/job");

const JobResolvers = {
    Query: {
        publicJob: async (root, args) => {
            const job = await Job.findOne({
                _id: args._id,
                status: "published",
                paid: true,
                applicationDeadline: {
                    $gte: new Date(
                        new Date().valueOf() - 1000 * 60 * 60 * 24
                    ).toISOString(),
                },
            });

            return job;
        },
        publicJobs: async () => {
            const jobs = await Job.find({
                status: "published",
                paid: true,
                paidExpiresAt: {
                    $gte: new Date(),
                },
                applicationDeadline: {
                    $gte: new Date(
                        new Date().valueOf() - 1000 * 60 * 60 * 24
                    ).toISOString(),
                },
            }).sort({
                publishedAt: "desc",
                paidAt: "desc",
                createdAt: "desc",
            });

            return jobs.filter((job) =>
                job.publishedAt && job.publishedAt > new Date() ? false : true
            );
        },
        myJob: async (root, args, context) => {
            const job = await Job.findOne({
                _id: args._id,
                userId: context.user._id,
                status: {
                    $ne: "deleted",
                },
            });

            return job;
        },
        myJobs: async (root, args, context) => {
            const jobs = await Job.find({
                userId: context.user._id,
                status: {
                    $ne: "deleted",
                },
            });

            return jobs;
        },
        adminJob: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            } else {
                const job = await Job.findOne({
                    _id: args._id,
                });

                return job;
            }
        },
        adminJobs: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            } else {
                const jobs = await Job.find();

                return jobs;
            }
        },
    },

    Mutation: {
        addJob: async (root, args, context) => {
            let addObj = { ...args, userId: context.user._id };

            addObj = cleanUpJob(addObj, context.user);

            const newJobObj = new Job(addObj);
            const newJob = await newJobObj.save();

            indexing(newJob);
            recaching(newJob);

            return newJob;
        },
        updateJob: async (root, args, context) => {
            let updateObj = { ...args };
            delete updateObj._id;

            updateObj = cleanUpJob(updateObj, context.user);

            const updatedJob = await Job.findOneAndUpdate(
                { _id: args._id, userId: context.user._id },
                updateObj,
                { new: true }
            );

            indexing(updatedJob);
            recaching(updatedJob);

            return updatedJob;
        },
        deleteJob: async (root, args, context) => {
            if (args._id !== context.user._id) {
                return null;
            } else {
                const updatedJob = await Job.findOneAndUpdate(
                    { _id: args._id, userId: context.user._id },
                    { status: "deleted" }
                );

                return updatedJob;
            }
        },
        adminAddJob: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            } else {
                let addObj = { ...args, userId: context.user._id };

                addObj = cleanUpJob(addObj, context.user);

                const newJobObj = new Job(addObj);
                const newJob = await newJobObj.save();

                indexing(newJob);
                recaching(newJob);

                return newJob;
            }
        },
        adminUpdateJob: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            } else {
                let updateObj = { ...args };
                delete updateObj._id;

                updateObj = cleanUpJob(updateObj, context.user);

                const updatedJob = await Job.findOneAndUpdate(
                    { _id: args._id },
                    updateObj,
                    { new: true }
                );

                indexing(updatedJob);
                recaching(updatedJob);

                return updatedJob;
            }
        },
        adminDeleteJob: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            } else {
                const deletedJob = await Job.findOneAndDelete({
                    _id: args._id,
                });

                if (deletedJob.imageUrl) {
                    await s3.delete(deletedJob.imageUrl);
                }

                return deletedJob;
            }
        },
    },

    User: {
        jobs: async (user, args, context) => {
            if (!user._id === context.user._id || !context.user.isAdmin) {
                return null;
            } else {
                const jobs = await Job.find({ userId: user._id });
                return jobs;
            }
        },
    },

    Company: {
        jobs: async (company, args, context) => {
            if (!company.userId === context.user._id || !context.user.isAdmin) {
                return null;
            } else {
                const jobs = await Job.find({ company: company._id });
                return jobs;
            }
        },
        publicJobs: async (company) => {
            const jobs = await Job.find({
                company: company._id,
                status: "published",
                paid: true,
                paidExpiresAt: {
                    $gte: new Date(),
                },
                applicationDeadline: {
                    $gte: new Date(
                        new Date().valueOf() - 1000 * 60 * 60 * 24
                    ).toISOString(),
                },
            });
            return jobs;
        },
    },
};

function cleanUpJob(job, user) {
    if (user.isAdmin) {
        if (job.publishedAt) {
            job.publishedAt = new Date(job.publishedAt);
        }
        if (job.paidAt) {
            job.paidAt = new Date(job.paidAt);
        }
        if (job.paidExpiresAt) {
            job.paidExpiresAt = new Date(job.paidExpiresAt);
        }
        if (job.paidExpiresAt && job.paidExpiresAt > new Date()) {
            job.paid = true;
            job.status = "published";
        }
        if (job.status === "published" && !job.publishedAt) {
            job.publishedAt = new Date();
        }
        if (job.paid && (!job.paidAt || !job.paidExpiresAt)) {
            job.paidAt = job.paidAt || new Date();
            job.paidExpiresAt =
                job.paidExpiresAt ||
                new Date(
                    new Date().valueOf() +
                        1000 *
                            60 *
                            60 *
                            24 *
                            config.stripe.paymentExpirationDays
                );
        }
    }

    if (!user.isAdmin) {
        delete job.publishedAt;
        delete job.refreshFrequency;
        delete job.paidAt;
        delete job.paidExpiresAt;
        delete job.paidAmount;
    }

    for (const key in job) {
        job[key] = sanitizeHtml(job[key]);
    }

    return job;
}

function indexing(job) {
    if (config.googleIndexing.active && job.status === "published") {
        googleIndexing(
            process.env.WEBSITE_URL +
                config.googleIndexing.pathPrefix +
                job._id,
            "URL_UPDATED"
        );
    }
}

function recaching(job) {
    if (
        job.paidAt &&
        job.paidExpiresAt > new Date() &&
        job.paid &&
        job.status === "published" &&
        job._id
    ) {
        recachePrerender(`${process.env.WEBSITE_URL}/jobboard/job/${job._id}`);
    }
}

module.exports = JobResolvers;
