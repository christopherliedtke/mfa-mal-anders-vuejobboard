const ArticleType = require("../types/ArticleType");
const ArticleResolvers = require("../resolvers/ArticleResolvers");
const { createModule } = require("graphql-modules");

const ArticleModule = createModule({
  id: "article-module",
  dirname: __dirname,
  typeDefs: [ArticleType],
  resolvers: [ArticleResolvers],
});

module.exports = ArticleModule;
