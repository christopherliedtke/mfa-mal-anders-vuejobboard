const config = require("../config/config");
const axios = require("axios");

const recachePrerender = (url) => {
    if (
        config.prerender.active &&
        process.env.NODE_ENV == "production" &&
        process.env.WEBSITE_URL === "https://www.mfa-mal-anders.de"
    ) {
        axios.post("https://api.prerender.io/recache", {
            prerenderToken: process.env.PRERENDER_TOKEN,
            url: url,
        });
    }
};

module.exports = recachePrerender;
