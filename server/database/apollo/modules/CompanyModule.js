const CompanyType = require("../types/CompanyType");
const CompanyResolvers = require("../resolvers/CompanyResolvers");
const { createModule } = require("graphql-modules");

const CompanyModule = createModule({
    id: "company-module",
    dirname: __dirname,
    typeDefs: [CompanyType],
    resolvers: [CompanyResolvers],
});

module.exports = CompanyModule;
