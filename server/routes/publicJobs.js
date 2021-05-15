const express = require("express");
const router = express.Router();
const config = require("../config/config");
const internalJobsCache = require("../cache/internalJobsCache");
const jobLiftCache = require("../cache/jobLiftCache");
const stepstoneCache = require("../cache/stepstoneCache");

// #route:  GET /api/public-jobs
// #desc:   Fetch public jobs
// #access: Public
router.get("/", async (req, res) => {
  const { query } = req;
  console.log("query: ", query);

  // let jobs = await internalJobsCache.get("jobs");
  let jobs = await Promise.all([
    internalJobsCache.get("jobs"),
    config.externalJobs.joblift ? jobLiftCache.get("jobs") : [],
    config.externalJobs.stepstone ? stepstoneCache.get("jobs") : [],
  ]);
  jobs = jobs.flat();
  // console.log("jobs: ", jobs);

  jobs = filterJobs(jobs, query);
  jobs = sliceJobs(jobs, query.limit || undefined, query.offset || undefined);

  res.json({ count: jobs.length, jobs });
});

module.exports = router;

function filterJobs(jobs, query) {
  let filteredJobs = [...jobs];

  //   filter profession
  if (query.profession) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.profession &&
        job.profession.toLowerCase() === query.profession.toLowerCase()
    );
  }

  //   filter employmentType
  if (query.employmentType) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.employmentType &&
        job.employmentType.toLowerCase() === query.employmentType.toLowerCase()
    );
  }

  //   filter location
  if (query.location) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.company.location &&
        job.company.location
          .toLowerCase()
          .includes(query.location.toLowerCase())
    );
  }

  //   filter state
  if (query.state) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.company.state &&
        job.company.state.toLowerCase() === query.state.toLowerCase()
    );
  }

  //   filter specialization
  if (query.specialization) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.specialization &&
        query.specialization
          .toLowerCase()
          .includes(job.specialization.toLowerCase())
    );
  }

  //   filter searchTerm
  if (query.s) {
    filteredJobs = jobs.filter((job) => {
      const s = query.s.toLowerCase().split(" ");
      const searchProp = [
        job.title,
        job.description,
        job.company.name,
        job.company.state,
        job.company.location,
        job.company.zipCode,
      ]
        .join(" ")
        .toLowerCase();

      return s.every((term) => searchProp.includes(term));
    });
  }

  // sort by geocode
  if (query.geoCodeLat && query.geoCodeLng) {
    filteredJobs = sortByDistance(
      query.geoCodeLat,
      query.geoCodeLng,
      filteredJobs
    );
  }

  return filteredJobs;
}

function sliceJobs(jobs = [], limit = 25, offset = 0) {
  return jobs.slice(offset, offset + limit);
}

function sortByDistance(geoCodeLat, geoCodeLng, jobs) {
  return jobs.sort((a, b) => {
    return (
      calcDistance(
        a.company.geoCodeLat,
        a.company.geoCodeLng,
        geoCodeLat,
        geoCodeLng
      ) -
      calcDistance(
        b.company.geoCodeLat,
        b.company.geoCodeLng,
        geoCodeLat,
        geoCodeLng
      )
    );
  });
}

function calcDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres

  return d;
}
