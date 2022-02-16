const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  GET /api/coupons/promotion-code
// #desc:   Fetch stripe coupon from promotion-code
// #access: Private
router.get("/promotion-code", verifyToken, async (req, res) => {
  try {
    const { code } = req.query;

    // console.log(code);

    if (!code) {
      throw new Error("Kein Promotion Code eingegeben.");
    }

    const promotionCodes = await stripe.promotionCodes.list({ code });

    if (!promotionCodes) {
      throw new Error("Promotion Code wurde nicht gefunden.");
    }

    const coupon = promotionCodes.data[0].coupon;

    res.json({ coupon });
  } catch (err) {
    // console.error("err: ", err);

    res.json({ error: err });
  }
});

module.exports = router;
