const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");

// #User Type
const SubscriberType = new GraphQLObjectType({
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
        email: {
            type: GraphQLString,
        },
        state: {
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

module.exports = SubscriberType;
