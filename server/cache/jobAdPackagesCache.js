const NodeCache = require("node-cache");
const packages = require("../config/jobAdPackages");
const stripe = require("stripe")(process.env.STRIPE_SK);

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

    const jobAdPackages = [...packages];

    try {
      await Promise.all(
        jobAdPackages.map(async jobAdPackage => {
          if (typeof jobAdPackage.stripePrice != "string") {
            console.error(
              "jobAdPackage.stripePrice is not a string: ",
              jobAdPackage.stripePrice
            );
          }

          const price = await stripe.prices.retrieve(jobAdPackage.stripePrice);

          if (!price.error) {
            jobAdPackage.stripePrice = {
              id: price.id,
              price: price.unit_amount,
              stripeProduct: price.product,
            };
          }
        })
      );

      this.cache.set("jobAdPackages", jobAdPackages);
    } catch (error) {
      console.log("error: ", error);
      this.cache.set("jobAdPackages", undefined);
      return null;
    }
    return this.cache.get("jobAdPackages");
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

const jobAdPackagesCache = new Cache(60 * 60 * 6);
jobAdPackagesCache.get("jobAdPackages");

jobAdPackagesCache.cache.on("expired", () => {
  jobAdPackagesCache.get("jobAdPackages");
});
jobAdPackagesCache.cache.on("flush", () => {
  jobAdPackagesCache.get("jobAdPackages");
});

module.exports = jobAdPackagesCache;
