<template>
  <div>
    <b-form v-if="state === 0">
      <label for="email">E-Mail Adresse</label>
      <b-form-input
        id="email"
        v-model="email"
        type="email"
        placeholder="E-Mail Adresse eingeben..."
        autocomplete="email"
        autofocus
        trim
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
        Bitte überprüfen Sie Ihr E-Mail Postfach und geben Sie den erhaltenen
        Code ein.
      </p>
      <label for="secretCode">Code</label>
      <b-form-input
        id="secretCode"
        v-model="secretCode"
        type="text"
        placeholder="Code eingeben..."
        autofocus
        trim
      ></b-form-input>
      <label for="password">Neues Passwort</label>
      <b-input-group>
        <b-form-input
          id="password"
          v-model="password"
          :type="passwordType"
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
        Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe,
        Großbuchstabe, Zahl und Sonderzeichen enthalten.
      </b-form-text>

      <label for="password2">Passwort wiederholen</label>
      <b-input-group>
        <b-form-input
          id="password2"
          v-model="password2"
          :type="passwordType"
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
    </b-form>
    <div v-if="errors" class="error mt-3">
      <b-alert
        v-for="error in errors"
        :key="error.message"
        show
        dismissible
        variant="danger"
        >{{ error.message }}</b-alert
      >
    </div>
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

        const user = await this.$axios.post("/graphql", {
          query: `
                            mutation {
                                resetPasswordGetCode (email: "${this.email.toLowerCase()}") {
                                    _id
                                }
                            }
                        `
        });

        if (user.data.errors) {
          this.errors = user.data.errors;
        } else {
          this.state = 1;
        }

        this.$store.dispatch("setOverlay", false);
      },
      async onSubmitNewPw() {
        this.errors = [];
        this.$store.dispatch("setOverlay", true);

        const user = await this.$axios.post("/graphql", {
          query: `
                        mutation {
                            resetPasswordVerify(
                                email: "${this.email.toLowerCase()}",
                                password: "${this.password}",
                                password2: "${this.password2}",
                                code: "${this.secretCode}"

                            ) {
                                _id
                            }
                        }
                    `
        });

        if (user.data.errors) {
          this.errors = user.data.errors;
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
