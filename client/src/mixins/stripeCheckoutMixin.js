export const stripeCheckoutMixin = {
    data() {
        return {
            stripe: null,
            stripePk: null,
            checkoutSessionId: null
        };
    },
    async mounted() {
        await this.initStripe();
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
            amount,
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
                        amount,
                        accepted
                    }
                );
                if (response.data.success) {
                    this.checkoutSessionId = response.data.sessionId;

                    this.$gtag.event("begin_checkout", {
                        value: amount,
                        currency: "EUR",
                        items: [
                            {
                                id: id,
                                name: title,
                                coupon: code,
                                price: amount,
                                category: type
                            }
                        ]
                    });

                    this.$matomo &&
                        this.$matomo.trackEvent(
                            "commerce",
                            "begin_checkout",
                            id,
                            amount
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
