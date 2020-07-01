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
    },
    { timestamps: true }
);

module.exports.Job = mongoose.model("job", JobSchema);
