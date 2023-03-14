const { AuthenticationError } = require("apollo-server-express");
const { StarredJob } = require("../../models/starredJob");

const StarredJobResolvers = {
  Query: {
    starredJobs: async (root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in!");
      }

      const starredJobs = await StarredJob.find({
        user: context.user._id,
      });

      return starredJobs;
    },
  },

  Mutation: {
    addStarredJob: async (root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in!");
      }

      let addObj = { ...args, user: context.user._id };

      const newStarredJobObj = new StarredJob(addObj);
      const newStarredJob = await newStarredJobObj.save();

      return newStarredJob;
    },
    deleteStarredJob: async (root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in!");
      }

      const starredJob = await StarredJob.findOneAndDelete({
        user: context.user._id,
        job: args.job,
      });

      return starredJob;
    },
  },

  User: {
    starredJobs: async user => {
      const starredJobs = await StarredJob.find({ user: user._id });
      return starredJobs;
    },
  },
};

module.exports = StarredJobResolvers;
