const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");
const UserType = require("./UserType");

// #Coupon Type
const CouponType = new GraphQLObjectType({
    name: "Coupon",
    fields: () => ({
        _id: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLFloat,
        },
        updatedAt: {
            type: GraphQLFloat,
        },
        userId: {
            type: UserType,
        },
        code: {
            type: GraphQLString,
        },
        discount: {
            type: GraphQLFloat,
        },
        refreshFrequency: {
            type: GraphQLFloat,
        },
        usage: {
            type: GraphQLString,
        },
        expireAt: {
            type: GraphQLFloat,
        },
    }),
});

module.exports = CouponType;
