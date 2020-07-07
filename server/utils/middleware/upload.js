const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/../../uploads");
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    },
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 5242880,
    },
}).single("file");

const upload = (req, res, next) => {
    uploader(req, res, function (err) {
        if (err) {
            console.log("Error in multer - err.code: ", err.code);
            res.json({ success: false });
        } else {
            next();
        }
    });
};

module.exports = upload;
