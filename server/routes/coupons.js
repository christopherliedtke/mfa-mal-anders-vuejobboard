const express = require("express");
const { User } = require("../database/models/user");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const stripe = require("stripe")(process.env.STRIPE_SK);

// #route:  GET /api/coupons/validate/coupon-by-promotion-code
// #desc:   Fetch valid stripe coupon from promotion-code
// #access: Private
router.get(
  "/validate/coupon-by-promotion-code",
  verifyToken,
  async (req, res) => {
    try {
      const { code, product, price } = req.query;

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

      // todo check promotion code for first_time_transaction && promotionCodes.data[0].coupon.duration === "once" && check promotion code for restricted to customer
      if (
        promotionCodes.data[0].customer ||
        promotionCodes.data[0].restrictions.first_time_transaction ||
        promotionCodes.data[0].coupon.duration === "once"
      ) {
        const user = await User.findOne(
          { _id: req.user._id },
          "_id stripeCustomerId"
        );

        if (promotionCodes.data[0].customer) {
          if (promotionCodes.data[0].customer != user.stripeCustomerId) {
            throw new Error("Aktionscode ist nicht gültig.");
          }
        }

        if (user.stripeCustomerId) {
          const invoices = await stripe.invoices.list({
            customer: user.stripeCustomerId,
            expand: ["data.discounts"],
          });

          if (
            promotionCodes.data[0].restrictions.first_time_transaction &&
            invoices.data.length > 0
          ) {
            throw new Error(
              "Aktionscode ist nur auf Erstbestellung von Neukunden anwendbar."
            );
          }

          if (promotionCodes.data[0].coupon.duration === "once") {
            const usedCoupons = invoices.data
              .map(invoice => invoice.discounts)
              .flat()
              .map(discount => discount.coupon.id);

            if (
              usedCoupons.some(
                usedCoupon => usedCoupon == promotionCodes.data[0].coupon.id
              )
            ) {
              throw new Error(
                "Aktionscode ist nur einmalig pro Kunde einlösbar und wurde bereits verwendet."
              );
            }
          }
        }
      }

      // todo check promotion code for minimum_amount
      if (promotionCodes.data[0].restrictions.minimum_amount) {
        if (
          promotionCodes.data[0].restrictions.minimum_amount > parseInt(price)
        ) {
          throw new Error(
            `Aktionscode ist ab einem Mindestbestellwert von ${(
              promotionCodes.data[0].restrictions.minimum_amount / 100
            )
              .toFixed(2)
              .toString()
              .replace(".", ",")}€ einlösbar.`
          );
        }
      }

      const coupon = promotionCodes.data[0].coupon;

      if (coupon.applies_to && !coupon.applies_to.products.includes(product)) {
        throw new Error(
          "Aktionscode ist nur auf bestimmte Produkte anwendbar."
        );
      }

      res.json({ coupon });
    } catch (error) {
      res.json({ error: error.message });
    }
  }
);

module.exports = router;
