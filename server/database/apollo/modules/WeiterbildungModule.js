const WeiterbildungType = require("../types/WeiterbildungType");
const WeiterbildungResolvers = require("../resolvers/WeiterbildungResolvers");
const { createModule } = require("graphql-modules");

const WeiterbildungModule = createModule({
  id: "weiterbildung-module",
  dirname: __dirname,
  typeDefs: [WeiterbildungType],
  resolvers: [WeiterbildungResolvers],
});

module.exports = WeiterbildungModule;
