const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const upload = require("../middleware/upload");
const sharpImg = require("../middleware/sharpImg");
const s3 = require("../middleware/s3");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("../config/secrets.json"); // in dev they are in secrets.json which is listed in .gitignore
}

// #route:  POST /api/images/upload
// #desc:   upload image to AWS
// #access: Private
router.use("/upload", verifyToken, upload, sharpImg, s3.upload, (req, res) => {
    const url = secrets.S3_URL + req.file.filename;
    res.json({ success: true, url });
});

// #route:  POST /api/images/delete
// #desc:   delete image from AWS
// #access: Private
router.use("/delete", verifyToken, async (req, res) => {
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
