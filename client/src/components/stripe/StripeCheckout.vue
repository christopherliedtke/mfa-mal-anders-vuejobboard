<template>
    <div>
        <Overlay :show="showOverlay"></Overlay>
        <b-modal
            ref="stripeCheckoutModal"
            title-tag="h4"
            :title="`Zahlung – Stellenanzeige veröffentlichen`"
            ok-title="Weiter zur Zahlung"
            cancel-title="Abbrechen"
            centered
            size="xl"
            ok-variant="success"
            :ok-disabled="!accepted"
            cancel-variant="danger"
            footer-class="d-flex justify-content-between"
            @close="$emit('close')"
            @cancel="$emit('close')"
            @hidden="$emit('close')"
            @ok="fetchCheckoutSessionId()"
            ><div>
                <h5 class="mb-4">
                    <strong>{{ job && job.title }}</strong>
                </h5>
                <p>
                    Bitte wählen Sie den gewünschten Betrag, den Sie nach
                    unserem <em>“Pay What You Want”*</em> Modell für die
                    Veröffentlichung der Stellenanzeige bezahlen möchten.
                    <b-icon
                        id="popover-payment-recommendation"
                        class="position-relative"
                        style="top: -5px; cursor: pointer"
                        icon="info-circle-fill"
                        scale="1"
                        variant="info"
                    />
                </p>

                <b-popover
                    target="popover-payment-recommendation"
                    triggers="hover"
                    placement="bottomright"
                    :fallback-placement="['bottom']"
                    :container="null"
                >
                    <PayWhatYouWantSuggestion class="mt-3" :minimum="true" />
                </b-popover>
                <div class="mb-3">
                    <strong>Betrag:</strong>
                    {{ amountComputed / 100 }}
                    {{ currency }}
                </div>

                <b-form class="mb-4">
                    <b-form-input
                        type="range"
                        min="2500"
                        max="30000"
                        step="100"
                        v-model="amount"
                    />
                    <div class="my-3">
                        <span>
                            <strong>Laufzeit:</strong> {{ duration }} Tage
                            <br />
                        </span>
                        <span
                            v-if="coupon.refreshFrequency"
                            class="text-success"
                        >
                            <strong>Aktualisierung:</strong>
                            {{
                                coupon.refreshFrequency
                                    ? "alle " +
                                      coupon.refreshFrequency +
                                      " Tage"
                                    : "-"
                            }}
                        </span>
                    </div>
                    <b-input-group class="mt-3">
                        <b-form-input
                            type="text"
                            v-model="coupon.code"
                            id="coupon"
                            placeholder="Aktionscode eingeben..."
                            trim
                            :state="couponValidationState"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-button
                                variant="primary"
                                size="sm"
                                @click.prevent="checkCouponCode"
                                >Überprüfen</b-button
                            >
                        </b-input-group-append>
                    </b-input-group>
                    <b-form-invalid-feedback :state="couponValidationState">
                        Ihr eingegebener Aktionscode ist nicht gültig oder wurde
                        bereits benutzt.
                    </b-form-invalid-feedback>

                    <b-form-checkbox
                        class="mt-4 small"
                        v-model="accepted"
                        :state="accepted || null"
                        :value="true"
                        :unchecked-value="false"
                        switch
                        required
                    >
                        Ich habe die
                        <b-link href="/page/agbs" target="_blank">
                            AGBs
                        </b-link>
                        und
                        <b-link href="/page/privacy-policy" target="_blank">
                            Datenschutzbestimmungen
                        </b-link>

                        gelesen und akzeptiere diese.
                    </b-form-checkbox>
                </b-form>
                <p v-if="accepted" class="text-success">
                    Sie können Ihre Zahlung nun abschließen. Dazu werden Sie auf
                    eine sichere Zahlungsplattform weitergeleitet. Dort können
                    Sie per Überweisung (GiroPay), GooglePay oder Kreditkarte
                    zahlen.**
                </p>
                <p>
                    <b-link
                        :to="
                            `/page/contact?subject=Rechnungsanforderung+${job &&
                                job.title}+[id:${job &&
                                job._id}]&message=Guten+Tag,%0A%0Aich+bitte+um+Zahlung+per+Rechnung+für+meine+Stellenanzeige.+Bitte+stellen+Sie+mir+eine+Rechnung+in+Höhe+von+${amountComputed /
                                100}+Euro+per+E-Mail+mit+folgender+Rechnungsadresse+aus:%0A%0AUnternehmen:%0AName:%0AAdresse:%0A%0AMit+freundlichen+Grüßen%0A${
                                $store.state.auth.userFirstName
                            }+${$store.state.auth.userLastName}`
                        "
                        >Per Rechnung zahlen **</b-link
                    >
                </p>
                <p class="small">
                    * Es fällt ein
                    <strong
                        >Mindestbeitrag von 25,- Euro pro Stellenanzeige</strong
                    >
                    an, um den Betrieb des Portals aufrecht zu erhalten.
                    <br />
                    ** Sollten Sie ausschließlich auf vorab ausgestellte
                    <strong>Rechnung</strong> bezahlen können,
                    <strong
                        >kontaktieren Sie uns bitte per
                        <b-link
                            :to="
                                `/page/contact?subject=Rechnungsanforderung+${job &&
                                    job.title}+[id:${job &&
                                    job._id}]&message=Guten+Tag,%0A%0Aich+bitte+um+Zahlung+per+Rechnung+für+meine+Stellenanzeige.+Bitte+stellen+Sie+mir+eine+Rechnung+in+Höhe+von+${amountComputed /
                                    100}+Euro+per+E-Mail+mit+folgender+Rechnungsadresse+aus:%0A%0AUnternehmen:%0AName:%0AAdresse:%0A%0AMit+freundlichen+Grüßen%0A${
                                    $store.state.auth.userFirstName
                                }+${$store.state.auth.userLastName}`
                            "
                            >Kontaktformular</b-link
                        ></strong
                    >
                    unter Angabe Ihrer E-Mail Adresse, des Stellentitels und des
                    Rechnungsbetrages. In dem Fall erhöht sich der Kostenbeitrag
                    um 5,- Euro. Sie erhalten die Rechnung von uns per E-Mail.
                    Ihre Stellenanzeige wird nach erfolgtem Geldeingang bei uns
                    freigeschaltet.
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
    import Overlay from "@/components/utils/Overlay";
    import PayWhatYouWantSuggestion from "@/components/utils/PayWhatYouWantSuggestion";
    export default {
        name: "StripeCheckout",
        props: ["showStripeCheckoutModal", "job"],
        components: {
            Overlay,
            PayWhatYouWantSuggestion
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
                stripePk: null,
                amount: null,
                duration: 14,
                accepted: false,
                coupon: {
                    code: null,
                    discount: 0,
                    refreshFrequency: 0
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
            async initStripe() {
                const response = await axios.get("/api/stripe/get-stripe-pk");

                this.stripePk = response.data.stripePk;
                this.stripe = window.Stripe(this.stripePk);
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
                            code: this.coupon.code,
                            amount: this.amount,
                            accepted: this.accepted
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
                        "Der Zahlungsprozess funktioniert leider im Moment nicht. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.";
                    this.alert.variant = "danger";
                    this.alert.showAlert = true;
                }
            },
            async checkPaymentSuccess(query) {
                if (query.success === "true") {
                    this.alert.msg =
                        "Der Zahlungsvorgang wurde erfolgreich abgeschlossen. Ihre Anzeige ist ab sofort auf unserer Stellenbörse verfügbar. Einen Beleg für Ihre Zahlung erhalten Sie auf Ihre angegebene E-Mail Adresse.";
                    this.alert.variant = "success";
                    this.alert.showAlert = true;
                } else if (query.success === "false") {
                    this.alert.msg =
                        "Ihre Zahlung konnte leider nicht verarbeitet werden. Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.";
                    this.alert.variant = "danger";
                    this.alert.showAlert = true;
                }
            },
            async getPricePerAd() {
                const price = await axios.get("/api/stripe/get-price-per-ad");
                // this.amount = price.data.amount;
                this.currency = price.data.currency.toUpperCase();
                this.duration = price.data.duration;
            },
            calculatePrice() {
                switch (this.job.company.size) {
                    case "1 - 5 Mitarbeiter":
                        this.amount = 2500;
                        break;
                    case "6 - 10 Mitarbeiter":
                        this.amount = 5000;
                        break;
                    case "11 - 20 Mitarbeiter":
                        this.amount = 10000;
                        break;
                    case "20+ Mitarbeiter":
                        this.amount = 25000;
                        break;
                }
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
                    this.coupon.refreshFrequency =
                        response.data.refreshFrequency;
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
            },
            job: function() {
                if (this.job.company.size) {
                    this.calculatePrice();
                }
            }
        },
        mounted() {
            this.initStripe();
            this.getPricePerAd();
            // this.calculatePrice();

            if (this.$route.query.success) {
                this.checkPaymentSuccess(this.$route.query);
            }
        }
    };
</script>

<style lang="scss">
    .popover {
        max-width: 600px;
    }
</style>
