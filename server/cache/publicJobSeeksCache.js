const NodeCache = require("node-cache");
const { JobSeek } = require("../database/models/jobSeek");

class Cache {
  constructor(ttlSeconds = 60 * 60) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: true,
    });
  }

  async get(key) {
    const value = this.cache.get(key);
    if (value) {
      return Promise.resolve(value);
    }

    const publicJobSeeks = await JobSeek.find(
      {
        published: true,
        accepted: true,
      },
      `
        _id
        updatedAt
        title
        about
        experiences
        tasks
        qualifications
        isMfa
        isZfa
        partTime
        fullTime
        training
        miniJob
        freelance
        salaryMin
        gender
        publicFirstName
        publicLastName
        imageUrl
        location
        zipCode
        geoCodeLat
        geoCodeLng
        slug
      `
    ).sort({
      updatedAt: "desc",
    });

    try {
      this.cache.set("jobSeeks", publicJobSeeks);
    } catch (error) {
      console.log("error: ", error);
      return null;
    }
    return this.cache.get("jobSeeks");
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

const internalJobSeeksCache = new Cache(60 * 60);

internalJobSeeksCache.cache.on("expired", () => {
  internalJobSeeksCache.get("jobSeeks");
});
internalJobSeeksCache.cache.on("flush", () => {
  internalJobSeeksCache.get("jobSeeks");
});

module.exports = internalJobSeeksCache;
