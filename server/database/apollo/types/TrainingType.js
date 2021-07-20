const { gql } = require("graphql-modules");

const TrainingType = gql`
  extend type Query {
    publicTraining(_id: ID!): Training
    publicTrainings(limit: Int, skip: Int): [Training]
    myTraining(_id: ID!): Training
    myTrainings: [Training]
    adminTraining(_id: ID!): Training
    adminTrainings: [Training]
  }

  extend type Mutation {
    addTraining(
      title: String!
      desc: String!
      excerpt: String!
      remote: Boolean
      state: String
      location: String
      company: String!
      logoUrl: String
      type: String!
      startAt: Float!
      duration: Float
      cost: Float
      extUrl: String!
    ): Training
    updateTraining(
      _id: ID!
      title: String
      desc: String
      excerpt: String
      remote: Boolean
      state: String
      location: String
      company: String
      logoUrl: String
      type: String
      startAt: Float
      duration: Float
      cost: Float
      extUrl: String
    ): Training
    deleteTraining(_id: ID!): Training
  }

  type Training {
    _id: ID!
    createdAt: Float
    updatedAt: Float
    title: String!
    desc: String!
    excerpt: String!
    remote: Boolean
    state: String
    location: String
    company: String!
    logoUrl: String
    type: String!
    startAt: Float!
    duration: Float
    cost: Float
    extUrl: String!
    published: Boolean
    paid: Boolean
  }

  extend type User {
    trainings: [Training]
  }
`;

module.exports = TrainingType;
