const redirects = require("../config/redirects.json");

const redirect = (req, res, next) => {
  // console.time("checkRedirect");
  const foundRedirect = redirects.find(
    redirect =>
      req.originalUrl.toLowerCase() === redirect.old.toLowerCase() ||
      req.originalUrl.toLowerCase() === redirect.old.toLowerCase() + "/"
  );

  if (foundRedirect) {
    // console.info(
    //     `Redirecting from ${req.originalUrl} to ${foundRedirect.new} with statusCode 301`
    // );
    res.redirect(301, foundRedirect.new);
  } else {
    next();
    // console.timeEnd("checkRedirect");
  }
};

module.exports = redirect;
