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

// Hardcoded data
const jobs = [
    { id: "1", title: "Jobtitle 1" },
    { id: "2", title: "Job 2" },
    { id: "3", title: "Job 3" },
];

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        job: {
            type: JobType,
            args: {
                id: { type: GraphQLString },
            },
            resolve(parentValue, args) {
                for (let i = 0; i < jobs.length; i++) {
                    if (jobs[i].id == args.id) {
                        return jobs[i];
                    }
                }
            },
        },
        jobs: {
            type: new GraphQLList(JobType),
            resolve(parentValue, args) {
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
                console.log("args: ", args);
                console.log("req.userId: ", req.userId);

                const newJob = new Job({
                    userId: req.userId,
                    title: args.title,
                    description: args.description,
                });

                const response = await newJob.save();

                console.log("response: ", response);

                return response;
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
