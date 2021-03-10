<template>
    <div>
        <h1 class="title">Zahlung – Stellenanzeige veröffentlichen</h1>
        <b-container class="checkout py-3 py-lg-5">
            <div>
                <h5 class="mb-4">
                    <strong>{{ job && job.title }}</strong>
                </h5>
                <p>
                    Bitte wählen Sie den gewünschten Betrag, den Sie nach
                    unserem
                    <em>“Pay What You Want”*</em> Modell für die
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
                        v-model="checkout.amount"
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
                            v-model="checkout.coupon.code"
                            id="coupon"
                            placeholder="Aktionscode eingeben..."
                            trim
                            :state="checkout.couponValidationState"
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
                    <b-form-invalid-feedback
                        :state="checkout.couponValidationState"
                    >
                        Ihr eingegebener Aktionscode ist nicht gültig oder wurde
                        bereits benutzt.
                    </b-form-invalid-feedback>
                    <hr class="mt-4" />

                    <label for="payment-method" class="bold"
                        >Zahlungsart auswählen</label
                    >
                    <b-form-group>
                        <b-form-radio-group
                            v-model="checkout.paymentMethod"
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
                        v-if="checkout.paymentMethod === 'invoice'"
                        class="mt-4"
                    >
                        <h5>Rechnungsadresse</h5>

                        <label for="billingAddress-gender">Anrede</label>
                        <b-form-select
                            id="billingAddress-gender"
                            v-model="checkout.billingAddress.gender"
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.gender
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
                            v-model="checkout.billingAddress.title"
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.title
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
                            v-model="checkout.billingAddress.firstName"
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.firstName
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
                            v-model="checkout.billingAddress.lastName"
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.lastName
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
                            v-model="checkout.billingAddress.company"
                            placeholder="Unternehmensname eingeben..."
                            trim
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.company
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
                            v-model="checkout.billingAddress.email"
                            placeholder="E-Mail Adresse angeben..."
                            trim
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.email
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
                            v-model="checkout.billingAddress.street"
                            placeholder="Straße und Hausnummer eingeben..."
                            trim
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.street
                                        ? true
                                        : false
                                    : null
                            "
                        />
                        <label for="billing-address-zip-code">PLZ</label>
                        <b-input
                            type="text"
                            id="billing-address-zip-code"
                            v-model="checkout.billingAddress.zipCode"
                            placeholder="PLZ eingeben..."
                            trim
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.zipCode
                                        ? true
                                        : false
                                    : null
                            "
                        />
                        <label for="billing-address-location">Ort</label>
                        <b-input
                            type="text"
                            id="billing-address-location"
                            v-model="checkout.billingAddress.location"
                            placeholder="Ort eingeben..."
                            trim
                            :state="
                                checkout.validated
                                    ? checkout.billingAddress.location
                                        ? true
                                        : false
                                    : null
                            "
                        />

                        <b-alert
                            v-if="checkout.error"
                            class="mt-3"
                            show
                            dismissible
                            variant="danger"
                            >{{ checkout.error }}</b-alert
                        >
                    </b-form-group>

                    <b-form-checkbox
                        class="mt-4 small"
                        v-model="checkout.accepted"
                        :state="checkout.accepted || null"
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
                        v-if="checkout.paymentMethod === 'invoice'"
                        @click.prevent="sendInvoice"
                        class="mr-2 mb-2"
                        variant="primary"
                        :disabled="!checkout.accepted"
                        >{{
                            ((amountComputed + 500) / 100)
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")
                        }}
                        {{ $config.payment.currency }} | Rechnung anfordern
                    </b-button>
                    <b-button
                        v-if="checkout.paymentMethod === 'stripe'"
                        @click="startStripeCheckout()"
                        class="mb-2"
                        variant="success"
                        :disabled="!checkout.accepted"
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
        </b-container>
    </div>
</template>

<script>
    import {
        contactGenderOptions,
        contactTitleOptions
    } from "@/config/formDataConfig.json";
    import PayWhatYouWantSuggestion from "@/components/containers/PayWhatYouWantSuggestion";
    import { stripeCheckoutMixin } from "@/mixins/stripeCheckoutMixin";
    export default {
        name: "UserDashboardCheckoutJob",
        mixins: [stripeCheckoutMixin],
        components: {
            PayWhatYouWantSuggestion
        },
        data() {
            return {
                job: Object,
                checkout: {
                    paymentMethod: "stripe",
                    amount: null,
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
                    accepted: false,
                    validated: false,
                    error: false
                },
                contactGenderOptions,
                contactTitleOptions
            };
        },
        computed: {
            amountComputed() {
                return (
                    Math.round(
                        this.checkout.amount *
                            (1 - this.checkout.coupon.discount) *
                            100
                    ) / 100
                );
            },
            amountCorelation() {
                let text;
                if (this.checkout.amount >= this.$config.payment.xLargeCost) {
                    text =
                        "~ große Versorgungseinrichtung | 20+ MitarbeiterInnen";
                } else if (
                    this.checkout.amount >= this.$config.payment.largeCost
                ) {
                    text =
                        "~ große Praxis oder kleinere bis mittlere Versorgungseinrichtung | 11 - 20 MitarbeiterInnen";
                } else if (
                    this.checkout.amount >= this.$config.payment.mediumCost
                ) {
                    text = "~ mittlere Praxis | 6 - 10 MitarbeiterInnen";
                } else {
                    text = "~ kleine Praxis | 1 - 5 MitarbeiterInnen";
                }

                return text;
            },
            refreshFrequencyComputed() {
                let value = 0;
                if (this.checkout.coupon.refreshFrequency) {
                    value = this.checkout.coupon.refreshFrequency;
                } else if (
                    this.checkout.amount >= this.$config.payment.refreshCost
                ) {
                    value = 14;
                }

                return value;
            }
        },
        async mounted() {
            await this.getJob();
        },
        methods: {
            async getJob() {
                this.$store.dispatch("setOverlay", true);

                try {
                    const job = await this.$axios.get("/graphql", {
                        params: {
                            query: `
                                query {
                                    myJob (_id: "${this.$route.params.jobId}") {
                                        _id
                                        createdAt
                                        updatedAt
                                        publishedAt
                                        status
                                        paid
                                        paidExpiresAt
                                        applicationDeadline
                                        title
                                        company {
                                            name
                                            street
                                            zipCode
                                            location
                                            state
                                            size
                                        }
                                        payment {
                                            status
                                            paidAt
                                            paymentExpiresAt
                                        }
                                    }
                                }
                            `
                        }
                    });

                    if (job.data.errors) {
                        throw new Error();
                    }

                    this.job = job.data.data.myJob;
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Ihre Stellenanzeige konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
            }
        }
    };
</script>
