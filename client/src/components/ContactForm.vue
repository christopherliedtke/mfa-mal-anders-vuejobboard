<template>
  <div style="max-width: 600px" class="mx-auto">
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="intro">{{ intro }}</p>
    <b-form>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <label for="gender">Anrede</label>

          <b-form-select
            id="gender"
            v-model="form.gender"
            :state="validated ? (form.gender ? true : null) : null"
          >
            <b-form-select-option value=""
              >-- Titel auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="genderOption in contactGenderOptions"
              :key="genderOption"
              :value="genderOption"
              >{{ genderOption }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="col">
          <label for="title">Titel</label>
          <b-form-select
            id="title"
            v-model="form.title"
            :state="validated ? (form.title ? true : null) : null"
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
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <label for="firstName" required>Vorname</label>
          <b-form-input
            id="firstName"
            v-model="form.firstName"
            type="text"
            placeholder="Vorname eingeben..."
            autocomplete="given-name"
            required
            trim
            :state="validated ? (form.firstName ? true : false) : null"
          ></b-form-input>
        </div>
        <div class="col">
          <label for="lastName" required>Nachname</label>
          <b-form-input
            id="firstName"
            v-model="form.lastName"
            type="text"
            placeholder="Nachname eingeben..."
            autocomplete="family-name"
            required
            trim
            :state="validated ? (form.lastName ? true : false) : null"
          ></b-form-input>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <label for="email" required>E-Mail Adresse</label>
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="E-Mail Adresse eingeben..."
            autocomplete="email"
            required
            trim
            :state="validated ? (form.email ? true : false) : null"
          ></b-form-input>
        </div>
        <div class="col">
          <label for="phone">Telefonnummer</label>
          <b-form-input
            id="phone"
            v-model="form.phone"
            type="tel"
            placeholder="Telefonnummer eingeben..."
            autocomplete="tel"
            trim
          ></b-form-input>
        </div>
      </div>
      <label for="subject" required>Betreff</label>
      <b-form-input
        id="subject"
        v-model="form.subject"
        type="text"
        placeholder="Betreff eingeben..."
        required
        trim
        :state="validated ? (form.subject ? true : false) : null"
      ></b-form-input>
      <label for="message" required>Deine Nachricht</label>
      <b-form-textarea
        id="message"
        v-model="form.message"
        placeholder="Nachricht eingeben..."
        rows="8"
        :state="validated ? (form.message ? true : false) : null"
      ></b-form-textarea>
      <b-form-checkbox
        id="acceptance"
        v-model="form.accepted"
        class="mt-2"
        name="acceptance"
        :value="true"
        :unchecked-value="false"
        switch
        required
        :state="validated ? (form.accepted ? true : false) : null"
      >
        Ich akzeptiere die
        <b-link to="/agbs">
          Nutzungsbedingungen
        </b-link>
        und
        <b-link to="/datenschutz">
          Datenschutzbestimmungen
        </b-link>
        zur Nutzung des Kontaktformulars.
      </b-form-checkbox>

      <b-form-input
        v-model="form.honeypot"
        class="d-none"
        type="text"
        name="firstName"
      ></b-form-input>

      <b-btn class="my-3" variant="secondary" block @click.prevent="onSubmit">
        Absenden
      </b-btn>
    </b-form>

    <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import {
    contactGenderOptions,
    contactTitleOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "ContactForm",
    props: {
      title: { type: String, default: "" },
      intro: { type: String, default: "" }
    },
    data() {
      return {
        form: {
          gender: "",
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          accepted: false,
          honeypot: ""
        },
        contactGenderOptions,
        contactTitleOptions,
        validated: null,
        error: false
      };
    },
    mounted() {
      this.setUserData();
      this.setSubject();
      this.setMessage();
    },
    methods: {
      formValidation() {
        this.validated = true;
        return !this.form.firstName ||
          !this.form.lastName ||
          !this.form.email ||
          !this.form.subject ||
          !this.form.message ||
          !this.form.accepted ||
          this.form.honeypot
          ? false
          : true;
      },
      async onSubmit() {
        this.error = null;

        if (!this.formValidation()) {
          this.error = "Bitte fülle die erforderlichen Felder aus!";
          return null;
        }

        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.post(
            "/api/contact/send",
            this.form
          );

          if (response.data.success) {
            this.validated = null;
            this.resetForm();

            this.$root.$bvToast.toast(
              "Deine Nachricht wurde erfolgreich versandt. Wir melden uns schnellstmöglich bei Dir zurück!",
              {
                title: `Anfrage erfolgreich gesendet`,
                variant: "success",
                toaster: "b-toaster-bottom-right",
                solid: true,
                noAutoHide: true
              }
            );

            this.$gtag.event("contact_form");

            this.$matomo &&
              this.$matomo.trackEvent("engagement", "contact_send_email");
          } else {
            throw new Error();
          }
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Senden Ihrer Anfrage ist leider ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
            {
              title: `Fehler beim Senden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      setUserData() {
        if (this.$store.state.auth.loggedIn) {
          this.form.title = this.$store.state.auth.user.title;
          this.form.gender = this.$store.state.auth.user.gender;
          this.form.firstName = this.$store.state.auth.user.firstName;
          this.form.lastName = this.$store.state.auth.user.lastName;
          this.form.email = this.$store.state.auth.user.email;
        }
      },
      setSubject() {
        if (this.$route.query.subject) {
          this.form.subject = this.$route.query.subject;
        }
      },
      setMessage() {
        if (this.$route.query.message) {
          this.form.message = this.$route.query.message;
        }
      },
      resetForm() {
        for (const key in this.form) {
          this.form[key] = "";
        }
      }
    }
  };
</script>
