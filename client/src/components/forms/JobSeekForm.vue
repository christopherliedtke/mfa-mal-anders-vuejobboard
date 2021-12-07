<template>
  <div class="job-seek-form position-relative">
    <b-form id="job-seek-form">
      <b-form-group
        v-if="step === 1 || jobSeek._id || validated != null"
        class="mb-4 mb-lg-5"
      >
        <h3 class="bold mb-0">Über Dich und Deine Stellensuche</h3>

        <label for="title" required>Titel des Stellengesuchs</label>
        <b-form-input
          id="title"
          v-model="jobSeek.title"
          type="text"
          lazy-formatter
          :formatter="formatter"
          :state="
            validated
              ? jobSeek.title && jobSeek.title.length <= 155
                ? true
                : false
              : null
          "
          aria-describedby="title-help title-feedback"
          placeholder="Z. B. Erfahrene Abrechnungsmanagerin sucht 30h Stelle"
          required
          trim
        />
        <b-form-invalid-feedback id="title-feedback" class="ml-2">
          Bitte nutzen Sie maximal 155 Zeichen.
        </b-form-invalid-feedback>
        <b-form-text id="title-help" class="ml-2"
          ><span :class="[{ 'text-danger': jobSeek.title.length > 155 }]">
            {{ 155 - jobSeek.title.length }} Zeichen verfügbar</span
          ></b-form-text
        >

        <label for="about" required>Über Mich</label>
        <TipTapEditor
          :validated="validated"
          :content="jobSeek.about"
          placeholder="Wer bist Du? Warum bist Du auf Stellensuche? Hast Du spezielle Anforderungen (Wochenstunden, Arbeitszeiten, etc.) an Deinen neuen Job?"
          @update-content="jobSeek.about = $event"
        />

        <label for="experiences" required>Meine Berufserfahrung</label>
        <TipTapEditor
          :validated="validated"
          :content="jobSeek.experiences"
          placeholder="In welchen Bereichen hast Du Berufserfahrung? Wofür warst Du in vergangenen bzw. Deiner aktuellen Anstellung verantwortlich? Was zeichnet Dich hier aus?"
          @update-content="jobSeek.experiences = $event"
        />

        <label for="tasks" required>Gewünschte Aufgabenbereiche</label>
        <TipTapEditor
          :validated="validated"
          :content="jobSeek.tasks"
          placeholder="Welche Aufgabenbereiche möchtest Du gern übernehmen? An welchen Aufgabenbereichen bist Du ggfls. nicht interessiert?"
          @update-content="jobSeek.tasks = $event"
        />

        <label class="mb-0 mt-4"
          >Abgeschlossene Ausbildung
          <small class="text-muted"
            >Sonstige abgeschlossene Ausbildungen bitte bei QUALIFIKATIONEN
            angeben</small
          ></label
        >
        <div class="d-flex flex-wrap">
          <b-form-checkbox
            id="is-mfa"
            v-model="jobSeek.isMfa"
            class="mr-sm-4"
            name="is-mfa"
          >
            Medizinische Fachangestellte (MFA)
          </b-form-checkbox>
          <b-form-checkbox
            id="is-zfa"
            v-model="jobSeek.isZfa"
            class="mr-sm-4"
            name="is-zfa"
          >
            Zahnmedizinische Fachangestellte (ZFA)
          </b-form-checkbox>
        </div>

        <label for="qualifications" class="mt-4"
          >Qualifikationen, Abgeschlossene Weiterbildungen, etc.
        </label>
        <b-form-tags
          v-model="jobSeek.qualifications"
          :state="
            validated ? (jobSeek.qualifications.length > 0 ? true : null) : null
          "
          input-id="qualifications"
          placeholder="Eingeben und Enter drücken..."
          duplicate-tag-text="Doppelte Qualifikation(en)"
          tag-pills
          remove-on-delete
          tag-class="text-light"
        ></b-form-tags>

        <label for="employmentTypes" required class="mt-4 mb-0"
          >Anstellungsarten
        </label>
        <div class="d-flex flex-wrap">
          <b-form-checkbox
            id="part-time"
            v-model="jobSeek.partTime"
            class="mr-md-2"
            name="part-time"
          >
            Teilzeit
          </b-form-checkbox>
          <b-form-checkbox
            id="full-time"
            v-model="jobSeek.fullTime"
            class="mr-md-2"
            name="full-time"
          >
            Vollzeit
          </b-form-checkbox>
          <b-form-checkbox
            id="training"
            v-model="jobSeek.training"
            class="mr-md-2"
            name="training"
          >
            Ausbildung
          </b-form-checkbox>
          <b-form-checkbox
            id="mini-job"
            v-model="jobSeek.miniJob"
            class="mr-md-2"
            name="mini-job"
          >
            450€ – Basis
          </b-form-checkbox>
        </div>

        <div class="row">
          <div class="col-12 col-lg-4">
            <label for="min-salary" class="mt-4"
              >Dein Gehaltswunsch
              <small class="text-muted">(monatlich brutto)</small>
            </label>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>€</b-input-group-text>
              </template>
              <b-form-input
                id="min-salary"
                v-model="jobSeek.salaryMin"
                type="number"
                step="1"
                :state="validated ? (jobSeek.salaryMin ? true : null) : null"
                placeholder="Min. Monatsgehalt eingeben..."
                aria-describedby="min-salary-help"
              />
            </b-input-group>
            <b-form-text id="min-salary-help"
              ><span
                >Informiere Dich mit unserem
                <b-link
                  :to="
                    `/karriere/${
                      jobSeek.isZfa ? 'zfa' : 'mfa'
                    }/gehalt#gehaltsrechner`
                  "
                  target="_blank"
                  >Gehaltsrechner</b-link
                >
              </span></b-form-text
            >
          </div>
        </div>
      </b-form-group>

      <b-form-group
        v-if="step === 0 || jobSeek._id || validated != null"
        class="mb-4 mb-lg-5"
      >
        <h3 class="bold mb-0">Persönliche Daten</h3>

        <b-form-checkbox
          id="anonymized"
          v-model="jobSeek.anonymized"
          name="anonymized"
          aria-describedby="anonymized-help"
          switch
        >
          Meine Daten anonym veröffentlichen *
        </b-form-checkbox>
        <b-form-text id="anonymized-help" class="ml-2"
          >Dein Name wird mit Initialien abgekürzt – z.&nbsp;B. M.M. statt Maxi
          Mustermann</b-form-text
        >

        <div class="row">
          <div class="col-12 col-lg-3">
            <label for="user-gender" class="d-block">Anrede</label>
            <b-form-select id="user-gender" v-model="jobSeek.gender">
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
          <div class="col-12 col-lg-4">
            <label for="firstName" required>Vorname</label>
            <b-form-input
              id="firstName"
              v-model="jobSeek.firstName"
              :state="validated ? (jobSeek.firstName ? true : false) : null"
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
              v-model="jobSeek.lastName"
              :state="validated ? (jobSeek.lastName ? true : false) : null"
              type="text"
              placeholder="Nachname eingeben..."
              autocomplete="family-name"
              trim
            ></b-form-input>
          </div>
          <div class="col-12 col-lg-7">
            <label for="email" required>E-Mail Adresse</label>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>@</b-input-group-text>
              </template>
              <b-form-input
                id="email"
                v-model="$store.state.auth.user.email"
                :state="
                  validated
                    ? $store.state.auth.user.email
                      ? true
                      : false
                    : null
                "
                type="email"
                placeholder="E-Mail Adresse eingeben..."
                aria-describedby="email-help"
                autocomplete="email"
                trim
                disabled
              />
            </b-input-group>
            <b-form-text id="email-help"
              >Es wird Deine Account E-Mail Adresse genutzt. Diese kannst Du
              unter KONTO > ACCOUNT ändern. Deine E-Mail Adresse ist
              <u>nicht</u> öffentlich ersichtlich. Nachrichten von Arbeitgebern
              werden über unsere Plattform an diese E-Mail Adresse
              weitergeleitet.</b-form-text
            >
          </div>
        </div>

        <!-- <label for="birth-date">Geburtsdatum </label>
      <BFormDatepicker
        id="birth-date"
        v-model="birthDate"
        :state="validated ? true : null"
        placeholder="Geburtsdatum wählen"
        :reset-button="true"
        :reset-value="''"
        label-reset-button="Zurücksetzen"
        show-decade-nav
        initial-date="2000-01-01"
        label-help=""
        start-weekday="1"
      /> -->
        <h5 class="mt-4">Dein Wohnort</h5>
        <div class="row">
          <div class="col-12 col-lg-7 mb-2">
            <label for="location" required class="mt-0">Ort</label>
            <b-form-input
              id="location"
              v-model="jobSeek.location"
              type="text"
              lazy-formatter
              :formatter="formatter"
              :state="validated ? (jobSeek.location ? true : false) : null"
              placeholder="Ort eingeben..."
              aria-describedby="location-help"
              required
              trim
            />
          </div>
          <div class="col-12 col-lg-2 mb-2">
            <label for="zip-code" required class="mt-0">PLZ</label>
            <b-form-input
              id="zip-code"
              v-model="jobSeek.zipCode"
              type="text"
              :state="validated ? (jobSeek.zipCode ? true : false) : null"
              placeholder="PLZ eingeben..."
              aria-describedby="zip-code-help"
              required
              trim
            />
          </div>
          <div class="col-12 col-lg-7">
            <label for="file">Dein Bild </label>
            <ImageUploader
              :validated="validated"
              :image-url="jobSeek.imageUrl"
              :width="250"
              :height="250"
              fit="outside"
              aria-describedby="image-help"
              @update-url="jobSeek.imageUrl = $event"
            />
            <b-form-text id="image-help" class="ml-2"
              ><span>[optional] jpg, png | max. 5MB</span></b-form-text
            >
            <div
              class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2 ml-2"
              style="width: 85px; height: 85px"
            >
              <b-img
                v-if="jobSeek.imageUrl"
                :src="jobSeek.imageUrl"
                class="border-radius1"
                fluid
              />
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-person-circle p-3 text-light"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
          </div>
        </div>

        <b-form-checkbox
          id="accepted"
          v-model="jobSeek.accepted"
          :state="validated ? jobSeek.accepted : null"
          class="mt-3"
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
      </b-form-group>

      <div class="d-flex justify-content-between my-4">
        <div>
          <b-button
            variant="outline-danger"
            class="mr-2"
            @click.prevent="$router.go(-1)"
          >
            Abbrechen
          </b-button>
          <b-button
            v-if="step > 0 && !jobSeek._id && validated === null"
            variant="outline-danger"
            @click.prevent="step -= 1"
          >
            Zurück
          </b-button>
        </div>
        <b-button
          v-if="step === 1 || jobSeek._id"
          variant="success"
          @click.prevent="onSubmit"
        >
          Speichern
        </b-button>
        <b-button v-else variant="success" @click.prevent="step = 1">
          Weiter
        </b-button>
      </div>
    </b-form>

    <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import TipTapEditor from "@/components/utils/TipTapEditor.vue";
  import ImageUploader from "@/components/utils/ImageUploader.vue";
  import { contactGenderOptions } from "@/config/formDataConfig.json";
  import { BFormDatepicker, BFormTags } from "bootstrap-vue";
  import Vue from "vue";
  Vue.component("BFormDatepicker", BFormDatepicker);
  Vue.component("BFormTags", BFormTags);
  export default {
    name: "JobSeekForm",
    components: {
      TipTapEditor,
      ImageUploader
    },
    data() {
      return {
        jobSeek: {
          _id:
            this.$route.params.jobSeekId != "new"
              ? this.$route.params.jobSeekId
              : "",
          title: "",
          about: "",
          tasks: "",
          experiences: "",
          isMfa: false,
          isZfa: false,
          qualifications: [],
          partTime: true,
          fullTime: true,
          training: false,
          miniJob: false,
          salaryMin: 0,
          anonymized: true,
          gender: this.$store.state.auth.user.gender || "",
          firstName: this.$store.state.auth.user.firstName || "",
          lastName: this.$store.state.auth.user.lastName || "",
          // birthDate: null,
          imageUrl: "",
          zipCode: "",
          location: "",
          accepted: false
        },
        step: 0,
        contactGenderOptions,
        validated: null,
        success: "",
        error: ""
      };
    },
    // computed: {
    //   birthDate: {
    //     get() {
    //       if (this.jobSeek.birthDate) {
    //         return new Date(this.jobSeek.birthDate);
    //       } else {
    //         return "";
    //       }
    //     },
    //     set(value) {
    //       if (value) {
    //         this.jobSeek.birthDate = new Date(value).getTime();
    //       } else {
    //         this.jobSeek.birthDate = null;
    //       }
    //     }
    //   }
    // },

    async created() {
      await this.getJobSeek();
    },
    methods: {
      async getJobSeek() {
        if (this.$route.params.jobSeekId == "new") {
          return null;
        }

        this.$store.dispatch("setOverlay", true);

        try {
          const jobSeek = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  myJobSeek(
                    _id: "${this.$route.params.jobSeekId}"
                  ) {
                    _id
                    title
                    about
                    experiences
                    tasks
                    isMfa
                    isZfa
                    qualifications
                    partTime
                    fullTime
                    training
                    miniJob
                    salaryMin
                    anonymized
                    gender
                    firstName
                    lastName
                    imageUrl
                    location
                    zipCode
                    accepted
                  }
                }
              `
            }
          });

          if (jobSeek.data.errors) {
            throw new Error();
          }

          this.jobSeek = jobSeek.data.data.myJobSeek;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden des Stellengesuchs ist ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite neu lädst.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async onSubmit() {
        this.error = false;

        if (!this.formValidation()) {
          this.error =
            "Bitte fülle die erforderlichen Felder aus und beachte die Zeichenvorgaben!";

          return null;
        }

        this.$store.dispatch("setOverlay", true);

        let jobSeekMutationType;

        this.jobSeek._id
          ? (jobSeekMutationType = "updateJobSeek")
          : (jobSeekMutationType = "addJobSeek");

        try {
          const jobSeekQuery = `
            mutation {
              ${jobSeekMutationType}(
                ${
                  jobSeekMutationType === "updateJobSeek"
                    ? `_id: "${this.jobSeek._id}"`
                    : ""
                }
                title: "${this.jobSeek.title}"
                about: "${this.jobSeek.about.replace(/"/g, '\\"')}"
                experiences: "${this.jobSeek.experiences.replace(/"/g, '\\"')}"
                tasks: "${this.jobSeek.tasks.replace(/"/g, '\\"')}"
                isMfa: ${this.jobSeek.isMfa}
                isZfa: ${this.jobSeek.isZfa}
                qualifications: ${JSON.stringify(this.jobSeek.qualifications)}
                partTime: ${this.jobSeek.partTime}
                fullTime: ${this.jobSeek.fullTime}
                training: ${this.jobSeek.training}
                miniJob: ${this.jobSeek.miniJob}
                salaryMin: ${this.jobSeek.salaryMin}
                anonymized: ${this.jobSeek.anonymized}
                gender: "${this.jobSeek.gender}"
                firstName: "${this.jobSeek.firstName}"
                lastName: "${this.jobSeek.lastName}"
                publicFirstName: "${
                  this.jobSeek.anonymized
                    ? this.jobSeek.firstName.charAt() + "."
                    : this.jobSeek.firstName
                }"
                publicLastName: "${
                  this.jobSeek.anonymized
                    ? this.jobSeek.lastName.charAt() + "."
                    : this.jobSeek.lastName
                }"
                imageUrl: "${this.jobSeek.imageUrl}"
                location: "${this.jobSeek.location}"
                zipCode: "${this.jobSeek.zipCode}"
                accepted: ${this.jobSeek.accepted}
              ) {
                _id
              }
            }
          `;

          const jobSeekQueryResponse = await this.$axios.post(`/graphql`, {
            query: jobSeekQuery
          });

          if (jobSeekQueryResponse.data.errors) {
            throw new Error(jobSeekQueryResponse.data.errors[0].message);
          }

          this.$gtag.event(jobSeekMutationType, {
            event_label: `${this.jobSeek.title} | ${this.jobSeek.location} - ${jobSeekQueryResponse.data.data[jobSeekMutationType]._id}`
          });

          this.$root.$bvToast.toast(
            "Das Stellengesuch wurde erfolgreich gespeichert.",
            {
              title: `Stellengesuch gespeichert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );

          window.history.length > 2
            ? this.$router.go(-1)
            : this.$router.push("/user/stellengesuche");
        } catch (err) {
          this.$root.$bvToast.toast(
            `Beim Speichern des Stellengesuchs ist ein Fehler aufgetreten. ${err}`,
            {
              title: `Fehler beim Speichern`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      formatter(value) {
        return value.replaceAll('"', "'");
      },
      formValidation() {
        this.validated = true;
        return !this.jobSeek.title ||
          this.jobSeek.title.length > 155 ||
          !this.jobSeek.about ||
          !this.jobSeek.tasks ||
          !this.jobSeek.experiences ||
          !this.jobSeek.firstName ||
          !this.jobSeek.lastName ||
          !this.jobSeek.zipCode ||
          !this.jobSeek.location ||
          !this.jobSeek.accepted
          ? false
          : true;
      }
    }
  };
</script>
