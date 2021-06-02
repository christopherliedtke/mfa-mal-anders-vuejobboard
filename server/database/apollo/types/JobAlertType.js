const { gql } = require("graphql-modules");

const JobAlertType = gql`
  extend type Query {
    myJobAlert(_id: ID!): JobAlert
    myJobAlerts: [JobAlert]
  }

  extend type Mutation {
    addJobAlert(state: String!): JobAlert
    deleteJobAlert(state: String!): JobAlert
  }

  type JobAlert {
    _id: ID!
    user: ID!
    state: String!
    createdAt: Float
    updatedAt: Float
  }

  extend type User {
    jobAlerts: [JobAlert]
  }
`;

module.exports = JobAlertType;
