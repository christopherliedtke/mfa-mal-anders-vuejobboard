export const stripeCheckoutMixin = {
    data() {
        return {
            stripe: null,
            stripePk: null,
            checkoutSessionId: null
        };
    },
    async created() {
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
            accepted = false
        ) {
            this.$store.dispatch("setOverlay", true);

            try {
                const response = await this.$axios.post(
                    `/api/stripe/${type}/create-session-id`,
                    {
                        type,
                        id,
                        title,
                        url: window.location.origin + this.$route.fullPath,
                        code,
                        amount,
                        accepted
                    }
                );
                if (response.data.success) {
                    this.checkoutSessionId = response.data.sessionId;
                    await this.redirectToCheckout(this.checkoutSessionId);
                } else {
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
