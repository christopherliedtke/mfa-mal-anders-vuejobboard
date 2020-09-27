const redirects = require("../redirects.json");
const config = require("../config.json");

const redirect = (req, res, next) => {
    let foundRedirect = false;

    redirects.forEach((redirect) => {
        if (req.originalUrl.startsWith(redirect.old)) {
            res.redirect(301, config.website.url + redirect.new);
            foundRedirect = true;
            console.log(
                `Redirected from ${req.originalUrl} to ${
                    config.website.url + redirect.new
                }`
            );

            return;
        }
    });

    if (!foundRedirect) {
        next();
    }
};

module.exports = redirect;
