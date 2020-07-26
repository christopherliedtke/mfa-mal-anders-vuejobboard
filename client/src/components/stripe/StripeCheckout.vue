<template>
    <div>
        <b-modal
            ref="stripeCheckoutModal"
            :title="`Proceed with Payment`"
            ok-title="Proceed"
            centered
            size="xl"
            ok-variant="success"
            footer-class="d-flex justify-content-between"
            :ok-disabled="!complete"
            @close="$emit('close')"
            @cancel="$emit('close')"
            @ok="payNow()"
            ><div class="my-4">
                <p>
                    You can now proceed with your payment on the safe payment
                    platform Stripe.
                </p>
                <p><strong>Job Title:</strong> {{ job && job.title }}</p>
                <p>
                    <strong>Payment Amount:</strong> {{ amount / 100 }}
                    {{ currency }}
                </p>
            </div></b-modal
        >
        <b-alert
            v-model="alert.showAlert"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            :variant="alert.variant"
            dismissible
        >
            {{ alert.msg }}
        </b-alert>
    </div>
</template>

<script>
    import axios from "@/axios";
    import { STRIPE_PK } from "@/utils/stripeConfig";
    export default {
        name: "StripeCheckout",
        props: ["showStripeCheckoutModal", "job"],
        data() {
            return {
                alert: {
                    showAlert: false,
                    variant: null,
                    msg: ""
                },
                complete: false,
                stripe: null,
                clientSecret: null,
                checkoutSessionId: null,
                stripePk: STRIPE_PK,
                amount: null,
                currency: null
            };
        },
        methods: {
            showModal() {
                this.$refs["stripeCheckoutModal"].show();
                this.fetchCheckoutSessionId();
            },
            hideModal() {
                this.$refs["stripeCheckoutModal"].hide();
            },
            async fetchCheckoutSessionId() {
                this.complete = false;
                const response = await axios.post(
                    "/api/stripe/create-session-id",
                    {
                        job: this.job,
                        url: window.location.origin + window.location.pathname
                    }
                );

                if (response.data.success) {
                    this.checkoutSessionId = response.data.sessionId;
                    this.amount = response.data.amount;
                    this.currency = response.data.currency.toUpperCase();
                    this.complete = true;
                }
            },
            async payNow() {
                await this.stripe.redirectToCheckout({
                    sessionId: this.checkoutSessionId
                });
            },
            async checkPaymentSuccess(query) {
                if (query.success === "true") {
                    this.alert.msg =
                        "Your payment has been successfully processed. You are ready to pusblish now!";
                    this.alert.variant = "success";
                    this.alert.showAlert = true;
                } else if (query.success === "false") {
                    this.alert.msg =
                        "Your payment could not be processed. Please try again.";
                    this.alert.variant = "danger";
                    this.alert.showAlert = true;
                }
            }
        },
        watch: {
            showStripeCheckoutModal: function() {
                if (this.showStripeCheckoutModal === true) {
                    this.showModal();
                } else {
                    this.hideModal();
                }
            }
        },
        mounted() {
            this.stripe = window.Stripe(this.stripePk);

            if (this.$route.query.success) {
                this.checkPaymentSuccess(this.$route.query);
            }
        }
    };
</script>

<style></style>
