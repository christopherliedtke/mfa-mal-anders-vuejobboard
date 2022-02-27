<template>
  <div>
    <b-form id="jobseek-contact-form">
      <h3 class="h5 mb-0">Ihre Kontaktdaten</h3>
      <div class="row">
        <div class="col-12 col-lg-3">
          <label for="gender" class="d-block">Anrede</label>
          <b-form-select id="gender" v-model="form.gender">
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
        </div>
        <div class="col-12 col-lg-3">
          <label for="title" class="d-block">Titel</label>
          <b-form-select id="title" v-model="form.title">
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

        <div class="w-100"></div>

        <div class="col-12 col-lg-4">
          <label for="firstName" required>Vorname</label>
          <b-form-input
            id="firstName"
            v-model="form.firstName"
            :state="validated ? (form.firstName ? true : false) : null"
            type="text"
            placeholder="Vorname eingeben..."
            autocomplete="given-name"
            trim
          ></b-form-input>
        </div>
        <div class="col-12 col-lg-4">
          <label for="lastName" required>Nachname</label>
          <b-form-input
            id="lastName"
            v-model="form.lastName"
            :state="validated ? (form.lastName ? true : false) : null"
            type="text"
            placeholder="Nachname eingeben..."
            autocomplete="family-name"
            trim
          ></b-form-input>
        </div>
        <div class="col-12 col-lg-8">
          <label for="email" required>E-Mail Adresse</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text>@</b-input-group-text>
            </template>
            <b-form-input
              id="email"
              v-model="form.email"
              :state="validated ? (form.email ? true : false) : null"
              type="email"
              placeholder="E-Mail Adresse eingeben..."
              autocomplete="email"
              trim
              aria-describedby="email-help"
            />
          </b-input-group>
          <b-form-text id="email-help" class="ml-1"
            >Ihre E-Mail Adresse wird der/dem Jobsuchenden zum Antworten auf
            Ihre Nachricht angezeigt.</b-form-text
          >
        </div>
        <div class="col-12 col-lg-8">
          <label for="job" class="d-block">Ihre freie Stellenanzeige</label>
          <b-form-select id="job" v-model="form.jobId">
            <b-form-select-option value=""
              >-- Stellenanzeige auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="job in myJobs"
              :key="job.value"
              :value="job.value"
              >{{ job.text }}</b-form-select-option
            >
          </b-form-select>
        </div>
      </div>

      <label for="message" class="h5 mt-4">Ihre Nachricht *</label>
      <b-form-textarea
        id="message"
        v-model="form.message"
        rows="10"
        lazy-formatter
        :formatter="formatter"
        :state="validated ? (form.message ? true : false) : null"
        placeholder="Ihre Nachricht eingeben..."
        aria-describedby="message-help"
        required
        trim
      />
      <b-form-text id="message-help" class="ml-1"
        >Stellen Sie kurz Ihre offene Stelle mit Aufgabenbereichen,
        Profilanforderungen und Benefits vor. Fügen Sie ggfls. einen Link zum
        Stellenangebot ein. Gehen Sie auch darauf ein, warum die Person hinter
        dem Stellengesuch zur Stelle passen würde.</b-form-text
      >

      <b-form-checkbox
        id="accepted"
        v-model="form.accepted"
        :state="validated ? form.accepted : null"
        name="accepted"
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

      <div class="d-flex justify-content-between my-4">
        <b-button variant="outline-danger" @click.prevent="$router.go(-1)">
          Zurück
        </b-button>
        <b-button
          variant="success"
          :disabled="success"
          @click.prevent="onSubmit"
        >
          <span v-if="success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-check-all mr-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
              />
            </svg>
            Erfolgreich gesendet
          </span>
          <span v-else>Absenden</span>
        </b-button>
      </div>
    </b-form>

    <b-alert
      v-if="error"
      class="border-radius2 mt-3"
      show
      dismissible
      variant="danger"
      >{{ error }}</b-alert
    >
    <b-alert
      v-if="success"
      class="border-radius2 mt-3"
      show
      dismissible
      variant="success"
    >
      Ihre Nachricht wurde erfolgreich gesendet. Sie erhalten eine Kopie Ihrer
      Nachricht an Ihre angegebene E-Mail Adresse. Wir wünschen Ihnen viel
      Erfolg im Gespräch{{ name ? " mit " + name : "" }}.</b-alert
    >
  </div>
</template>

<script>
  import {
    contactGenderOptions,
    contactTitleOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "JobSeekContactForm",
    props: {
      name: {
        type: String,
        default: ""
      },
      jobSeekId: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        form: {
          gender: this.$store.state.auth.user.gender || "",
          title: this.$store.state.auth.user.title || "",
          firstName: this.$store.state.auth.user.firstName || "",
          lastName: this.$store.state.auth.user.lastName || "",
          email: this.$store.state.auth.user.email || "",
          message: "",
          jobId: "",
          accepted: false
        },
        myJobs: null,
        validated: null,
        success: null,
        error: false,
        contactGenderOptions,
        contactTitleOptions
      };
    },
    async created() {
      await this.getMyJobs();
    },
    methods: {
      async getMyJobs() {
        this.$store.dispatch("setOverlay", true);

        try {
          const myJobs = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  myJobs {
                    _id
                    title
                    status
                    company {
                      name
                    }
                  }
                }
              `
            }
          });

          if (!myJobs.data.data.myJobs) {
            return null;
          }

          this.myJobs = myJobs.data.data.myJobs
            .filter(job => job.status == "published")
            .map(job => {
              return {
                value: job._id,
                text: `${job.title} | ${job.company.name}`
              };
            });
        } catch (error) {
          //
        }

        this.$store.dispatch("setOverlay", false);
      },
      async onSubmit() {
        this.error = false;

        if (!this.formValidation()) {
          this.error = "Bitte füllen Sie die erforderlichen Felder aus!";

          return null;
        }

        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.post(
            "/api/send-email/contact-jobseek",
            { ...this.form, jobSeekId: this.jobSeekId }
          );

          if (response.data.error) {
            this.error = response.data.error;
          }

          if (response.data.success) {
            this.success = response.data.success;

            this.$root.$bvToast.toast(
              "Ihre Nachricht wurde erfolgreich versandt.",
              {
                title: `Nachricht versandt`,
                variant: "success",
                toaster: "b-toaster-bottom-right",
                solid: true
              }
            );

            this.$gtag.event("jobseek_contact", {
              event_label: `${this.jobSeekId} by ${this.$store.state.auth.user._id}`
            });

            this.resetForm();
          }
        } catch (err) {
          this.$root.$bvToast.toast(
            `Es ist ein Fehler beim Versenden aufgetreten. Bitte versuchen Sie die Seite neu zu laden oder nehmen Sie ggfls. Kontakt über unser Kontaktformular zu uns auf.`,
            {
              title: `Fehler beim Versenden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      resetForm() {
        this.validated = null;

        this.form = {
          gender: "",
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          accepted: false
        };
      },
      formatter(value) {
        return value.replaceAll('"', "'");
      },
      formValidation() {
        this.validated = true;
        return !this.form.firstName ||
          !this.form.lastName ||
          !this.form.email ||
          !this.form.message ||
          !this.form.accepted
          ? false
          : true;
      }
    }
  };
</script>
