<template>
  <b-form>
    <label for="email">E-Mail Addresse</label>
    <b-form-input
      id="email"
      v-model="email"
      type="email"
      placeholder="E-Mail Adresse eingeben..."
      autocomplete="email"
      trim
    ></b-form-input>
    <label for="password">Passwort</label>
    <b-input-group>
      <b-form-input
        id="password"
        v-model="password"
        :type="passwordType"
        placeholder="Passwort eingeben..."
        autocomplete="current-password"
      ></b-form-input>
      <b-input-group-append is-text>
        <Fa
          :icon="passwordType === 'text' ? 'eye' : 'eye-slash'"
          size="lg"
          @click="togglePasswordType"
        />
      </b-input-group-append>
    </b-input-group>

    <button class="btn btn-primary my-3" @click.prevent="onSubmit">
      Login
    </button>
    <p>
      Noch nicht registriert? Jetzt
      <b-link to="/auth/register">Registrieren</b-link>.
    </p>
    <p>
      <b-link to="/auth/password-reset">Passwort vergessen?</b-link>
    </p>
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
                this.$route.query.redirect || "/user/dashboard?tab=4"
              );
            } else {
              this.$router.push(
                this.$route.query.redirect || "/user/dashboard?tab=1"
              );
            }
          }

          this.$gtag.event("login", {
            method: "local",
            event_label: this.$store.state.auth.user._id
          });

          this.$matomo &&
            this.$matomo.trackEvent(
              "engagement",
              "login",
              this.$store.state.auth.user._id
            );

          this.$matomo &&
            this.$matomo.setUserId(this.$store.state.auth.user._id);
        }

        this.$store.dispatch("getStarredJobs");

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
