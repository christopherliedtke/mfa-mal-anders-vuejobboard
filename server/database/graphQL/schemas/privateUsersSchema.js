const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
} = require("graphql");
const UserType = require("../types/UserType");
const { User } = require("../../models/user");
const sanitizeHtml = require("sanitize-html");

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {},
            async resolve(parentValue, args, req) {
                const user = await User.findOne({
                    _id: req.user._id,
                });
                return user;
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
                gender: { type: GraphQLString },
                title: { type: GraphQLString },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parentValue, args, req) {
                const oldUserData = await User.findOne({ _id: req.user._id });

                const status =
                    args.email === oldUserData.email
                        ? oldUserData.status
                        : "pending";

                const response = await User.updateOne(
                    { _id: req.user._id },
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
                        _id: req.user._id,
                    });

                    return updatedUser;
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
