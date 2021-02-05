const { gql } = require("graphql-modules");

const UserType = gql`
    extend type Query {
        me: User
        meFromToken: User
        adminUser(_id: ID!): User
        adminUsers: [User]
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
        ): User
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
        ): User
        deleteMe(password: String): User
        adminUpdateUser(
            _id: ID!
            gender: String
            title: String
            firstName: String!
            lastName: String!
            email: String!
        ): User
        adminDeleteUser(_id: ID!): User
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
        email: String!
        password: String!
        token: String
    }

    extend type Job {
        userId: User
    }

    extend type Company {
        userId: User
    }
`;

module.exports = UserType;
