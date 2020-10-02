<template>
    <div class="newsletter-signup">
        <h2 class="mb-4 h4">Deine wöchentlichen Jobangebote</h2>
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
                :variant="success ? 'success' : 'secondary'"
                @click.prevent="onSubmit"
            >
                <b-icon v-if="success" icon="check2" class="mr-2" />
                {{ success ? "Abonniert" : "Abonnieren" }}
            </b-button>
        </b-form>

        <b-alert v-if="success" class="mt-3" show dismissible variant="success"
            >Bitte überprüfe Dein E-Mail Postfach und bestätige Deine
            Anmeldung.</b-alert
        >
        <b-alert v-if="error" class="mt-3" show dismissible variant="warning">{{
            error
        }}</b-alert>
        <Overlay :show="showOverlay" />
    </div>
</template>

<script>
    import axios from "@/axios";
    import { companyStateOptions } from "@/utils/jobDataConfig.json";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "NewsletterSignUpForm",
        props: ["defaultState"],
        components: {
            Overlay
        },
        data() {
            return {
                form: {
                    email: "",
                    state: null,
                    accepted: false
                },
                validated: null,
                showOverlay: false,
                error: null,
                success: null,
                companyStateOptions
            };
        },
        methods: {
            async onSubmit() {
                this.error = false;

                if (!this.formValidation()) {
                    this.error = "Bitte fülle die erforderlichen Felder aus!";
                    return null;
                }

                this.showOverlay = true;

                try {
                    const response = await axios.post(
                        "/api/newsletter/sign-up",
                        {
                            email: this.form.email,
                            state: this.form.state,
                            accepted: this.form.accepted
                        }
                    );

                    if (response.data.success) {
                        this.success = true;
                    } else {
                        this.error =
                            "Bei der Anmeldung ist ein Fehler aufgetreten. Bitte probiere es noch einmal.";
                    }
                } catch (err) {
                    console.log(
                        "Error on post to /api/newsletter/sign-up: ",
                        err
                    );
                    this.error =
                        "Bei der Anmeldung ist ein Fehler aufgetreten. Bitte probiere es noch einmal.";
                }

                this.showOverlay = false;
            },
            formValidation() {
                this.validated = true;
                return !this.form.email ||
                    !this.form.state ||
                    !this.form.accepted
                    ? false
                    : true;
            }
        },
        mounted() {
            if (this.defaultState) {
                this.form.state = this.defaultState;
            }
        }
    };
</script>
