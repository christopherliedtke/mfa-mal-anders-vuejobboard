const { gql } = require("apollo-server-express");
const Job = require("../models/job");

// Construct a schema, using GraphQL schema language
module.exports.typeDefs = gql`
    #QUERY
    type Query {
        publicJobs: [Job]
    }

    #TYPES
    type Job {
        _id: String
        status: String
        publishedAt: Float
        paid: Boolean
        paidAt: Float
        paidExpiresAt: Float
        invoiceNo: Float
        paidAmount: Float
        sentReminder: Boolean
        refreshFrequency: Float
        createdAt: Float
        updatedAt: Float
        userId: User
        title: String
        description: String
        employmentType: String
        applicationDeadline: String
        simpleApplication: Boolean
        specialization: String
        extJobUrl: String
        applicationEmail: String
        imageUrl: String
        salaryMin: String
        salaryMax: String
        contactGender: String
        contactTitle: String
        contactFirstName: String
        contactLastName: String
        contactEmail: String
        contactPhone: String
        company: Company
    }

    type User {
        _id: String
    }

    type Company {
        _id: String
    }
`;

// Provide resolver functions for your schema fields
module.exports.resolvers = {
    Query: {
        publicJobs: async (parent, args, context) => {
            const jobs = await Job.find({
                status: "published",
                paid: true,
                paidExpiresAt: {
                    $gte: new Date(),
                },
                applicationDeadline: {
                    $gte: new Date(
                        new Date().valueOf() - 1000 * 60 * 60 * 24
                    ).toISOString(),
                },
            })
                .populate("company")
                .sort({
                    publishedAt: "desc",
                    paidAt: "desc",
                    createdAt: "desc",
                });

            return jobs.filter((job) =>
                job.publishedAt && job.publishedAt > new Date() ? false : true
            );
        },
    },
};
