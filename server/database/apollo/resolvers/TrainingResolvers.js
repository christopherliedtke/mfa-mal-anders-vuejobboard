const { AuthenticationError } = require("apollo-server-express");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const { Training } = require("../../models/training");

const TrainingResolvers = {
  Query: {
    publicTraining: async (root, args) => {
      const training = await Training.findOne({
        _id: args._id,
        // $or: [{ startAt: { $gte: new Date() } }, { startAnytime: true }],
        published: true,
      });

      return training;
    },
    publicTrainings: async (root, args) => {
      const filter = {
        published: true,
      };

      if (args.search) {
        const searchStr = new RegExp(args.search.replace(/ /g, "|"), "i");

        filter.$or = [
          "title",
          "desc",
          "excerpt",
          "company",
          "location",
          "state",
        ].map(elem => {
          return {
            [elem]: { $regex: searchStr },
          };
        });
      }

      if (args.type) {
        filter.type = args.type;
      }

      if (args.state && !args.remote) {
        filter.state = args.state;
      }

      if (args.remote) {
        filter.remote = true;
      }

      const trainings = await Training.find(filter)
        .sort({
          startAnytime: "desc",
          startAt: "desc",
        })
        .skip(args.skip ? args.skip : 0)
        .limit(args.limit ? args.limit : 0);

      return trainings;
    },
    myTraining: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const training = await Training.findOne({
        _id: args._id,
        user: context.user._id,
      });

      return training;
    },
    myTrainings: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const trainings = await Training.find({
        user: context.user._id,
      });

      return trainings;
    },
    adminTraining: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const training = await Training.findOne({
        _id: args._id,
      });

      return training;
    },
    adminTrainings: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing persmission!");
      }

      const trainings = await Training.find({}).sort({ startAt: "desc" });

      return trainings;
    },
  },

  Mutation: {
    addTraining: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      let addObj = { ...args, user: context.user._id };

      addObj = cleanUpTraining(addObj, context.user);

      const newTrainingObj = new Training(addObj);

      const newTraining = await newTrainingObj.save();

      return newTraining;
    },
    updateTraining: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      let updateObj = { ...args };
      delete updateObj._id;

      updateObj = cleanUpTraining(updateObj, context.user);
      const filter = { _id: args._id };

      if (!context.user.isAdmin) {
        filter.user = context.user._id;
      }

      const updatedTraining = await Training.findOneAndUpdate(
        filter,
        updateObj,
        { new: true }
      );

      return updatedTraining;
    },
    deleteTraining: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const filter = { _id: args._id };

      if (!context.user.isAdmin) {
        filter.user = context.user._id;
      }

      const deletedTraining = await Training.findOneAndDelete(filter);

      if (deletedTraining.logoUrl) {
        await s3.delete(deletedTraining.logoUrl);
      }

      return deletedTraining;
    },
  },
};

function cleanUpTraining(training, user) {
  if (
    user.isAdmin &&
    training.published === undefined &&
    training.paid === undefined
  ) {
    training.published = true;
    training.paid = true;
  }

  if (!user.isAdmin) {
    delete training.published;
    delete training.paid;
  }

  for (const key in training) {
    if (typeof training[key] === "string" && key != "extUrl") {
      training[key] = sanitizeHtml(training[key], {
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

  return training;
}

module.exports = TrainingResolvers;
