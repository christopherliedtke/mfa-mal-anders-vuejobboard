const { gql } = require("graphql-modules");

const UserType = gql`
  extend type Query {
    me: User
    meFromToken: User
    adminUser(_id: ID!): User
    adminUsers(
      isEmployer: Boolean
      isEmployee: Boolean
      isEducational: Boolean
      isAdmin: Boolean
    ): [User]
  }

  extend type Mutation {
    login(email: String, password: String): User
    logout: User
    register(
      acceptance: String
      gender: String
      title: String
      firstName: String
      lastName: String
      email: String
      password: String
      password2: String
      isEmployer: Boolean
      isEmployee: Boolean
      isEducational: Boolean
    ): User
    activateUser(_id: ID!): User
    resetPasswordGetCode(email: String): User
    resetPasswordVerify(
      email: String
      password: String
      password2: String
      code: String
    ): User
    accountVerificationGetEmail: User
    updateMe(
      gender: String
      title: String
      firstName: String!
      lastName: String!
      email: String!
      isEmployer: Boolean!
      isEmployee: Boolean!
      isEducational: Boolean!
    ): User
    deleteMe(password: String): User
    adminUserActivationConfirmation(_id: ID!): User
    adminUpdateUser(
      _id: ID!
      gender: String
      title: String
      firstName: String
      lastName: String
      email: String
      isEmployer: Boolean
      isEmployee: Boolean
      isEducational: Boolean
      status: String
    ): User
    adminDeleteUser(_id: ID!): User
  }

  type User {
    _id: ID!
    createdAt: Float
    updatedAt: Float
    accepted: Boolean
    status: String
    role: String
    isEmployer: Boolean
    isEmployee: Boolean
    isEducational: Boolean
    isAdmin: Boolean
    gender: String
    title: String
    firstName: String
    lastName: String
    email: String
    password: String
    token: String
    sentReminder: Boolean
  }

  extend type Job {
    userId: User
  }

  extend type Company {
    userId: User
  }

  extend type Payment {
    user: User
  }

  extend type Training {
    user: User
  }

  extend type JobSeek {
    user: User
  }
`;

module.exports = UserType;
