const { gql } = require("graphql-modules");

const JobSeekType = gql`
  extend type Query {
    publicJobSeek(_id: ID!): JobSeek
    publicJobSeeks: [JobSeek]
    myJobSeek(_id: ID!): JobSeek
    myJobSeeks: [JobSeek]
    adminJobSeek(_id: ID!): JobSeek
    adminJobSeeks: [JobSeek]
  }

  extend type Mutation {
    addJobSeek(
      title: String!
      about: String!
      experiences: String!
      tasks: String!
      isMfa: Boolean
      isZfa: Boolean
      qualifications: [String]
      partTime: Boolean
      fullTime: Boolean
      training: Boolean
      miniJob: Boolean
      salaryMin: Float
      anonymized: Boolean
      gender: String
      firstName: String!
      lastName: String!
      contactEmail: String!
      birthDate: Float
      imageUrl: String
      location: String
      zipCode: String
      published: Boolean
    ): JobSeek
    updateJobSeek(
      _id: ID!
      title: String
      about: String
      experiences: String
      tasks: String
      isMfa: Boolean
      isZfa: Boolean
      qualifications: [String]
      partTime: Boolean
      fullTime: Boolean
      training: Boolean
      miniJob: Boolean
      salaryMin: Float
      anonymized: Boolean
      gender: String
      firstName: String
      lastName: String
      contactEmail: String
      birthDate: Float
      imageUrl: String
      location: String
      zipCode: String
      published: Boolean
    ): JobSeek
    deleteJobSeek(_id: ID!): JobSeek
  }

  type JobSeek {
    _id: ID!
    createdAt: Float
    updatedAt: Float
    title: String!
    about: String!
    experiences: String!
    tasks: String!
    isMfa: Boolean
    isZfa: Boolean
    qualifications: [String]
    partTime: Boolean
    fullTime: Boolean
    training: Boolean
    miniJob: Boolean
    salaryMin: Float
    anonymized: Boolean
    gender: String
    firstName: String!
    lastName: String!
    publicFirstName: String
    publicLastName: String
    contactEmail: String!
    birthDate: Float
    imageUrl: String
    location: String
    zipCode: String
    state: String
    country: String
    geoCodeLat: Float
    geoCodeLng: Float
    lastCheckedAt: Float
    published: Boolean
  }
`;

module.exports = JobSeekType;
