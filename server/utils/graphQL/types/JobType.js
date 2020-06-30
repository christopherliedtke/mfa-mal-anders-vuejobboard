const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");

// #Job Type
const JobType = new GraphQLObjectType({
    name: "Job",
    fields: () => ({
        _id: {
            type: GraphQLString,
        },
        userId: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLFloat,
        },
        updatedAt: {
            type: GraphQLFloat,
        },
    }),
});

module.exports = JobType;
