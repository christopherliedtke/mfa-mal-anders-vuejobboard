// const path = require("path");
const fs = require("fs");

const GoogleDriveService = require("./googleDriveService");

const driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID || "";
const driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET || "";
const driveRedirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI || "";
const driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN || "";

const saveInvoiceToGDrive = async (filePath, fileName) => {
  try {
    const parentFolderId = "1IFPRU4FP0I03KwkpS-oIFVQ-fttM3HMl";
    const folderName =
      new Date().getFullYear().toString() +
      (process.env.NODE_ENV === "development" ? "_test" : "");

    const googleDriveService = new GoogleDriveService(
      driveClientId,
      driveClientSecret,
      driveRedirectUri,
      driveRefreshToken
    );

    if (!fs.existsSync(filePath)) {
      throw new Error("File not found!");
    }

    let folder = await googleDriveService
      .searchFolder(folderName, parentFolderId)
      .catch(error => {
        console.error(error);
        return null;
      });

    if (!folder) {
      folder = await googleDriveService.createFolder(
        folderName,
        parentFolderId
      );
    }

    await googleDriveService
      .saveFile(fileName, filePath, "application/pdf", folder.id)
      .catch(error => {
        console.error(error);
      });

    console.info("File uploaded successfully!");
  } catch (err) {
    console.error("Error on saveInvoiceToGDrive(): ", err);
  } finally {
    return;
  }
};

module.exports = saveInvoiceToGDrive;
