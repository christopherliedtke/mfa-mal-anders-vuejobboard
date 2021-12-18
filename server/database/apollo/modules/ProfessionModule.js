const ProfessionType = require("../types/ProfessionType");
const ProfessionResolvers = require("../resolvers/ProfessionResolvers");
const { createModule } = require("graphql-modules");

const ProfessionModule = createModule({
  id: "profession-module",
  dirname: __dirname,
  typeDefs: [ProfessionType],
  resolvers: [ProfessionResolvers],
});

module.exports = ProfessionModule;
