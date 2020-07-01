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

// #Job Type
const JobType = new GraphQLObjectType({
    name: "Job",
    fields: () => ({
        _id: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLString,
        },
        paid: {
            type: GraphQLBoolean,
        },
        createdAt: {
            type: GraphQLFloat,
        },
        updatedAt: {
            type: GraphQLFloat,
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
        employmentType: {
            type: GraphQLString,
        },
        applicationDeadline: {
            type: GraphQLString,
        },
    }),
});

module.exports = JobType;
