const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema(
    {
        status: {
            type: String,
            default: "draft",
        },
        paid: {
            type: Boolean,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        paymentReceivedAt: {
            type: Date,
        },
        paidExpiresAt: {
            type: Date,
        },
        invoiceNo: {
            type: Number,
            default: 0,
        },
        paidAmount: {
            type: Number,
            default: 0,
        },
        sentReminder: {
            type: Boolean,
            default: false,
        },
        refreshFrequency: {
            type: Number,
            default: 0,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        employmentType: {
            type: String,
            required: true,
        },
        applicationDeadline: {
            type: String,
            required: true,
        },
        simpleApplication: {
            type: Boolean,
            default: false,
        },
        specialization: {
            type: String,
        },
        extJobUrl: {
            type: String,
        },
        applicationEmail: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        salaryMin: {
            type: String,
            default: "",
        },
        salaryMax: {
            type: String,
            default: "",
        },
        contactGender: {
            type: String,
        },
        contactTitle: {
            type: String,
        },
        contactFirstName: {
            type: String,
            default: "",
        },
        contactLastName: {
            type: String,
            default: "",
        },
        contactEmail: {
            type: String,
        },
        contactPhone: {
            type: String,
        },
        company: {
            type: Schema.Types.ObjectId,
            ref: "Company",
        },
    },
    { timestamps: true }
);

module.exports.Job = mongoose.model("Job", JobSchema);
