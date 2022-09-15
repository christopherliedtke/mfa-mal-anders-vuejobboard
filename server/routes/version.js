const express = require("express");
const router = express.Router();

// #route:  POST /api/version/check
// #desc:   Check client version againt current version
// #access: Public
router.post("/check", (req, res) => {
  const { clientVersion } = req.body;
  const serverVersion = require("../../client/package.json").version;

  let checkPassed = true;

  if (
    typeof clientVersion === "string" &&
    typeof serverVersion === "string" &&
    clientVersion != serverVersion
  ) {
    checkPassed = false;
  }

  res.json({ checkPassed });
});

module.exports = router;
