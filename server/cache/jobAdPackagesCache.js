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

    await Promise.all(
      jobAdPackages.map(async jobAdPackage => {
        // const product = await stripe.products.retrieve(
        //   jobAdPackage.stripeProduct
        // );

        // if (product.id) {
        //   jobAdPackage.stripeProduct = {
        //     id: product.id,
        //     name: product.name,
        //     duration: product.metadata.duration,
        //     refreshFrequency: product.metadata.refreshFrequency,
        //   };
        // }

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

    try {
      this.cache.set("jobAdPackages", jobAdPackages);
    } catch (error) {
      console.log("error: ", error);
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