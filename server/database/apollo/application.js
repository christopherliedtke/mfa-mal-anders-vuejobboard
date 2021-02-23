const { createApplication } = require("graphql-modules");
const JobModule = require("./modules/JobModule");
const UserModule = require("./modules/UserModule");
const CompanyModule = require("./modules/CompanyModule");
const SubscriberModule = require("./modules/SubscriberModule");
const CouponModule = require("./modules/CouponModule");
const PaymentModule = require("./modules/PaymentModule");
const StarredJobModule = require("./modules/StarredJobModule");

const application = createApplication({
    modules: [
        JobModule,
        UserModule,
        CompanyModule,
        SubscriberModule,
        CouponModule,
        PaymentModule,
        StarredJobModule,
    ],
});

module.exports = application;
