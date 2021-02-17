const SubscriberType = require("../types/SubscriberType");
const SubscriberResolvers = require("../resolvers/SubscriberResolvers");
const { createModule } = require("graphql-modules");

const SubscriberModule = createModule({
    id: "subscriber-module",
    dirname: __dirname,
    typeDefs: [SubscriberType],
    resolvers: [SubscriberResolvers],
});

module.exports = SubscriberModule;
