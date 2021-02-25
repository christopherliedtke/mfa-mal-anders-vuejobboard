const axios = require("axios");

const recachePrerender = (url) => {
    if (process.env.PRERENDER_ACTIVE === "on") {
        axios.post("https://api.prerender.io/recache", {
            prerenderToken: process.env.PRERENDER_TOKEN,
            url: url,
        });
    }
};

module.exports = recachePrerender;
