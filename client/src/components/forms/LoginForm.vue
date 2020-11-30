<template>
    <b-form>
        <label for="email">E-Mail Addresse</label>
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
                autocomplete="current-password"
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

        <button class="btn btn-primary my-3" @click.prevent="onSubmit">
            Anmelden
        </button>
        <p>
            Noch nicht registriert? Jetzt
            <b-link to="/auth/register">Registrieren</b-link>.
        </p>
        <p>
            <b-link to="/auth/password-reset">Passwort vergessen?</b-link>
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
    export default {
        name: "LoginForm",
        data() {
            return {
                email: "",
                password: "",
                passwordType: "password",
                errors: []
            };
        },
        methods: {
            ...mapActions(["userAuth"]),
            async onSubmit() {
                const res = await this.userAuth({
                    url: "/api/auth/login",
                    userData: {
                        email: this.email,
                        password: this.password
                    }
                });

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
