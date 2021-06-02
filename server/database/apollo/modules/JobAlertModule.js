const JobAlertType = require("../types/JobAlertType");
const JobAlertResolvers = require("../resolvers/JobAlertResolvers");
const { createModule } = require("graphql-modules");

const JobAlertModule = createModule({
  id: "job-alert-module",
  dirname: __dirname,
  typeDefs: [JobAlertType],
  resolvers: [JobAlertResolvers],
});

module.exports = JobAlertModule;
