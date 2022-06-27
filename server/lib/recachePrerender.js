const axios = require("axios");

const recachePrerender = url => {
  if (process.env.PRERENDER_ACTIVE === "on") {
    try {
      axios.post("https://api.prerender.io/recache", {
        prerenderToken: process.env.PRERENDER_TOKEN,
        url: url,
      });
    } catch (error) {
      console.error("Error on recachePrerender(): ", error);
    }
  }
};

module.exports = recachePrerender;
