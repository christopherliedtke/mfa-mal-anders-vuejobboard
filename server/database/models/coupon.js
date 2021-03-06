const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CouponSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        discount: {
            type: Number,
            default: 0,
        },
        refreshFrequency: {
            type: Number,
            default: 0,
        },
        usage: {
            type: String,
        },
        expireAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

module.exports.Coupon = mongoose.model("Coupon", CouponSchema);
