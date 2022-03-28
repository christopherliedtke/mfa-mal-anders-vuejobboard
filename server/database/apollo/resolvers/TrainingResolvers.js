const { AuthenticationError } = require("apollo-server-express");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const config = require("../../../config/config");
const emailService = require("../../../utils/nodemailer");
const { Training } = require("../../models/training");

const TrainingResolvers = {
  Query: {
    publicTraining: async (root, args) => {
      const training = await Training.findOne({
        _id: args._id,
        // $or: [{ startAt: { $gte: new Date() } }, { startAnytime: true }],
        published: true,
        pending: false,
        paid: true,
        declined: { $ne: true },
      });

      return training;
    },
    publicTrainings: async (root, args) => {
      const filter = {
        published: true,
        pending: false,
        paid: true,
        declined: { $ne: true },
      };

      if (args.search) {
        // const searchStr = new RegExp(
        //   args.search
        //     .split(" ")
        //     .map(str => `(?=.*${str})`)
        //     .join(""),
        //   "gi"
        // );
        const searchStr = new RegExp(args.search.replace(/(\s)/g, "|"), "gi");

        filter.$or = [
          "title",
          "desc",
          "excerpt",
          "company",
          "location",
          "state",
          "graduation",
        ].map(elem => {
          return {
            [elem]: { $regex: searchStr },
          };
        });

        // filter.$text = {
        //   $search: args.search,
        // };
      }

      if (args.type) {
        filter.type = args.type;
      }

      if (args.eventType) {
        filter.eventType = args.eventType;
      }

      if (args.profession) {
        filter.profession = { $in: [null, "", args.profession] };
      }

      if (args.state && !args.remote) {
        filter.state = {
          $regex: new RegExp(args.state, "gi"),
        };
        // filter.state = args.state;
      }

      if (args.remote) {
        filter.remote = true;
      }

      const trainings = await Training.find(filter)
        .sort({
          isSponsored: -1,
          title: 1,
          // startAnytime: "desc",
          // updatedAt: "desc",
        })
        .skip(args.skip ? args.skip : 0)
        .limit(args.limit ? args.limit : 10);

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
      }).sort({ createdAt: "desc" });

      // await Training.updateMany(
      //   {
      //     user: context.user._id,
      //   },
      //   { updatedAt: new Date().getTime() }
      // );

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

      const trainings = await Training.find({}).sort({ createdAt: "desc" });

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
    submitTraining: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const updatedTraining = await Training.findOneAndUpdate(
        { _id: args._id, user: context.user._id },
        { pending: true },
        { new: true }
      );

      const dataMailToAdmin = {
        from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
        to: process.env.CONTACT_EMAIL_ADRESS,
        subject: `[Einreichung neue Fortbildung] - ${updatedTraining.title}`,
        html: `
          <h2>Einreichung einer neuen Fortbildung</h2>
          <p>
            <strong>ID:</strong> ${updatedTraining._id} <br>
            <strong>Titel:</strong> ${updatedTraining.title} <br>
            <strong>Unternehmen:</strong> ${updatedTraining.company} <br>
            <strong>Link:</strong> <a href="${
              process.env.WEBSITE_URL +
              "/user/trainings/edit/" +
              updatedTraining._id
            }">${
          process.env.WEBSITE_URL +
          "/user/trainings/edit/" +
          updatedTraining._id
        }</a> <br>
            <strong>Admin-Übersicht:</strong> <a href="${
              process.env.WEBSITE_URL + "/admin/trainings"
            }">${process.env.WEBSITE_URL + "/admin/trainings"}</a> <br>
          </p>
        `,
      };

      emailService.sendMail(dataMailToAdmin);

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
  if (user.isAdmin && training.declined) {
    training.published = false;
    training.pending = false;
    training.paid = false;
    training.declined = true;
  } else if (
    user.isAdmin &&
    training.published === undefined &&
    training.paid === undefined
  ) {
    training.published = true;
    training.pending = false;
    training.paid = true;
    training.declined = false;
  } else if (user.isAdmin && training.published) {
    training.published = true;
    training.pending = false;
    training.paid = true;
    training.declined = false;
  }

  if (!user.isAdmin) {
    // delete training.published;
    delete training.paid;
    delete training.pending;
    delete training.isSponsored;
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

  console.log("training: ", training);

  return training;
}

module.exports = TrainingResolvers;
