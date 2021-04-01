const redirects = require("../config/redirects.json");

const redirect = (req, res, next) => {
    let foundRedirect = false;

    redirects.forEach((redirect) => {
        if (
            req.originalUrl.toLowerCase() === redirect.old.toLowerCase() ||
            req.originalUrl.toLowerCase() === redirect.old.toLowerCase() + "/"
        ) {
            res.redirect(301, redirect.new);
            foundRedirect = true;
            console.log(
                `Redirected from ${req.originalUrl} to ${redirect.new} with statusCode 301`
            );

            return;
        }
    });

    if (!foundRedirect) {
        next();
    }
};

module.exports = redirect;
