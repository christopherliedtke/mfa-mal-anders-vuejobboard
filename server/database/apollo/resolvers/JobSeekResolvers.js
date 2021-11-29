const { AuthenticationError } = require("apollo-server-express");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
// const config = require("../../../config/config");
const { JobSeek } = require("../../models/jobSeek");

const JobSeekResolvers = {
  Query: {
    publicJobSeek: async (root, args) => {
      const jobSeek = await JobSeek.findOne({
        _id: args._id,
        published: true,
      });

      return jobSeek;
    },
    publicJobSeeks: async (root, args) => {
      const jobSeeks = await JobSeek.find({
        published: true,
      });

      return jobSeeks;
    },
    myJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const jobSeek = await JobSeek.findOneAndUpdate(
        {
          _id: args._id,
          user: context.user._id,
        },
        { lastCheckedAt: new Date().getTime() },
        {
          new: true,
        }
      );

      return jobSeek;
    },
    myJobSeeks: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const jobSeeks = await JobSeek.find({
        user: context.user._id,
      }).sort({ createdAt: "desc" });

      // ? update all jobSeeks' lastCheckedAt field

      return jobSeeks;
    },
    adminJobSeek: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const jobSeek = await JobSeek.findOne({
        _id: args._id,
      });

      return jobSeek;
    },
    adminJobSeeks: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing persmission!");
      }

      const jobSeek = await JobSeek.find({}).sort({ startAt: "desc" });

      return jobSeek;
    },
  },

  Mutation: {
    addJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }
      const addObj = cleanUpJobSeek({ ...args, user: context.user._id });

      const newJobSeekObj = new JobSeek(addObj);
      const newJobSeek = await newJobSeekObj.save();

      return newJobSeek;
    },
    updateJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const updateObj = cleanUpJobSeek({ ...args });
      delete updateObj._id;

      const filter = { _id: args._id };
      if (!context.user.isAdmin) {
        filter.user = context.user._id;
      }

      const updatedJobSeek = await JobSeek.findOneAndUpdate(filter, updateObj, {
        new: true,
      });
      return updatedJobSeek;
    },
    deleteJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }
      const filter = { _id: args._id };
      if (!context.user.isAdmin) {
        filter.user = context.user._id;
      }
      const deletedJobSeek = await JobSeek.findOneAndDelete(filter);
      if (deletedJobSeek.imageUrl) {
        await s3.delete(deletedJobSeek.imageUrl);
      }
      return deletedJobSeek;
    },
  },
};

function cleanUpJobSeek(jobSeek) {
  for (const key in jobSeek) {
    if (typeof jobSeek[key] === "string" && key != "imageUrl") {
      jobSeek[key] = sanitizeHtml(jobSeek[key], {
        allowedTags: [
          // "address",
          // "article",
          // "aside",
          // "footer",
          // "header",
          // "h1",
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
      });
    }
  }

  return jobSeek;
}

module.exports = JobSeekResolvers;
