const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");
const UserType = require("./UserType");

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
            type: UserType,
        },
        name: {
            type: GraphQLString,
        },
        street: {
            type: GraphQLString,
        },
        location: {
            type: GraphQLString,
        },
        zipCode: {
            type: GraphQLString,
        },
        state: {
            type: GraphQLString,
        },
        country: {
            type: GraphQLString,
        },
        geoCodeLat: {
            type: GraphQLFloat,
        },
        geoCodeLng: {
            type: GraphQLFloat,
        },
        size: {
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
