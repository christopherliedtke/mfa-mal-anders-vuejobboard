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
        <b-input-group-append
          is-text
          style="cursor: pointer"
          @click="togglePasswordType"
        >
          <svg
            v-if="passwordType === 'text'"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path
              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-eye-slash-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
            />
            <path
              d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
            />
          </svg>
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
        <b-input-group-append
          is-text
          style="cursor: pointer"
          @click="togglePasswordType"
        >
          <svg
            v-if="passwordType === 'text'"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path
              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-eye-slash-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
            />
            <path
              d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
            />
          </svg>
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
        class="border-radius2"
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
