const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("/server/public/index.html");
});

module.exports = router;
