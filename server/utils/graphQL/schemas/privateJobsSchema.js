const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
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
            async resolve(parentValue, args, req) {
                const job = await Job.findOne({
                    _id: args._id,
                    userId: req.userId,
                });
                return job;
            },
        },
        jobs: {
            type: new GraphQLList(JobType),
            async resolve(parentValue, args, req) {
                const jobs = await Job.find({ userId: req.userId }).sort({
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
        addJob: {
            type: JobType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                employmentType: { type: new GraphQLNonNull(GraphQLString) },
                applicationDeadline: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            async resolve(parentValue, args, req) {
                const newJob = new Job({
                    userId: req.userId,
                    title: args.title,
                    description: sanitizeHtml(args.description),
                    employmentType: args.employmentType,
                    applicationDeadline: args.applicationDeadline,
                });

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
            },
            async resolve(parentValue, args, req) {
                const response = await Job.updateOne(
                    { _id: args._id, userId: req.userId },
                    {
                        title: args.title,
                        description: sanitizeHtml(args.description),
                        employmentType: args.employmentType,
                        applicationDeadline: args.applicationDeadline,
                    }
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                        userId: req.userId,
                    });

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
                    { _id: args._id, userId: req.userId },
                    { status: args.status }
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedJob = await Job.findOne({
                        _id: args._id,
                        userId: req.userId,
                    });

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
