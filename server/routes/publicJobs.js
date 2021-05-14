const express = require("express");
const router = express.Router();
const internalJobsCache = require("../cache/internalJobsCache");

// #route:  GET /api/public-jobs
// #desc:   Fetch public jobs
// #access: Public
router.get("/", async (req, res) => {
  const { query } = req;
  console.log("query: ", query);

  let jobs = await internalJobsCache.get("jobs");

  jobs = filterJobs(jobs, query);
  jobs = sliceJobs(jobs, query.limit || undefined, query.offset || undefined);

  res.json({ count: jobs.length, jobs });
});

module.exports = router;

function filterJobs(
  jobs,
  query
  //   s = "",
  //   location = "",
  //   state = "",
  //   employmentType = "",
  //   profession = "",
  //   specialization = ""
) {
  let filteredJobs = [...jobs];

  //   filter profession
  if (query.profession) {
    filteredJobs = filteredJobs.filter(
      (job) => job.profession.toLowerCase() === query.profession.toLowerCase()
    );
  }

  //   filter employmentType
  if (query.employmentType) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.employmentType.toLowerCase() === query.employmentType.toLowerCase()
    );
  }

  //   filter location
  if (query.location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.company.location.toLowerCase().includes(query.location.toLowerCase())
    );
  }

  //   filter state
  if (query.state) {
    filteredJobs = filteredJobs.filter(
      (job) => job.company.state.toLowerCase() === query.state.toLowerCase()
    );
  }

  //   filter specialization
  if (query.specialization) {
    filteredJobs = filteredJobs.filter((job) =>
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

  return filteredJobs;
}

function sliceJobs(jobs = [], limit = 25, offset = 0) {
  return jobs.slice(offset, offset + limit);
}
