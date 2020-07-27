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
        paidExpiresAt: {
            type: Date,
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
        extJobUrl: {
            type: String,
        },
        applicationEmail: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        contactTitle: {
            type: String,
        },
        contactFirstName: {
            type: String,
        },
        contactLastName: {
            type: String,
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
