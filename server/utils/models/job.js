const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema(
    {
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
        status: {
            type: String,
            default: "draft",
        },
        paid: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

module.exports.Job = mongoose.model("job", JobSchema);
