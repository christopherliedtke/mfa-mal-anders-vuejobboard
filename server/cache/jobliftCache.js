const NodeCache = require("node-cache");
const parseString = require("xml2js").parseString;
const axios = require("axios");
const { decode } = require("html-entities");
const zipCodeToState = require("../lib/zipCodeToState");
const sanitizeHtml = require("sanitize-html");
const textToSlug = require("../lib/textToSlug");
const calcTimeSince = require("../lib/calcTimeSince");
const {
  employmentTypeOptions,
} = require("../../client/src/config/formDataConfig.json");
const generateJobStructuredData = require("../lib/generateJobStructuredData");

class Cache {
  constructor(ttlSeconds) {
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

    // return [];

    try {
      // const jobLiftXml = await axios.get(process.env.JOBLIFT_FEED_URL);
      const jobLiftXml = await axios({
        method: "get",
        url: process.env.JOBLIFT_FEED_URL,
        timeout: 3000,
        maxContentLength: 1048576 * 25, //50MB
      });

      let jobLiftJobs;
      parseString(jobLiftXml.data, function (err, result) {
        // console.log("result.feed.job: ", result.feed.job);
        jobLiftJobs = result.feed.job.filter(filterJobliftJobs).map(job => {
          return {
            _id: job.id && job.id.length > 0 ? job.id[0] + "-jl" : "",
            source: "joblift",
            status: "published",
            paid: true,
            title: job.title ? job.title[0] : "",
            description: job.fullDescription
              ? decode(job.fullDescription[0])
              : "",
            excerpt:
              sanitizeHtml(
                decode(job.fullDescription[0]).replace(
                  /<\/([a-z, 0-9]*)>/g,
                  "</$1> "
                ),
                {
                  allowedTags: [],
                  allowedAttributes: {},
                }
              )
                .substring(0, 200)
                .trim() + "...",
            employmentType:
              job.workingTimes && job.workingTimes[0].item
                ? getEmploymentType(job.workingTimes[0].item)
                : "",
            employmentTypeFull:
              job.workingTimes && job.workingTimes[0].item
                ? (
                    employmentTypeOptions.find(
                      option =>
                        option.value ===
                        getEmploymentType(job.workingTimes[0].item)
                    ) || { text: "" }
                  ).text
                : "",
            profession: getProfession(job.title[0] + job.fullDescription[0]),
            specialization: "",
            extJobUrl: job.url ? job.url[0] : "",
            publishedAt: new Date(
              job.publishDate ? job.publishDate[0] : ""
            ).getTime(),
            timeSincePublished: calcTimeSince(
              new Date(job.publishDate ? job.publishDate[0] : "").getTime()
            ),
            updatedAt: new Date(
              job.publishDate ? job.publishDate[0] : ""
            ).getTime(),
            paidExpiresAt:
              new Date(job.publishDate ? job.publishDate[0] : "").getTime() +
              1000 * 60 * 60 * 24 * 30,
            contactEmail:
              job.contact && job.contact[0].email
                ? job.contact[0].email[0]
                : "",
            applicationEmail:
              job.contact && job.contact[0].email
                ? job.contact[0].email[0]
                : "",
            simpleApplication: false,
            slug: textToSlug(
              job.title[0] + "-in-" + job.locations[0].location[0].city[0]
            ),
            company: {
              _id: "",
              name: job.company ? decode(job.company[0]) : "",
              noLocation: false,
              location:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].city
                  ? job.locations[0].location[0].city[0].replace(/\w\S*/g, w =>
                      w.replace(/^\w/, c => c.toUpperCase())
                    )
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
                  : "Deutschland",
              geoCodeLat:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].geo &&
                job.locations[0].location[0].geo[0].geo_lat
                  ? parseFloat(job.locations[0].location[0].geo[0].geo_lat[0])
                  : 51.241,
              geoCodeLng:
                job.locations &&
                job.locations[0].location &&
                job.locations[0].location[0].geo &&
                job.locations[0].location[0].geo[0].geo_lon
                  ? parseFloat(job.locations[0].location[0].geo[0].geo_lon[0])
                  : 10.528,
            },
          };
        });

        jobLiftJobs.forEach(job => {
          job.jobStructuredData = generateJobStructuredData(job);
        });

        if (err) {
          console.log("Error on set jobLiftCache: ", err);
          return null;
        }
      });

      this.cache.set(
        "jobs",
        jobLiftJobs && jobLiftJobs.length > 0
          ? jobLiftJobs.sort((a, b) => b.publishedAt - a.publishedAt)
          : []
      );
    } catch (error) {
      console.error("Error in fetching joblift jobs", error);
      this.cache.set("jobs", [], 60 * 60 * 24);
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
    job.locations[0].location[0].geo &&
    job.locations[0].location[0].geo[0] &&
    job.locations[0].location[0].geo[0].geo_lon &&
    job.locations[0].location[0].geo[0].geo_lon[0] &&
    job.locations[0].location[0].geo[0].geo_lat &&
    job.locations[0].location[0].geo[0].geo_lat[0] &&
    !isRecruitingAgency(job) &&
    (checkMfa(job.title[0] /* + job.fullDescription[0] */) ||
      checkZfa(job.title[0] /* + job.fullDescription[0] */))
  );
}

function getEmploymentType(arr) {
  if (arr.includes("parttime;fulltime")) {
    return "part_full";
  } else if (arr.includes("parttime")) {
    return "part";
  } else if (arr.includes("fulltime")) {
    return "full";
  } else {
    return "";
  }
}

function isRecruitingAgency(job) {
  return (job.fullDescription[0] + decode(job.company[0])).match(
    /onaldienst|onalservice|onalvermitt|onalmanage|onalberatu|priomed/gi
  );
}

function checkMfa(str) {
  return str.match(/(medizinisch[a-z]*\s*fachangestellt)|\b(mfa)\b/gi);
}

function checkZfa(str) {
  return str.match(
    /(zahnmedizinisch[a-z]*\s*fachangestellt)|\b(zfa)\b|\b(zmv)\b/gi
  );
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
