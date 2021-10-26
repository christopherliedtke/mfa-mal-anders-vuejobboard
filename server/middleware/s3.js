const aws = require("aws-sdk");
const fs = require("fs");

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
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
      Bucket: process.env.S3_BUCKET,
      ACL: "public-read",
      Key: filename,
      Body: fs.createReadStream(path),
      ContentType: mimetype,
      ContentLength: size,
      CacheControl: "max-age=604800",
    })
    .promise();

  promise
    .then(() => {
      fs.unlink(path, () => {});
      next();
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports.delete = filename => {
  return s3
    .deleteObject({
      Bucket: process.env.S3_BUCKET,
      Key: filename,
    })
    .promise();
};
