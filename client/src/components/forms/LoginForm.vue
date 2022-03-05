<template>
  <b-form @keydown.enter="onSubmit">
    <label for="email" required>E-Mail Addresse</label>
    <b-form-input
      id="email"
      v-model="email"
      type="email"
      placeholder="E-Mail Adresse eingeben..."
      autocomplete="email"
      trim
    ></b-form-input>
    <label for="password" required>Passwort</label>
    <b-input-group>
      <b-form-input
        id="password"
        v-model="password"
        :type="passwordType"
        placeholder="Passwort eingeben..."
        autocomplete="current-password"
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

    <b-btn
      variant="secondary"
      block
      class="mt-3 mb-4"
      @click.prevent="onSubmit"
    >
      Login
    </b-btn>
    <p>
      Noch nicht registriert? Jetzt
      <b-link to="/auth/register"><strong>Registrieren</strong></b-link
      >.
    </p>
    <p>
      <b-link to="/auth/password-reset"
        ><strong>Passwort vergessen?</strong></b-link
      >
    </p>
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
  </b-form>
</template>

<script>
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
      async onSubmit() {
        this.$store.dispatch("setOverlay", true);

        const res = await this.$store.dispatch("auth", {
          type: "login",
          creds: {
            email: this.email.toLowerCase(),
            password: this.password
          }
        });

        if (res.errors) {
          this.errors = res.errors;
        } else {
          if (this.$store.state.auth.user.status === "pending") {
            this.$router.push("/auth/account/verification");
          } else if (this.$store.state.auth.loggedIn) {
            if (this.$store.state.auth.user.isEmployee) {
              this.$router.push(
                this.$route.query.redirect ||
                  "/user/gespeicherte-stellenanzeigen"
              );
            } else {
              this.$router.push(
                this.$route.query.redirect || "/user/stellenanzeigen"
              );
            }

            this.$store.dispatch("getStarredJobs");

            this.$gtag.event("user_login", {
              method: "local",
              event_label: this.$store.state.auth.user._id
            });
          }
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
