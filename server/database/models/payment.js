const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    stripeInvoiceId: {
      type: String,
    },
    stripeInvoiceStatus: {
      type: String,
    },
    stripeHostedInvoiceUrl: {
      type: String,
    },
    stripeInvoicePdf: {
      type: String,
    },
    stripeReceiptUrl: {
      type: String,
    },
    total: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    number: {
      type: String,
    },
    finalizedAt: {
      type: Date,
    },
    paidAt: {
      type: Date,
    },
    paymentExpiresAt: {
      type: Date,
    },
    // !legacy
    coupon: {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
    },
    status: {
      type: String,
    },
    invoiceNo: {
      type: Number,
    },
    invoiceDate: {
      type: Date,
    },
    paymentType: {
      type: String,
    },
    stripePaymentIntent: {
      type: String,
    },
    stripeInvoice: {
      type: String,
    },
    receiptUrl: {
      type: String,
    },
    receiptNumber: {
      type: String,
    },
    pricingPackage: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
    },
    fee: {
      type: Number,
      default: 0,
    },
    taxes: {
      type: Number,
      default: 0,
    },
    taxRate: {
      type: Number,
      default: 0,
    },
    billingEmail: {
      type: String,
    },
    billingPhone: {
      type: String,
      default: "",
    },
    billingCompany: {
      type: String,
    },
    billingDepartment: {
      type: String,
      default: "",
    },
    billingGender: {
      type: String,
      default: "",
    },
    billingTitle: {
      type: String,
      default: "",
    },
    billingFirstName: {
      type: String,
      default: "",
    },
    billingLastName: {
      type: String,
      default: "",
    },
    billingStreet: {
      type: String,
    },
    billingZipCode: {
      type: String,
    },
    billingLocation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Payment = mongoose.model("Payment", PaymentSchema);
