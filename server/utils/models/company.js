const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        url: {
            type: String,
        },
        logoUrl: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports.Company = mongoose.model("Company", CompanySchema);
