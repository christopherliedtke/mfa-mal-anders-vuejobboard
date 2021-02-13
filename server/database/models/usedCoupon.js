const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsedCouponSchema = new Schema(
    {
        couponId: {
            type: Schema.Types.ObjectId,
            ref: "Coupon",
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports.UsedCoupon = mongoose.model("UsedCoupon", UsedCouponSchema);
