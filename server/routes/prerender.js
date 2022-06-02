const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const recachePrerender = require("../lib/recachePrerender");

// #route:  GET /api/prerender/recache
// #desc:   recache page with prerender
// #access: Admin
router.post("/recache", verifyToken, async (req, res) => {
  if (process.env.NODE_ENV === "production" && !req.user.isAdmin) {
    res.json({ success: false });
  }

  console.log(req.body.url);

  recachePrerender(req.body.url);

  res.json({ success: true });
});

module.exports = router;
