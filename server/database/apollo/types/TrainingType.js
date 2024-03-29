const { gql } = require("graphql-modules");

const TrainingType = gql`
  extend type Query {
    publicTraining(_id: ID!): Training
    publicTrainings(
      limit: Int
      skip: Int
      search: String
      type: String
      eventType: String
      graduation: String
      profession: String
      state: String
      remote: Boolean
    ): [Training]
    myTraining(_id: ID!): Training
    myTrainings: [Training]
    adminTraining(_id: ID!): Training
    adminTrainings: [Training]
  }

  extend type Mutation {
    addTraining(
      title: String!
      desc: String
      excerpt: String!
      remote: Boolean
      startAnytime: Boolean
      state: String
      location: String
      company: String!
      logoUrl: String
      type: String!
      eventType: String
      graduation: String
      profession: String
      startAt: Float
      endAt: Float
      duration: String
      effort: String
      cost: Float
      extUrl: String!
      published: Boolean
      pending: Boolean
      paid: Boolean
      isSponsored: Boolean
    ): Training
    updateTraining(
      _id: ID!
      title: String
      desc: String
      excerpt: String
      remote: Boolean
      startAnytime: Boolean
      state: String
      location: String
      company: String
      logoUrl: String
      type: String
      eventType: String
      graduation: String
      profession: String
      startAt: Float
      endAt: Float
      duration: String
      effort: String
      cost: Float
      extUrl: String
      published: Boolean
      pending: Boolean
      paid: Boolean
      declined: Boolean
      isSponsored: Boolean
    ): Training
    submitTraining(_id: ID!): Training
    deleteTraining(_id: ID!): Training
  }

  type Training {
    _id: ID!
    createdAt: Float
    updatedAt: Float
    title: String!
    desc: String
    excerpt: String!
    remote: Boolean
    startAnytime: Boolean
    state: String
    location: String
    company: String!
    logoUrl: String
    type: String!
    eventType: String
    graduation: String
    profession: String
    startAt: Float
    endAt: Float
    duration: String
    effort: String
    cost: Float
    extUrl: String!
    published: Boolean
    pending: Boolean
    paid: Boolean
    declined: Boolean
    isSponsored: Boolean
    slug: String
  }

  extend type User {
    trainings: [Training]
  }
`;

module.exports = TrainingType;
