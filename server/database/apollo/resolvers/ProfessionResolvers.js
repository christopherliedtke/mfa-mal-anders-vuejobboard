const wpContentCache = require("../../../cache/wpContentCache");

const ProfessionResolvers = {
  Query: {
    profession: async (root, args) => {
      const professions = await wpContentCache.get("professions");

      return professions.find(profession => profession.slug == args.slug);
    },
    professions: async (root, args) => {
      let professions = await wpContentCache.get("professions");

      if (args.type) {
        // TODO handle type requests
        professions = professions.filter(
          profession => profession.professionType.slug == args.type
        );
      }

      return professions;
    },
  },
};

module.exports = ProfessionResolvers;
