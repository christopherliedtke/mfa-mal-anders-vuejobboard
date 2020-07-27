const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLFloat,
} = require("graphql");
const JobType = require("../types/JobType");
const { Job } = require("../../models/job");
const sanitizeHtml = require("sanitize-html");

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        job: {
            type: JobType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args) {
                const job = await Job.findOne({
                    _id: args._id,
                }).populate("company");

                return job;
            },
        },
        jobs: {
            type: new GraphQLList(JobType),
            async resolve(parentValue, args) {
                const jobs = await Job.find()
                    .populate("userId")
                    .populate("company")
                    .sort({
                        updatedAt: "desc",
                    });
                return jobs;
            },
        },
    },
});

// #Mutations
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // addJob: {
        //     type: JobType,
        //     args: {
        //         title: { type: new GraphQLNonNull(GraphQLString) },
        //         description: { type: new GraphQLNonNull(GraphQLString) },
        //         employmentType: { type: new GraphQLNonNull(GraphQLString) },
        //         applicationDeadline: {
        //             type: new GraphQLNonNull(GraphQLString),
        //         },
        //         extJobUrl: {
        //             type: GraphQLString,
        //         },
        //         applicationEmail: {
        //             type: GraphQLString,
        //         },
        //         imageUrl: {
        //             type: GraphQLString,
        //         },
        //         contactTitle: {
        //             type: GraphQLString,
        //         },
        //         contactFirstName: {
        //             type: GraphQLString,
        //         },
        //         contactLastName: {
        //             type: GraphQLString,
        //         },
        //         contactEmail: {
        //             type: GraphQLString,
        //         },
        //         contactPhone: {
        //             type: GraphQLString,
        //         },
        //         company: {
        //             type: GraphQLString,
        //         },
        //     },
        //     async resolve(parentValue, args, req) {
        //         const newJob = new Job({
        //             userId: req.userId,
        //             title: sanitizeHtml(args.title),
        //             description: sanitizeHtml(args.description),
        //             employmentType: sanitizeHtml(args.employmentType),
        //             applicationDeadline: sanitizeHtml(args.applicationDeadline),
        //             extJobUrl: sanitizeHtml(args.extJobUrl),
        //             applicationEmail: sanitizeHtml(args.applicationEmail),
        //             imageUrl: sanitizeHtml(args.imageUrl),
        //             contactTitle: sanitizeHtml(args.contactTitle),
        //             contactFirstName: sanitizeHtml(args.contactFirstName),
        //             contactLastName: sanitizeHtml(args.contactLastName),
        //             contactEmail: sanitizeHtml(args.contactEmail),
        //             contactPhone: sanitizeHtml(args.contactPhone),
        //             company: args.company,
        //         });

        //         const response = await newJob.save();

        //         return response;
        //     },
        // },
        updateJob: {
            type: JobType,
            args: {
                _id: { type: GraphQLString },
                status: { type: GraphQLString },
                paid: { type: GraphQLBoolean },
                paidAt: { type: GraphQLFloat },
                paidExpiresAt: { type: GraphQLFloat },
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                employmentType: { type: new GraphQLNonNull(GraphQLString) },
                applicationDeadline: {
                    type: new GraphQLNonNull(GraphQLString),
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
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args) {
                const response = await Job.updateOne(
                    { _id: args._id },
                    {
                        status: sanitizeHtml(args.status),
                        paid: sanitizeHtml(args.paid),
                        paidAt: sanitizeHtml(args.paidAt),
                        paidExpiresAt: sanitizeHtml(args.paidExpiresAt),
                        title: sanitizeHtml(args.title),
                        description: sanitizeHtml(args.description),
                        employmentType: sanitizeHtml(args.employmentType),
                        applicationDeadline: sanitizeHtml(
                            args.applicationDeadline
                        ),
                        extJobUrl: sanitizeHtml(args.extJobUrl),
                        applicationEmail: sanitizeHtml(args.applicationEmail),
                        imageUrl: sanitizeHtml(args.imageUrl),
                        contactTitle: sanitizeHtml(args.contactTitle),
                        contactFirstName: sanitizeHtml(args.contactFirstName),
                        contactLastName: sanitizeHtml(args.contactLastName),
                        contactEmail: sanitizeHtml(args.contactEmail),
                        contactPhone: sanitizeHtml(args.contactPhone),
                        company: args.company,
                    }
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                    }).populate("company");

                    return updatedJob;
                }
            },
        },
        deleteJob: {
            type: JobType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args) {
                const response = await Job.deleteOne({
                    _id: args._id,
                });

                if (response.n === 1) {
                    return { status: "deleted" };
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
