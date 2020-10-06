const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    console.log("req.session: ", req.session);
    const token = req.session.token;
    console.log("token: ", token);

    jwt.verify(token, res.locals.secrets.JWT_SECRET, (err, user) => {
        if (err || user.userStatus != "active") {
            console.log("Error on jwt.verify(): ", err);
            console.log("user.userStatus: ", user.userStatus);

            res.sendStatus(401);
        } else {
            req.userId = user.userId;
            req.userRole = user.userRole;
            req.userStatus = user.userStatus;

            next();
        }
    });
};

module.exports = authenticateToken;
