const fs = require("fs");
const axios = require("axios");
const CronJob = require("cron").CronJob;
const config = require("../config/config");
const pagesSitemap = require("../config/sitemap.json");
const { Job } = require("../database/models/job");
const { Company } = require("../database/models/company");
const { Training } = require("../database/models/training");

async function createSitemap() {
  try {
    console.log("createSitemap() running...");
    const head = writeHead();
    const foot = writeFoot();

    const lastBuild = getFileUpdatedDate(__dirname + "/../public/index.html");

    const root = writeUrl(process.env.WEBSITE_URL + "/", lastBuild);
    const pages = pagesSitemap
      .map(elem => writeUrl(process.env.WEBSITE_URL + elem, lastBuild))
      .join(" ");

    const articles = await getArticles();
    const trainings = await getTrainings();
    const professions = await getProfessions();
    const jobs = await getJobs();
    const jobboardStates = await getJobboardStates();
    const jobboardLocations = await getJobboardLocations();
    const jobboardProfessions = await getJobboardProfessions();
    const companies = await getCompanies();
    const trainingEvents = await getTrainingEvents();

    const sitemap =
      head +
      root +
      pages +
      articles +
      trainings +
      professions +
      jobs +
      jobboardStates +
      jobboardLocations +
      jobboardProfessions +
      companies +
      trainingEvents +
      foot;

    saveSitemap(__dirname + "/../public/sitemap.xml", sitemap);
  } catch (error) {
    console.log("Error on createSitemap CRON: ", error);
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

    if (Array.isArray(response) && response.length > 0) {
      return response
        .map(elem =>
          writeUrl(
            process.env.WEBSITE_URL +
              "/stellenangebote/job/" +
              elem._id +
              "/" +
              elem.slug,
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
    const states =
      require("../../client/src/config/formDataConfig.json").companyStateOptions;
    return states
      .map(state =>
        writeUrl(
          process.env.WEBSITE_URL +
            "/stellenangebote/ort/" +
            state.toLowerCase(),
          undefined,
          "daily",
          0.8
        )
      )
      .join(" ");
  } catch (err) {
    console.log("Error on getJobboardStates() in createSitemap: ", err);
    return "";
  }
};

const getJobboardLocations = async () => {
  try {
    const jobs = await Job.find({}, "company").populate("company");

    const locations = [...new Set(jobs.map(job => job.company.location))];

    return locations
      .map(location =>
        writeUrl(
          process.env.WEBSITE_URL +
            "/stellenangebote/ort/" +
            location.toLowerCase(),
          undefined,
          "daily",
          0.8
        )
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
        writeUrl(
          process.env.WEBSITE_URL +
            "/stellenangebote?profession=" +
            profession.value
        )
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
      {},
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
    console.log("Error on getCompanies() in createSitemap: ", err);
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

function saveSitemap(filename, data) {
  fs.writeFileSync(filename, data);
}

module.exports.createSitemap = new CronJob(
  config.sitemap.interval,
  function () {
    createSitemap();
  },
  null, // onComplete
  false, // start directly
  "Europe/Berlin", // timezone
  null, // context
  config.sitemap.active // run on init
);
