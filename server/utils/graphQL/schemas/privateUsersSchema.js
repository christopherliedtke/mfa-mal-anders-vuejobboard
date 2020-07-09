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
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args, req) {
                const user = await User.findOne({
                    _id: args._id,
                    userId: req.userId,
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
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parentValue, args, req) {
                // !check if email is changed and re-verify

                const response = await User.updateOne(
                    { _id: req.userId },
                    {
                        firstName: sanitizeHtml(args.firstName),
                        lastName: sanitizeHtml(args.lastName),
                        email: sanitizeHtml(args.email),
                    }
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedUser = await User.findOne({
                        _id: req.userId,
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
