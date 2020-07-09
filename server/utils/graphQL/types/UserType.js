const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
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
        status: {
            type: GraphQLString,
        },
        accepted: {
            type: GraphQLString,
        },
    }),
});

module.exports = UserType;
