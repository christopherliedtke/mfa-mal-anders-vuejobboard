<template>
  <div>
    <h1 class="h3 text-center mb-3">
      Registrierung als
    </h1>
    <div class="btn-group btn-group-sm d-flex mb-4" role="group">
      <b-button
        :variant="isEmployer ? 'primary' : 'outline-primary'"
        class="py-2 py-lg-3"
        style="border-top-left-radius: 35px; border-bottom-left-radius: 35px; flex-basis: 0"
        @click="toggleRole('employer')"
        >Arbeitgeber</b-button
      >
      <b-button
        :variant="isEmployee ? 'primary' : 'outline-primary'"
        class="py-2 py-lg-3 "
        style="flex-basis: 0"
        @click="toggleRole('employee')"
        >MFA&nbsp;|&nbsp;ZFA</b-button
      >
      <b-button
        :variant="isEducational ? 'primary' : 'outline-primary'"
        class="py-2 py-lg-3 "
        style="border-top-right-radius: 35px; border-bottom-right-radius: 35px; flex-basis: 0"
        @click="toggleRole('education')"
        >Fortbildungs&shy;anbieter</b-button
      >
    </div>

    <slot name="intro"></slot>

    <b-form>
      <label for="user-gender">Anrede</label>
      <b-form-select id="user-gender" v-model="gender">
        <b-form-select-option value=""
          >-- Anrede auswählen --</b-form-select-option
        >
        <b-form-select-option
          v-for="genderOption in contactGenderOptions"
          :key="genderOption"
          :value="genderOption"
          >{{ genderOption }}</b-form-select-option
        >
      </b-form-select>
      <label v-if="isEmployer || isEducational" for="user-title">Titel</label>
      <b-form-select
        v-if="isEmployer || isEducational"
        id="user-title"
        v-model="title"
      >
        <b-form-select-option value=""
          >-- Titel auswählen --</b-form-select-option
        >
        <b-form-select-option
          v-for="contactTitle in contactTitleOptions"
          :key="contactTitle"
          :value="contactTitle"
          >{{ contactTitle }}</b-form-select-option
        >
      </b-form-select>
      <label for="firstName" required>Vorname</label>
      <b-form-input
        id="firstName"
        v-model="firstName"
        type="text"
        placeholder="Vorname eingeben..."
        autocomplete="given-name"
        trim
      ></b-form-input>
      <label for="lastName" required>Nachname</label>
      <b-form-input
        id="lastName"
        v-model="lastName"
        type="text"
        placeholder="Nachname eingeben..."
        autocomplete="family-name"
        trim
      ></b-form-input>
      <label for="email" required>E-Mail Adresse</label>
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

      <label for="password2" required>Passwort wiederholen</label>
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
      <b-form-checkbox
        id="acceptance"
        v-model="acceptance"
        class="mt-3"
        name="acceptance"
        value="accepted"
        unchecked-value="not_accepted"
        switch
      >
        Ich habe die
        <b-link href="/agbs" target="_blank">
          AGBs
        </b-link>
        und
        <b-link href="/datenschutz" target="_blank">
          Datenschutzbestimmungen
        </b-link>

        gelesen und akzeptiere diese. *
      </b-form-checkbox>
      <b-btn class="my-3" variant="secondary" block @click.prevent="onSubmit">
        Registrieren
      </b-btn>
    </b-form>

    <p>
      Bereits registriert? Jetzt
      <b-link to="/auth/login"><strong>Einloggen</strong></b-link
      >.
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
  </div>
</template>

<script>
  import {
    contactGenderOptions,
    contactTitleOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "AuthRegisterForm",
    data() {
      return {
        gender: "",
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        passwordType: "password",
        acceptance: "",
        contactGenderOptions,
        contactTitleOptions,
        isEmployer: true,
        isEmployee: false,
        isEducational: false,
        errors: []
      };
    },
    mounted() {
      this.toggleRole(this.$route.query.role);
    },
    methods: {
      async onSubmit() {
        this.$store.dispatch("setOverlay", true);
        this.errors = [];

        try {
          const res = await this.$store.dispatch("auth", {
            type: "register",
            creds: {
              gender: this.gender,
              title: this.title,
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email.toLowerCase(),
              password: this.password,
              password2: this.password2,
              isEmployer: this.isEmployer,
              isEmployee: this.isEmployee,
              isEducational: this.isEducational,
              acceptance: this.acceptance
            }
          });

          if (res.errors) {
            this.errors = res.errors;
          } else {
            await this.$store.dispatch("getActivationEmail");

            if (this.$store.state.auth.user._id) {
              this.$gtag.config({
                user_id: this.$store.state.auth.user._id
              });

              this.$gtag.event("user_register", {
                method: "local",
                user_type: this.isEmployer
                  ? "employer"
                  : this.isEmployee
                  ? "employee"
                  : "educational"
              });

              this.$matomo &&
                this.$matomo.trackEvent(
                  "engagement",
                  "user_register",
                  `id: ${this.$store.state.auth.user._id}; type: ${
                    this.isEmployer
                      ? "employer"
                      : this.isEmployee
                      ? "employee"
                      : "educational"
                  }`
                );
              this.$matomo &&
                this.$matomo.setUserId(this.$store.state.auth.user._id);

              this.$router.push("/auth/account/verification");
            }
          }
        } catch (error) {
          this.$root.$bvToast.toast(
            "Bei Ihrer Registrierung ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu und versuchen es noch einmal. Sollte der Fehler wiederholt auftreten, melden Sie sich bitte über unser Kontaktformular, sodass wir Ihnen schnellstmöglich weiterhelfen können.",
            {
              title: `Fehler bei der Registrierung`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      togglePasswordType() {
        this.passwordType === "text"
          ? (this.passwordType = "password")
          : (this.passwordType = "text");
      },
      toggleRole(role) {
        if (role != this.$route.query.role) {
          this.$router.push({ query: { role } });
        }

        if (role === "employee") {
          this.isEmployer = false;
          this.isEmployee = true;
          this.isEducational = false;
        } else if (role === "education") {
          this.isEmployer = false;
          this.isEmployee = false;
          this.isEducational = true;
        } else {
          this.isEmployer = true;
          this.isEmployee = false;
          this.isEducational = false;
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .svg-inline--fa {
    cursor: pointer;
  }
</style>
