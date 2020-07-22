const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");

router.use("/create-payment-intent", authenticateToken, async (req, res) => {
    //
});

module.exports = router;
