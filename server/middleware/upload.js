const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");

const diskStorage = multer.diskStorage({
  // destination: function (req, file, callback) {
  //     callback(null, __dirname + "/../../uploads");
  // },
  destination: __dirname + "/../uploads",
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
  fileFilter: function (req, file, cb) {
    if (file.mimetype != "image/png" && file.mimetype != "image/jpeg") {
      return cb(new Error(`Wrong mimeType in multer(): ${file.mimetype}`));
    }

    return cb(null, true);
  },
}).single("file");

const upload = (req, res, next) => {
  uploader(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("Multer error occured in multer(): ", err.code);
      res.json({ success: false });
    } else if (err) {
      console.log("Unknown/Custom error occured in multer()", err.message);
      res.json({ success: false });
    } else {
      next();
    }
  });
};

module.exports = upload;
