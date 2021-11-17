const NodeCache = require("node-cache");
const createSitemap = require("../middleware/createSitemap");

class Cache {
  constructor(ttlSeconds = 60 * 60) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false,
    });
  }

  async get(key) {
    const value = this.cache.get(key);
    if (value) {
      return Promise.resolve(value);
    }

    const sitemap = await createSitemap();

    try {
      this.cache.set("sitemap", sitemap);
    } catch (error) {
      console.log("error: ", error);
      return null;
    }
    return this.cache.get("sitemap");
  }

  del(keys) {
    this.cache.del(keys);
  }

  delStartWith(startStr = "") {
    if (!startStr) {
      return;
    }

    const keys = this.cache.keys();
    for (const key of keys) {
      if (key.indexOf(startStr) === 0) {
        this.del(key);
      }
    }
  }

  flush() {
    this.cache.flushAll();
  }
}

const sitemapCache = new Cache(60 * 60 * 6);

sitemapCache.cache.on("expired", () => {
  sitemapCache.get("sitemap");
});
sitemapCache.cache.on("flush", () => {
  sitemapCache.get("sitemap");
});

module.exports = sitemapCache;
