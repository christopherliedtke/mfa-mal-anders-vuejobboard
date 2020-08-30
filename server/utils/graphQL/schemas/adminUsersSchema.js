const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
} = require("graphql");
const UserType = require("../types/UserType");
const { User } = require("../../models/user");
const { Company } = require("../../models/company");
const { Job } = require("../../models/job");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../middleware/s3");

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            async resolve(parentValue, args) {
                const user = await User.findOne({
                    _id: args._id,
                });
                return user;
            },
        },
        users: {
            type: new GraphQLList(UserType),
            async resolve(parentValue, args) {
                const users = await User.find().sort({
                    createdAt: "desc",
                });
                return users;
            },
        },
    },
});

// #Mutations
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        updateUser: {
            type: UserType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                gender: { type: GraphQLString },
                title: { type: GraphQLString },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parentValue, args) {
                const oldUserData = await User.findOne({ _id: args._id });
                const status =
                    args.email === oldUserData.email
                        ? oldUserData.status
                        : "pending";
                const response = await User.updateOne(
                    { _id: args._id },
                    {
                        gender: sanitizeHtml(args.gender),
                        title: sanitizeHtml(args.title),
                        firstName: sanitizeHtml(args.firstName),
                        lastName: sanitizeHtml(args.lastName),
                        email: sanitizeHtml(args.email),
                        status: status,
                    }
                );
                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedUser = await User.findOne({
                        _id: args._id,
                    });
                    return updatedUser;
                }
            },
        },
        deleteUser: {
            type: UserType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parentValue, args) {
                const logoUrls = await Company.find(
                    { userId: args._id },
                    "logoUrl"
                );
                const imageUrls = await Job.find(
                    { userId: args._id },
                    "imageUrl"
                );
                const filesToDelete = [...logoUrls, ...imageUrls]
                    .map((element) =>
                        element.logoUrl || element.imageUrl
                            ? element.logoUrl || element.imageUrl
                            : null
                    )
                    .filter((element) => element)
                    .map((element) => element.split("/").slice(-1).join(""));

                await Promise.all(filesToDelete.map((file) => s3.delete(file)));

                await Promise.all([
                    Job.deleteMany({
                        userId: args._id,
                    }),
                    Company.deleteMany({
                        userId: args._id,
                    }),
                ]);

                const deleted = await User.deleteOne({
                    _id: args._id,
                });

                if (!deleted) {
                    return { firstName: "not deleted" };
                } else {
                    return { firstName: "deleted" };
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
