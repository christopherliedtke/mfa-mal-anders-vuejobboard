const wpContentCache = require("../../../cache/wpContentCache");

const ArticleResolvers = {
  Query: {
    article: async (root, args) => {
      const articles = await wpContentCache.get("articles");

      return articles.find(article => article.slug == args.slug);
    },
    articles: async () => {
      const articles = await wpContentCache.get("articles");

      return articles;
    },
  },
};

module.exports = ArticleResolvers;
