const { gql } = require("graphql-modules");

const PaymentType = gql`
  extend type Query {
    payment(_id: ID!): Payment
    payments: [Payment]
    myPayments: [Payment]
  }

  extend type Mutation {
    addPayment(
      user: ID!
      job: ID!
      coupon: ID
      status: String
      invoiceNo: Float
      invoiceDate: Float
      paymentType: String
      pricingPackage: String
      amount: Float
      fee: Float
      taxes: Float
      taxRate: Float
      billingEmail: String
      billingPhone: String
      billingCompany: String
      billingDepartment: String
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
    updatePayment(
      _id: ID!
      user: ID
      job: ID
      coupon: ID
      status: String
      invoiceNo: Float
      invoiceDate: Float
      paymentType: String
      pricingPackage: String
      amount: Float
      fee: Float
      taxes: Float
      taxRate: Float
      billingEmail: String
      billingPhone: String
      billingCompany: String
      billingDepartment: String
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
    stripeInvoiceId: String
    stripeInvoiceStatus: String
    stripeHostedInvoiceUrl: String
    stripeInvoicePdf: String
    stripeReceiptUrl: String
    total: Float
    tax: Float
    number: String
    finalizedAt: Float
    status: String
    invoiceNo: Float
    invoiceDate: Float
    paymentType: String
    stripePaymentIntent: String
    receiptUrl: String
    receiptNumber: String
    pricingPackage: String
    amount: Float
    fee: Float
    taxes: Float
    taxRate: Float
    billingEmail: String
    billingPhone: String
    billingCompany: String
    billingDepartment: String
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
