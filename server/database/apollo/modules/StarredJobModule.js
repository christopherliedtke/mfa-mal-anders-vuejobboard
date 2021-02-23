const StarredJobType = require("../types/StarredJobType");
const StarredJobResolvers = require("../resolvers/StarredJobResolvers");
const { createModule } = require("graphql-modules");

const StarredJobModule = createModule({
    id: "starred-job-module",
    dirname: __dirname,
    typeDefs: [StarredJobType],
    resolvers: [StarredJobResolvers],
});

module.exports = StarredJobModule;
