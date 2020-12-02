const isAdmin = (req, res, next) => {
    if (req.user.role != "admin") {
        res.sendStatus(401);
    } else {
        next();
    }
};

module.exports = isAdmin;
