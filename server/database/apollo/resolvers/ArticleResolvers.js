const wpContentCache = require("../../../cache/wpContentCache");
const getRandom = require("../../../utils/getRandomArray");

const ArticleResolvers = {
  Query: {
    article: async (root, args) => {
      const articles = await wpContentCache.get("articles");

      return articles.find(article => article.slug == args.slug);
    },
    articles: async (root, args) => {
      let articles = await wpContentCache.get("articles");

      if (args.exclude) {
        articles = articles.filter(article => article.slug != args.exclude);
      }

      if (args.random && args.limit) {
        articles = getRandom(articles, args.limit);
      } else if (args.limit) {
        articles = articles.slice(0, args.limit);
      }

      return articles;
    },
  },
};

module.exports = ArticleResolvers;
