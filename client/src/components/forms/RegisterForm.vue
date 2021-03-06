<template>
  <div>
    <BButtonGroup class="d-flex mb-4">
      <b-button
        :variant="isEmployer ? 'primary' : 'outline-primary'"
        @click="toggleRole('employer')"
        >Ich bin Arbeitgeber</b-button
      >
      <b-button
        :variant="isEmployee ? 'primary' : 'outline-primary'"
        @click="toggleRole('employee')"
        >Ich bin MFA / ZFA</b-button
      >
    </BButtonGroup>

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
      <label v-if="isEmployer" for="user-title">Titel</label>
      <b-form-select v-if="isEmployer" id="user-title" v-model="title">
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
      <label for="firstName">Vorname *</label>
      <b-form-input
        id="firstName"
        v-model="firstName"
        type="text"
        placeholder="Vorname eingeben..."
        autocomplete="given-name"
        trim
      ></b-form-input>
      <label for="lastName">Nachname *</label>
      <b-form-input
        id="lastName"
        v-model="lastName"
        type="text"
        placeholder="Nachname eingeben..."
        autocomplete="family-name"
        trim
      ></b-form-input>
      <label for="email">E-Mail Adresse *</label>
      <b-form-input
        id="email"
        v-model="email"
        type="email"
        placeholder="E-Mail Adresse eingeben..."
        autocomplete="email"
        trim
      ></b-form-input>
      <label for="password">Passwort *</label>
      <b-input-group>
        <b-form-input
          id="password"
          v-model="password"
          :type="passwordType"
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
        Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe,
        Großbuchstabe, Zahl und Sonderzeichen enthalten.
      </b-form-text>

      <label for="password2">Passwort wiederholen *</label>
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
      <button class="btn btn-primary my-3" @click.prevent="onSubmit">
        Registrieren
      </button>
      <p>
        Bereits registriert? Jetzt
        <b-link to="/auth/login">Anmelden</b-link>.
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
  </div>
</template>

<script>
  import Vue from "vue";
  import { BButtonGroup } from "bootstrap-vue";
  Vue.component("BButtonGroup", BButtonGroup);
  import {
    contactGenderOptions,
    contactTitleOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "RegisterForm",
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
        errors: []
      };
    },
    mounted() {
      this.toggleRole(this.$route.query.role);
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
            email: this.email.toLowerCase(),
            password: this.password,
            password2: this.password2,
            isEmployer: this.isEmployer,
            isEmployee: this.isEmployee,
            acceptance: this.acceptance
          }
        });

        if (res.errors) {
          this.errors = res.errors;
        } else {
          await this.$store.dispatch("getActivationEmail");

          if (this.$store.state.auth.user._id) {
            this.$gtag.event("sign_up", {
              method: "local",
              event_label: `id: ${this.$store.state.auth.user._id}; type: ${
                this.isEmployer ? "employer" : "employee"
              }`
            });

            this.$matomo &&
              this.$matomo.trackEvent(
                "engagement",
                "sign_up",
                `id: ${this.$store.state.auth.user._id}; type: ${
                  this.isEmployer ? "employer" : "employee"
                }`
              );

            this.$matomo &&
              this.$matomo.setUserId(this.$store.state.auth.user._id);

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
      toggleRole(role) {
        if (role != this.$route.query.role) {
          this.$router.push({ query: { role } });
        }

        if (role === "employee") {
          this.isEmployer = false;
          this.isEmployee = true;
        } else {
          this.isEmployer = true;
          this.isEmployee = false;
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
