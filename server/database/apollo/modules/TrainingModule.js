const TrainingType = require("../types/TrainingType");
const TrainingResolvers = require("../resolvers/TrainingResolvers");
const { createModule } = require("graphql-modules");

const TrainingModule = createModule({
  id: "training-module",
  dirname: __dirname,
  typeDefs: [TrainingType],
  resolvers: [TrainingResolvers],
});

module.exports = TrainingModule;
