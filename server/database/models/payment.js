const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    job: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Job",
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    coupon: {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
    },
    status: {
      type: String,
    },
    invoiceNo: {
      type: Number,
      default: 0,
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
    paidAt: {
      type: Date,
    },
    paymentExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports.Payment = mongoose.model("Payment", PaymentSchema);
