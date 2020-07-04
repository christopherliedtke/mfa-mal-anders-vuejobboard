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
const CompanyType = new GraphQLObjectType({
    name: "Job",
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
        userId: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        location: {
            type: GraphQLString,
        },
        state: {
            type: GraphQLString,
        },
        street: {
            type: GraphQLString,
        },
        zipCode: {
            type: GraphQLString,
        },
        url: {
            type: GraphQLString,
        },
    }),
});

module.exports = CompanyType;
