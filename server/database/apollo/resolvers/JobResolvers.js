const { Job } = require("../../models/job");

const JobResolvers = {
    Query: {
        publicJobs: async (root, args, context) => {
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
        publicJob: async (root, args, context) => {
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
    },

    User: {
        jobs: async (user, args, context) => {
            const jobs = await Job.find({ userId: user._id });

            return jobs;
        },
    },

    Company: {
        jobs: async (company, args, context) => {
            const jobs = await Job.find({ company: company._id });

            return jobs;
        },
    },
};

module.exports = JobResolvers;
