const { AuthenticationError } = require("apollo-server-express");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const { Training } = require("../../models/training");

const TrainingResolvers = {
  Query: {
    publicTraining: async (root, args) => {
      const training = await Training.findOne({
        _id: args._id,
        startAt: { $lte: new Date() },
        published: true,
      });

      return training;
    },
    publicTrainings: async (root, args) => {
      const filter = {
        published: true,
        startAt: { $gte: new Date() },
      };

      const trainings = await Training.find(filter)
        .sort({
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
      training[key] = sanitizeHtml(training[key]);
    }
  }

  return training;
}

module.exports = TrainingResolvers;
