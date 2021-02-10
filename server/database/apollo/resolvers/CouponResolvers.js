const { AuthenticationError } = require("apollo-server-express");
const { Coupon } = require("../../models/coupon");

const CouponResolvers = {
    Query: {
        coupon: async (root, args, context) => {
            if (!context.user._id) {
                throw new AuthenticationError("Must be logged in!");
            }

            const coupon = await Coupon.findOne({ code: args.code });

            return coupon;
        },
        adminCoupon: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const coupon = await Coupon.findOne({ _id: args._id });

            return coupon;
        },
        adminCoupons: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const coupons = await Coupon.find().sort({
                createdAt: "desc",
            });

            return coupons;
        },
    },

    Mutation: {
        addCoupon: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            let addObj = { ...args };

            const newCouponObj = new Coupon(addObj);
            const coupon = await newCouponObj.save();

            return coupon;
        },
        updateCoupon: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            let updateObj = { ...args };
            delete updateObj._id;

            const coupon = await Coupon.findOneAndUpdate(
                { _id: args._id },
                updateObj,
                { new: true }
            );

            return coupon;
        },
        deleteCoupon: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const coupon = await Coupon.findOneAndDelete({ _id: args._id });

            return coupon;
        },
    },
};

module.exports = CouponResolvers;
