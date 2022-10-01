const { gql } = require("graphql-modules");

const JobSeekType = gql`
  extend type Query {
    publicJobSeek(_id: ID!): JobSeek
    publicJobSeeks(
      limit: Float
      skip: Float
      location: String
      radius: Float
      employmentType: String
      isMfa: Boolean
      isZfa: Boolean
    ): JobSeeksWithCount
    myJobSeek(_id: ID!): JobSeek
    myJobSeeks: [JobSeek]
    adminJobSeek(_id: ID!): JobSeek
    adminJobSeeks: [JobSeek]
  }

  extend type Mutation {
    addJobSeek(
      title: String!
      about: String!
      experiences: String
      tasks: String
      isMfa: Boolean
      isZfa: Boolean
      qualifications: [String]
      partTime: Boolean
      fullTime: Boolean
      training: Boolean
      miniJob: Boolean
      freelance: Boolean
      salaryMin: Float
      anonymized: Boolean
      gender: String
      firstName: String!
      lastName: String!
      publicFirstName: String!
      publicLastName: String!
      birthDate: Float
      imageUrl: String
      location: String
      zipCode: String
      published: Boolean
      accepted: Boolean!
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
      freelance: Boolean
      salaryMin: Float
      anonymized: Boolean
      gender: String
      firstName: String
      lastName: String
      publicFirstName: String
      publicLastName: String
      birthDate: Float
      imageUrl: String
      location: String
      zipCode: String
      published: Boolean
      accepted: Boolean
    ): JobSeek
    deleteJobSeek(_id: ID!): JobSeek
  }

  type JobSeek {
    _id: ID!
    createdAt: Float
    updatedAt: Float
    title: String!
    about: String!
    experiences: String
    tasks: String
    isMfa: Boolean
    isZfa: Boolean
    qualifications: [String]
    partTime: Boolean
    fullTime: Boolean
    training: Boolean
    miniJob: Boolean
    freelance: Boolean
    salaryMin: Float
    anonymized: Boolean
    gender: String
    firstName: String!
    lastName: String!
    publicFirstName: String
    publicLastName: String
    birthDate: Float
    imageUrl: String
    location: String
    zipCode: String
    state: String
    country: String
    geoCodeLat: Float
    geoCodeLng: Float
    published: Boolean
    wasPublic: Boolean
    sentReminder: Boolean
    accepted: Boolean
    slug: String
  }

  type JobSeeksWithCount {
    jobSeeks: [JobSeek]
    count: Float
    location: String
  }
`;

module.exports = JobSeekType;
