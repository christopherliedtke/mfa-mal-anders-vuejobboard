<template>
    <b-container class="password-reset py-5 position-relative">
        <Overlay :show="showOverlay"></Overlay>
        <h2>Passwort zurücksetzen</h2>
        <b-form v-if="state === 0">
            <label for="email">E-Mail Adresse</label>
            <b-form-input
                type="email"
                v-model="email"
                id="email"
                placeholder="E-Mail Adresse eingeben..."
                autocomplete="email"
                autofocus
            ></b-form-input>
            <button class="btn btn-primary my-3" @click="onSubmitEmail">
                Passwort zurücksetzen
            </button>
            <p>
                Nicht was Du möchtest?
                <b-link to="/register">Registrieren</b-link> oder
                <b-link to="/login">Anmelden</b-link>!
            </p>
        </b-form>
        <b-form v-if="state === 1">
            <p class="mt-4">
                Bitte überprüfe Dein E-Mail Postfach und gib den erhaltenen Code
                ein.
            </p>
            <label for="secretCode">Code</label>
            <b-form-input
                type="text"
                v-model="secretCode"
                id="secretCode"
                placeholder="Code eingeben..."
                autofocus
            ></b-form-input>
            <label for="password">Neues Passwort</label>
            <b-input-group>
                <b-form-input
                    :type="passwordType"
                    v-model="password"
                    id="password"
                    placeholder="Neues Passwort eingeben..."
                    autocomplete="new-password"
                    aria-describedby="password-help-block"
                ></b-form-input>
                <b-input-group-append is-text>
                    <b-icon
                        :icon="
                            passwordType === 'text'
                                ? 'eye-fill'
                                : 'eye-slash-fill'
                        "
                        font-scale="1.2"
                        @click="togglePasswordType"
                    ></b-icon>
                </b-input-group-append>
            </b-input-group>
            <b-form-text id="password-help-block">
                Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein
                Kleinbuchstabe, Großbuchstabe, Zahl und Sonderzeichen enthalten.
            </b-form-text>

            <label for="password2">Passwort wiederholen</label>
            <b-input-group>
                <b-form-input
                    :type="passwordType"
                    v-model="password2"
                    id="password2"
                    placeholder="Passwort eingeben..."
                    autocomplete="new-password"
                ></b-form-input>
                <b-input-group-append is-text>
                    <b-icon
                        :icon="
                            passwordType === 'text'
                                ? 'eye-fill'
                                : 'eye-slash-fill'
                        "
                        font-scale="1.2"
                        @click="togglePasswordType"
                    ></b-icon>
                </b-input-group-append>
            </b-input-group>
            <button class="btn btn-primary my-3" @click="onSubmitNewPw">
                Neues Passwort speichern
            </button>
        </b-form>
        <div class="error mt-3" v-if="errors">
            <b-alert
                show
                dismissible
                variant="warning"
                v-for="error in errors"
                :key="error.msg"
                >{{ error.msg }}</b-alert
            >
        </div>
        <div class="success mt-3" v-if="success">
            <b-alert show dismissible variant="success"
                >{{ success }}
                <b-spinner
                    style="width: 1.2rem; height: 1.2rem;"
                    variant="success"
                    label="Spinning"
                ></b-spinner
            ></b-alert>
        </div>
    </b-container>
</template>

<script>
    import axios from "@/axios";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "PasswordReset",
        components: {
            Overlay
        },
        data() {
            return {
                email: "",
                password: "",
                password2: "",
                passwordType: "password",
                secretCode: "",
                state: 0,
                errors: [],
                success: "",
                showOverlay: false
            };
        },
        methods: {
            async onSubmitEmail(e) {
                e.preventDefault();
                this.showOverlay = true;
                this.errors = [];

                const res = await axios.post(
                    "/api/auth/password-reset/get-code",
                    {
                        email: this.email
                    }
                );
                this.showOverlay = false;

                if (!res.data.success) {
                    this.errors = res.data.errors;
                } else {
                    this.state = 1;
                }
            },
            async onSubmitNewPw(e) {
                e.preventDefault();
                this.errors = [];
                this.showOverlay = true;

                const res = await axios.post(
                    "/api/auth/password-reset/verify",
                    {
                        email: this.email,
                        password: this.password,
                        password2: this.password2,
                        code: this.secretCode
                    }
                );

                this.showOverlay = false;

                if (!res.data.success) {
                    this.errors = res.data.errors;
                } else {
                    this.success =
                        "Dein Passwort wurde erfolgreich gespeichert. Du wirst sofort weitergeleitet...";

                    setTimeout(() => {
                        this.$router.push({ path: "/login" });
                    }, 3500);
                }
            },
            togglePasswordType() {
                this.passwordType === "text"
                    ? (this.passwordType = "password")
                    : (this.passwordType = "text");
            }
        }
    };
</script>

<style scoped lang="scss">
    .password-reset {
        &.container {
            width: 90%;
            max-width: 450px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;

            .b-icon {
                cursor: pointer;
            }
        }
    }
</style>
