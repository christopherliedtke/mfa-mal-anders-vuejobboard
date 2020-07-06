const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");
const s3 = require("../utils/s3");
const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");
const sharpImg = require("../utils/middleware/sharpImg");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("../utils/secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/../uploads");
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
});

// #route:  POST /api/images/upload
// #desc:   upload image to AWS
// #access: Private
router.use(
    "/upload",
    authenticateToken,
    uploader.single("file"),
    sharpImg,
    s3.upload,
    (req, res) => {
        const url = secrets.S3_URL + req.file.filename;
        res.json({ success: true, url });
    }
);

// #route:  POST /api/images/delete
// #desc:   delete image from AWS
// #access: Private
router.use("/delete", authenticateToken, async (req, res) => {
    const fileName = req.body.imageUrl.split("/").slice(-1).join("");
    try {
        await s3.delete(fileName);
        res.json({ success: true });
    } catch (err) {
        console.log(
            "Error on s3.delete() on POST to /api/images/delete: ",
            err
        );
        res.json({ success: false });
    }
});

module.exports = router;
