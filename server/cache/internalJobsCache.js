const NodeCache = require("node-cache");
const { Job } = require("../database/models/job");

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

    const internalJobs = await Job.find({
      status: "published",
      paid: true,
      paidExpiresAt: { $gte: new Date() },
      publishedAt: { $lte: new Date() },
    })
      .sort({
        publishedAt: "desc",
        paidAt: "desc",
        createdAt: "desc",
      })
      .populate("company");

    try {
      this.cache.set("jobs", internalJobs);
      // console.log("this.cache: ", this.cache);
    } catch (error) {
      console.log("error: ", error);
      return null;
    }
    return this.cache.get("jobs");
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

const internalJobsCache = new Cache(60 * 60, 60 * 5);

internalJobsCache.cache.on("expired", () => {
  internalJobsCache.get("jobs");
});
internalJobsCache.cache.on("flush", () => {
  internalJobsCache.get("jobs");
});

module.exports = internalJobsCache;
