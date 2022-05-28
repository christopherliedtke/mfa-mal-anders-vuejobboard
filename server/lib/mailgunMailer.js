const mg = require("mailgun-js")({
  apiKey: process.env.MG_API_KEY,
  domain: process.env.MG_DOMAIN,
  host: "api.eu.mailgun.net",
});

module.exports = mg;
