const { gql } = require("graphql-modules");

const UserType = gql`
    extend type Query {
        me: User
        adminUser(_id: ID!): User
        adminUsers: [User]
    }

    type User {
        _id: ID!
        createdAt: Float
        updatedAt: Float
        accepted: Boolean!
        status: String
        role: String
        isEmployer: Boolean
        isAdmin: Boolean
        gender: String
        title: String
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }

    extend type Job {
        userId: User
    }

    extend type Company {
        userId: User
    }
`;

module.exports = UserType;
