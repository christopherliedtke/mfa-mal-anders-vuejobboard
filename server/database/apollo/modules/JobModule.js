const JobType = require("../types/JobType");
const JobResolvers = require("../resolvers/JobResolvers");
const { createModule } = require("graphql-modules");

const JobModule = createModule({
  id: "job-module",
  dirname: __dirname,
  typeDefs: [JobType],
  resolvers: [JobResolvers],
});

module.exports = JobModule;
