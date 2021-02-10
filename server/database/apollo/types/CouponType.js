const { gql } = require("graphql-modules");

const CouponType = gql`
    extend type Query {
        coupon(code: String): Coupon
        adminCoupon(_id: ID!): Coupon
        adminCoupons: [Coupon]
    }

    extend type Mutation {
        addCoupon(
            code: String
            discount: Float
            usage: String
            refreshFrequency: Float
            expireAt: Float
            userId: ID
        ): Coupon
        updateCoupon(
            _id: ID
            code: String
            discount: Float
            usage: String
            refreshFrequency: Float
            expireAt: Float
            userId: ID
        ): Coupon
        deleteCoupon(_id: ID!): Coupon
    }

    type Coupon {
        _id: ID!
        code: String
        discount: Float
        usage: String
        refreshFrequency: Float
        expireAt: Float
        createdAt: Float
        updatedAt: Float
    }
`;

module.exports = CouponType;
