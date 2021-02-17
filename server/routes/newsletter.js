const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");
const { sendNewsletter } = require("../middleware/sendNewsletter");

// #route:  POST /api/newsletter/send
// #desc:   Send newsletter
// #access: Admin
router.post("/send", verifyToken, isAdmin, async (req, res) => {
    const success = await sendNewsletter(req.body.daysBack);
    res.json(success);
});

module.exports = router;
