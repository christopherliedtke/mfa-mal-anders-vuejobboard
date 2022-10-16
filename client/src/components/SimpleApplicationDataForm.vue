<template>
  <div v-if="job" class="bg-light-shade border-radius1 shadow1 p-4 p-lg-5">
    <div v-if="step === 1" class="d-flex flex-column align-items-center">
      <h2
        class="h4 bg-secondary text-light d-inline-block border-radius1 p-1 mb-3"
      >
        Wie ist Deine aktuelle Job-Situation?
      </h2>
      <b-button
        class="mb-2"
        variant="outline-primary"
        :pressed="application.employmentStatus === 'Sofort verfügbar'"
        @click="
          () => {
            application.employmentStatus = 'Sofort verfügbar';
            step++;
          }
        "
        >Sofort verfügbar</b-button
      >
      <b-button
        class="mb-2"
        variant="outline-primary"
        :pressed="
          application.employmentStatus === 'Verfügbar nach Kündigungsfrist'
        "
        @click="
          () => {
            application.employmentStatus = 'Verfügbar nach Kündigungsfrist';
            step++;
          }
        "
        >Verfügbar nach Kündigungsfrist</b-button
      >
    </div>

    <div v-if="step === 2" class="d-flex flex-column align-items-center">
      <h2
        class="h4 bg-secondary text-light d-inline-block border-radius1 p-1 mb-3"
      >
        Hast Du eine abgeschlossene Ausbildung als
        {{ job.profession ? job.profession : "MFA oder ZFA" }}?
      </h2>
      <b-button
        v-if="job.profession === 'MFA' || !job.profession"
        class="mb-2"
        variant="outline-primary"
        :pressed="application.training === 'Abgeschlossene MFA Ausbildung'"
        @click="
          () => {
            application.training = 'Abgeschlossene MFA Ausbildung';
            step++;
          }
        "
        >Abgeschlossene MFA Ausbildung</b-button
      >
      <b-button
        v-if="job.profession === 'ZFA' || !job.profession"
        class="mb-2"
        variant="outline-primary"
        :pressed="application.training === 'Abgeschlossene ZFA Ausbildung'"
        @click="
          () => {
            application.training = 'Abgeschlossene ZFA Ausbildung';
            step++;
          }
        "
        >Abgeschlossene ZFA Ausbildung</b-button
      >
      <b-button
        v-if="job.profession === 'MFA' || !job.profession"
        class="mb-2"
        variant="outline-primary"
        :pressed="application.training === 'In MFA Ausbildung'"
        @click="
          () => {
            application.training = 'In MFA Ausbildung';
            step++;
          }
        "
        >Ich befinde mich aktuell in der MFA Ausbildung</b-button
      >
      <b-button
        v-if="job.profession === 'ZFA' || !job.profession"
        class="mb-2"
        variant="outline-primary"
        :pressed="application.training === 'In ZFA Ausbildung'"
        @click="
          () => {
            application.training = 'In ZFA Ausbildung';
            step++;
          }
        "
        >Ich befinde mich aktuell in der ZFA Ausbildung</b-button
      >
      <b-button
        v-if="job.profession === 'MFA' || !job.profession"
        class="mb-2"
        variant="outline-primary"
        :pressed="application.training === 'Suche MFA Ausbildung'"
        @click="
          () => {
            application.training = 'Suche MFA Ausbildung';
            step++;
          }
        "
        >Ich suche eine MFA Ausbildung</b-button
      >
      <b-button
        v-if="job.profession === 'ZFA' || !job.profession"
        class="mb-2"
        variant="outline-primary"
        :pressed="application.training === 'Suche ZFA Ausbildung'"
        @click="
          () => {
            application.training = 'Suche ZFA Ausbildung';
            step++;
          }
        "
        >Ich suche eine ZFA Ausbildung</b-button
      >
      <b-button
        class="mb-2"
        variant="outline-primary"
        :pressed="application.training === 'Quereinsteiger'"
        @click="
          () => {
            application.training = 'Quereinsteiger';
            step++;
          }
        "
        >Ich bin QuereinsteigerIn</b-button
      >
    </div>

    <div v-if="step === 3" class="d-flex flex-column align-items-center">
      <h2
        class="h4 bg-secondary text-light d-inline-block border-radius1 p-1 mb-3"
      >
        Wie viel Berufserfahrung hast Du als
        {{ job.profession ? job.profession : "MFA oder ZFA" }}?
      </h2>
      <b-button
        class="mb-2"
        variant="outline-primary"
        :pressed="application.experience === 'Keine bzw. nur sehr wenig'"
        @click="
          () => {
            application.experience = 'Keine bzw. nur sehr wenig';
            step++;
          }
        "
        >Keine bzw. nur sehr wenig</b-button
      >
      <b-button
        class="mb-2"
        variant="outline-primary"
        :pressed="application.experience === '1 - 5 Jahre'"
        @click="
          () => {
            application.experience = '1 - 5 Jahre';
            step++;
          }
        "
        >1 - 5 Jahre</b-button
      >
      <b-button
        class="mb-2"
        variant="outline-primary"
        :pressed="application.experience === '6 - 10 Jahre'"
        @click="
          () => {
            application.experience = '6 - 10 Jahre';
            step++;
          }
        "
        >6 - 10 Jahre</b-button
      >
      <b-button
        class="mb-2"
        variant="outline-primary"
        :pressed="application.experience === 'mehr als 10 Jahre'"
        @click="
          () => {
            application.experience = 'mehr als 10 Jahre';
            step++;
          }
        "
        >mehr als 10 Jahre</b-button
      >
    </div>

    <div v-if="step === 4" class="d-flex flex-column align-items-center">
      <h2
        class="h4 bg-secondary text-light d-inline-block border-radius1 p-1 mb-3"
      >
        Ich welchen Bereichen hast Du bereits Erfahrung sammeln können?
      </h2>
      <b-form class="w-100" style="max-width: 500px" @submit.prevent>
        <b-form-input
          id="specializations"
          v-model="application.specializations"
          class="w-full"
          type="text"
          aria-describedby="specializations-help"
          placeholder="z.B. Kardiologie, Anmeldung..."
          required
          trim
        />
        <b-form-text id="specializations-help" class="ml-2"
          >(Mehrere Bereiche per Komma trennen)</b-form-text
        >
      </b-form>
      <b-button
        class="mt-3 mb-2"
        variant="secondary"
        :disabled="!application.specializations"
        @click="step++"
        >Weiter</b-button
      >
    </div>

    <div v-if="step === 5" class="d-flex flex-column align-items-center">
      <h2
        class="h4 bg-secondary text-light d-inline-block border-radius1 p-1 mb-3"
      >
        Was ist Dir im neuen Job wichtig?
      </h2>
      <b-form class="w-100" style="max-width: 500px" @submit.prevent>
        <b-form-textarea
          id="requirements"
          v-model="application.requirements"
          placeholder="z.B. Arbeitszeiten, Arbeitsatmosphäre, Weiterentwicklung..."
          rows="4"
        ></b-form-textarea>
      </b-form>
      <b-button
        class="mt-3 mb-2"
        variant="secondary"
        :disabled="!application.requirements"
        @click="step++"
        >Weiter</b-button
      >
    </div>

    <div v-if="step === 6" class="d-flex flex-column align-items-center">
      <h2
        class="h4 bg-success text-light d-inline-block border-radius1 p-1 mb-3"
      >
        Schon geschafft! Hinterlasse nur noch Deine Kontaktdaten für den
        Arbeitgeber, sodass er sich bei Dir melden kann.
      </h2>
      <b-form class="w-100" style="max-width: 500px">
        <label for="contact-first-name" required>Vorname</label>
        <b-form-input
          id="contact-first-name"
          v-model="application.contactFirstName"
          type="text"
          lazy-formatter
          :formatter="formatter"
          :state="
            validated ? (application.contactFirstName ? true : false) : null
          "
          placeholder="Vorname eingeben..."
          trim
        />
        <label for="contact-last-name" required>Nachname</label>
        <b-form-input
          id="contact-last-name"
          v-model="application.contactLastName"
          type="text"
          lazy-formatter
          :formatter="formatter"
          :state="
            validated ? (application.contactLastName ? true : false) : null
          "
          placeholder="Nachname eingeben..."
          trim
        />
        <label for="contact-email" required>E-Mail Adresse</label>
        <b-input-group>
          <template #prepend>
            <b-input-group-text>@</b-input-group-text>
          </template>
          <b-form-input
            id="contact-email"
            v-model="application.contactEmail"
            type="email"
            lazy-formatter
            :formatter="formatter"
            :state="
              validated ? (application.contactEmail ? true : false) : null
            "
            placeholder="E-Mail Adresse eingeben..."
            trim
          />
        </b-input-group>

        <label for="contact-phone">Telefon</label>
        <b-input-group>
          <template #prepend>
            <b-input-group-text
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-phone"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg
            ></b-input-group-text>
          </template>
          <b-form-input
            id="contact-phone"
            v-model="application.contactPhone"
            type="tel"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (application.contactPhone ? true : null) : null"
            placeholder="030 123 45 678"
          />
        </b-input-group>

        <b-form-checkbox
          id="accepted"
          v-model="application.accepted"
          :state="validated ? application.accepted : null"
          class="mt-3"
          name="accepted"
          switch
        >
          Ich bin damit einverstanden, dass die von mir hinterlegten Daten an
          den Arbeitgeber ({{ job.company.name }}) zur Kontaktaufnahme
          weitergeleitet werden. Weitere Informationen findest Du in unseren
          <b-link href="/agbs" target="_blank">
            AGBs
          </b-link>
          und den
          <b-link href="/datenschutz" target="_blank">
            Datenschutzbestimmungen</b-link
          >. *
        </b-form-checkbox>
      </b-form>
    </div>

    <div v-if="step === 7" class="d-flex flex-column align-items-center">
      <h2
        class="h4 bg-success text-light d-inline-block border-radius1 p-1 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-check2-circle mr-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
          />
          <path
            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
          /></svg
        >Glückwunsch, Deine Bewerbung wurde erfolgreich versandt.
      </h2>
      <div>
        <p>
          Der Arbeitgeber wird nach der Sichtung Deiner Kurzbewerbung zu Dir
          Kontakt aufnehmen und das weitere Prozedere besprechen.
        </p>
        <p>
          Übrigens, kennst Du schon unsere
          <b-link to="/stellengesuche/info"
            ><strong>Stellengesuche</strong></b-link
          >? Du kannst Dein eigenes Stellengesuch schalten und Dich von
          passenden Arbeitgebern kontaktieren lassen. Lass Dich doch von
          Stellengesuchen in Deiner Nähe inspirieren.
        </p>
      </div>
      <b-button to="/stellengesuche/info" variant="secondary" class="mb-2"
        >Stellengesuch schalten</b-button
      >
      <b-button :to="`/job/${job._id}`" variant="outline-secondary" class="mb-2"
        >Zurück zur Stellenanzeige</b-button
      >
      <b-button to="/stellenangebote" variant="outline-primary"
        >Zurück zur Stellenbörse</b-button
      >
    </div>

    <div v-if="step < 7" style="max-width: 500px" class="mt-3 mx-auto">
      <BProgress :max="noOfSteps" show-progress animated>
        <BProgressBar
          :value="step"
          :label="`${((step / noOfSteps) * 100).toFixed(0)}%`"
        ></BProgressBar>
      </BProgress>
    </div>
    <div
      v-if="step > 1 && step < 7"
      class="d-flex justify-content-between align-items-center mt-3"
    >
      <b-button class="mr-2" variant="outline-danger" size="sm" @click="step--"
        >Zurück</b-button
      >
      <b-button
        v-if="step === 6"
        variant="success"
        :disabled="disabled"
        @click="onSubmit"
        >Bewerbung absenden</b-button
      >
    </div>

    <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BProgress, BProgressBar } from "bootstrap-vue";
  Vue.component("BProgress", BProgress);
  Vue.component("BProgressBar", BProgressBar);

  export default {
    name: "SimpleApplicationDataForm",
    props: {
      job: {
        type: Object,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        step: 1,
        noOfSteps: 6,
        application: {
          employmentStatus: null,
          training: null,
          experience: null,
          specializations: "",
          requirements: "",
          contactFirstName: this.$store.state.auth.user.firstName || "",
          contactLastName: this.$store.state.auth.user.lastName || "",
          contactEmail: this.$store.state.auth.user.email || "",
          contactPhone: "",
          accepted: false
        },
        validated: null,
        error: ""
      };
    },
    methods: {
      async onSubmit() {
        this.error = "";

        if (!this.formValidation()) {
          this.error =
            "Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!";

          return null;
        }

        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.post(
            "/api/send-email/send-application",
            {
              jobId: this.job._id,
              application: this.application
            }
          );

          if (response.status === 200) {
            this.step++;

            this.$matomo &&
              this.$matomo.trackEvent(
                "engagement",
                "job_apply_short",
                `${this.job.title} | ${this.job.company.name} - ${this.job._id}`
              );
          }
        } catch (error) {
          this.error =
            error.response.data.error.message ||
            `Beim Versenden ist ein Fehler aufgetreten. Bitte versuche es noch einmal oder sende uns eine Nachricht über das Kontaktformular. Alternativ kannst Du Deine Bewerbung auch direkt an ${this.job.applicationEmail} senden.`;
        }

        this.$store.dispatch("setOverlay", false);
      },
      formatter(value) {
        return value.replace(/"/, "'").replace(/\\/g, "/");
      },
      formValidation() {
        this.validated = true;
        return !this.application.contactFirstName ||
          !this.application.contactLastName ||
          !this.application.contactEmail ||
          !this.application.accepted
          ? false
          : true;
      }
    }
  };
</script>
