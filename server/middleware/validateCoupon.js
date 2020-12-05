const { Coupon } = require("../database/models/coupon");
const { UsedCoupon } = require("../database/models/usedCoupon");

const validateCoupon = async (code, userId) => {
    let discount = 0;
    let couponUsage = "";
    let couponId;
    let couponRefreshFrequency = 0;

    try {
        const coupon = await Coupon.findOne({ code: code });

        if (!coupon) {
            return { success: false };
        }

        const usedCoupon = await UsedCoupon.findOne({
            userId: userId,
            code: code,
        });

        if (coupon && !usedCoupon) {
            if (coupon.userId && coupon.userId === userId) {
                couponUsage = coupon.usage;
                couponId = coupon._id.toString();
                couponRefreshFrequency = coupon.refreshFrequency;
                discount = coupon.discount;
            } else if (!coupon.userId) {
                couponUsage = coupon.usage;
                couponId = coupon._id.toString();
                couponRefreshFrequency = coupon.refreshFrequency;
                discount = coupon.discount;
            } else {
                return { success: false };
            }
        } else {
            return { success: false };
        }

        return {
            success: true,
            couponUsage,
            couponId,
            couponRefreshFrequency,
            discount,
        };
    } catch (err) {
        console.log("Error in validateCoupon(): ", err);
        return { success: false };
    }
};

module.exports = validateCoupon;
