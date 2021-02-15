<template>
    <div>
        <b-modal
            ref="checkoutModal"
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
                    {{
                        (amountComputed / 100)
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")
                    }}
                    {{ $config.payment.currency }}
                    <Fa
                        id="popover-payment-recommendation"
                        class="position-relative text-info mr-2"
                        style="top: -5px; cursor: pointer"
                        icon="info-circle"
                        scale="1"
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
                        :min="$config.payment.minCost"
                        :max="$config.payment.maxCost"
                        step="100"
                        v-model="amount"
                    />
                    <div class="my-3">
                        <span>
                            <strong>Laufzeit:</strong>
                            {{ $config.payment.duration }} Tage
                            <br />
                        </span>
                        <span>
                            <strong>Automatische Aktualisierung:</strong>
                            {{
                                refreshFrequencyComputed != 0
                                    ? "alle " +
                                      refreshFrequencyComputed +
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
                                    src="@/assets/img/Mastercard_2019_logo.svg"
                                    height="16"
                                />
                                Kreditkarte |
                                <b-img
                                    src="@/assets/img/640px-Giropay.png"
                                    height="16"
                                />

                                GiroPay |
                                <b-img
                                    src="@/assets/img/Google_Pay_(GPay)_Logo.svg"
                                    height="16"
                                />
                                GooglePay</b-form-radio
                            >
                            <b-form-radio value="invoice"
                                >Rechnung** (+
                                {{
                                    ($config.payment.invoiceCost / 100)
                                        .toFixed(2)
                                        .toString()
                                        .replace(".", ",")
                                }}
                                {{ $config.payment.currency }})</b-form-radio
                            >
                        </b-form-radio-group>
                    </b-form-group>

                    <b-form-group
                        v-if="paymentMethod === 'invoice'"
                        class="mt-4"
                    >
                        <h5>Rechnungsadresse</h5>

                        <label for="billingAddress-gender">Anrede</label>
                        <b-form-select
                            id="billingAddress-gender"
                            v-model="billingAddress.gender"
                            :state="
                                validated
                                    ? billingAddress.gender
                                        ? true
                                        : null
                                    : null
                            "
                        >
                            <b-form-select-option :value="null"
                                >-- Anrede auswählen --</b-form-select-option
                            >
                            <b-form-select-option
                                v-for="title in contactGenderOptions"
                                :key="title"
                                :value="title"
                                >{{ title }}</b-form-select-option
                            >
                        </b-form-select>

                        <label for="billingAddress-title">Titel</label>
                        <b-form-select
                            id="billingAddress-title"
                            v-model="billingAddress.title"
                            :state="
                                validated
                                    ? billingAddress.title
                                        ? true
                                        : null
                                    : null
                            "
                        >
                            <b-form-select-option :value="null"
                                >-- Titel auswählen --</b-form-select-option
                            >
                            <b-form-select-option
                                v-for="title in contactTitleOptions"
                                :key="title"
                                :value="title"
                                >{{ title }}</b-form-select-option
                            >
                        </b-form-select>

                        <label for="billingAddress-first-name">Vorname *</label>
                        <b-form-input
                            type="text"
                            v-model="billingAddress.firstName"
                            :state="
                                validated
                                    ? billingAddress.firstName
                                        ? true
                                        : false
                                    : null
                            "
                            id="billingAddress-first-name"
                            placeholder="Vorname eingeben..."
                            required
                        />
                        <label for="billingAddress-last-name">Nachname *</label>
                        <b-form-input
                            type="text"
                            v-model="billingAddress.lastName"
                            :state="
                                validated
                                    ? billingAddress.lastName
                                        ? true
                                        : false
                                    : null
                            "
                            id="billingAddress-last-name"
                            placeholder="Nachname eingeben..."
                            required
                        />

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

                        <b-alert
                            v-if="error"
                            class="mt-3"
                            show
                            dismissible
                            variant="danger"
                            >{{ error }}</b-alert
                        >
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
                            >Mindestbeitrag von
                            {{
                                ($config.payment.minCost / 100)
                                    .toFixed(2)
                                    .toString()
                                    .replace(".", ",")
                            }}
                            {{ $config.payment.currency }} pro
                            Stellenanzeige</strong
                        >
                        an, um den Betrieb des Portals aufrecht zu erhalten.
                    </div>
                    <div class="mt-1">
                        ** Sollten Sie ausschließlich auf vorab ausgestellte
                        Rechnung bezahlen können, erhalten Sie diese nach
                        Anforderung auf Ihre angegebene E-Mail Adresse. In dem
                        Fall erhöht sich Ihr gewählter Kostenbeitrag um
                        {{
                            ($config.payment.invoiceCost / 100)
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")
                        }}
                        {{ $config.payment.currency }}.
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
                        >{{
                            ((amountComputed + 500) / 100)
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")
                        }}
                        {{ $config.payment.currency }} | Rechnung anfordern
                    </b-button>
                    <b-button
                        v-if="paymentMethod === 'stripe'"
                        @click="startStripeCheckout()"
                        class="mb-2"
                        variant="success"
                        :disabled="!accepted"
                    >
                        {{
                            (amountComputed / 100)
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")
                        }}
                        {{ $config.payment.currency }} | Jetzt bezahlen
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import { stripeCheckoutMixin } from "@/mixins/stripeCheckoutMixin";
    import PayWhatYouWantSuggestion from "@/components/containers/PayWhatYouWantSuggestion";
    import {
        contactGenderOptions,
        contactTitleOptions
    } from "@/config/formDataConfig.json";
    export default {
        name: "Checkout",
        mixins: [stripeCheckoutMixin],
        props: ["showCheckoutModal", "job"],
        components: {
            PayWhatYouWantSuggestion
        },
        data() {
            return {
                paymentMethod: "stripe",
                clientSecret: null,
                amount: null,
                accepted: false,
                coupon: {
                    code: null,
                    discount: 0,
                    refreshFrequency: 0
                },
                couponValidationState: null,
                billingAddress: {
                    gender: null,
                    title: null,
                    firstName: "",
                    lastName: "",
                    company: null,
                    email: null,
                    street: null,
                    zipCode: null,
                    location: null
                },
                contactGenderOptions,
                contactTitleOptions,
                validated: false,
                error: false
            };
        },
        computed: {
            amountComputed() {
                return (
                    Math.round(this.amount * (1 - this.coupon.discount) * 100) /
                    100
                );
            },
            amountCorelation() {
                let text;
                if (this.amount >= this.$config.payment.xLargeCost) {
                    text =
                        "~ große Versorgungseinrichtung | 20+ MitarbeiterInnen";
                } else if (this.amount >= this.$config.payment.largeCost) {
                    text =
                        "~ große Praxis oder kleinere bis mittlere Versorgungseinrichtung | 11 - 20 MitarbeiterInnen";
                } else if (this.amount >= this.$config.payment.mediumCost) {
                    text = "~ mittlere Praxis | 6 - 10 MitarbeiterInnen";
                } else {
                    text = "~ kleine Praxis | 1 - 5 MitarbeiterInnen";
                }

                return text;
            },
            refreshFrequencyComputed() {
                let value = 0;
                if (this.coupon.refreshFrequency) {
                    value = this.coupon.refreshFrequency;
                } else if (this.amount >= this.$config.payment.refreshCost) {
                    value = 14;
                }

                return value;
            }
        },
        mounted() {
            this.checkPaymentSuccess(this.$route.query);
        },
        watch: {
            showCheckoutModal() {
                if (this.showCheckoutModal === true) {
                    this.showModal();
                } else {
                    this.hideModal();
                }
            },
            job() {
                if (this.job.company.size) {
                    this.calculatePrice();
                }

                if (this.job.company.name) {
                    this.setBillingAddress();
                }
            }
        },
        methods: {
            showModal() {
                this.$refs["checkoutModal"].show();
            },
            hideModal() {
                this.$refs["checkoutModal"].hide();
            },
            async startStripeCheckout() {
                await this.initStripeCheckout(
                    "job",
                    this.job._id,
                    this.job.title,
                    this.coupon.code,
                    this.amount,
                    this.accepted
                );
            },
            async checkPaymentSuccess(query) {
                if (query.success === "true") {
                    this.$root.$bvToast.toast(
                        "Der Zahlungsvorgang wurde erfolgreich abgeschlossen. Ihre Anzeige ist ab sofort auf unserer Stellenbörse verfügbar. Einen Beleg für Ihre Zahlung erhalten Sie auf Ihre angegebene E-Mail Adresse.",
                        {
                            title: `Zahlung erfolgreich`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                } else if (query.success === "false") {
                    this.$root.$bvToast.toast(
                        "Ihre Zahlung konnte leider nicht verarbeitet werden. Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.",
                        {
                            title: `Zahlung fehlgeschlagen`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }
            },
            calculatePrice() {
                switch (this.job.company.size) {
                    case "1 - 5 Mitarbeiter":
                        this.amount = this.$config.payment.minCost;
                        break;
                    case "6 - 10 Mitarbeiter":
                        this.amount = this.$config.payment.mediumCost;
                        break;
                    case "11 - 20 Mitarbeiter":
                        this.amount = this.$config.payment.largeCost;
                        break;
                    case "20+ Mitarbeiter":
                        this.amount = this.$config.payment.xLargeCost;
                        break;
                }
            },
            async checkCouponCode() {
                this.couponValidationState = null;

                const coupon = await this.$axios.get("/graphql", {
                    params: {
                        query: `
                            query {
                                validateCoupon (code: "${this.coupon.code}") {
                                    _id
                                    code
                                    discount
                                    refreshFrequency
                                }
                            }
                        `
                    }
                });

                if (coupon.data.errors) {
                    this.couponValidationState = false;
                } else {
                    this.couponValidationState = true;
                    this.coupon.discount =
                        coupon.data.data.validateCoupon.discount;
                    this.coupon.refreshFrequency =
                        coupon.data.data.validateCoupon.refreshFrequency;
                }
            },
            async setBillingAddress() {
                if (
                    this.$store.state.auth.loggedIn &&
                    this.$store.state.auth.user
                ) {
                    this.billingAddress = {
                        gender: this.$store.state.auth.user.gender || null,
                        title: this.$store.state.auth.user.title || null,
                        firstName: this.$store.state.auth.user.firstName || "",
                        lastName: this.$store.state.auth.user.lastName || "",
                        company: this.job.company.name,
                        email: this.$store.state.auth.user.email,
                        street: this.job.company.street,
                        zipCode: this.job.company.zipCode,
                        location: this.job.company.location
                    };
                }
            },
            validateBillingAddress() {
                this.validated = true;
                return !this.billingAddress.company ||
                    !this.billingAddress.firstName ||
                    !this.billingAddress.lastName ||
                    !this.billingAddress.email ||
                    !this.billingAddress.street ||
                    !this.billingAddress.zipCode ||
                    !this.billingAddress.location
                    ? false
                    : true;
            },
            async sendInvoice() {
                if (!this.validateBillingAddress()) {
                    this.error =
                        "Bitte füllen Sie die erforderlichen Felder aus!";
                    return null;
                }

                this.$store.dispatch("setOverlay", true);

                try {
                    const response = await this.$axios.post(
                        "/api/invoice/get-invoice",
                        {
                            jobId: this.job._id,
                            jobTitle: this.job.title,
                            amount: this.amount,
                            paymentMethod: this.paymentMethod,
                            couponCode: this.coupon.code,
                            refreshFrequency: this.refreshFrequencyComputed,
                            billingAddress: this.billingAddress
                        }
                    );

                    if (!response.data.success) {
                        throw new Error("Invoice could not be sent!");
                    }

                    this.$root.$bvToast.toast(
                        "Vielen Dank! Ihre Rechnung wurde erfolgreich angefordert. Innerhalb der nächsten 24 Stunden erhalten Sie die gewünschte Rechnung auf die angegebene E-Mail Adresse.",
                        {
                            title: `Rechnung angefordert`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );

                    this.$emit("update");
                    this.$emit("close");
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Bei der Verarbeitung Ihrer Daten ist leider ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
                        {
                            title: `Fehler bei Rechnungsanforderung`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }

                this.$store.dispatch("setOverlay", false);
            }
        }
    };
</script>

<style lang="scss">
    .popover {
        max-width: 600px;
    }
</style>
