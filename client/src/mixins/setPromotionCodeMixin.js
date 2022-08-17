export const setPromotionCodeMixin = {
  mounted() {
    this.setPromotionCode();
  },
  methods: {
    setPromotionCode() {
      if (this.$route.query.promotion) {
        localStorage.setItem("promotionCode", this.$route.query.promotion);

        this.$root.$bvToast.toast(
          `Ihr Aktionscode "${localStorage.getItem(
            "promotionCode"
          )}" wurde erfolgreich hinterlegt und kann bei der Veröffentlichung Ihrer Stellenanzeige eingelöst werden.`,
          {
            title: `Aktionscode hinterlegt`,
            variant: "success",
            toaster: "b-toaster-bottom-right",
            solid: true,
            noAutoHide: true
          }
        );
      }
    }
  }
};
