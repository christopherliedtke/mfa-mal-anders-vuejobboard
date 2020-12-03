const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat,
} = require("graphql");
const JobType = require("../types/JobType");
const { Job } = require("../../models/job");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const config = require("../../../config/config.json");
const { googleIndexing } = require("../../../middleware/googleJobIndexing");
const { postToFacebook } = require("../../../middleware/postToFacebook");

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        job: {
            type: JobType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args, req) {
                const job = await Job.findOne({
                    _id: args._id,
                    userId: req.user._id,
                }).populate("company");

                return job;
            },
        },
        jobs: {
            type: new GraphQLList(JobType),
            async resolve(parentValue, args, req) {
                const jobs = await Job.find({ userId: req.user._id })
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
        addJob: {
            type: JobType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                paidAt: { type: GraphQLFloat },
                paidExpiresAt: { type: GraphQLFloat },
                paidAmount: { type: GraphQLFloat },
                refreshFrequency: { type: GraphQLFloat },
                description: { type: new GraphQLNonNull(GraphQLString) },
                employmentType: { type: new GraphQLNonNull(GraphQLString) },
                applicationDeadline: {
                    type: new GraphQLNonNull(GraphQLString),
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
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args, req) {
                const addObj = { ...args, userId: req.user._id };

                // ! temporary - only for admin
                args.paidAt && req.userRole === "admin"
                    ? (addObj.paidAt = new Date(args.paidAt))
                    : delete addObj.paidAt;
                args.paidExpiresAt && req.userRole === "admin"
                    ? (addObj.paidExpiresAt = new Date(args.paidExpiresAt))
                    : delete addObj.paidExpiresAt;
                args.paidAmount && req.userRole === "admin"
                    ? (addObj.paidAmount = args.paidAmount)
                    : delete addObj.paidAmount;
                if (
                    args.paidExpiresAt > new Date() &&
                    req.userRole === "admin"
                ) {
                    addObj.paid = true;
                    addObj.status = "published";
                }
                if (args.refreshFrequency && req.userRole != "admin") {
                    delete addObj.refreshFrequency;
                }
                // !

                for (const key in addObj) {
                    addObj[key] = sanitizeHtml(addObj[key]);
                }

                const newJob = new Job(addObj);
                const response = await newJob.save();

                return response;
            },
        },
        updateJob: {
            type: JobType,
            args: {
                _id: { type: GraphQLString },
                title: { type: new GraphQLNonNull(GraphQLString) },
                paidAt: { type: GraphQLFloat },
                paidExpiresAt: { type: GraphQLFloat },
                paidAmount: { type: GraphQLFloat },
                refreshFrequency: { type: GraphQLFloat },
                description: { type: new GraphQLNonNull(GraphQLString) },
                employmentType: { type: new GraphQLNonNull(GraphQLString) },
                applicationDeadline: {
                    type: new GraphQLNonNull(GraphQLString),
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
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args, req) {
                const updateObj = { ...args };
                delete updateObj._id;

                // !temporary - only for admin
                args.paidAt && req.userRole === "admin"
                    ? (updateObj.paidAt = new Date(args.paidAt))
                    : delete updateObj.paidAt;
                args.paidExpiresAt && req.userRole === "admin"
                    ? (updateObj.paidExpiresAt = new Date(args.paidExpiresAt))
                    : delete updateObj.paidExpiresAt;
                args.paidAmount && req.userRole === "admin"
                    ? (updateObj.paidAmount = args.paidAmount)
                    : delete updateObj.paidAmount;
                if (
                    args.paidExpiresAt > new Date() &&
                    req.userRole === "admin"
                ) {
                    updateObj.paid = true;
                    updateObj.status = "published";
                }
                if (args.refreshFrequency && req.userRole != "admin") {
                    delete updateObj.refreshFrequency;
                }
                // !

                for (const key in updateObj) {
                    updateObj[key] = sanitizeHtml(updateObj[key]);
                }

                const response = await Job.updateOne(
                    { _id: args._id, userId: req.user._id },
                    updateObj
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                        userId: req.user._id,
                    }).populate("company");

                    if (
                        config.googleIndexing.active &&
                        updatedJob.status === "published"
                    ) {
                        googleIndexing(
                            process.env.WEBSITE_URL +
                                config.googleIndexing.pathPrefix +
                                updatedJob._id,
                            "URL_UPDATED"
                        );
                    }

                    return updatedJob;
                }
            },
        },
        updateJobStatus: {
            type: JobType,
            args: {
                _id: { type: GraphQLString },
                status: { type: GraphQLString },
            },
            async resolve(parentValue, args, req) {
                const response = await Job.updateOne(
                    { _id: args._id, userId: req.user._id, paid: true },
                    { status: sanitizeHtml(args.status) }
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                        userId: req.user._id,
                    }).populate("company");

                    if (
                        config.googleIndexing.active &&
                        args.status != "draft" &&
                        args.status != "invoice-pending"
                    ) {
                        googleIndexing(
                            process.env.WEBSITE_URL +
                                config.googleIndexing.pathPrefix +
                                args._id,
                            args.status === "published"
                                ? "URL_UPDATED"
                                : "URL_DELETED"
                        );
                    }

                    if (config.facebook.autoPost) {
                        postToFacebook();
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
            async resolve(parentValue, args, req) {
                const { imageUrl } = await Job.find(
                    { _id: args._id },
                    "imageUrl"
                );

                if (imageUrl) {
                    await s3.delete(imageUrl);
                }

                const response = await Job.deleteOne({
                    _id: args._id,
                    userId: req.user._id,
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
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
