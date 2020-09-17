const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");
const JobType = require("../types/JobType");
const { Job } = require("../../models/job");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../middleware/s3");
const config = require("../../config.json");
const { googleIndexing } = require("../../middleware/googleJobIndexing");
const { postToFacebook } = require("../../middleware/postToFacebook");

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
                    userId: req.userId,
                }).populate("company");

                return job;
            },
        },
        jobs: {
            type: new GraphQLList(JobType),
            async resolve(parentValue, args, req) {
                const jobs = await Job.find({ userId: req.userId })
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
                const addObj = { ...args, userId: req.userId };

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

                for (const key in updateObj) {
                    updateObj[key] = sanitizeHtml(updateObj[key]);
                }

                const response = await Job.updateOne(
                    { _id: args._id, userId: req.userId },
                    updateObj
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                        userId: req.userId,
                    }).populate("company");

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
                    { _id: args._id, userId: req.userId, paid: true },
                    { status: sanitizeHtml(args.status) }
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                        userId: req.userId,
                    }).populate("company");

                    if (config.googleIndexing.active) {
                        googleIndexing(
                            config.website.url +
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
                    userId: req.userId,
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
