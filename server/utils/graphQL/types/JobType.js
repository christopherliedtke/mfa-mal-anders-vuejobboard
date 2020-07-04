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
        extJobUrl: {
            type: GraphQLString,
        },
        applicationEmail: {
            type: GraphQLString,
        },
        contactTitle: {
            type: GraphQLString,
        },
        contactFirstName: {
            type: GraphQLString,
        },
        contactLastName: {
            type: GraphQLString,
        },
        contactEmail: {
            type: GraphQLString,
        },
        contactPhone: {
            type: GraphQLString,
        },
        companyId: {
            type: GraphQLString,
        },
        companyName: {
            type: GraphQLString,
        },
        companyLocation: {
            type: GraphQLString,
        },
        companyState: {
            type: GraphQLString,
        },
        companyStreet: {
            type: GraphQLString,
        },
        companyZipCode: {
            type: GraphQLString,
        },
        companyUrl: {
            type: GraphQLString,
        },
    }),
});

module.exports = JobType;
