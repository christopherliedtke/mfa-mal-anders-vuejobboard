const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        accepted: {
            type: Boolean,
            required: true,
        },
        status: {
            type: String,
            default: "pending",
        },
    },
    { timestamps: true }
);

module.exports.Subscriber = mongoose.model("Subscriber", SubscriberSchema);
