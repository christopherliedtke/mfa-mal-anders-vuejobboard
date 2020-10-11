const fs = require("fs");
const axios = require("axios");
const CronJob = require("cron").CronJob;
const config = require("../utils/config");
const pagesSitemap = require("../utils/sitemap.json");
const { Job } = require("../utils/models/job");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("./secrets");
}

const getArticles = () =>
    new Promise(async (resolve, reject) => {
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

            resolve(response.data.data.posts.nodes);
        } catch (err) {
            console.log("Error on getArticles() for sitemap: ", err);
            reject(err);
        }
    });

const getTrainings = () =>
    new Promise(async (resolve, reject) => {
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

            resolve(response.data.data.weiterbildungen.nodes);
        } catch (err) {
            console.log("Error on getTrainings() for sitemap: ", err);
            reject(err);
        }
    });

const getJobs = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await Job.find(
                {
                    status: "published",
                    paid: true,
                    paidExpiresAt: {
                        $gte: new Date(),
                    },
                    applicationDeadline: {
                        $gte: new Date(
                            new Date().valueOf() - 1000 * 60 * 60 * 24
                        ).toISOString(),
                    },
                },
                "_id updatedAt"
            );

            resolve(response);
        } catch (err) {
            console.log("Error on getTrainings() for sitemap: ", err);
            reject(err);
        }
    });

async function createSitemap() {
    try {
        console.log("createSitemap() running...");
        const head = writeHead();
        const foot = writeFoot();

        const lastBuild = getFileUpdatedDate(
            __dirname + "/../public/index.html"
        );

        const root = writeUrl(secrets.WEBSITE_URL + "/", lastBuild);
        const pages = pagesSitemap
            .map((elem) => writeUrl(secrets.WEBSITE_URL + elem, lastBuild))
            .join(" ");

        const articles = await new Promise(async (resolve, reject) => {
            const response = await getArticles();

            if (Array.isArray(response) && response.length > 0) {
                resolve(
                    response
                        .map((elem) =>
                            writeUrl(
                                secrets.WEBSITE_URL + "/article/" + elem.slug,
                                elem.modifiedGmt
                            )
                        )
                        .join(" ")
                );
            } else {
                resolve("");
            }
        });

        const trainings = await new Promise(async (resolve, reject) => {
            const response = await getTrainings();

            if (Array.isArray(response) && response.length > 0) {
                resolve(
                    response
                        .map((elem) =>
                            writeUrl(
                                secrets.WEBSITE_URL +
                                    "/page/mfa-career/fort-und-weiterbildungen/" +
                                    elem.slug,
                                new Date(elem.modifiedGmt).toISOString()
                            )
                        )
                        .join(" ")
                );
            } else {
                resolve("");
            }
        });

        const jobs = await new Promise(async (resolve, reject) => {
            const response = await getJobs();

            if (Array.isArray(response) && response.length > 0) {
                resolve(
                    response
                        .map((elem) =>
                            writeUrl(
                                secrets.WEBSITE_URL +
                                    "/jobboard/job/" +
                                    elem._id,
                                new Date(elem.updatedAt).toISOString()
                            )
                        )
                        .join(" ")
                );
            } else {
                resolve("");
            }
        });

        const sitemap =
            head + root + pages + articles + trainings + jobs + foot;

        saveSitemap(__dirname + "/../public/sitemap.xml", sitemap);
    } catch (error) {
        console.log("Error on createSitemap CRON: ", error);
    }
}

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
    true // run on init
);
