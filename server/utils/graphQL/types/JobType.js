const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat,
} = require("graphql");
const CompanyType = require("../types/CompanyType");
const UserType = require("../types/UserType");

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
        paidAt: {
            type: GraphQLFloat,
        },
        paidExpiresAt: {
            type: GraphQLFloat,
        },
        paidAmount: {
            type: GraphQLFloat,
        },
        refreshFrequency: {
            type: GraphQLFloat,
        },
        createdAt: {
            type: GraphQLFloat,
        },
        updatedAt: {
            type: GraphQLFloat,
        },
        userId: {
            type: UserType,
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
        simpleApplication: {
            type: GraphQLBoolean,
        },
        specialization: {
            type: GraphQLString,
        },
        extJobUrl: {
            type: GraphQLString,
        },
        applicationEmail: {
            type: GraphQLString,
        },
        imageUrl: {
            type: GraphQLString,
        },
        contactGender: {
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
        company: {
            type: CompanyType,
        },
    }),
});

module.exports = JobType;
