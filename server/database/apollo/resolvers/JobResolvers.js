const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const config = require("../../../config/config.js");
const { googleIndexing } = require("../../../lib/googleJobIndexing");
// const recachePrerender = require("../../../lib/recachePrerender");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const getLocation = require("../../../lib/geocoder");
const { Job } = require("../../models/job");
const { Company } = require("../../models/company");
const internalJobsCache = require("../../../cache/internalJobsCache");
const textToSlug = require("../../../lib/textToSlug");
const mongoose = require("mongoose");
const jobliftCache = require("../../../cache/jobliftCache.js");

const JobResolvers = {
  Query: {
    publicJob: async (root, args) => {
      const internalJobs = await internalJobsCache.get("jobs");
      const jobliftJobs = await jobliftCache.get("jobs");

      let jobs = [...internalJobs, ...jobliftJobs];

      const job = jobs.find(job => job._id == args._id);

      return job;
    },
    publicJobs: async (root, args) => {
      let location;
      if (args.location) {
        const locations = await getLocation(args.location);

        if (locations) {
          // console.log(locations[0]);
          location =
            locations[0].address.city ||
            locations[0].address.county ||
            locations[0].address.state;
          args.position = locations[0].position;
        } else {
          throw new UserInputError(
            `Es konnte kein passender Ort für '${args.location}' gefunden werden oder der Ortungsservice funktioniert aktuell nicht. Bitte stellen Sie sicher, dass der Ort bzw. die PLZ korrekt und komplett angegeben ist.`,
            { argumentName: "location" }
          );
        }
      }

      const internalJobs = await internalJobsCache.get("jobs");
      const jobliftJobs = await jobliftCache.get("jobs");

      // console.log("jobliftJobs: ", jobliftJobs);

      let jobs = [...internalJobs, ...jobliftJobs];

      // filter by profession
      if (args.profession) {
        jobs = jobs.filter(
          job =>
            !job.profession ||
            job.profession.toLowerCase() === args.profession.toLowerCase()
        );
      }

      // filter by employmentType
      if (args.employmentType) {
        jobs = jobs.filter(
          job =>
            job.employmentType &&
            job.employmentType
              .toLowerCase()
              .includes(args.employmentType.toLowerCase())
        );
      }

      // filter by specialization
      if (args.specialization) {
        jobs = jobs.filter(
          job =>
            job.specialization &&
            args.specialization
              .toLowerCase()
              .includes(job.specialization.toLowerCase())
        );
      }

      // filter by searchTerm
      if (args.s) {
        jobs = jobs.filter(job => {
          const s = args.s.toLowerCase().split(" ");
          const searchProp = [
            job.title,
            job.description,
            job.company.name,
            job.company.state,
            job.company.location,
            job.company.zipCode,
          ]
            .join(" ")
            .toLowerCase();

          return s.every(term => searchProp.includes(term));
        });
      }

      // filter by ids
      if (args.ids) {
        jobs = jobs.filter(job => args.ids.some(id => id == job._id));
      }

      // sort by position
      if (args.position) {
        jobs = sortJobsByPosition(args.position, jobs);

        if (args.radius) {
          jobs = filterJobsByDistance(args.radius, args.position, jobs);
        }
      }

      const count = jobs.length;
      jobs = sliceJobs(jobs, args.limit || undefined, args.skip);

      return {
        jobs,
        count,
        location,
      };
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

      const jobs = await Job.find()
        .sort({
          createdAt: "desc",
        })
        .populate("company")
        .populate(
          "userId",
          "_id createdAt gender title firstName lastName email isAdmin"
        );
      // .populate(
      //   "payment",
      //   "_id status amount paidAt paymentExpiresAt invoiceNo"
      // );

      return jobs;
    },
  },

  Mutation: {
    addJob: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      console.info("addJob: ", args);

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

      console.info("newJob: ", newJob);

      return newJob;
    },
    updateJob: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      console.info("updateJob: ", args);

      let updateObj = { ...args };

      if (args.title) {
        updateObj.slug = await getJobSlug(args);
      }

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

      console.info("updatedJob: ", updatedJob);

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
        userId: args.userId || context.user._id,
        slug: await getJobSlug(args),
        // paidExpiresAt: args.userId ? new Date(0) : undefined,
      };

      addObj = cleanUpJob(addObj, { ...context.user, isAdmin: !args.userId });

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
      };

      if (args.title) {
        updateObj.slug = await getJobSlug(args);
      }

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

      if (!payment.job) {
        return null;
      }

      if (
        payment.job instanceof Object &&
        payment.job instanceof mongoose.Types.ObjectId === false
      ) {
        return payment.job;
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
    if (
      job.paidExpiresAt &&
      job.paidExpiresAt >= new Date() &&
      job.userId == user._id
    ) {
      job.paid = true;
      job.status = "published";
    }
    if (job.status === "published" && !job.publishedAt) {
      job.publishedAt = new Date().setHours(0, 0, 0, 0);
    }
    if (job.paid && !job.paidExpiresAt) {
      job.paidExpiresAt =
        job.paidExpiresAt ||
        new Date().setHours(23, 59, 59, 999) + 1000 * 60 * 60 * 24 * 60;
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

  if (job.description) {
    job.excerpt =
      sanitizeHtml(job.description.replace(/<\/([a-z, 0-9]*)>/g, "</$1> "), {
        allowedTags: [],
        allowedAttributes: {},
      })
        .substring(0, 200)
        .trim() + "...";
  }

  for (const key in job) {
    if (typeof job[key] === "string" && key != "extJobUrl") {
      job[key] = sanitizeHtml(job[key], {
        allowedTags: [
          // "address",
          // "article",
          // "aside",
          // "footer",
          // "header",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          // "hgroup",
          // "main",
          // "nav",
          // "section",
          // "blockquote",
          // "dd",
          "div",
          // "dl",
          // "dt",
          // "figcaption",
          // "figure",
          "hr",
          "li",
          // "main",
          "ol",
          "p",
          "pre",
          "ul",
          "a",
          // "abbr",
          // "b",
          // "bdi",
          // "bdo",
          "br",
          "cite",
          // "code",
          // "data",
          // "dfn",
          // "em",
          // "i",
          // "kbd",
          // "mark",
          // "q",
          // "rb",
          // "rp",
          // "rt",
          // "rtc",
          // "ruby",
          // "s",
          "samp",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          // "time",
          // "u",
          // "var",
          // "wbr",
          // "caption",
          // "col",
          // "colgroup",
          // "table",
          // "tbody",
          // "td",
          // "tfoot",
          // "th",
          // "thead",
          // "tr",
        ],
        transformTags: {
          h1: "h3",
          h2: "h4",
        },
      });
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
    // recachePrerender(`${process.env.WEBSITE_URL}/job/${job._id}`);
  }
}

async function getJobSlug(job) {
  const company = await Company.findOne({ _id: job.company }, "location");

  return textToSlug(job.title + (company ? " in " + company.location : ""));
}

function sliceJobs(jobs = [], limit = 15, offset = 0) {
  return jobs.slice(offset, offset + limit);
}

function sortJobsByPosition(position, jobs) {
  if (!position.lat || !position.lng) {
    return jobs;
  }

  return jobs.sort((a, b) => {
    if (
      a.source === "joblift" &&
      !b.source &&
      calcDistance(
        b.company.geoCodeLat,
        b.company.geoCodeLng,
        position.lat,
        position.lng
      ) /
        1000 <
        40
    ) {
      return false;
    }

    return (
      calcDistance(
        a.company.geoCodeLat,
        a.company.geoCodeLng,
        position.lat,
        position.lng
      ) -
      calcDistance(
        b.company.geoCodeLat,
        b.company.geoCodeLng,
        position.lat,
        position.lng
      )
    );
  });
}

function filterJobsByDistance(radius, position, jobs) {
  if (!position.lat || !position.lng) {
    return jobs;
  }

  return jobs.filter(
    job =>
      calcDistance(
        job.company.geoCodeLat,
        job.company.geoCodeLng,
        position.lat,
        position.lng
      ) /
        1000 <
      radius
  );
}

function calcDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres

  return d;
}

module.exports = JobResolvers;
