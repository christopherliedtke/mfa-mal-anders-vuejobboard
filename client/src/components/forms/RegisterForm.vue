<template>
    <b-form>
        <label for="user-gender">Anrede</label>
        <b-form-select id="user-gender" v-model="gender">
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
        <label for="user-title">Titel</label>
        <b-form-select id="user-title" v-model="title">
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
        <label for="firstName">Vorname</label>
        <b-form-input
            type="text"
            v-model="firstName"
            id="firstName"
            placeholder="Vorname eingeben..."
            autocomplete="given-name"
            trim
        ></b-form-input>
        <label for="lastName">Nachname</label>
        <b-form-input
            type="text"
            v-model="lastName"
            id="lastName"
            placeholder="Nachname eingeben..."
            autocomplete="family-name"
            trim
        ></b-form-input>
        <label for="email">E-Mail Adresse</label>
        <b-form-input
            type="email"
            v-model="email"
            id="email"
            placeholder="E-Mail Adresse eingeben..."
            autocomplete="email"
            trim
        ></b-form-input>
        <label for="password">Passwort</label>
        <b-input-group>
            <b-form-input
                :type="passwordType"
                v-model="password"
                id="password"
                placeholder="Passwort eingeben..."
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
        <b-form-checkbox
            class="mt-3"
            id="acceptance"
            v-model="acceptance"
            name="acceptance"
            value="accepted"
            unchecked-value="not_accepted"
            switch
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
        <button class="btn btn-primary my-3" @click.prevent="onSubmit">
            Registrieren
        </button>
        <p>
            Sie sind bereits registriert? Jetzt
            <b-link to="/auth/login">Anmelden</b-link>.
        </p>
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
</template>

<script>
    import {
        contactGenderOptions,
        contactTitleOptions
    } from "@/utils/jobDataConfig.json";
    export default {
        name: "RegisterForm",
        data() {
            return {
                gender: null,
                title: null,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password2: "",
                passwordType: "password",
                acceptance: "",
                contactGenderOptions,
                contactTitleOptions,
                errors: []
            };
        },
        methods: {
            async onSubmit() {
                this.$store.dispatch("setOverlay", true);

                const res = await this.$store.dispatch("auth", {
                    type: "register",
                    creds: {
                        gender: this.gender,
                        title: this.title,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password,
                        password2: this.password2,
                        acceptance: this.acceptance
                    }
                });

                if (!res.success) {
                    this.errors = res.errors;
                } else {
                    await this.$store.dispatch("fetchUser");
                    await this.$axios.get(
                        "/api/auth/verification/get-activation-email"
                    );

                    if (this.$store.state.auth.loggedIn) {
                        this.trackEvent(
                            `NewUser: ${this.$store.state.auth.userId}`,
                            "User",
                            "register"
                        );

                        this.$router.push("/auth/account/verification");
                    }
                }

                this.$store.dispatch("setOverlay", false);
            },
            togglePasswordType() {
                this.passwordType === "text"
                    ? (this.passwordType = "password")
                    : (this.passwordType = "text");
            },
            trackEvent: function(label, category, action) {
                this.$gtag.event(action, {
                    event_category: category,
                    event_label: label
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    .svg-inline--fa {
        cursor: pointer;
    }
</style>
