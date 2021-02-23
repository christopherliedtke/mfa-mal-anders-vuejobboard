const { gql } = require("graphql-modules");

const StarredJobType = gql`
    extend type Query {
        starredJob(_id: ID!): StarredJob
        starredJobs: [StarredJob]
    }

    extend type Mutation {
        addStarredJob(job: ID): StarredJob
        deleteStarredJob(job: ID!): StarredJob
    }

    type StarredJob {
        _id: ID!
        user: ID
        createdAt: Float
        updatedAt: Float
    }

    extend type User {
        starredJobs: [StarredJob]
    }
`;

module.exports = StarredJobType;
