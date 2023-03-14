const { AuthenticationError } = require("apollo-server-express");
const { JobAlert } = require("../../models/jobAlert");

const JobAlertResolvers = {
  Query: {
    myJobAlert: async (root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in!");
      }

      const jobAlert = await JobAlert.findOne({
        _id: args._id,
        user: context.user._id,
      });

      return jobAlert;
    },
    myJobAlerts: async (root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in!");
      }

      const jobAlerts = await JobAlert.find({ user: context.user._id });

      return jobAlerts;
    },
  },

  Mutation: {
    addJobAlert: async (root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in!");
      }

      let addObj = { ...args, user: context.user._id };

      const newJobAlertObj = new JobAlert(addObj);
      const newJobAlert = await newJobAlertObj.save();

      return newJobAlert;
    },
    deleteJobAlert: async (root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in!");
      }

      const deletedJobAlert = await JobAlert.findOneAndDelete({
        state: args.state,
        user: context.user._id,
      });

      return deletedJobAlert;
    },
  },

  User: {
    jobAlerts: async user => {
      const jobAlerts = await JobAlert.find({ user: user._id });
      return jobAlerts;
    },
  },
};

module.exports = JobAlertResolvers;
