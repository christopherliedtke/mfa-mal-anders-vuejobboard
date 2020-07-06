const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");
const CompanyType = require("../types/CompanyType");
const { Company } = require("../../models/company");
const sanitizeHtml = require("sanitize-html");

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
                location: { type: new GraphQLNonNull(GraphQLString) },
                state: { type: new GraphQLNonNull(GraphQLString) },
                street: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                zipCode: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                url: {
                    type: GraphQLString,
                },
                logoUrl: {
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args, req) {
                const newCompany = new Company({
                    userId: req.userId,
                    name: sanitizeHtml(args.name),
                    location: sanitizeHtml(args.location),
                    state: sanitizeHtml(args.state),
                    street: sanitizeHtml(args.street),
                    zipCode: sanitizeHtml(args.zipCode),
                    url: sanitizeHtml(args.url),
                    logoUrl: sanitizeHtml(args.logoUrl),
                });

                const response = await newCompany.save();

                return response;
            },
        },
        updateCompany: {
            type: CompanyType,
            args: {
                _id: { type: GraphQLString },
                name: { type: new GraphQLNonNull(GraphQLString) },
                location: { type: new GraphQLNonNull(GraphQLString) },
                state: { type: new GraphQLNonNull(GraphQLString) },
                street: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                zipCode: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                url: {
                    type: GraphQLString,
                },
                logoUrl: {
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args, req) {
                const response = await Company.updateOne(
                    { _id: args._id, userId: req.userId },
                    {
                        name: sanitizeHtml(args.name),
                        location: sanitizeHtml(args.location),
                        state: sanitizeHtml(args.state),
                        street: sanitizeHtml(args.street),
                        zipCode: sanitizeHtml(args.zipCode),
                        url: sanitizeHtml(args.url),
                        logoUrl: sanitizeHtml(args.logoUrl),
                    }
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
