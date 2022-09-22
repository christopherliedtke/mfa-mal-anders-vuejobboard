<template>
  <div class="container py-4 py-lg-5">
    <div class="mb-4 mb-lg-5">
      <h1 class="display-4 bold text-center">Kurzbewerbung</h1>
      <p v-if="job" class="lead text-center uppercase">
        <b-link :to="`/job/${job._id}/${job.slug}`" target="_blank"
          >{{ job.title }} | {{ job.company.name }}</b-link
        >
      </p>
      <p class="text-center">
        Beantworte ein paar kurze Fragen und bewirb Dich innerhalb von 2
        Minuten.
      </p>
    </div>
    <div v-if="job" class="bg-light-shade border-radius1 shadow1 p-4 p-lg-5">
      <div v-if="step === 1" class="d-flex flex-column align-items-center">
        <h2
          class="h4 bg-secondary text-light d-inline-block border-radius1 p-1 mb-3"
        >
          Bist Du aktuell in einer Praxis als
          {{ job.profession ? job.profession : "MFA oder ZFA" }} eingestellt?
        </h2>
        <b-button
          class="mb-2"
          variant="outline-primary"
          :pressed="application.employed === true"
          @click="
            () => {
              application.employed = true;
              step++;
            }
          "
          >Ja, bin ich</b-button
        >
        <b-button
          class="mb-2"
          variant="outline-primary"
          :pressed="application.employed === false"
          @click="
            () => {
              application.employed = false;
              step++;
            }
          "
          >Nein, bin ich nicht</b-button
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
          :pressed="application.training === 'MFA'"
          @click="
            () => {
              application.training = 'MFA';
              step++;
            }
          "
          >Abgeschlossene MFA Ausbildung</b-button
        >
        <b-button
          v-if="job.profession === 'ZFA' || !job.profession"
          class="mb-2"
          variant="outline-primary"
          :pressed="application.training === 'ZFA'"
          @click="
            () => {
              application.training = 'ZFA';
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
          :pressed="application.experience === '0'"
          @click="
            () => {
              application.experience = '0';
              step++;
            }
          "
          >Keine bzw. nur sehr wenig</b-button
        >
        <b-button
          class="mb-2"
          variant="outline-primary"
          :pressed="application.experience === '1-5'"
          @click="
            () => {
              application.experience = '1-5';
              step++;
            }
          "
          >1 - 5 Jahre</b-button
        >
        <b-button
          class="mb-2"
          variant="outline-primary"
          :pressed="application.experience === '6-10'"
          @click="
            () => {
              application.experience = '6-10';
              step++;
            }
          "
          >6 - 10 Jahre</b-button
        >
        <b-button
          class="mb-2"
          variant="outline-primary"
          :pressed="application.experience === '10+'"
          @click="
            () => {
              application.experience = '10+';
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
        <b-form class="w-100" style="max-width: 500px">
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
            >Mehrere Bereiche mit Komma trennen</b-form-text
          >
        </b-form>
        <b-button class="mt-3 mb-2" variant="secondary" @click="step++"
          >Weiter</b-button
        >
      </div>

      <div v-if="step === 5" class="d-flex flex-column align-items-center">
        <h2
          class="h4 bg-secondary text-light d-inline-block border-radius1 p-1 mb-3"
        >
          Was ist Dir im neuen Job wichtig?
        </h2>
        <b-form class="w-100" style="max-width: 500px">
          <b-form-textarea
            id="requirements"
            v-model="application.requirements"
            placeholder="z.B. Arbeitszeiten, Arbeitsatmosphäre, Weiterentwicklung..."
            rows="4"
          ></b-form-textarea>
        </b-form>
        <b-button class="mt-3 mb-2" variant="secondary" @click="step++"
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
              validated ? (application.contactFirstName ? true : null) : null
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
              validated ? (application.contactLastName ? true : null) : null
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
                validated ? (application.contactEmail ? true : null) : null
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
              :state="
                validated ? (application.contactPhone ? true : null) : null
              "
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

      <div style="max-width: 500px" class="mt-3 mx-auto">
        <BProgress :max="noOfSteps" show-progress animated>
          <BProgressBar
            :value="step"
            :label="`${((step / noOfSteps) * 100).toFixed(0)}%`"
          ></BProgressBar>
        </BProgress>
      </div>
      <div
        v-if="step > 1"
        class="d-flex justify-content-between align-items-center mt-3"
      >
        <b-button
          class="mr-2"
          variant="outline-danger"
          size="sm"
          @click="step--"
          >Zurück</b-button
        >
        <b-button v-if="step === 6" variant="success" @click="onSubmit"
          >Bewerbung absenden</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BProgress, BProgressBar } from "bootstrap-vue";
  Vue.component("BProgress", BProgress);
  Vue.component("BProgressBar", BProgressBar);

  export default {
    name: "SimpleApplicationView",
    data() {
      return {
        job: null,
        step: 6,
        noOfSteps: 6,
        application: {
          employed: null,
          training: null,
          experience: null,
          specializations: "",
          requirements: "",
          contactFirstName: "",
          contactLastName: "",
          contactEmail: "",
          contactPhone: ""
        }
      };
    },
    created() {
      this.getJob();
    },
    methods: {
      async getJob() {
        try {
          const response = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                  query {
                    publicJob(_id: "${this.$route.params.jobId}") {
                      _id
                      updatedAt
                      status
                      publishedAt
                      paidAt
                      paid
                      paidExpiresAt
                      title
                      description
                      profession
                      employmentType
                      applicationDeadline
                      simpleApplication
                      extJobUrl
                      applicationEmail
                      imageUrl
                      videoUrl
                      salaryMin
                      salaryMax
                      specialization
                      contactGender
                      contactTitle
                      contactFirstName
                      contactLastName
                      contactPosition
                      contactEmail
                      contactPhone
                      slug
                      company {
                        _id
                        name
                        street
                        location
                        zipCode
                        state
                        country
                        geoCodeLat
                        geoCodeLng
                        size
                        url
                        logoUrl
                        slug
                      }
                    }
                  }
                `
            }
          });

          this.job = response.data.data.publicJob;
          if (!this.job || !this.job.simpleApplication) {
            this.$root.$bvToast.toast(
              "Das Stellenangebot konnte nicht gefunden werden bzw. ist bereits abgelaufen oder ermöglicht keine Kurzbewerbung.",
              {
                title: `Stellenangebot abgelaufen`,
                variant: "info",
                toaster: "b-toaster-bottom-right",
                solid: false,
                noAutoHide: true
              }
            );

            this.$router.push("/jobs");
          }
        } catch (error) {
          this.$root.$bvToast.toast(
            "Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      async onSubmit() {
        //
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
