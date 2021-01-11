const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLBoolean,
} = require("graphql");

// #User Type
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLFloat,
        },
        updatedAt: {
            type: GraphQLFloat,
        },
        gender: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString,
        },
        role: {
            type: GraphQLString,
        },
        isAdmin: {
            type: GraphQLBoolean,
        },
        status: {
            type: GraphQLString,
        },
        accepted: {
            type: GraphQLBoolean,
        },
    }),
});

module.exports = UserType;
