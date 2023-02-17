const axios = require("axios");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/verifyToken");
const { google } = require("googleapis");

// #route:  GET /api/analytics/get-data
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

// #route:  GET /api/analytics/ga4/get-page-views
// #desc:   Get page views from matomo
// #access: Admin
// router.get("/ga4/get-page-views", verifyToken, isAdmin, async (req, res) => {
//   try {
//     console.log(req.query);
//     const { pageUrlStartingString, startDate, endDate } = req.query;

//     const jwtClient = new google.auth.JWT(
//       process.env.GOOGLE_API_CLIENT_EMAIL,
//       null,
//       process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/gm, "\n"),
//       ["https://www.googleapis.com/auth/analytics.readonly"],
//       null
//     );
//     const token = await jwtClient.authorize();

//     const analytics = google.analyticsdata({
//       version: "v1beta",
//       auth: jwtClient,
//       headers: {
//         Authorization: `Bearer ${token.access_token}`,
//       },
//     });

//     const [response] = await analytics.properties.runReport({
//       property: "properties/" + process.env.GOOGLE_ANALYTICS_PROPERTY_ID, // Replace with your Google Analytics 4 property ID
//       dateRanges: [
//         {
//           startDate: startDate,
//           endDate: endDate,
//         },
//       ],
//       dimensions: [
//         {
//           name: "pagePath",
//         },
//       ],
//       metrics: [
//         {
//           name: "screenPageViews",
//         },
//       ],
//       dimensionFilter: {
//         filter: {
//           stringFilter: {
//             value: pageUrlStartingString,
//             matchType: "BEGINS_WITH",
//             dimensionName: "pagePath",
//           },
//         },
//       },
//     });

//     let pageviews = 0;
//     response.rows[0].metrics[0].values.forEach(value => {
//       pageviews += parseInt(value);
//     });

//     console.log(
//       "Pageviews for pages starting with " +
//         pageUrlStartingString +
//         ": " +
//         pageviews
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error in /analytics/ga4/get-page-views: ", error);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
