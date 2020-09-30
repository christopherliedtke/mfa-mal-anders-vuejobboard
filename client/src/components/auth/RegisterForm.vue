<template>
    <b-form>
        <Overlay :show="showOverlay"></Overlay>
        <label for="firstName">Vorname</label>
        <b-form-input
            type="text"
            v-model="firstName"
            id="firstName"
            placeholder="Vorname eingeben..."
            autocomplete="given-name"
            autofocus
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
                <b-icon
                    :icon="
                        passwordType === 'text' ? 'eye-fill' : 'eye-slash-fill'
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
                        passwordType === 'text' ? 'eye-fill' : 'eye-slash-fill'
                    "
                    font-scale="1.2"
                    @click="togglePasswordType"
                ></b-icon>
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
            <b-link to="/login">Anmelden</b-link>.
        </p>
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
    </b-form>
</template>

<script>
    import { mapActions } from "vuex";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "RegisterForm",
        components: {
            Overlay
        },
        data() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password2: "",
                passwordType: "password",
                acceptance: "",
                showOverlay: false,
                errors: []
            };
        },
        methods: {
            ...mapActions(["userAuth"]),
            async onSubmit() {
                this.showOverlay = true;

                const res = await this.userAuth({
                    url: "/api/auth/register",
                    userData: {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password,
                        password2: this.password2,
                        acceptance: this.acceptance
                    }
                });
                this.showOverlay = false;

                if (!res.success) {
                    this.errors = res.errors;
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
    .b-icon {
        cursor: pointer;
    }
</style>
