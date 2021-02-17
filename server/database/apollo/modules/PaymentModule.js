const PaymentType = require("../types/PaymentType");
const PaymentResolvers = require("../resolvers/PaymentResolvers");
const { createModule } = require("graphql-modules");

const PaymentModule = createModule({
    id: "payment-module",
    dirname: __dirname,
    typeDefs: [PaymentType],
    resolvers: [PaymentResolvers],
});

module.exports = PaymentModule;
