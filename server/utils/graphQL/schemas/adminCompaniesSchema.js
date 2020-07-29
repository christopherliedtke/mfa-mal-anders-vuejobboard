const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");
const CompanyType = require("../types/CompanyType");
const { Company } = require("../../models/company");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../middleware/s3");

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        company: {
            type: CompanyType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args) {
                const company = await Company.findOne({
                    _id: args._id,
                });
                return company;
            },
        },
        companies: {
            type: new GraphQLList(CompanyType),
            async resolve(parentValue, args) {
                const companies = await Company.find().populate("userId").sort({
                    createdAt: "desc",
                });
                return companies;
            },
        },
    },
});

// #Mutations
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        updateCompany: {
            type: CompanyType,
            args: {
                _id: { type: GraphQLString },
                name: { type: new GraphQLNonNull(GraphQLString) },
                street: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                location: { type: new GraphQLNonNull(GraphQLString) },
                zipCode: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                state: { type: new GraphQLNonNull(GraphQLString) },
                country: { type: new GraphQLNonNull(GraphQLString) },
                geoCodeLat: {
                    type: GraphQLFloat,
                },
                geoCodeLng: {
                    type: GraphQLFloat,
                },
                url: {
                    type: GraphQLString,
                },
                logoUrl: {
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args) {
                const updateObj = { ...args };
                delete updateObj._id;

                for (const key in updateObj) {
                    updateObj[key] = sanitizeHtml(updateObj[key]);
                }

                const response = await Company.updateOne(
                    { _id: args._id },
                    updateObj
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedCompany = await Company.findOne({
                        _id: args._id,
                    }).populate("userId");

                    return updatedCompany;
                }
            },
        },
        deleteCompany: {
            type: CompanyType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args) {
                const { logoUrl } = await Company.findOne(
                    { _id: args._id },
                    "logoUrl"
                );

                if (logoUrl) {
                    await s3.delete(logoUrl);
                }

                const response = await Company.deleteOne({
                    _id: args._id,
                });

                if (response.n === 1) {
                    return { name: "deleted" };
                } else {
                    return;
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
