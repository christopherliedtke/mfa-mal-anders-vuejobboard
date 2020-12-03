const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.session.token;

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            // console.log("req.url: ", req.url);
            // console.log("Error on jwt.verify(): ", err);
            req.user = false;
        } else {
            req.user = data.user;
        }

        next();
    });
};

module.exports = authenticateToken;
