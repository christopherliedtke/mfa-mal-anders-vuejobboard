const wpContentCache = require("../../../cache/wpContentCache");
const getRandom = require("../../../utils/getRandomArray");

const WeiterbildungResolvers = {
  Query: {
    weiterbildung: async (root, args) => {
      const weiterbildungen = await wpContentCache.get("weiterbildungen");

      return weiterbildungen.find(
        weiterbildung => weiterbildung.slug == args.slug
      );
    },
    weiterbildungen: async (root, args) => {
      let weiterbildungen = await wpContentCache.get("weiterbildungen");

      if (args.exclude) {
        weiterbildungen = weiterbildungen.filter(
          weiterbildung => weiterbildung.slug != args.exclude
        );
      }

      if (args.random && args.limit) {
        weiterbildungen = getRandom(weiterbildungen, args.limit);
      } else if (args.limit) {
        weiterbildungen = weiterbildungen.slice(0, args.limit);
      }

      return weiterbildungen;
    },
  },
};

module.exports = WeiterbildungResolvers;
