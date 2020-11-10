<template>
    <div>
        <b-modal
            ref="stripeCheckoutModal"
            title-tag="h4"
            :title="`Zahlung – Stellenanzeige veröffentlichen`"
            ok-title="Jetzt bezahlen"
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
                </p>

                <div class="mb-3">
                    <strong>Betrag:</strong>
                    {{ amountComputed / 100 }}
                    {{ currency }}
                    <b-icon
                        id="popover-payment-recommendation"
                        class="position-relative mr-2"
                        style="top: -5px; cursor: pointer"
                        icon="info-circle-fill"
                        scale="1"
                        variant="info"
                    />
                    <span class="small">
                        {{ amountCorelation }}
                    </span>
                </div>
                <b-popover
                    target="popover-payment-recommendation"
                    triggers="hover"
                    placement="bottomright"
                    :fallback-placement="['bottom']"
                    :container="null"
                >
                    <PayWhatYouWantSuggestion class="mt-3" :minimum="true" />
                </b-popover>

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
                    <hr class="mt-4" />

                    <label for="payment-method" class="bold"
                        >Zahlungsart auswählen</label
                    >
                    <b-form-group>
                        <b-form-radio-group
                            v-model="paymentMethod"
                            id="payment-method"
                            stacked
                        >
                            <b-form-radio value="stripe">
                                <b-img
                                    src="@/assets/Mastercard_2019_logo.svg"
                                    height="16"
                                />
                                Kreditkarte |
                                <b-img
                                    src="@/assets/640px-Giropay.png"
                                    height="16"
                                />

                                GiroPay |
                                <b-img
                                    src="@/assets/Google_Pay_(GPay)_Logo.svg"
                                    height="16"
                                />
                                GooglePay</b-form-radio
                            >
                            <b-form-radio value="invoice"
                                >Rechnung** (+ 5,00
                                {{ currency }})</b-form-radio
                            >
                        </b-form-radio-group>
                    </b-form-group>

                    <b-form-group v-if="paymentMethod === 'invoice'">
                        <div class="h5 mt-3 mb-0">Rechnungsadresse</div>
                        <label for="billing-address-company">Unternehmen</label>
                        <b-input
                            type="text"
                            id="billing-address-company"
                            v-model="billingAddress.company"
                            placeholder="Unternehmensname eingeben..."
                            trim
                            :state="
                                validated
                                    ? billingAddress.company
                                        ? true
                                        : false
                                    : null
                            "
                        />
                        <label for="billing-address-name"
                            >Rechnungsverantwortlicher</label
                        >
                        <b-input
                            type="text"
                            id="billing-address-name"
                            v-model="billingAddress.name"
                            placeholder="Name für Rechnungsausstellung angeben..."
                            trim
                            :state="
                                validated
                                    ? billingAddress.name
                                        ? true
                                        : false
                                    : null
                            "
                        />
                        <label for="billing-address-email"
                            >E-Mail Adresse</label
                        >
                        <b-input
                            type="text"
                            id="billing-address-email"
                            v-model="billingAddress.email"
                            placeholder="E-Mail Adresse angeben..."
                            trim
                            :state="
                                validated
                                    ? billingAddress.email
                                        ? true
                                        : false
                                    : null
                            "
                        />
                        <label for="billing-address-street"
                            >Straße und Hausnummer</label
                        >
                        <b-input
                            type="text"
                            id="billing-address-street"
                            v-model="billingAddress.street"
                            placeholder="Straße und Hausnummer eingeben..."
                            trim
                            :state="
                                validated
                                    ? billingAddress.street
                                        ? true
                                        : false
                                    : null
                            "
                        />
                        <label for="billing-address-zip-code">PLZ</label>
                        <b-input
                            type="text"
                            id="billing-address-zip-code"
                            v-model="billingAddress.zipCode"
                            placeholder="PLZ eingeben..."
                            trim
                            :state="
                                validated
                                    ? billingAddress.zipCode
                                        ? true
                                        : false
                                    : null
                            "
                        />
                        <label for="billing-address-location">Ort</label>
                        <b-input
                            type="text"
                            id="billing-address-location"
                            v-model="billingAddress.location"
                            placeholder="Ort eingeben..."
                            trim
                            :state="
                                validated
                                    ? billingAddress.location
                                        ? true
                                        : false
                                    : null
                            "
                        />
                    </b-form-group>

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
                <div class="small">
                    <div>
                        * Es fällt ein
                        <strong
                            >Mindestbeitrag von 25,- {{ currency }} pro
                            Stellenanzeige</strong
                        >
                        an, um den Betrieb des Portals aufrecht zu erhalten.
                    </div>
                    <div class="mt-1">
                        ** Sollten Sie ausschließlich auf vorab ausgestellte
                        Rechnung bezahlen können, erhalten Sie diese nach
                        Anforderung auf Ihre angegebene E-Mail Adresse. In dem
                        Fall erhöht sich Ihr gewählter Kostenbeitrag um 5,00
                        {{ currency }}.
                        <strong
                            >Ihre Stellenanzeige wird nach erfolgtem Geldeingang
                            bei uns freigeschaltet.</strong
                        >
                    </div>
                </div>
            </div>
            <template
                v-slot:modal-footer
                class="d-flex justify-content-between"
            >
                <b-button @click="$emit('close')" class="mb-2" variant="danger"
                    >Abbrechen</b-button
                >
                <div>
                    <b-button
                        v-if="paymentMethod === 'invoice'"
                        @click.prevent="sendInvoice"
                        class="mr-2 mb-2"
                        variant="primary"
                        :disabled="!accepted"
                        >Rechnung anfordern</b-button
                    >
                    <b-button
                        v-if="paymentMethod === 'stripe'"
                        @click="fetchCheckoutSessionId()"
                        class="mb-2"
                        variant="success"
                        :disabled="!accepted"
                        >Jetzt bezahlen</b-button
                    >
                </div>
            </template>
        </b-modal>
        <b-alert
            v-model="alert.showAlert"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            :variant="alert.variant"
            dismissible
        >
            {{ alert.msg }}
        </b-alert>
        <Overlay style="z-index:9999" :show="showOverlay"></Overlay>
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
                paymentMethod: "stripe",
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
                billingAddress: {
                    company: null,
                    name: null,
                    email: null,
                    userId: null,
                    street: null,
                    zipCode: null,
                    location: null
                },
                validated: false,
                showOverlay: false
            };
        },
        computed: {
            amountComputed: function() {
                return (
                    Math.round(this.amount * (1 - this.coupon.discount) * 100) /
                    100
                );
            },
            amountCorelation: function() {
                let text;
                if (this.amount >= 25000) {
                    text =
                        "~ große Versorgungseinrichtung | 20+ MitarbeiterInnen";
                } else if (this.amount >= 10000) {
                    text =
                        "~ große Praxis oder kleinere bis mittlere Versorgungseinrichtung | 11 - 20 MitarbeiterInnen";
                } else if (this.amount >= 5000) {
                    text = "~ mittlere Praxis | 6 - 10 MitarbeiterInnen";
                } else {
                    text = "~ kleine Praxis | 1 - 5 MitarbeiterInnen";
                }

                return text;
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
                    this.alert = {
                        msg:
                            "Der Zahlungsvorgang wurde erfolgreich abgeschlossen. Ihre Anzeige ist ab sofort auf unserer Stellenbörse verfügbar. Einen Beleg für Ihre Zahlung erhalten Sie auf Ihre angegebene E-Mail Adresse.",
                        variant: "success",
                        showAlert: true
                    };
                } else if (query.success === "false") {
                    this.alert = {
                        msg:
                            "Ihre Zahlung konnte leider nicht verarbeitet werden. Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.",
                        variant: "danger",
                        showAlert: true
                    };
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
            },

            async setBillingAddress() {
                try {
                    const response = await axios.post("/api/user/private", {
                        query: `
                                query {
                                    user {
                                        _id
                                        gender
                                        title
                                        firstName
                                        lastName
                                        email
                                    }
                                }
                            `
                    });

                    const user = response.data.data.user;

                    this.billingAddress = {
                        company: this.job.company.name,
                        userId: user._id,
                        name: `${
                            user.gender != "null" ? user.gender + " " : ""
                        }${user.title != "null" ? user.title + " " : ""}${
                            user.firstName
                        } ${user.lastName}`,

                        email: user.email,
                        street: this.job.company.street,
                        zipCode: this.job.company.zipCode,
                        location: this.job.company.location
                    };
                } catch (err) {
                    console.log("Error on getUserData(): ", err);
                }
            },
            validateBillingAddress() {
                this.validated = true;
                return !this.billingAddress.company ||
                    !this.billingAddress.name ||
                    !this.billingAddress.email ||
                    !this.billingAddress.street ||
                    !this.billingAddress.zipCode ||
                    !this.billingAddress.location
                    ? false
                    : true;
            },
            async sendInvoice() {
                this.showOverlay = true;
                if (this.validateBillingAddress()) {
                    this.resetAlert();

                    try {
                        const response = await axios.post(
                            "/api/invoice/get-invoice",
                            {
                                jobId: this.job._id,
                                jobTitle: this.job.title,
                                userId: this.billingAddress.userId,
                                email: this.billingAddress.email,
                                amount: this.amount,
                                paymentMethod: this.paymentMethod,
                                couponCode: this.coupon.code,
                                discount: this.coupon.discount,
                                refreshFrequency: this.coupon.refreshFrequency,
                                billingAddressCompany: this.billingAddress
                                    .company,
                                billingAddressName: this.billingAddress.name,
                                billingAddressStreet: this.billingAddress
                                    .street,
                                billingAddressZipCode: this.billingAddress
                                    .zipCode,
                                billingAddressLocation: this.billingAddress
                                    .location
                            }
                        );

                        if (response.data.success) {
                            this.alert = {
                                msg:
                                    "Vielen Dank! Ihre Rechnung wurde erfolgreich angefordert. Innerhalb der nächsten 24 Stunden erhalten Sie die gewünschte Rechnung auf die angegebene E-Mail Adresse.",
                                variant: "success",
                                showAlert: true
                            };
                            this.$emit("update");

                            setTimeout(() => {
                                this.$emit("close");
                            }, 1000);
                        } else {
                            this.alert = {
                                msg:
                                    "Bei der Verarbeitung Ihrer Daten ist leider ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
                                variant: "danger",
                                showAlert: true
                            };
                        }
                    } catch (err) {
                        console.log("Error on sendInvoice(): ", err);

                        this.alert = {
                            msg:
                                "Bei der Verarbeitung Ihrer Daten ist leider ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
                            variant: "danger",
                            showAlert: true
                        };
                    }
                } else {
                    this.alert = {
                        msg:
                            "Bitte geben Sie eine vollständige Rechnungsaddresse ein.",
                        variant: "danger",
                        showAlert: true
                    };
                }
                this.showOverlay = false;
            },
            resetAlert() {
                this.alert.msg = "";
                this.alert.variant = null;
                this.alert.showAlert = false;
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

                if (this.job.company.name) {
                    this.setBillingAddress();
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
