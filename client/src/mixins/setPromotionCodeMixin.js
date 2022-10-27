export const setPromotionCodeMixin = {
  mounted() {
    this.setPromotionCode();
  },
  data() {
    return {
      coupon: null
    };
  },
  computed: {
    conditions() {
      return [
        this.coupon.duration == "once" ? "einmalig einlösbar" : "",
        this.coupon.restrictions.first_time_transaction
          ? "nur für Neukunden einlösbar"
          : "",
        this.coupon.restrictions.minimum_amount
          ? (this.coupon.restrictions.minimum_amount / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",") + "€ Mindestbestellwert"
          : "",
        this.coupon.redeem_by || this.coupon.expires_at
          ? "gültig bis " +
            new Date(
              (this.coupon.redeem_by || this.coupon.expires_at) * 1000
            ).toLocaleDateString()
          : "",
        this.coupon.applies_to
          ? "anwendbar auf Stellenpaket " + this.coupon.applies_to.join(" & ")
          : ""
      ]
        .filter(x => x)
        .join(", ");
    }
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

          this.coupon = coupon;

          const h = this.$createElement;
          const vNodesMsg = h("p", { class: ["mb-0"] }, [
            `Sie erhalten ${[
              coupon.percent_off ? coupon.percent_off + "% Rabatt" : "",
              coupon.amount_off
                ? (coupon.amount_off / 100)
                    .toFixed(2)
                    .toString()
                    .replace(".", ",") + "€ Rabatt"
                : "",
              coupon.refreshFrequency
                ? "eine Datumsaktualisierung alle " +
                  coupon.refreshFrequency +
                  " Tage"
                : ""
            ]
              .filter(x => x)
              .join(" & ")} bei der Veröffentlichung Ihrer Stellenanzeige.`,
            h("br"),
            "Der Aktionscode ist auf diesem Gerät für Sie hinterlegt und kann jetzt eingelöst werden.",
            this.conditions && h("br"),
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
              `${this.conditions ? "* " + this.conditions : ""}`
            )
          ]);

          this.$root.$bvToast.toast([vNodesMsg], {
            title: `Aktionscode ${localStorage.getItem("promotionCode")}${
              this.conditions ? "*" : ""
            } hinterlegt`,
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
