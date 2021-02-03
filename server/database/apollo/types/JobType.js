const { gql } = require("graphql-modules");

const JobType = gql`
    type Query {
        _empty: String
    }

    extend type Query {
        publicJob(_id: ID!): Job
        publicJobs: [Job]
        myJob: Job
        myJobs: [Job]
        adminJob: Job
        adminJobs: [Job]
    }

    type Mutation {
        _empty: String
        addJob(
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
            publishedAt: Float
            paidAt: Float
            paidExpiresAt: Float
            paidAmount: Float
        ): Job
        updateJob(
            _id: ID!
            status: String
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
            publishedAt: Float
            paidAt: Float
            paidExpiresAt: Float
            paidAmount: Float
        ): Job
        deleteJob(_id: ID!): Job
        adminAddJob(
            status: String
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
            publishedAt: Float
            paidAt: Float
            paidExpiresAt: Float
            paidAmount: Float
        ): Job
        adminUpdateJob(
            _id: ID!
            status: String
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
            publishedAt: Float
            paidAt: Float
            paidExpiresAt: Float
            paidAmount: Float
        ): Job
        adminDeleteJob(_id: ID!): Job
    }

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
        title: String!
        description: String!
        employmentType: String!
        applicationDeadline: String!
        simpleApplication: Boolean!
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
    }

    extend type User {
        jobs: [Job]
    }

    extend type Company {
        jobs: [Job]
        publicJobs: [Job]
    }
`;

module.exports = JobType;
