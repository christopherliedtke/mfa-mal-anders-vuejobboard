const { gql } = require("graphql-modules");

const JobType = gql`
  type Query {
    publicJob(_id: ID!): Job
    publicJobs(
      limit: Float
      skip: Float
      s: String
      location: String
      radius: Float
      employmentType: String
      specialization: String
      profession: String
    ): PublicJobWithCount
    myJob(_id: ID!): Job
    myJobs: [Job]
    adminJob(_id: ID!): Job
    adminJobs: [Job]
  }

  type Mutation {
    addJob(
      title: String
      description: String
      profession: String
      employmentType: String
      applicationDeadline: Float
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
      contactPosition: String
      contactEmail: String
      contactPhone: String
      company: ID
      publishedAt: Float
      paidAt: Float
      paidExpiresAt: Float
      paidAmount: Float
      refreshFrequency: Float
    ): Job
    updateJob(
      _id: ID!
      status: String
      title: String
      description: String
      profession: String
      employmentType: String
      applicationDeadline: Float
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
      contactPosition: String
      contactEmail: String
      contactPhone: String
      company: ID
      publishedAt: Float
      paidAt: Float
      paidExpiresAt: Float
      paidAmount: Float
      refreshFrequency: Float
    ): Job
    deleteJob(_id: ID!): Job
    adminAddJob(
      status: String
      title: String
      description: String
      profession: String
      employmentType: String
      applicationDeadline: Float
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
      contactPosition: String
      contactEmail: String
      contactPhone: String
      company: ID
      publishedAt: Float
      paidAt: Float
      paidExpiresAt: Float
      paidAmount: Float
      refreshFrequency: Float
    ): Job
    adminUpdateJob(
      _id: ID!
      status: String
      title: String
      description: String
      profession: String
      employmentType: String
      applicationDeadline: Float
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
      contactPosition: String
      contactEmail: String
      contactPhone: String
      company: ID
      publishedAt: Float
      paid: Boolean
      paidAt: Float
      paidExpiresAt: Float
      paidAmount: Float
      refreshFrequency: Float
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
    slug: String
    profession: String
    employmentType: String!
    applicationDeadline: Float
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
    contactPosition: String
    contactEmail: String
    contactPhone: String
  }

  type PublicJobWithCount {
    jobs: [Job]
    count: Float
  }

  extend type User {
    jobs: [Job]
  }

  extend type Company {
    jobs: [Job]
    publicJobs: [Job]
  }

  extend type Payment {
    job: Job
  }

  # extend type StarredJob {
  #   job: Job
  # }
`;

module.exports = JobType;
