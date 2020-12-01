<template>
    <div class="newsletter-signup">
        <h2 class="mb-4 h4">{{ title }}</h2>
        <p v-if="intro">{{ intro }}</p>
        <b-form>
            <label class="sr-only sr-only-focusable" for="email2"
                >E-Mail Adresse</label
            >
            <b-form-input
                class="mt-2"
                type="email"
                v-model="form.email"
                id="email2"
                placeholder="E-Mail Adresse eingeben..."
                autocomplete="email"
                required
                trim
                :state="validated ? (form.email ? true : false) : null"
            ></b-form-input>
            <label class="sr-only sr-only-focusable" for="newsletter-state"
                >Bundesland</label
            >
            <b-form-select
                class="mt-2"
                id="newsletter-state"
                v-model="form.state"
                :state="validated ? (form.state ? true : false) : null"
            >
                <b-form-select-option :value="null" disabled
                    >-- Bundesland auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="state in companyStateOptions"
                    :key="state"
                    :value="state"
                    >{{ state }}</b-form-select-option
                >
            </b-form-select>
            <b-form-checkbox
                class="mt-3 small"
                v-model="form.accepted"
                name="acceptance"
                :value="true"
                :unchecked-value="false"
                switch
                required
                :state="validated ? (form.accepted ? true : false) : null"
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

            <b-button
                class="mt-3"
                variant="secondary"
                :disabled="disabled"
                @click.prevent="onSubmit"
            >
                Abonnieren
            </b-button>
        </b-form>

        <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
            error
        }}</b-alert>
    </div>
</template>

<script>
    import { companyStateOptions } from "@/utils/jobDataConfig.json";
    export default {
        name: "NewsletterSignUpForm",
        props: {
            defaultState: {
                type: String,
                default: null
            },
            title: {
                type: String,
                default: "Deine wöchentlichen Jobangebote"
            },
            intro: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                form: {
                    email: "",
                    state: null,
                    accepted: false
                },
                validated: null,
                disabled: false,
                error: null,
                companyStateOptions
            };
        },
        mounted() {
            if (this.defaultState) {
                this.form.state = this.defaultState;
            }
        },
        methods: {
            async onSubmit() {
                this.error = false;

                if (!this.formValidation()) {
                    this.error = "Bitte fülle die erforderlichen Felder aus!";
                    return null;
                }

                this.$store.dispatch("setOverlay", true);

                try {
                    const response = await this.$axios.post(
                        "/api/newsletter/sign-up",
                        {
                            email: this.form.email,
                            state: this.form.state,
                            accepted: this.form.accepted
                        }
                    );

                    if (response.data.success) {
                        this.$root.$bvToast.toast(
                            "Du wurdest für den Job Newsletter registriert. Bitte überprüfe Dein E-Mail Postfach in den nächsten Minuten (ggfls. auch dein Spam) und bestätige Deine Anmeldung.",
                            {
                                title: `Newsletter Anmeldung`,
                                variant: "success",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );

                        this.disabled = true;
                        localStorage.setItem("nl-pop", "false");

                        this.trackEvent(
                            `Newsletter: ${this.form.state}`,
                            "Newsletter_Subscription"
                        );
                    } else {
                        this.error =
                            "Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuche es noch einmal.";
                    }
                } catch (err) {
                    this.error =
                        "Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuche es noch einmal.";
                }

                this.$store.dispatch("setOverlay", false);
            },
            formValidation() {
                this.validated = true;
                return !this.form.email ||
                    !this.form.state ||
                    !this.form.accepted
                    ? false
                    : true;
            },
            trackEvent: function(label, category, action = "Success") {
                this.$gtag.event(action, {
                    event_category: category,
                    event_label: label
                });
            }
        }
    };
</script>
