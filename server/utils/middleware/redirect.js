const redirects = require("../redirects.json");
// const config = require("../config.json");

const redirect = (req, res, next) => {
    let foundRedirect = false;

    redirects.forEach((redirect) => {
        if (
            req.originalUrl === redirect.old ||
            req.originalUrl === redirect.old + "/"
        ) {
            res.redirect(redirect.statusCode, redirect.new);
            foundRedirect = true;
            console.log(
                `Redirected from ${req.originalUrl} to ${redirect.new} with statusCode ${redirect.statusCode}`
            );

            return;
        }
    });

    if (!foundRedirect) {
        next();
    }
};

module.exports = redirect;
