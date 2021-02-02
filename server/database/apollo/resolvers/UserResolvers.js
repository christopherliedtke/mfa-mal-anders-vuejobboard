const { User } = require("../../models/user");

const UserResolvers = {
    Query: {
        me: async (root, args, context) => {
            if (args._id == context.user._id) {
                return null;
            }

            const user = await User.findOne({
                _id: context.user._id,
            });

            return user;
        },
        adminUser: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            } else {
                const user = await User.findOne({ _id: args._id });
                return user;
            }
        },
        adminUsers: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            } else {
                const users = await User.find();
                return users;
            }
        },
    },

    Job: {
        userId: async (job, args, context) => {
            if (!context.user.isAdmin) {
                return job.userId;
            } else {
                const user = await User.findOne({
                    _id: job.userId,
                });

                return user;
            }
        },
    },

    Company: {
        userId: async (company, args, context) => {
            if (!context.user.isAdmin) {
                return company.userId;
            } else {
                const user = await User.findOne({
                    _id: company.userId,
                });

                return user;
            }
        },
    },
};

module.exports = UserResolvers;
