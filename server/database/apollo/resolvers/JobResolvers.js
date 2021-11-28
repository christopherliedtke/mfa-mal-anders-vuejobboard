const { AuthenticationError } = require("apollo-server-express");
const config = require("../../../config/config.js");
const { googleIndexing } = require("../../../middleware/googleJobIndexing");
const recachePrerender = require("../../../middleware/recachePrerender");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const { Job } = require("../../models/job");
const { Company } = require("../../models/company");
const internalJobsCache = require("../../../cache/internalJobsCache");
const textToSlug = require("../../../utils/textToSlug");

const JobResolvers = {
  Query: {
    publicJob: async (root, args) => {
      const job = await Job.findOne({
        _id: args._id,
        status: "published",
        paid: true,
        paidExpiresAt: { $gte: new Date() },
        publishedAt: { $lte: new Date() },
      });

      if (
        job.applicationDeadline &&
        job.applicationDeadline < new Date().getTime()
      ) {
        return null;
      }

      return job;
    },
    publicJobs: async () => {
      const jobs = await Job.find({
        status: "published",
        paid: true,
        paidExpiresAt: { $gte: new Date() },
        publishedAt: { $lte: new Date() },
      }).sort({
        publishedAt: "desc",
        paidAt: "desc",
        createdAt: "desc",
      });

      return jobs.filter(
        job =>
          !job.applicationDeadline ||
          job.applicationDeadline >= new Date().getTime()
      );
    },
    myJob: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

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
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const jobs = await Job.find({
        userId: context.user._id,
        status: {
          $ne: "deleted",
        },
      }).sort({
        updatedAt: "desc",
      });

      return jobs;
    },
    adminJob: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const job = await Job.findOne({
        _id: args._id,
      });

      return job;
    },
    adminJobs: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const jobs = await Job.find().sort({
        createdAt: "desc",
      });

      return jobs;
    },
  },

  Mutation: {
    addJob: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      let addObj = {
        ...args,
        userId: context.user._id,
        slug: await getJobSlug(args),
      };

      addObj = cleanUpJob(addObj, context.user);

      const newJobObj = new Job(addObj);
      const newJob = await newJobObj.save();

      indexing(newJob);
      recaching(newJob);

      return newJob;
    },
    updateJob: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      let updateObj = { ...args, slug: await getJobSlug(args) };
      delete updateObj._id;

      updateObj = cleanUpJob(updateObj, context.user);

      const updatedJob = await Job.findOneAndUpdate(
        { _id: args._id, userId: context.user._id },
        updateObj,
        { new: true }
      );

      internalJobsCache.flush();

      indexing(updatedJob);
      recaching(updatedJob);

      return updatedJob;
    },
    deleteJob: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const updatedJob = await Job.findOneAndUpdate(
        { _id: args._id, userId: context.user._id },
        { status: "deleted" },
        { new: true }
      );

      internalJobsCache.flush();

      return updatedJob;
    },
    adminAddJob: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      let addObj = {
        ...args,
        userId: context.user._id,
        slug: await getJobSlug(args),
      };

      addObj = cleanUpJob(addObj, context.user);

      const newJobObj = new Job(addObj);
      const newJob = await newJobObj.save();

      internalJobsCache.flush();

      indexing(newJob);
      recaching(newJob);

      return newJob;
    },
    adminUpdateJob: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      let updateObj = {
        ...args,
        slug: await getJobSlug(args),
      };

      delete updateObj._id;

      updateObj = cleanUpJob(updateObj, context.user);

      const updatedJob = await Job.findOneAndUpdate(
        { _id: args._id },
        updateObj,
        { new: true }
      );

      internalJobsCache.flush();

      indexing(updatedJob);
      recaching(updatedJob);

      return updatedJob;
    },
    adminDeleteJob: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const deletedJob = await Job.findOneAndDelete({
        _id: args._id,
      });

      if (deletedJob.status === "published") {
        internalJobsCache.flush();
      }

      if (deletedJob.imageUrl) {
        await s3.delete(deletedJob.imageUrl);
      }

      return deletedJob;
    },
  },

  User: {
    jobs: async (user, args, context) => {
      if (!user._id === context.user._id || !context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const jobs = await Job.find({ userId: user._id });
      return jobs;
    },
  },

  Company: {
    jobs: async (company, args, context) => {
      if (!company.userId === context.user._id || !context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const jobs = await Job.find({ company: company._id });
      return jobs;
    },
    publicJobs: async company => {
      const jobs = await Job.find({
        company: company._id,
        status: "published",
        paid: true,
        paidExpiresAt: {
          $gte: new Date(),
        },
        applicationDeadline: {
          $not: {
            $lt: new Date(new Date().valueOf()).toISOString(),
          },
        },
      });
      return jobs;
    },
  },

  Payment: {
    job: async (payment, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const job = await Job.findOne({ _id: payment.job });

      return job;
    },
  },

  // StarredJob: {
  //   job: async (starredJob, args, context) => {
  //     if (!context.user._id) {
  //       throw new AuthenticationError("Must be logged in!");
  //     }

  //     const job = await Job.findOne({ _id: starredJob.job });

  //     return job;
  //   },
  // },
};

function cleanUpJob(job, user) {
  if (user.isAdmin) {
    if (job.publishedAt) {
      job.publishedAt = new Date(job.publishedAt).setHours(0, 0, 0, 0);
    }
    if (job.paidExpiresAt) {
      job.paidExpiresAt = new Date(job.paidExpiresAt).setHours(23, 59, 59, 999);
    }
    if (job.paidExpiresAt && job.paidExpiresAt >= new Date()) {
      job.paid = true;
      job.status = "published";
    }
    if (job.status === "published" && !job.publishedAt) {
      job.publishedAt = new Date().setHours(0, 0, 0, 0);
    }
    if (job.paid && !job.paidExpiresAt) {
      job.paidExpiresAt =
        job.paidExpiresAt ||
        new Date().setHours(23, 59, 59, 999) +
          1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays;
    }
    if (job.paid === false) {
      job.paidExpiresAt = new Date(0);
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
    if (typeof job[key] === "string" && key != "extJobUrl") {
      job[key] = sanitizeHtml(job[key]);
    }
  }

  return job;
}

function indexing(job) {
  if (job.status === "published") {
    googleIndexing(
      process.env.WEBSITE_URL +
        config.googleIndexing.pathPrefix +
        job._id +
        "/" +
        job.slug,
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
    recachePrerender(
      `${process.env.WEBSITE_URL}/stellenangebote/job/${job._id}`
    );
  }
}

async function getJobSlug(job) {
  const company = await Company.findOne({ _id: job.company }, "location");

  return textToSlug(job.title + (company ? " in " + company.location : ""));
}

module.exports = JobResolvers;
