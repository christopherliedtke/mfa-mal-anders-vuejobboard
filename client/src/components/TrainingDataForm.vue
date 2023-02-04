<template>
  <div class="training-form position-relative">
    <b-form id="training-form">
      <label for="title" required>Titel der Fortbildung</label>
      <b-form-input
        id="title"
        v-model="training.title"
        type="text"
        lazy-formatter
        :formatter="formatter"
        :state="
          validated
            ? training.title && training.title.length <= 75
              ? true
              : false
            : null
        "
        aria-describedby="title-help title-feedback"
        placeholder="Titel der Fortbildung eingeben..."
        required
        trim
      />
      <b-form-invalid-feedback id="title-feedback" class="ml-2">
        Bitte nutzen Sie maximal 155 Zeichen.
      </b-form-invalid-feedback>
      <b-form-text id="title-help" class="ml-2"
        ><span :class="[{ 'text-danger': training.title.length > 75 }]">
          {{ 75 - training.title.length }} Zeichen verfügbar</span
        ></b-form-text
      >

      <b-form-group
        v-if="$store.state.auth.user.isAdmin"
        class="bg-light-shade border-radius1 p-3 mt-3"
      >
        <h6>ADMIN</h6>
        <label for="is-sponsored">isSponsored</label>
        <b-form-radio-group
          id="is-sponsored"
          v-model="training.isSponsored"
          class="mb-2"
          :options="[true, false]"
          name="is-sponsored"
          size="sm"
        ></b-form-radio-group>
      </b-form-group>

      <label for="excerpt" required
        >Kurzbeschreibung der Fortbildung für Vorschau</label
      >
      <b-form-textarea
        id="excerpt"
        v-model="training.excerpt"
        type="text"
        rows="6"
        lazy-formatter
        wrap="hard"
        :formatter="formatter"
        :state="
          validated
            ? training.excerpt && training.excerpt.length <= 700
              ? true
              : false
            : null
        "
        aria-describedby="excerpt-help excerpt-feedback"
        placeholder="Kurzbeschreibung der Fortbildung eingeben..."
        required
        trim
      />
      <b-form-invalid-feedback id="excerpt-feedback" class="ml-2">
        Bitte nutzen Sie maximal 700 Zeichen.
      </b-form-invalid-feedback>
      <b-form-text id="excerpt-help" class="ml-2"
        ><span :class="[{ 'text-danger': training.excerpt.length > 700 }]">
          {{ 700 - training.excerpt.length }} Zeichen verfügbar</span
        ></b-form-text
      >

      <label for="description">Beschreibung</label>
      <TipTapEditor
        :validated="validated"
        :content="training.desc"
        placeholder="Beschreiben Sie die Fort- / Weiterbildung bei Bedarf hier ausführlich. Sie können beispielsweise Angaben zu Lerninhalten, Karriereperspektiven, Dauer, Lernpensum etc. machen."
        @update-content="training.desc = $event"
      />

      <label for="ext-training-url" required
        >Ihre Webseite zur Fortbildung</label
      >
      <b-input-group>
        <template #prepend>
          <b-input-group-text
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
              />
              <path
                d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
              /></svg
          ></b-input-group-text>
        </template>
        <b-form-input
          id="ext-training-url"
          v-model="training.extUrl"
          type="url"
          lazy-formatter
          :formatter="formatter"
          :state="validated ? (training.extUrl ? true : false) : null"
          placeholder="https://www.ihr-unternehmen.de/fortbildung"
        />
      </b-input-group>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="training-event-type" required>Veranstaltungsart</label>
          <b-form-select
            id="training-event-type"
            v-model="training.eventType"
            :state="validated ? (training.eventType ? true : false) : null"
          >
            <b-form-select-option value="" disabled
              >-- Art auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="type in eventTypeOptions"
              :key="type"
              :value="type"
              >{{ type }}</b-form-select-option
            >
          </b-form-select>
        </div>

        <div class="col-12 col-lg-4">
          <label for="training-graduation" required>Abschluss</label>
          <b-form-select
            id="training-graduation"
            v-model="training.graduation"
            :state="validated ? (training.eventType ? true : false) : null"
          >
            <b-form-select-option value="" disabled
              >-- Abschluss auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="type in graduationOptions"
              :key="type"
              :value="type"
              >{{ type }}</b-form-select-option
            >
          </b-form-select>
        </div>

        <div class="w-100"></div>

        <div class="col-12 col-lg-6">
          <label for="training-duration">Dauer der Fortbildung</label>
          <b-form-input
            id="training-duration"
            v-model="training.duration"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="
              validated
                ? training.duration && training.duration.length <= 55
                  ? true
                  : null
                : null
            "
            aria-describedby="duration-help duration-feedback"
            placeholder="Dauer der Fortbildung eingeben..."
            trim
          />
          <b-form-invalid-feedback id="duration-feedback" class="ml-2">
            Bitte nutzen Sie maximal 55 Zeichen.
          </b-form-invalid-feedback>
          <b-form-text id="duration-help" class="ml-2"
            ><span :class="[{ 'text-danger': training.duration.length > 55 }]">
              {{ 55 - training.duration.length }} Zeichen verfügbar</span
            ></b-form-text
          >
        </div>
        <div class="col-12 col-lg-6">
          <label for="training-effort">Zeitaufwand</label>
          <b-form-input
            id="training-effort"
            v-model="training.effort"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="
              validated
                ? training.effort && training.effort.length <= 55
                  ? true
                  : null
                : null
            "
            aria-describedby="effort-help effort-feedback"
            placeholder="z.B. 5 Stunden pro Woche..."
            trim
          />
          <b-form-invalid-feedback id="effort-feedback" class="ml-2">
            Bitte nutzen Sie maximal 55 Zeichen.
          </b-form-invalid-feedback>
          <b-form-text id="effort-help" class="ml-2"
            ><span :class="[{ 'text-danger': training.effort.length > 55 }]">
              {{ 55 - training.effort.length }} Zeichen verfügbar</span
            ></b-form-text
          >
        </div>
      </div>

      <b-form-group>
        <label for="start-anytime" class="mt-4">Start der Fortbildung</label>
        <b-form-radio-group
          id="start-anytime"
          v-model="training.startAnytime"
          class="mb-2"
          :options="[
            { value: true, text: 'Start jederzeit' },
            { value: false, text: 'Termine regelmäßig / auf Anfrage' }
          ]"
          name="start-anytime"
          size="sm"
        ></b-form-radio-group>
      </b-form-group>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="cost">Kosten für Fortbildung</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text>€</b-input-group-text>
            </template>
            <b-form-input
              id="cost"
              v-model="cost"
              type="number"
              number
              min="0"
              :state="validated ? (cost ? true : null) : null"
              placeholder="Kosten für Fortbildung eingeben..."
            />
          </b-input-group>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="profession">Berufsgruppe</label>
          <b-form-select
            id="profession"
            v-model="training.profession"
            :state="validated ? true : null"
          >
            <b-form-select-option value=""
              >-- Alle Berufsgruppen --</b-form-select-option
            >
            <b-form-select-option
              v-for="type in professionOptions"
              :key="type.value"
              :value="type.value"
              >{{ type.text }}</b-form-select-option
            ></b-form-select
          >
        </div>
        <div class="col-12 col-lg-4">
          <label for="training-type" required>Bereich</label>
          <b-form-select
            id="training-type"
            v-model="training.type"
            :state="validated ? (training.type ? true : false) : null"
          >
            <b-form-select-option value="" disabled
              >-- Bereich auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="type in typeOptions"
              :key="type"
              :value="type"
              >{{ type }}</b-form-select-option
            >
          </b-form-select>
        </div>
      </div>

      <b-form-group>
        <label for="remote" class="mt-4">Unterrichtsform</label>
        <b-form-radio-group
          id="remote"
          v-model="training.remote"
          class="mb-2"
          :options="[
            { value: false, text: 'Präsenz / Hybrid' },
            { value: true, text: 'Online / Fern' }
          ]"
          name="remote"
          size="sm"
        ></b-form-radio-group>

        <div v-if="!training.remote" class="row">
          <div class="col-12">
            <label for="training-location" class="mt-1">Ort</label>
            <b-form-input
              id="training-location"
              v-model="training.location"
              type="text"
              lazy-formatter
              :formatter="formatter"
              :state="validated ? (training.title ? true : null) : null"
              placeholder="Ort der Fortbildung eingeben..."
              trim
              aria-describedby="location-help"
            />
            <b-form-text id="location-help" class="ml-2"
              >Mehrere Orte mit Komma trennen</b-form-text
            >
          </div>
          <div class="col-12 col-lg-4">
            <label for="training-state" class="mt-2">Bundesland</label>
            <b-form-select
              id="training-state"
              v-model="state"
              :state="validated ? (state ? true : null) : null"
              style="border-radius: 5px 0 0 5px"
              multiple
              aria-describedby="state-help"
            >
              <b-form-select-option value=""
                >-- Bundesland auswählen --</b-form-select-option
              >
              <b-form-select-option
                v-for="stateOption in companyStateOptions"
                :key="stateOption"
                :value="stateOption"
                >{{ stateOption }}</b-form-select-option
              >
            </b-form-select>
            <b-form-text id="state-help" class="ml-2"
              >'STRG' für Mehrfachauswahl gedrückt halten</b-form-text
            >
          </div>
        </div>
      </b-form-group>

      <div class="row">
        <div class="col-12 col-lg-6">
          <label for="company" required>Unternehmen</label>
          <b-form-input
            id="company"
            v-model="training.company"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="
              validated
                ? training.company && training.company.length <= 155
                  ? true
                  : false
                : null
            "
            placeholder="Name des Fortbildungsunternehmens eingeben..."
            required
            trim
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6">
          <label for="logo">Logo</label>
          <ImageUploader
            id="logo"
            :validated="validated"
            :image-url="training.logoUrl"
            :width="200"
            :height="200"
            fit="inside"
            aria-describedby="logo-url-help"
            @update-url="training.logoUrl = $event"
          />
          <b-form-text id="logo-url-help" class="ml-2"
            ><span>jpg, png | max. 5MB</span></b-form-text
          >
          <b-form-input
            v-if="$store.state.auth.user.isAdmin"
            v-model="training.logoUrl"
            class="bg-light-shade mt-2"
            type="url"
            placeholder="ADMIN - URL to image (incl. https://)"
          >
          </b-form-input>
          <div
            class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2"
            style="width: 55px; height: 55px"
          >
            <b-img
              v-if="training.logoUrl"
              :src="training.logoUrl"
              fluid
              style="max-height: 100%; max-width: 100%"
            />
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-box p-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between my-4">
        <b-button variant="outline-danger" @click.prevent="$router.go(-1)">
          Abbrechen
        </b-button>
        <b-button variant="success" @click.prevent="onSubmit">
          Speichern
        </b-button>
      </div>
    </b-form>

    <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import TipTapEditor from "@/components/TipTapEditor.vue";
  import ImageUploader from "@/components/ImageUploader.vue";
  import Vue from "vue";
  import { BFormDatepicker } from "bootstrap-vue";
  Vue.component("BFormDatepicker", BFormDatepicker);
  import {
    professionOptions,
    companyStateOptions,
    typeOptions,
    eventTypeOptions,
    graduationOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "TrainingDataForm",
    components: {
      TipTapEditor,
      ImageUploader
    },
    data() {
      return {
        training: {
          title: "",
          excerpt: "",
          desc: "",
          remote: false,
          startAnytime: false,
          location: "",
          state: "",
          company: "",
          logoUrl: "",
          type: "",
          eventType: "",
          graduation: "",
          profession: "",
          duration: "",
          effort: "",
          cost: null,
          extUrl: "",
          isSponsored: this.$store.state.auth.user.isAdmin ? true : false
        },
        validated: null,
        success: false,
        error: false,
        professionOptions,
        companyStateOptions,
        typeOptions,
        eventTypeOptions,
        graduationOptions
      };
    },
    computed: {
      cost: {
        get() {
          return this.training.cost;
        },
        set(value) {
          this.training.cost = !value ? null : value;
        }
      },
      state: {
        get() {
          return this.training.state.split(",");
        },
        set(value) {
          this.training.state = value.join(",");
        }
      }
    },
    created() {
      if (this.$route.params.trainingId != "new") {
        this.getTraining(this.$route.params.trainingId);
      }
    },
    methods: {
      async getTraining(trainingId) {
        try {
          const queryType = this.$store.state.auth.user.isAdmin
            ? "adminTraining"
            : "myTraining";
          const training = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  ${queryType} (_id: "${trainingId}") {
                    _id
                    title
                    excerpt
                    desc
                    remote
                    startAnytime
                    location
                    state
                    company
                    logoUrl
                    type
                    eventType
                    graduation
                    profession
                    duration
                    effort
                    cost
                    extUrl
                    isSponsored
                  }
                }
              `
            }
          });

          if (training.data.errors) {
            throw new Error("Fortbildung konnte nicht geladen werden.");
          }

          this.training = training.data.data[queryType];
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden der Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
        this.error = false;

        try {
          if (!this.formValidation()) {
            this.error =
              "Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!";

            return null;
          }

          this.$store.dispatch("setOverlay", true);

          const mutationType = this.training._id
            ? "updateTraining"
            : "addTraining";

          const training = await this.$axios.post("/graphql", {
            query: `
              mutation {
                ${mutationType} (
                  ${this.training._id ? `_id: "${this.training._id}"` : ""}
                  title: "${this.training.title}"
                  excerpt: "${this.training.excerpt.replace(/\n/g, "\\n")}"
                  desc: "${this.training.desc.replace(/"/g, '\\"')}"
                  remote: ${this.training.remote}
                  startAnytime: ${this.training.startAnytime}
                  location: "${
                    this.training.location ? this.training.location : ""
                  }"
                  state: "${this.training.state ? this.training.state : ""}"
                  company: "${this.training.company}"
                  logoUrl: "${
                    this.training.logoUrl ? this.training.logoUrl : ""
                  }"
                  type: "${this.training.type}"
                  eventType: "${this.training.eventType}"
                  graduation: "${this.training.graduation}"
                  profession: "${this.training.profession}"
                  duration: "${
                    this.training.duration ? this.training.duration : ""
                  }"
                  effort: "${this.training.effort ? this.training.effort : ""}"
                  cost: ${this.training.cost}
                  extUrl: "${
                    !/^https?:\/\//i.test(this.training.extUrl) &&
                    this.training.extUrl
                      ? "https://" + this.training.extUrl
                      : this.training.extUrl
                  }"
                  isSponsored: ${this.training.isSponsored}
                ) {
                  _id
                  title
                  excerpt
                  desc
                  remote
                  startAnytime
                  location
                  state
                  company
                  logoUrl
                  type
                  eventType
                  graduation
                  profession
                  duration
                  effort
                  cost
                  extUrl
                  isSponsored
                }
              }
            `
          });

          if (training.data.errors) {
            throw new Error("Training could not be saved.");
          }

          // this.$gtag.event(
          //   `training_${/update/gi.test(mutationType) ? "update" : "add"}`,
          //   {
          //     event_label: `${this.training.title} | ${this.training.company} - ${training.data.data[mutationType]._id}`
          //   }
          // );

          this.$matomo &&
            this.$matomo.trackEvent(
              "engagement",
              `training_${/update/gi.test(mutationType) ? "update" : "add"}`,
              `${this.training.title} | ${this.training.company} - ${training.data.data[mutationType]._id}`
            );

          this.$root.$bvToast.toast(
            "Die Fortbildung wurde erfolgreich gespeichert.",
            {
              title: `Fortbildung gespeichert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );

          this.$router.push("/user/fortbildungen");
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Speichern Ihrer Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
        return value.replaceAll('"', "'").replace(/&amp;/, "&");
      },
      formValidation() {
        this.validated = true;
        return !this.training.title ||
          this.training.title.length > 75 ||
          !this.training.excerpt ||
          this.training.excerpt.length > 700 ||
          !this.training.extUrl ||
          !this.training.company ||
          !this.training.type ||
          !this.training.eventType ||
          !this.training.graduation ||
          this.training.effort.length > 55 ||
          this.training.duration.length > 55
          ? false
          : true;
      }
    }
  };
</script>
