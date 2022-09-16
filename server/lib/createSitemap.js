const fs = require("fs");
const axios = require("axios");
const config = require("../config/config");
const pagesSitemap = require("../config/sitemap.json");
const textToSlug = require("./textToSlug");
const { Job } = require("../database/models/job");
const { Company } = require("../database/models/company");
const { Training } = require("../database/models/training");
const { JobSeek } = require("../database/models/jobSeek");
const jobLiftCache = require("../cache/jobliftCache");

async function createSitemap() {
  try {
    const head = writeHead();
    const foot = writeFoot();

    const lastBuild = getFileUpdatedDate(__dirname + "/../public/index.html");

    const root = writeUrl(process.env.WEBSITE_URL + "/", lastBuild);
    const pages = pagesSitemap
      .map(elem => writeUrl(process.env.WEBSITE_URL + elem, lastBuild))
      .join(" ");

    const dynamicPages = await Promise.all([
      getArticles(),
      getTrainings(),
      getProfessions(),
      getJobs(),
      getJobboardStates(),
      getJobboardLocations(),
      getJobboardProfessions(),
      getCompanies(),
      getTrainingEvents(),
      getJobSeeks(),
    ]);

    const sitemap = head + root + pages + dynamicPages.join("") + foot;

    return sitemap;
  } catch (error) {
    console.log("Error on createSitemap CRON: ", error);
    return "";
  }
}

const getArticles = async () => {
  try {
    const response = await axios.post(config.sitemap.cmsUrl, {
      query: `
                        query MyQuery {
                            posts(first: 100, where: {orderby: {field: MODIFIED, order: DESC}}) {
                                nodes {
                                    slug
                                    modifiedGmt
                                }
                            }
                        }
                    `,
    });

    if (
      Array.isArray(response.data.data.posts.nodes) &&
      response.data.data.posts.nodes.length > 0
    ) {
      return response.data.data.posts.nodes
        .map(elem =>
          writeUrl(
            process.env.WEBSITE_URL + "/blog/artikel/" + elem.slug,
            new Date(elem.modifiedGmt).toISOString()
          )
        )
        .join(" ");
    } else {
      return "";
    }
  } catch (err) {
    console.log("Error in getArticles() in createSitemap: ", err);
    return "";
  }
};

const getTrainings = async () => {
  try {
    const response = await axios.post(config.sitemap.cmsUrl, {
      query: `
                    query MyQuery {
                        weiterbildungen(first: 100, where: {orderby: {field: MODIFIED, order: ASC}}) {
                            nodes {
                                slug
                                modifiedGmt
                            }
                        }
                    }
                `,
    });

    if (
      Array.isArray(response.data.data.weiterbildungen.nodes) &&
      response.data.data.weiterbildungen.nodes.length > 0
    ) {
      return response.data.data.weiterbildungen.nodes
        .map(elem =>
          writeUrl(
            process.env.WEBSITE_URL +
              "/karriere/fort-und-weiterbildung/ueberblick/" +
              elem.slug,
            new Date(elem.modifiedGmt).toISOString()
          )
        )
        .join(" ");
    } else {
      return "";
    }
  } catch (err) {
    console.log("Error on getTrainings() in createSitemap: ", err);
    return "";
  }
};

const getProfessions = async () => {
  try {
    const response = await axios.post(config.sitemap.cmsUrl, {
      query: `
                    query MyQuery {
                        berufsbilder(first: 100, where: {orderby: {field: MODIFIED, order: ASC}}) {
                            nodes {
                                content
                                slug
                                modifiedGmt
                                berufsbildTypes {
                                    nodes {
                                        slug
                                    }
                                }
                            }
                        }
                    }
                `,
    });

    if (
      Array.isArray(response.data.data.berufsbilder.nodes) &&
      response.data.data.berufsbilder.nodes.length > 0
    ) {
      return response.data.data.berufsbilder.nodes
        .filter(elem => elem.content)
        .map(elem =>
          writeUrl(
            process.env.WEBSITE_URL +
              "/karriere/jobs-und-berufsbilder/" +
              elem.berufsbildTypes.nodes[0].slug +
              "/" +
              elem.slug,
            new Date(elem.modifiedGmt).toISOString()
          )
        )
        .join(" ");
    } else {
      return "";
    }
  } catch (err) {
    console.log("Error on getTrainings() in createSitemap: ", err);
    return "";
  }
};

