const NodeCache = require("node-cache");
const parseString = require("xml2js").parseString;
const axios = require("axios");
const { decode } = require("html-entities");
const zipCodeToState = require("../utils/zipCodeToState");

class Cache {
  constructor(ttlSeconds, checkPeriod = 60 * 5) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: checkPeriod,
      useClones: false,
    });
  }

  async get(key) {
    const value = this.cache.get(key);
    if (value) {
      return Promise.resolve(value);
    }

    const stepstoneXml = await axios.get(
      "https://feed.stepstone.de/partner/files/292E0A69-A864-40B7-BDA0-F83DB1B481D9/FA57D5CC-69F1-4A19-9DAE-06BF21C4FE1D"
    );

    // console.log("stepstoneXml: ", stepstoneXml);

    let stepstoneJobs = null;

    try {
      parseString(stepstoneXml.data, function (err, result) {
        // console.log("result.jobs.job[0]: ", result.jobs.job[0]);
        //   console.log(
        //     "result.jobs.job[0].Category[0]: ",
        //     result.jobs.job[0].Category[4]
        //   );
        // for (const key in result.jobs) {
        //   console.log("key: ", key);
        // }

        stepstoneJobs = result.jobs.job
          .filter(filterStepstoneJob)
          .map((job) => {
            return {
              _id: job.$.id && job.$.id.length > 0 ? job.$.id + "-ss" : "",
              source: "stepstone",
              status: "published",
              paid: true,
              title: job.title ? job.title[0] : "",
              description: job.description ? decode(job.description[0]) : "",
              employmentType: job.Category
                ? getEmploymentType(job.Category)
                : "",
              profession: getProfession(job.title[0] + job.description[0]),
              extJobUrl: job.url ? job.url[0] : "",
              publishedAt: parseDate(job.date[0]),
              //   publishedAt: job.date
              //     ? new Date(job.date[0]).getTime()
              //     : new Date().getTime(),
              company: {
                name: job.companyName ? decode(job.companyName[0]) : "",
                location: job.location ? job.location[0] : "",
                state: job.postalcode ? zipCodeToState(job.postalcode[0]) : "",
                zipCode: job.postalcode ? job.postalcode[0] : "",
                logoUrl: job.company_logo ? job.company_logo[0] : "",
                // country: "Deutschland",
                // geoCodeLat:
                //   job.geokoordinaten && job.geokoordinaten[0].latitude
                //     ? job.geokoordinaten[0].latitude[0]
                //     : "",
                // geoCodeLng:
                //   job.geokoordinaten && job.geokoordinaten[0].longitude
                //     ? job.geokoordinaten[0].longitude[0]
                //     : "",
              },
            };
          });

        if (err) {
          console.log("Error on set stepstoneCache: ", err);
          return null;
        }
      });

      this.cache.set(
        "jobs",
        stepstoneJobs
          ? stepstoneJobs.sort((a, b) => b.publishedAt - a.publishedAt)
          : null
      );
    } catch (error) {
      console.log("error: ", error);
      return null;
    }

    // console.log("stepstoneJobs[0]: ", stepstoneJobs[0]);

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

const stepstoneCache = new Cache({
  stdTTL: 60 * 60 * 24,
});

module.exports = stepstoneCache;

function getEmploymentType(categories) {
  if (!categories || categories.length === 0) {
    return "";
  }

  const types = categories.filter((category) => category.$.type === "WORKTYPE");

  if (types.length === 0) {
    return "";
  }

  if (
    types.some((type) => type._ === "Vollzeit") &&
    types.some((type) => type._ === "Teilzeit")
  ) {
    return "part_full";
  } else if (types.some((type) => type._ === "Teilzeit")) {
    return "part";
  } else if (types.some((type) => type._ === "Vollzeit")) {
    return "full";
  }
}

function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // note parts[1]-1
  return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
}

function filterStepstoneJob(job) {
  return (
    job.date &&
    job.date[0] &&
    // job.postalcode &&
    // job.postalcode[0] &&
    !job.description[0].match(/onaldienst|onalservice/gi) &&
    (checkMfa(job.title[0] + job.description[0]) ||
      checkZfa(job.title[0] + job.description[0]))
  );
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
