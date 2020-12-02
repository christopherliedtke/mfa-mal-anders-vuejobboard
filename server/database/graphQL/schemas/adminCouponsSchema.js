const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");
const CouponType = require("../types/CouponType");
const { Coupon } = require("../../models/coupon");
const { UsedCoupon } = require("../../models/usedCoupon");
const sanitizeHtml = require("sanitize-html");

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        coupon: {
            type: CouponType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args) {
                const coupon = await Coupon.findOne({
                    _id: args._id,
                }).populate("userId");
                return coupon;
            },
        },
        coupons: {
            type: new GraphQLList(CouponType),
            async resolve(parentValue, args) {
                const coupons = await Coupon.find().populate("userId").sort({
                    createdAt: "desc",
                });
                return coupons;
            },
        },
    },
});

// #Mutations
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addCoupon: {
            type: CouponType,
            args: {
                userId: { type: GraphQLString },
                code: { type: new GraphQLNonNull(GraphQLString) },
                discount: { type: GraphQLFloat },
                refreshFrequency: { type: GraphQLFloat },
                usage: { type: GraphQLString },
                expireAt: { type: GraphQLFloat },
            },
            async resolve(parentValue, args) {
                const addObj = { ...args };
                if (addObj.expireAt) {
                    addObj.expireAt = new Date(addObj.expireAt);
                }

                for (const key in addObj) {
                    addObj[key] = sanitizeHtml(addObj[key]);
                }

                const newCoupon = new Coupon(addObj);
                const response = await newCoupon.save();

                return response;
            },
        },
        updateCoupon: {
            type: CouponType,
            args: {
                _id: { type: GraphQLString },
                userId: { type: GraphQLString },
                code: {
                    type: GraphQLString,
                },
                discount: {
                    type: GraphQLFloat,
                },
                refreshFrequency: { type: GraphQLFloat },
                usage: {
                    type: GraphQLString,
                },
                expireAt: { type: GraphQLFloat },
            },
            async resolve(parentValue, args) {
                const updateObj = { ...args };
                delete updateObj._id;

                if (updateObj.expireAt) {
                    updateObj.expireAt = new Date(updateObj.expireAt);
                }

                for (const key in updateObj) {
                    updateObj[key] = sanitizeHtml(updateObj[key]);
                }

                const response = await Coupon.updateOne(
                    { _id: args._id },
                    updateObj
                );

                if (response.nModified === 0) {
                    return;
                } else {
                    const updatedCoupon = await Coupon.findOne({
                        _id: args._id,
                    }).populate("userId");

                    return updatedCoupon;
                }
            },
        },
        deleteCoupon: {
            type: CouponType,
            args: {
                _id: { type: GraphQLString },
            },
            async resolve(parentValue, args) {
                const response = await Coupon.deleteOne({
                    _id: args._id,
                });

                if (response.n === 1) {
                    await UsedCoupon.deleteMany({
                        couponId: args._id,
                    });

                    return { code: "deleted" };
                } else {
                    return;
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
