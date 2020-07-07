const aws = require("aws-sdk");
const fs = require("fs");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("../secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

const s3 = new aws.S3({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
});

module.exports.upload = function (req, res, next) {
    if (!req.file) {
        console.log("Multer did not work");
        res.sendStatus(500);
        return;
    }

    const { filename, mimetype, size, path } = req.file;

    const promise = s3
        .putObject({
            Bucket: secrets.S3_BUCKET,
            ACL: "public-read",
            Key: filename,
            Body: fs.createReadStream(path),
            ContentType: mimetype,
            ContentLength: size,
        })
        .promise();

    promise
        .then(() => {
            fs.unlink(path, () => {});
            next();
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
};

module.exports.delete = (filename) => {
    return s3
        .deleteObject({
            Bucket: secrets.S3_BUCKET,
            Key: filename,
        })
        .promise();
};
