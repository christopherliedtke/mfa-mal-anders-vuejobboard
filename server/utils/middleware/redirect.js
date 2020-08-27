const redirects = require("../redirects.json");
const config = require("../config.json");

const redirect = (req, res, next) => {
    let foundRedirect = false;

    redirects.forEach((redirect) => {
        if (req.originalUrl.includes(redirect.old)) {
            res.redirect(301, config.website.url + redirect.new);
            foundRedirect = true;
            console.log(`Redirected from ${redirect.old} to ${redirect.new}`);

            return;
        }
    });

    if (!foundRedirect) {
        next();
    }
};

module.exports = redirect;
