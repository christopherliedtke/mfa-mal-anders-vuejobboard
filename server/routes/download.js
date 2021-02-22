const express = require("express");
const router = express.Router();
const path = require("path");

// #route:  GET /api/download/public/bewerbungsunterlagen
// #desc:   download application documents
// #access: Public
router.get("/public/bewerbungsunterlagen", (req, res) => {
    // res.setHeader("content-type", "application/zip");
    // res.sendFile(path.join(__dirname, "../downloads/Bewerbungsunterlagen.zip"));

    res.download(path.join(__dirname, "../downloads/Bewerbungsunterlagen.zip"));
});

// #route:  GET /api/download/public/tipps-fuer-stellenanzeigen_mfa-mal-anders
// #desc:   download job ad tipps documents
// #access: Public
router.get("/public/tipps-fuer-stellenanzeigen_mfa-mal-anders", (req, res) => {
    // res.setHeader("content-type", "application/pdf");
    // res.sendFile(
    //     path.join(
    //         __dirname,
    //         "../downloads/Tipps-fuer-Stellenanzeigen_MFA-mal-anders.pdf"
    //     )
    // );

    res.download(
        path.join(
            __dirname,
            "../downloads/Tipps-fuer-Stellenanzeigen_MFA-mal-anders.pdf"
        )
    );
});

module.exports = router;
