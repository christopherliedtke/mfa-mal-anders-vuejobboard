const jwt = require("jsonwebtoken");

const apolloVerifyToken = (req) => {
    const token = req.session && req.session.token ? req.session.token : "";

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            req.user = false;
        } else {
            req.user = data.user;
        }
    });
};

module.exports = apolloVerifyToken;
