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
        stripeReceiptNumber: {
            type: String,
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
        billingCompany: {
            type: String,
        },
        billingGender: {
            type: String,
        },
        billingTitle: {
            type: String,
        },
        billingFirstName: {
            type: String,
        },
        billingLastName: {
            type: String,
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
