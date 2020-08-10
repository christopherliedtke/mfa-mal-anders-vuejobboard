<template>
    <b-container class="contact py-5">
        <h1>{{ title }}</h1>

        <b-form>
            <label for="firstName">First Name *</label>
            <b-form-input
                type="text"
                v-model="form.firstName"
                id="firstName"
                placeholder="Enter first name..."
                autocomplete="given-name"
                required
                trim
                :state="validated ? (form.firstName ? true : false) : null"
            ></b-form-input>
            <label for="lastName">Last Name *</label>
            <b-form-input
                type="text"
                v-model="form.lastName"
                id="firstName"
                placeholder="Enter last name..."
                autocomplete="family-name"
                required
                trim
                :state="validated ? (form.lastName ? true : false) : null"
            ></b-form-input>
            <label for="email">Email *</label>
            <b-form-input
                type="email"
                v-model="form.email"
                id="email"
                placeholder="Enter email..."
                autocomplete="email"
                required
                trim
                :state="validated ? (form.email ? true : false) : null"
            ></b-form-input>
            <label for="phone">Phone</label>
            <b-form-input
                type="tel"
                v-model="form.phone"
                id="phone"
                placeholder="Enter phone number..."
                autocomplete="tel"
                trim
            ></b-form-input>
            <label for="subject">Subject *</label>
            <b-form-input
                type="text"
                v-model="form.subject"
                id="subject"
                placeholder="Enter subject..."
                required
                trim
                :state="validated ? (form.subject ? true : false) : null"
            ></b-form-input>
            <label for="message">Message *</label>
            <b-form-textarea
                id="message"
                v-model="form.message"
                placeholder="Enter your message..."
                rows="6"
                :state="validated ? (form.message ? true : false) : null"
            ></b-form-textarea>

            <b-form-input
                class="d-none"
                type="text"
                name="firstName"
                v-model="form.honeypot"
            ></b-form-input>

            <button class="btn btn-primary my-3" @click.prevent="onSubmit">
                Send
            </button>
        </b-form>

        <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
            error
        }}</b-alert>
        <b-alert v-if="success" class="mt-3" show dismissible variant="success"
            >Your message has been successfully sent. We'll get in touch
            shortly!</b-alert
        >

        <Overlay :show="showOverlay"></Overlay>
        <Head :title="title" desc="This is the meta of About..." img="" />
    </b-container>
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
                title: "Contact",
                form: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
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
                    this.form.honeypot
                    ? false
                    : true;
            },
            async onSubmit() {
                this.error = null;

                this.showOverlay = true;

                if (!this.formValidation()) {
                    this.error = "Please provide all necessary information.";
                    return null;
                }

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
                        "Oh, something went wrong. Please try again later!";
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