const getJobs = async () => {
  try {
    const response = await Job.find(
      {
        status: "published",
        paid: true,
        paidExpiresAt: {
          $gte: new Date(),
        },
      },
      "_id updatedAt title slug"
    )
      .populate("company", "location")
      .populate("userId", "isAdmin");

    const jobliftJobs = await jobLiftCache.get("jobs");

    const jobs = [...response, ...jobliftJobs];

    if (Array.isArray(jobs) && jobs.length > 0) {
      return jobs
        .map(elem =>
          writeUrl(
            process.env.WEBSITE_URL + "/job/" + elem._id + "/" + elem.slug,
            new Date(elem.updatedAt).toISOString(),
            "weekly",
            0.8
          )
        )
        .join(" ");
    } else {
      return "";
    }
  } catch (err) {
    console.log("Error on getTrainings() in createSitemap: ", err);
    return "";
  }
};

const getJobboardStates = async () => {
  try {
    const professionOptions =
      require("../../client/src/config/formDataConfig.json").professionOptions;
    const states =
      require("../../client/src/config/formDataConfig.json").companyStateOptions;

    return professionOptions
      .map(profession =>
        states
          .map(state =>
            writeUrl(
              process.env.WEBSITE_URL +
                "/" +
                profession.value.toLowerCase() +
                "/" +
                textToSlug(state),
              undefined,
              "daily",
              0.8
            )
          )
          .join(" ")
      )
      .join(" ");
  } catch (err) {
    console.log("Error on getJobboardStates() in createSitemap: ", err);
    return "";
  }
};

const getJobboardLocations = async () => {
  try {
    const professionOptions =
      require("../../client/src/config/formDataConfig.json").professionOptions;
    const companies = await Company.find({}, "location");
    // const jobliftJobs = await jobLiftCache.get("jobs");

    let locations = companies.map(company => company.location);
    // .concat(jobliftJobs.map(job => job.company.location));

    locations = [...new Set(locations)];

    return professionOptions
      .map(profession =>
        locations
          .map(location =>
            writeUrl(
              process.env.WEBSITE_URL +
                "/" +
                profession.value.toLocaleLowerCase() +
                "/" +
                textToSlug(location),
              undefined,
              "daily",
              0.8
            )
          )
          .join(" ")
      )
      .join(" ");
  } catch (err) {
    console.log("Error on getJobboardLocations() in createSitemap: ", err);
    return "";
  }
};

const getJobboardProfessions = async () => {
  try {
    const professions =
      require("../../client/src/config/formDataConfig.json").professionOptions;
    return professions
      .map(profession =>
        writeUrl(process.env.WEBSITE_URL + "/" + profession.value.toLowerCase())
      )
      .join(" ");
  } catch (err) {
    console.log("Error on getJobboardProfessions() in createSitemap: ", err);
    return "";
  }
};

const getCompanies = async () => {
  try {
    const companies = await Company.find(
      {},
      "_id name location slug updatedAt"
    );

    return companies
      .map(company =>
        writeUrl(
          process.env.WEBSITE_URL +
            `/unternehmen/${company._id}/${company.slug}`,
          new Date(company.updatedAt).toISOString(),
          "weekly",
          0.8
        )
      )
      .join(" ");
  } catch (err) {
    console.log("Error on getCompanies() in createSitemap: ", err);
    return "";
  }
};

const getTrainingEvents = async () => {
  try {
    const trainingEvents = await Training.find(
      { published: true },
      "_id title company slug updatedAt"
    );

    return trainingEvents
      .map(trainingEvent =>
        writeUrl(
          process.env.WEBSITE_URL +
            `/karriere/fort-und-weiterbildung/fortbildungskatalog/${trainingEvent._id}/${trainingEvent.slug}`,
          new Date(trainingEvent.updatedAt).toISOString(),
          "weekly",
          0.5
        )
      )
      .join(" ");
  } catch (err) {
    console.log("Error on getTrainingEvents() in createSitemap: ", err);
    return "";
  }
};

const getJobSeeks = async () => {
  try {
    const jobSeeks = await JobSeek.find(
      { published: true },
      "_id title location slug updatedAt"
    );

    return jobSeeks
      .map(jobSeek =>
        writeUrl(
          process.env.WEBSITE_URL +
            `/stellengesuche/gesuch/${jobSeek._id}/${jobSeek.slug}`,
          new Date(jobSeek.updatedAt).toISOString(),
          "weekly",
          0.5
        )
      )
      .join(" ");
  } catch (err) {
    console.log("Error on getJobSeeks() in createSitemap: ", err);
    return "";
  }
};

function getFileUpdatedDate(path) {
  const stats = fs.statSync(path);
  return new Date(stats.mtime).toISOString();
}

function writeHead() {
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
}

function writeFoot() {
  return `</urlset>`;
}

function writeUrl(
  url,
  lastmod = new Date().toISOString(),
  changefreq = "monthly",
  priority = 0.5
) {
  return `
        <url>
            <loc>${url}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
        </url>
    `;
}

module.exports = createSitemap;
