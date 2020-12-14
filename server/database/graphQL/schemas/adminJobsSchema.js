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
// const sanitizeHtml = require("sanitize-html");
const config = require("../../../config/config.json");
const s3 = require("../../../middleware/s3");
const { googleIndexing } = require("../../../middleware/googleJobIndexing");
const recachePrerender = require("../../../middleware/recachePrerender");

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
                        createdAt: "desc",
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
        updateJob: {
            type: JobType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLString },
                status: { type: GraphQLString },
                paid: { type: GraphQLBoolean },
                paidAt: { type: GraphQLFloat },
                paidExpiresAt: { type: GraphQLFloat },
                paidAmount: { type: GraphQLFloat },
                refreshFrequency: { type: GraphQLFloat },
                description: { type: GraphQLString },
                employmentType: { type: GraphQLString },
                applicationDeadline: { type: GraphQLString },
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
                salaryMin: {
                    type: GraphQLString,
                },
                salaryMax: {
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
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args, req) {
                const updateObj = { ...args };
                delete updateObj._id;

                if (args.paid || args.paidAt || args.paidExpiresAt) {
                    const paidExpiresAt = new Date();
                    paidExpiresAt.setDate(
                        paidExpiresAt.getDate() +
                            config.stripe.paymentExpirationDays
                    );

                    args.paidAt
                        ? (updateObj.paidAt = new Date(args.paidAt))
                        : (updateObj.paidAt = new Date());

                    args.paidExpiresAt
                        ? (updateObj.paidExpiresAt = new Date(
                              args.paidExpiresAt
                          ))
                        : (updateObj.paidExpiresAt = paidExpiresAt);
                    if (args.paidExpiresAt > new Date()) {
                        updateObj.paid = true;
                    }
                }

                const response = await Job.updateOne(
                    { _id: args._id },
                    updateObj
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                    })
                        .populate("userId")
                        .populate("company");

                    if (
                        config.googleIndexing.active &&
                        args.status != "draft" &&
                        args.status != "invoice-pending"
                    ) {
                        googleIndexing(
                            process.env.WEBSITE_URL +
                                config.googleIndexing.pathPrefix +
                                args._id,
                            args.status === "pusblished"
                                ? "URL_UPDATED"
                                : "URL_DELETED"
                        );
                    }

                    if (
                        updatedJob.paidAt &&
                        updatedJob.paidExpiresAt > new Date() &&
                        updatedJob.paid &&
                        updatedJob.status === "published" &&
                        updatedJob._id
                    ) {
                        recachePrerender(
                            `${process.env.WEBSITE_URL}/jobboard/job/${updatedJob._id}`
                        );
                    }

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
                try {
                    const { imageUrl } = await Job.findOne(
                        { _id: args._id },
                        "imageUrl"
                    );

                    if (imageUrl) {
                        await s3.delete(imageUrl);
                    }

                    const response = await Job.deleteOne({
                        _id: args._id,
                    });

                    if (response.n === 1) {
                        if (config.googleIndexing.active) {
                            googleIndexing(
                                process.env.WEBSITE_URL +
                                    config.googleIndexing.pathPrefix +
                                    args._id,
                                "URL_DELETED"
                            );
                        }

                        return { status: "deleted" };
                    } else {
                        return;
                    }
                } catch (err) {
                    console.log("Error in deleteJob: ", err);
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
