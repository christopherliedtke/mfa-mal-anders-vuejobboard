const { Coupon } = require("../database/models/coupon");
const { UsedCoupon } = require("../database/models/usedCoupon");

const validateCoupon = async (code, userId) => {
    try {
        const coupon = await Coupon.findOne({ code: code });

        if (!coupon) {
            throw new Error("No coupon found!");
        }

        if (coupon.usage === "single" || coupon.usage === "singlePerUser") {
            const usedCoupon = await UsedCoupon.findOne({
                userId: userId,
                couponId: coupon._id,
            });

            if (usedCoupon) {
                throw new Error("Coupon has been used already!");
            }
        }

        return coupon;
    } catch (err) {
        return null;
    }
};

module.exports = validateCoupon;
