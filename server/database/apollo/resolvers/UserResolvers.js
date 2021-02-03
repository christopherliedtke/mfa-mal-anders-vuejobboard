const sanitizeHtml = require("sanitize-html");
const errorMsg = require("../../../config/errorMsg.json");
const jwt = require("jsonwebtoken");
const { hash, compare } = require("../../../utils/bcrypt");
const { UserInputError, ApolloError } = require("apollo-server-express");
const { User } = require("../../models/user");

const UserResolvers = {
    Query: {
        me: async (root, args, context) => {
            const user = await User.findOne({
                _id: context.user._id,
            });

            if (!user) {
                return null;
            }

            delete user.password;

            const token = jwt.sign(
                {
                    user: {
                        _id: user._id,
                        role: user.role,
                        isEmployer: user.isEmployer,
                        isAdmin: user.isAdmin,
                        status: user.status,
                        gender: user.gender,
                        title: user.title,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );

            context.session.token = token;
            user.token = token;

            return user;
        },
        meFromToken: (root, args, context) => {
            return context.user;
        },
        adminUser: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            }

            const user = await User.findOne({ _id: args._id });

            return user;
        },
        adminUsers: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            }

            const users = await User.find();

            return users;
        },
    },

    Mutation: {
        login: async (root, args, context) => {
            if (!args.email || !args.password) {
                throw new UserInputError(errorMsg.auth.fillAll, {
                    invalidArgs: Object.keys(args),
                });
            }

            const user = await User.findOne({ email: args.email });

            if (!user) {
                throw new ApolloError(errorMsg.auth.noMatch);
            }

            const pwCheckSuccess = await compare(args.password, user.password);

            if (!pwCheckSuccess) {
                throw new ApolloError(errorMsg.auth.pwNoMatch);
            }

            delete user.password;

            const token = jwt.sign(
                {
                    user: {
                        _id: user._id,
                        role: user.role,
                        isEmployer: user.isEmployer,
                        isAdmin: user.isAdmin,
                        status: user.status,
                        gender: user.gender,
                        title: user.title,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );

            context.session.token = token;
            user.token = token;

            return user;
        },
        updateMe: async (root, args, context) => {
            const oldUserData = await User.findOne({ _id: context.user._id });

            const status =
                args.email === oldUserData.email
                    ? oldUserData.status
                    : "pending";

            const user = User.findByIdAndUpdate(
                { _id: context.user._id },
                {
                    gender: sanitizeHtml(args.gender),
                    title: sanitizeHtml(args.title),
                    firstName: sanitizeHtml(args.firstName),
                    lastName: sanitizeHtml(args.lastName),
                    email: sanitizeHtml(args.email),
                    status: status,
                },
                { new: true }
            );

            return user;
        },
        deleteMe: async (root, args, context) => {
            if (!context.user._id) {
                return null;
            }

            if (!args.password) {
                throw new UserInputError(errorMsg.auth.fillAll, {
                    invalidArgs: Object.keys(args),
                });
            }

            const user = await User.findById(context.user._id);

            if (!user) {
                throw new ApolloError(errorMsg.general);
            }

            const pwCheckSuccess = await compare(args.password, user.password);

            if (!pwCheckSuccess) {
                throw new ApolloError(errorMsg.auth.pwNoMatch);
            }

            const deletedUser = await User.findOneAndDelete({
                _id: context.user._id,
            });

            if (!deletedUser) {
                throw new ApolloError(errorMsg.general);
            }

            return deletedUser;
        },
        adminUpdateUser: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            }

            const user = User.findOneAndUpdate(
                { _id: args._id },
                {
                    gender: sanitizeHtml(args.gender),
                    title: sanitizeHtml(args.title),
                    firstName: sanitizeHtml(args.firstName),
                    lastName: sanitizeHtml(args.lastName),
                    email: sanitizeHtml(args.email),
                },
                { new: true }
            );

            return user;
        },
        adminDeleteUser: async (root, args, context) => {
            if (!context.user.isAdmin) {
                return null;
            }

            const user = User.findOneAndDelete({ _id: args._id });

            return user;
        },
    },

    Job: {
        userId: async (job, args, context) => {
            if (!context.user.isAdmin) {
                return job.userId;
            }

            const user = await User.findOne({
                _id: job.userId,
            });
            delete user.password;

            return user;
        },
    },

    Company: {
        userId: async (company, args, context) => {
            if (!context.user.isAdmin) {
                return company.userId;
            }
            const user = await User.findOne({
                _id: company.userId,
            });
            delete user.password;

            return user;
        },
    },
};

module.exports = UserResolvers;
