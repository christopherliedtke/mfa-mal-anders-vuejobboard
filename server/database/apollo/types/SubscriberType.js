const { gql } = require("graphql-modules");

const SubscriberType = gql`
    extend type Query {
        subscribers: [Subscriber]
    }

    extend type Mutation {
        addSubscriber(
            email: String
            state: String
            accepted: Boolean
        ): Subscriber
        activateSubscriber(_id: ID!): Subscriber
        deleteSubscriber(email: String): Subscriber
        adminDeleteSubscriber(_id: ID!): Subscriber
    }

    type Subscriber {
        _id: ID!
        email: String
        state: String
        status: String
        accepted: Boolean
        createdAt: Float
        updatedAt: Float
    }
`;

module.exports = SubscriberType;
