const fs = require("fs");
const axios = require("axios");
const CronJob = require("cron").CronJob;
const config = require("../config/config");
const pagesSitemap = require("../config/sitemap.json");
const { Job } = require("../database/models/job");

async function createSitemap() {
    try {
        console.log("createSitemap() running...");
        const head = writeHead();
        const foot = writeFoot();

        const lastBuild = getFileUpdatedDate(
            __dirname + "/../public/index.html"
        );

        const root = writeUrl(process.env.WEBSITE_URL + "/", lastBuild);
        const pages = pagesSitemap
            .map((elem) => writeUrl(process.env.WEBSITE_URL + elem, lastBuild))
            .join(" ");

        const articles = await getArticles();
        const trainings = await getTrainings();
        const jobs = await getJobs();

        const sitemap =
            head + root + pages + articles + trainings + jobs + foot;

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
                .map((elem) =>
                    writeUrl(
                        process.env.WEBSITE_URL + "/blog/article/" + elem.slug,
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
                .map((elem) =>
                    writeUrl(
                        process.env.WEBSITE_URL +
                            "/karriere/fort-und-weiterbildungen/" +
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
            "_id updatedAt"
        );

        if (Array.isArray(response) && response.length > 0) {
            return response
                .map((elem) =>
                    writeUrl(
                        process.env.WEBSITE_URL +
                            "/stellenangebote/job/" +
                            elem._id,
                        new Date(elem.updatedAt).toISOString()
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

function writeUrl(url, lastmod = new Date().toISOString()) {
    return `
        <url>
            <loc>${url}</loc>
            <lastmod>${lastmod}</lastmod>
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
