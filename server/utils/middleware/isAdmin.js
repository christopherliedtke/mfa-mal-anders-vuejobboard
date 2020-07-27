const isAdmin = (req, res, next) => {
    if (req.userRole != "admin") {
        res.sendStatus(401);
    } else {
        next();
    }
};

module.exports = isAdmin;
