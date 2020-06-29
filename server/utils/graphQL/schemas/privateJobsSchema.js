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

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        job: {
            type: JobType,
            args: {
                id: { type: GraphQLString },
            },
            async resolve(parentValue, args, req) {
                const job = await Job.findOne({
                    _id: args.id,
                    userId: req.userId,
                });
                return job;
            },
        },
        jobs: {
            type: new GraphQLList(JobType),
            async resolve(parentValue, args, req) {
                const jobs = await Job.find({ userId: req.userId }).sort({
                    dateCreated: "desc",
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
                userId: { type: GraphQLString },
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parentValue, args, req) {
                const newJob = new Job({
                    userId: req.userId,
                    title: args.title,
                    description: args.description,
                });

                const response = await newJob.save();

                return response;
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
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
