const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  GET /api/coupons/coupon-by-promotion-code
// #desc:   Fetch valid stripe coupon from promotion-code
// #access: Private
router.get("/coupon-by-promotion-code", verifyToken, async (req, res) => {
  try {
    const { code, product } = req.query;

    if (!code) {
      throw new Error("Kein Aktionscode eingegeben.");
    }

    const promotionCodes = await stripe.promotionCodes.list({
      code,
      active: true,
      expand: ["data.coupon.applies_to"],
    });

    if (!promotionCodes.data || promotionCodes.data.length === 0) {
      throw new Error("Aktionscode ist nicht gültig.");
    }

    const coupon = promotionCodes.data[0].coupon;

    if (coupon.applies_to && !coupon.applies_to.products.includes(product)) {
      throw new Error("Aktionscode ist nur auf bestimmte Produkte anwendbar.");
    }

    res.json({ coupon });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
