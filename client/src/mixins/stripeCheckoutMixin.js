export const stripeCheckoutMixin = {
  data() {
    return {
      stripe: null,
      stripePk: null,
      checkoutSessionId: null
    };
  },
  async mounted() {
    try {
      // Script is loaded, do something
      await this.$loadScript("https://js.stripe.com/v3/");
      await this.initStripe();
    } catch (err) {
      // Failed to fetch script
    }
  },
  methods: {
    async initStripe() {
      const response = await this.$axios.get("/api/stripe/get-stripe-pk");
      this.stripePk = response.data.stripePk;
      this.stripe = window.Stripe(this.stripePk);
    },
    async initStripeCheckout(
      type,
      id,
      title = "",
      code = null,
      pricingPackage,
      accepted = false,
      returnPath = ""
    ) {
      this.$store.dispatch("setOverlay", true);

      try {
        const response = await this.$axios.post(
          `/api/stripe/${type}/create-session-id`,
          {
            type,
            id,
            title,
            url: returnPath,
            code,
            pricingPackage,
            accepted
          }
        );
        if (response.data.success) {
          this.checkoutSessionId = response.data.sessionId;

          this.$gtag.event("begin_checkout", {
            value: response.data.amount,
            currency: "EUR",
            items: [
              {
                id: id,
                name: title,
                coupon: code,
                pricingPackage: pricingPackage,
                amount: response.data.amount,
                category: type
              }
            ]
          });

          this.$matomo &&
            this.$matomo.trackEvent(
              "commerce",
              "begin_checkout",
              id,
              response.data.amount / 100
            );

          await this.redirectToCheckout(this.checkoutSessionId);
        } else {
          throw new Error();
        }
      } catch (err) {
        this.$root.$bvToast.toast(
          "Der Zahlungsprozess funktioniert leider im Moment nicht. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.",
          {
            title: `Fehler beim Laden`,
            variant: "danger",
            toaster: "b-toaster-bottom-right",
            solid: true,
            noAutoHide: true
          }
        );
      }

      this.$store.dispatch("setOverlay", false);
    },
    async redirectToCheckout(checkoutSessionId) {
      try {
        await this.stripe.redirectToCheckout({
          sessionId: checkoutSessionId
        });
      } catch (err) {
        this.$root.$bvToast.toast(
          "Der Zahlungsprozess funktioniert leider im Moment nicht. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.",
          {
            title: `Fehler beim Laden`,
            variant: "danger",
            toaster: "b-toaster-bottom-right",
            solid: true,
            noAutoHide: true
          }
        );
      }
    }
  }
};
