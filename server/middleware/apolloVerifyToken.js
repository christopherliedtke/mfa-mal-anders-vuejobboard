const jwt = require("jsonwebtoken");

const apolloVerifyToken = (token) => {
    let user = null;

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            user = null;
        } else {
            user = data.user;
        }
    });

    return user;
};

module.exports = apolloVerifyToken;
