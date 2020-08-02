<template>
    <div>
        <Overlay :show="showOverlay"></Overlay>
        <b-modal
            ref="stripeCheckoutModal"
            :title="`Proceed with Payment`"
            ok-title="Proceed"
            centered
            size="xl"
            ok-variant="success"
            footer-class="d-flex justify-content-between"
            @close="$emit('close')"
            @cancel="$emit('close')"
            @ok="fetchCheckoutSessionId()"
            ><div class="my-4">
                <p>
                    You can now proceed with your payment on the safe payment
                    platform Stripe.
                </p>
                <p><strong>Job Title:</strong> {{ job && job.title }}</p>
                <p>
                    <strong>Payment Amount:</strong> {{ amountComputed / 100 }}
                    {{ currency }}
                </p>
                <b-form>
                    <b-input-group class="mt-3">
                        <b-form-input
                            type="text"
                            v-model="coupon.code"
                            id="coupon"
                            placeholder="Enter your coupon code..."
                            trim
                            :state="couponValidationState"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-button
                                variant="primary"
                                @click.prevent="checkCouponCode"
                                >Apply</b-button
                            >
                        </b-input-group-append>
                    </b-input-group>
                    <b-form-invalid-feedback :state="couponValidationState">
                        Your entered code is not valid or has been used already.
                    </b-form-invalid-feedback>
                </b-form>
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
    import Overlay from "@/components/utils/Overlay";
    import { STRIPE_PK } from "@/utils/stripeConfig";
    export default {
        name: "StripeCheckout",
        props: ["showStripeCheckoutModal", "job"],
        components: {
            Overlay
        },
        data() {
            return {
                alert: {
                    showAlert: false,
                    variant: null,
                    msg: ""
                },
                stripe: null,
                clientSecret: null,
                checkoutSessionId: null,
                stripePk: STRIPE_PK,
                amount: null,
                coupon: {
                    code: null,
                    discount: null
                },
                couponValidationState: null,
                currency: null,
                showOverlay: false
            };
        },
        computed: {
            amountComputed: function() {
                return (
                    Math.round(this.amount * (1 - this.coupon.discount) * 100) /
                    100
                );
            }
        },
        methods: {
            showModal() {
                this.$refs["stripeCheckoutModal"].show();
            },
            hideModal() {
                this.$refs["stripeCheckoutModal"].hide();
            },
            async fetchCheckoutSessionId() {
                let success;
                this.showOverlay = true;

                try {
                    const response = await axios.post(
                        "/api/stripe/create-session-id",
                        {
                            job: this.job,
                            url:
                                window.location.origin +
                                window.location.pathname,
                            code: this.coupon.code
                        }
                    );

                    if (response.data.success) {
                        success = true;
                        this.checkoutSessionId = response.data.sessionId;

                        this.redirectToCheckout();
                    }
                } catch (err) {
                    console.log("Error in fetchCheckoutSessionId(): ", err);
                    success = false;
                }

                this.showOverlay = false;
                return success;
            },
            async redirectToCheckout() {
                if (this.checkoutSessionId) {
                    await this.stripe.redirectToCheckout({
                        sessionId: this.checkoutSessionId
                    });
                } else {
                    this.alert.msg =
                        "The payment process is currently out of order. Please try again later.";
                    this.alert.variant = "danger";
                    this.alert.showAlert = true;
                }
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
            },
            async getPricePerAd() {
                const price = await axios.get("/api/stripe/get-price-per-ad");
                this.amount = price.data.amount;
                this.currency = price.data.currency.toUpperCase();
            },
            async checkCouponCode() {
                this.couponValidationState = null;

                const response = await axios.post(
                    "/api/stripe/validate-coupon",
                    { code: this.coupon.code }
                );

                this.couponValidationState = response.data.success;

                if (response.data.success) {
                    this.coupon.discount = response.data.discount;
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
            this.getPricePerAd();

            if (this.$route.query.success) {
                this.checkPaymentSuccess(this.$route.query);
            }
        }
    };
</script>

<style></style>
