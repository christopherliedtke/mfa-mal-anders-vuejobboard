<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="contact py-5">
            <b-form>
                <label for="firstName">Vorname *</label>
                <b-form-input
                    type="text"
                    v-model="form.firstName"
                    id="firstName"
                    placeholder="Vorname eingeben..."
                    autocomplete="given-name"
                    required
                    trim
                    :state="validated ? (form.firstName ? true : false) : null"
                ></b-form-input>
                <label for="lastName">Nachname *</label>
                <b-form-input
                    type="text"
                    v-model="form.lastName"
                    id="firstName"
                    placeholder="Nachname eingeben..."
                    autocomplete="family-name"
                    required
                    trim
                    :state="validated ? (form.lastName ? true : false) : null"
                ></b-form-input>
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
                <label for="phone">Telefonnummer</label>
                <b-form-input
                    type="tel"
                    v-model="form.phone"
                    id="phone"
                    placeholder="Telefonnummer eingeben..."
                    autocomplete="tel"
                    trim
                ></b-form-input>
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
                    rows="6"
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
                    für das Kontaktformular.
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

            <b-alert
                v-if="error"
                class="mt-3"
                show
                dismissible
                variant="danger"
                >{{ error }}</b-alert
            >
            <b-alert
                v-if="success"
                class="mt-3"
                show
                dismissible
                variant="success"
                >Deine Nachricht wurde erfolgreich versandt. Wir melden uns
                schnellstmöglich bei Dir zurück!</b-alert
            >
        </b-container>
        <Overlay :show="showOverlay"></Overlay>
        <Head
            :title="title"
            desc="Du hast ein Anliegen, dass Du mit uns besprechen möchtest? Nimm noch heute Kontakt zu uns auf."
            img=""
        />
    </div>
</template>

<script>
    import axios from "@/axios";
    import Head from "@/components/utils/Head.vue";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "Contact",
        components: {
            Head,
            Overlay
        },
        data() {
            return {
                title: "Kontakt",
                form: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    accepted: false,
                    honeypot: ""
                },
                validated: null,
                showOverlay: false,
                error: null,
                success: null
            };
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

                this.showOverlay = true;

                try {
                    const response = await axios.post(
                        "/api/contact/send",
                        this.form
                    );

                    if (response.data.success) {
                        this.success = true;
                        this.validated = null;
                        this.resetForm();
                    } else {
                        throw new Error("Email could not be sent.");
                    }
                } catch (err) {
                    this.error =
                        "Oh, da ist leider etwas schief gelaufen. Bitte probiere es noch einmal.";
                }

                this.showOverlay = false;
            },
            async setUserData() {
                const response = await axios.post("/api/user/private", {
                    query: `
                            query {
                                user {
                                    _id
                                    firstName
                                    lastName
                                    email
                                }
                            }
                        `
                });

                this.form = { ...this.form, ...response.data.data.user };
            },
            resetForm() {
                for (const key in this.form) {
                    this.form[key] = "";
                }
            }
        },
        mounted() {
            if (this.$store.state.auth.userId) {
                this.setUserData();
            }
        }
    };
</script>

<style scoped lang="scss"></style>
