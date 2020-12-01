<template>
    <div style="max-width: 600px" class="mx-auto">
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="intro">{{ intro }}</p>
        <b-form>
            <b-row cols="1" cols-md="2">
                <b-col>
                    <label for="gender">Anrede</label>

                    <b-form-select
                        id="gender"
                        v-model="form.gender"
                        :state="validated ? (form.gender ? true : null) : null"
                    >
                        <b-form-select-option :value="null"
                            >-- Titel auswählen --</b-form-select-option
                        >
                        <b-form-select-option
                            v-for="title in contactGenderOptions"
                            :key="title"
                            :value="title"
                            >{{ title }}</b-form-select-option
                        >
                    </b-form-select>
                </b-col>
                <b-col>
                    <label for="title">Titel</label>
                    <b-form-select
                        id="title"
                        v-model="form.title"
                        :state="validated ? (form.title ? true : null) : null"
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
                </b-col>
            </b-row>
            <b-row cols="1" cols-md="2">
                <b-col>
                    <label for="firstName">Vorname *</label>
                    <b-form-input
                        type="text"
                        v-model="form.firstName"
                        id="firstName"
                        placeholder="Vorname eingeben..."
                        autocomplete="given-name"
                        required
                        trim
                        :state="
                            validated ? (form.firstName ? true : false) : null
                        "
                    ></b-form-input>
                </b-col>
                <b-col>
                    <label for="lastName">Nachname *</label>
                    <b-form-input
                        type="text"
                        v-model="form.lastName"
                        id="firstName"
                        placeholder="Nachname eingeben..."
                        autocomplete="family-name"
                        required
                        trim
                        :state="
                            validated ? (form.lastName ? true : false) : null
                        "
                    ></b-form-input>
                </b-col>
            </b-row>
            <b-row cols="1" cols-md="2">
                <b-col>
                    <label for="email">E-Mail Adresse *</label>
                    <b-form-input
                        type="email"
                        v-model="form.email"
                        id="email"
                        placeholder="E-Mail Adresse eingeben..."
                        autocomplete="email"
                        required
                        trim
                        :state="validated ? (form.email ? true : false) : null"
                    ></b-form-input>
                </b-col>
                <b-col>
                    <label for="phone">Telefonnummer</label>
                    <b-form-input
                        type="tel"
                        v-model="form.phone"
                        id="phone"
                        placeholder="Telefonnummer eingeben..."
                        autocomplete="tel"
                        trim
                    ></b-form-input>
                </b-col>
            </b-row>
            <label for="subject">Betreff *</label>
            <b-form-input
                type="text"
                v-model="form.subject"
                id="subject"
                placeholder="Betreff eingeben..."
                required
                trim
                :state="validated ? (form.subject ? true : false) : null"
            ></b-form-input>
            <label for="message">Deine Nachricht *</label>
            <b-form-textarea
                id="message"
                v-model="form.message"
                placeholder="Nachricht eingeben..."
                rows="8"
                :state="validated ? (form.message ? true : false) : null"
            ></b-form-textarea>
            <b-form-checkbox
                class="mt-2"
                id="acceptance"
                v-model="form.accepted"
                name="acceptance"
                :value="true"
                :unchecked-value="false"
                switch
                required
                :state="validated ? (form.accepted ? true : false) : null"
            >
                Ich akzeptiere die
                <b-link to="/page/agbs">
                    Nutzungsbedingungen
                </b-link>
                und
                <b-link to="/page/privacy-policy">
                    Datenschutzbestimmungen
                </b-link>
                zur Nutzung des Kontaktformulars.
            </b-form-checkbox>

            <b-form-input
                class="d-none"
                type="text"
                name="firstName"
                v-model="form.honeypot"
            ></b-form-input>

            <button class="btn btn-primary my-3" @click.prevent="onSubmit">
                Absenden
            </button>
        </b-form>

        <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
            error
        }}</b-alert>
    </div>
</template>

<script>
    import {
        contactGenderOptions,
        contactTitleOptions
    } from "@/utils/jobDataConfig.json";
    export default {
        name: "ContactForm",
        props: ["title", "intro"],
        data() {
            return {
                form: {
                    gender: null,
                    title: null,
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    accepted: false,
                    honeypot: ""
                },
                contactGenderOptions,
                contactTitleOptions,
                validated: null,
                error: false
            };
        },
        mounted() {
            if (this.$store.state.auth.userId) {
                this.setUserData();
            }
            this.setSubject();
            this.setMessage();
        },
        methods: {
            formValidation() {
                this.validated = true;
                return !this.form.firstName ||
                    !this.form.lastName ||
                    !this.form.email ||
                    !this.form.subject ||
                    !this.form.message ||
                    !this.form.accepted ||
                    this.form.honeypot
                    ? false
                    : true;
            },
            async onSubmit() {
                this.error = null;

                if (!this.formValidation()) {
                    this.error = "Bitte fülle die erforderlichen Felder aus!";
                    return null;
                }

                this.$store.dispatch("setOverlay", true);

                try {
                    const response = await this.$axios.post(
                        "/api/contact/send",
                        this.form
                    );

                    if (response.data.success) {
                        this.validated = null;
                        this.resetForm();

                        this.$root.$bvToast.toast(
                            "Deine Nachricht wurde erfolgreich versandt. Wir melden uns schnellstmöglich bei Dir zurück!",
                            {
                                title: `Anfrage erfolgreich gesendet`,
                                variant: "success",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                    } else {
                        this.$root.$bvToast.toast(
                            "Beim Senden Ihrer Anfrage ist leider ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
                            {
                                title: `Fehler beim Senden`,
                                variant: "danger",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                    }
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Beim Senden Ihrer Anfrage ist leider ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
                        {
                            title: `Fehler beim Senden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }

                this.$store.dispatch("setOverlay", false);
            },
            async setUserData() {
                if (this.$store.state.auth.userStatus === "active") {
                    const response = await this.$axios.post(
                        "/api/user/private",
                        {
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
                        }
                    );

                    this.form = { ...this.form, ...response.data.data.user };
                } else {
                    this.form.firstName = this.$store.state.auth.userFirstName;
                    this.form.lastName = this.$store.state.auth.userLastName;
                }
            },
            setSubject() {
                if (this.$route.query.subject) {
                    this.form.subject = this.$route.query.subject;
                }
            },
            setMessage() {
                if (this.$route.query.message) {
                    this.form.message = this.$route.query.message;
                }
            },
            resetForm() {
                for (const key in this.form) {
                    this.form[key] = "";
                }
            }
        }
    };
</script>
