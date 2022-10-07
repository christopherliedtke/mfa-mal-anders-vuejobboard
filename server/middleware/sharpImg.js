const fs = require("fs");
const sharp = require("sharp");

const sharpImg = async (req, res, next) => {
  const { filename, path } = req.file;

  if (!req.file) {
    console.log("Multer did not work");
    res.sendStatus(500);
    return;
  }

  try {
    const newWidth = parseInt(req.body.width) || 1920;
    const newHeight = parseInt(req.body.height) || 1200;
    const newFit = req.body.fit || "inside";
    const newFilename = `${newWidth}x${newHeight}_${filename}`;
    const newPath = __dirname + "/../uploads/" + newFilename;

    await sharp(path)
      .resize({ width: newWidth, height: newHeight, fit: newFit })
      .toFile(newPath);

    fs.unlink(path, () => {});

    req.file.filename = newFilename;
    req.file.size = fs.statSync(newPath).size;
    req.file.path = newPath;

    next();
  } catch (err) {
    console.log("Error on sharpImg(): ", err);
    res.sendStatus(500);
  }
};

module.exports = sharpImg;
