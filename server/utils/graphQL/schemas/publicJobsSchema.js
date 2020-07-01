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
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args) {
                const job = await Job.findOne({
                    _id: args._id,
                    status: "published",
                    paid: true,
                });
                return job;
            },
        },
        jobs: {
            type: new GraphQLList(JobType),
            async resolve(parentValue, args) {
                const jobs = await Job.find({
                    status: "published",
                    paid: true,
                }).sort({
                    createdAt: "desc",
                });
                return jobs;
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
