const NodeCache = require("node-cache");
const parseString = require("xml2js").parseString;
const axios = require("axios");
const { decode } = require("html-entities");
const zipCodeToState = require("../utils/zipCodeToState");

class Cache {
  constructor(ttlSeconds) {
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

    const jobLiftXml = await axios.get(
      "https://transport.productsup.io/5e5212ca82cce88337e8/channel/305297/joblift_external.xml"
    );

    let jobLiftJobs;

    try {
      parseString(jobLiftXml.data, function (err, result) {
        // console.log("result.feed.job: ", result.feed.job);
        jobLiftJobs = result.feed.job.filter(filterJobliftJobs).map((job) => {
          return {
            _id: job.id && job.id.length > 0 ? job.id[0] + "-jl" : "",
            source: "joblift",
            status: "published",
            paid: true,
            title: job.title ? job.title[0] : "",
            description: job.fullDescription
              ? decode(job.fullDescription[0])
              : "",
            employmentType:
              job.workingTimes && job.workingTimes[0].item
                ? getEmploymentType(job.workingTimes[0].item)
                : "",
            profession: getProfession(job.title[0] + job.fullDescription[0]),
            specialization: "",
            extJobUrl: job.url ? job.url[0] : "",
            publishedAt: new Date(
              job.publishDate ? job.publishDate[0] : ""
            ).getTime(),
            contactEmail:
              job.contact && job.contact[0].email
                ? job.contact[0].email[0]
                : "",
            company: {
              name: job.company ? decode(job.company[0]) : "",
              location:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].city
                  ? job.locations[0].location[0].city[0]
                  : "",
              state:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].zip
                  ? zipCodeToState(job.locations[0].location[0].zip[0])
                  : "",
              zipCode:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].zip
                  ? job.locations[0].location[0].zip[0]
                  : "",
              country:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].country
                  ? job.locations[0].location[0].country[0]
                  : "",
              geoCodeLat:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].geo &&
                job.locations[0].location[0].geo[0].geo_lat
                  ? job.locations[0].location[0].geo[0].geo_lat[0]
                  : "",
              geoCodeLng:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].geo &&
                job.locations[0].location[0].geo[0].geo_lon
                  ? job.locations[0].location[0].geo[0].geo_lon[0]
                  : "",
            },
          };
        });

        if (err) {
          console.log("Error on set jobLiftCache: ", err);
          return null;
        }
      });

      this.cache.set(
        "jobs",
        jobLiftJobs
          ? jobLiftJobs.sort((a, b) => b.publishedAt - a.publishedAt)
          : null
      );
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

const jobLiftCache = new Cache(60 * 60 * 24);

jobLiftCache.cache.on("expired", () => {
  jobLiftCache.get("jobs");
});
jobLiftCache.cache.on("flush", () => {
  jobLiftCache.get("jobs");
});

module.exports = jobLiftCache;

function filterJobliftJobs(job) {
  return (
    job.publishDate &&
    job.publishDate[0] &&
    job.locations &&
    job.locations[0].location &&
    job.locations[0].location[0].zip &&
    job.locations[0].location[0].zip[0] &&
    !job.fullDescription[0].match(/onaldienst|onalservice/gi) &&
    (checkMfa(job.title[0] + job.fullDescription[0]) ||
      checkZfa(job.title[0] + job.fullDescription[0]))
  );
}

function getEmploymentType(arr) {
  if (arr.includes("parttime;fulltime")) {
    return "part_full";
  } else if (arr.includes("parttime")) {
    return "part";
  } else if (arr.includes("fulltime")) {
    return "full";
  }
}

function checkMfa(str) {
  return str.match(/medizinische|mta|mfa|arzthelf|zfa/gi);
}

function checkZfa(str) {
  return str.match(/zahnmedizinische|zahnarzthelf|zfa|zmv|zfv/gi);
}

function getProfession(str) {
  const isMfa = checkMfa(str);
  const isZfa = checkZfa(str);

  if (isMfa && !isZfa) {
    return "MFA";
  } else if (isZfa && !isMfa) {
    return "ZFA";
  } else {
    return "";
  }
}
