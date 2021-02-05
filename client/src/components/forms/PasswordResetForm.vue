<template>
    <div>
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
            <button class="btn btn-primary my-3" @click.prevent="onSubmitEmail">
                Passwort zurücksetzen
            </button>
            <p>
                Nicht was Du möchtest?
                <b-link to="/auth/register">Registrieren</b-link> oder
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
                    <Fa
                        :icon="passwordType === 'text' ? 'eye' : 'eye-slash'"
                        size="lg"
                        @click="togglePasswordType"
                    />
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
                    <Fa
                        :icon="passwordType === 'text' ? 'eye' : 'eye-slash'"
                        size="lg"
                        @click="togglePasswordType"
                    />
                </b-input-group-append>
            </b-input-group>
            <button class="btn btn-primary my-3" @click.prevent="onSubmitNewPw">
                Neues Passwort speichern
            </button>
            <div class="error mt-3" v-if="errors">
                <b-alert
                    show
                    dismissible
                    variant="danger"
                    v-for="error in errors"
                    :key="error.msg"
                    >{{ error.msg }}</b-alert
                >
            </div>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "PasswordResetForm",
        data() {
            return {
                email: "",
                password: "",
                password2: "",
                passwordType: "password",
                secretCode: "",
                state: 0,
                errors: []
            };
        },
        methods: {
            async onSubmitEmail() {
                this.$store.dispatch("setOverlay", true);
                this.errors = [];

                const res = await this.$axios.post(
                    "/api/auth/password-reset/get-code",
                    {
                        email: this.email.toLowerCase()
                    }
                );

                if (!res.data.success) {
                    this.errors = res.data.errors;
                } else {
                    this.state = 1;
                }

                this.$store.dispatch("setOverlay", false);
            },
            async onSubmitNewPw() {
                this.errors = [];
                this.$store.dispatch("setOverlay", true);

                const res = await this.$axios.post(
                    "/api/auth/password-reset/verify",
                    {
                        email: this.email.toLowerCase(),
                        password: this.password,
                        password2: this.password2,
                        code: this.secretCode
                    }
                );

                if (!res.data.success) {
                    this.errors = res.data.errors;
                } else {
                    this.$root.$bvToast.toast(
                        "Ihr neues Passwort wurde erfolgreich gespeichert. Bitte melden Sie sich mit dem neuen Passwort an.",
                        {
                            title: `Neues Passwort gespeichert`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            autoHideDelay: 10000
                        }
                    );

                    this.$router.push({ path: "/auth/login" });
                }

                this.$store.dispatch("setOverlay", false);
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
    .svg-inline--fa {
        cursor: pointer;
    }
</style>
