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

// #Company Type
const CompanyType = new GraphQLObjectType({
    name: "Company",
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
        logoUrl: {
            type: GraphQLString,
        },
    }),
});

module.exports = CompanyType;
