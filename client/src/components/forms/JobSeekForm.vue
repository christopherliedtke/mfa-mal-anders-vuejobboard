<template>
  <div class="job-seek-form position-relative">
    <b-form id="job-seek-form">
      <h3 class="bold mt-4 mb-0">Über Dich und Deine Stellensuche</h3>

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

      <label for="min-salary"
        >Dein Gehaltswunsch (monatlich brutto)
        <small class="text-muted"
          >Informiere Dich mit unserem
          <b-link
            :to="
              `/karriere/${jobSeek.isZfa ? 'zfa' : 'mfa'}/gehalt#gehaltsrechner`
            "
            target="_blank"
            >Gehaltsrechner</b-link
          >
        </small>
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
        />
      </b-input-group>

      <h3 class="bold mt-4 mt-lg-5 mb-0">Persönliche Daten</h3>

      <b-form-checkbox
        id="anonymized"
        v-model="jobSeek.anonymized"
        name="anonymized"
        switch
      >
        Meine Daten anonym veröffentlichen *
        <span class="small text-muted"
          >Deine E-Mail Adresse ist nicht öffentlich ersichtlich. Dein Name wird
          mit Initialien abgekürzt – z.&nbsp;B. M.M. statt Maxi Mustermann</span
        >
      </b-form-checkbox>

      <label for="user-gender">Anrede</label>
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

      <label for="email" required>E-Mail Adresse</label>
      <b-form-input
        id="email"
        v-model="jobSeek.contactEmail"
        :state="validated ? (jobSeek.contactEmail ? true : false) : null"
        type="email"
        placeholder="E-Mail Adresse eingeben..."
        autocomplete="email"
        trim
      ></b-form-input>

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

      <label for="file"
        >Dein Bild <small>[optional] (jpg, png | max. 5MB)</small></label
      >
      <ImageUploader
        :validated="validated"
        :image-url="jobSeek.imageUrl"
        :width="250"
        :height="250"
        fit="outside"
        @update-url="jobSeek.imageUrl = $event"
      />
      <div
        class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2 ml-1"
        style="width: 85px; height: 85px"
      >
        <b-img v-if="jobSeek.imageUrl" :src="jobSeek.imageUrl" fluid />
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

      <label for="location"
        >Ort * <small class="text-muted">Dein Wohnort</small></label
      >
      <b-form-input
        id="location"
        v-model="jobSeek.location"
        type="text"
        lazy-formatter
        :formatter="formatter"
        :state="validated ? (jobSeek.location ? true : false) : null"
        placeholder="Ort eingeben..."
        required
        trim
      />

      <label for="zip-code"
        >PLZ * <small class="text-muted">zu Deinem Wohnort</small></label
      >
      <b-form-input
        id="zip-code"
        v-model="jobSeek.zipCode"
        type="text"
        :state="validated ? (jobSeek.zipCode ? true : false) : null"
        placeholder="PLZ eingeben..."
        required
        trim
      />
    </b-form>
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
          contactEmail: this.$store.state.auth.user.email || "",
          // birthDate: null,
          imageUrl: "",
          zipCode: "",
          location: ""
        },
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
    methods: {
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
          !this.jobSeek.contactEmail ||
          !this.jobSeek.zipCode ||
          !this.jobSeek.location
          ? false
          : true;
      }
    }
  };
</script>
