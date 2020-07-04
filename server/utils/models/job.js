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
            default: true,
        },
        userId: {
            type: String,
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
        companyId: {
            type: String,
        },
        companyName: {
            type: String,
            required: true,
        },
        companyLocation: {
            type: String,
            required: true,
        },
        companyState: {
            type: String,
            required: true,
        },
        companyStreet: {
            type: String,
            required: true,
        },
        companyZipCode: {
            type: String,
            required: true,
        },
        companyUrl: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports.Job = mongoose.model("job", JobSchema);
