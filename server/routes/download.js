const express = require("express");
const router = express.Router();
const path = require("path");
// const authenticateToken = require("../utils/middleware/checkAuth");

// #route:  GET /api/download/public/bewerbungsunterlagen
// #desc:   download application documents
// #access: Public
router.get("/public/bewerbungsunterlagen", (req, res) => {
    res.setHeader("content-type", "application/zip");
    res.sendFile(path.join(__dirname, "../downloads/Bewerbungsunterlagen.zip"));
});

module.exports = router;
