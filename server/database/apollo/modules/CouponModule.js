const CouponType = require("../types/CouponType");
const CouponResolvers = require("../resolvers/CouponResolvers");
const { createModule } = require("graphql-modules");

const CouponModule = createModule({
    id: "coupon-module",
    dirname: __dirname,
    typeDefs: [CouponType],
    resolvers: [CouponResolvers],
});

module.exports = CouponModule;
