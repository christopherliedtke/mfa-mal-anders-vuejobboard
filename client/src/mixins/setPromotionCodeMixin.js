export const setPromotionCodeMixin = {
  mounted() {
    this.setPromotionCode();
  },
  methods: {
    async setPromotionCode() {
      if (this.$route.query.promotion) {
        const response = await this.$axios.get(
          "/api/coupons/retrieve/coupon-by-promotion-code",
          { params: { code: this.$route.query.promotion } }
        );

        if (response.data.coupon) {
          const coupon = response.data.coupon;
          localStorage.setItem("promotionCode", coupon.code);

          const h = this.$createElement;
          const vNodesMsg = h("p", { class: ["mb-0"] }, [
            "Der Aktionscode ist auf diesem Gerät für Sie hinterlegt und kann bei der Veröffentlichung Ihrer Stellenanzeige eingelöst werden.",
            h("br"),
            h(
              "small",
              {
                style: [
                  {
                    "line-height": "1.4em",
                    "display": "block",
                    "margin-top": "0.4rem"
                  }
                ]
              },
              `* ${[
                coupon.percent_off
                  ? coupon.percent_off + "% Rabatt auf Ihre Stellenanzeige"
                  : "",
                coupon.amount_off
                  ? coupon.amount_off + "€ Rabatt auf Ihre Stellenanzeige"
                  : "",
                coupon.refreshFrequency
                  ? "Datumsaktualisierung alle " +
                    coupon.refreshFrequency +
                    " Tage"
                  : "",
                coupon.duration == "once" ? "einmalig einlösbar" : "",
                coupon.restrictions.first_time_transaction
                  ? "nur für Neukunden einlösbar"
                  : "",
                coupon.restrictions.minimum_amount
                  ? (coupon.restrictions.minimum_amount / 100)
                      .toFixed(2)
                      .toString()
                      .replace(".", ",") + "€ Mindestbestellwert"
                  : "",
                coupon.applies_to
                  ? "anwendbar auf Stellenpaket " +
                    coupon.applies_to.join(" & ")
                  : ""
              ]
                .filter(x => x)
                .join(", ")}`
            )
          ]);

          this.$root.$bvToast.toast([vNodesMsg], {
            title: `Aktionscode ${localStorage.getItem(
              "promotionCode"
            )}* hinterlegt`,
            variant: "info",
            toaster: "b-toaster-top-right",
            solid: false,
            noAutoHide: true
          });
        }
      }
    }
  }
};
