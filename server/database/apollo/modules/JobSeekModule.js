const JobSeekType = require("../types/JobSeekType");
const JobSeekResolvers = require("../resolvers/JobSeekResolvers");
const { createModule } = require("graphql-modules");

const JobSeekModule = createModule({
  id: "job-seek-module",
  dirname: __dirname,
  typeDefs: [JobSeekType],
  resolvers: [JobSeekResolvers],
});

module.exports = JobSeekModule;
