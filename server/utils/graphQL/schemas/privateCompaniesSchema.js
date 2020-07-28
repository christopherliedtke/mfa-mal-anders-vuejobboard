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
            async resolve(parentValue, args, req) {
                const company = await Company.findOne({
                    _id: args._id,
                    userId: req.userId,
                });
                return company;
            },
        },
        companies: {
            type: new GraphQLList(CompanyType),
            async resolve(parentValue, args, req) {
                const companies = await Company.find({
                    userId: req.userId,
                }).sort({
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
        addCompany: {
            type: CompanyType,
            args: {
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
            async resolve(parentValue, args, req) {
                const addObj = { ...args, userId: req.userId };

                for (const key in addObj) {
                    addObj[key] = sanitizeHtml(addObj[key]);
                }

                const newCompany = new Company(addObj);
                const response = await newCompany.save();

                return response;
            },
        },
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
            async resolve(parentValue, args, req) {
                const updateObj = { ...args };
                delete updateObj._id;

                for (const key in updateObj) {
                    updateObj[key] = sanitizeHtml(updateObj[key]);
                }

                const response = await Company.updateOne(
                    { _id: args._id, userId: req.userId },
                    updateObj
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedCompany = await Company.findOne({
                        _id: args._id,
                        userId: req.userId,
                    });

                    return updatedCompany;
                }
            },
        },
        deleteCompany: {
            type: CompanyType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args, req) {
                const { logoUrl } = await Company.findOne(
                    { _id: args._id },
                    "logoUrl"
                );

                if (logoUrl) {
                    await s3.delete(logoUrl);
                }

                const response = await Company.deleteOne({
                    _id: args._id,
                    userId: req.userId,
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
