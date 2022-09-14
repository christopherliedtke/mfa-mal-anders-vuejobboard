const axios = require("axios");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/verifyToken");

// #route:  GET /api/analytics/get-page-views
// #desc:   Get page views from matomo
// #access: Admin
router.get("/get-data", verifyToken, isAdmin, async (req, res) => {
  try {
    // console.log(req.query);
    const { day, date, period, segment, method, idGoal } = req.query;

    const response = await axios.get(`${process.env.MATOMO_URL}`, {
      params: {
        token_auth: process.env.MATOMO_TOKEN,
        module: "API",
        method,
        idGoal,
        idSite: "1",
        format: "json",
        day,
        date,
        period,
        segment,
      },
    });
    // console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error("Error in /analytics/get-data: ", error);
    res.sendStatus(500);
  }
});

module.exports = router;
