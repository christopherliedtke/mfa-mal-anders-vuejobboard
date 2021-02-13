const { gql } = require("graphql-modules");

const PaymentType = gql`
    extend type Query {
        payment(_id: ID!): Payment
        payments: [Payment]
    }

    extend type Mutation {
        addPayment(
            status: String
            invoiceNo: Float
            paymentType: String
            amount: Float
            paidAt: Float
            paymentExpiresAt: Float
        ): Payment
        updatePayment(
            _id: ID!
            job: ID
            user: ID
            coupon: ID
            status: String
            invoiceNo: Float
            paymentType: String
            amount: Float
            fee: Float
            taxes: Float
            billingEmail: String
            billingCompany: String
            billingGender: String
            billingTitle: String
            billingFirstName: String
            billingLastName: String
            billingStreet: String
            billingZipCode: String
            billingLocation: String
            paidAt: Float
            paymentExpiresAt: Float
        ): Payment
        deletePayment(_id: ID!): Payment
    }

    type Payment {
        _id: ID!
        status: String
        invoiceNo: Float
        paymentType: String
        amount: Float
        fee: Float
        taxes: Float
        billingEmail: String
        billingCompany: String
        billingGender: String
        billingTitle: String
        billingFirstName: String
        billingLastName: String
        billingStreet: String
        billingZipCode: String
        billingLocation: String
        paidAt: Float
        paymentExpiresAt: Float
        createdAt: Float
        updatedAt: Float
    }

    extend type Job {
        payment: Payment
    }
`;

module.exports = PaymentType;
