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
        <label for="published">published</label>
        <b-form-radio-group
          id="published"
          v-model="training.published"
          class="mb-2"
          :options="[true, false]"
          name="published"
          size="sm"
        ></b-form-radio-group>
        <label for="paid">paid</label>
        <b-form-radio-group
          id="paid"
          v-model="training.paid"
          class="mb-2"
          :options="[true, false]"
          name="paid"
          size="sm"
        ></b-form-radio-group>
        <label for="pending">pending</label>
        <b-form-radio-group
          id="pending"
          v-model="training.pending"
          class="mb-2"
          :options="[true, false]"
          name="pending"
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
        max-rows="50"
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
          <b-input-group-text><Fa icon="link"/></b-input-group-text>
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

      <b-form-group>
        <label for="start-anytime" class="mt-4">Start der Fortbildung</label>
        <b-form-radio-group
          id="start-anytime"
          v-model="training.startAnytime"
          class="mb-2"
          :options="[
            { value: true, text: 'Start jederzeit' },
            { value: false, text: 'Feste Startdaten' }
          ]"
          name="start-anytime"
          size="sm"
        ></b-form-radio-group>

        <div v-if="!training.startAnytime">
          <label for="start-at">Nächstes Startdatum</label>
          <BFormDatepicker
            id="start-at"
            v-model="startAt"
            :state="validated ? true : null"
            placeholder="Startet am..."
            :reset-button="true"
            :reset-value="''"
            label-reset-button="Zurücksetzen"
          />
          <label for="end-at">Enddatum</label>
          <BFormDatepicker
            id="end-at"
            v-model="endAt"
            :state="validated ? true : null"
            placeholder="Endet am..."
            :reset-button="true"
            :reset-value="''"
            label-reset-button="Zurücksetzen"
          />
        </div>
      </b-form-group>

      <label for="cost">Kosten für Fortbildung <small>[€]</small></label>
      <b-form-input
        id="cost"
        v-model="cost"
        type="number"
        number
        min="0"
        :state="validated ? (cost ? true : null) : null"
        placeholder="Kosten für Fortbildung eingeben..."
      />

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

      <b-form-group>
        <label for="remote" class="mt-4">Ort der Fortbildung</label>
        <b-form-radio-group
          id="remote"
          v-model="training.remote"
          class="mb-2"
          :options="[
            { value: false, text: 'Vor Ort / Hybrid' },
            { value: true, text: 'Nur Online' }
          ]"
          name="remote"
          size="sm"
        ></b-form-radio-group>

        <div v-if="!training.remote">
          <label for="training-location" class="mt-1"
            >Ort <small>[Mehrere Orte mit Komma trennen]</small></label
          >
          <b-form-input
            id="training-location"
            v-model="training.location"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (training.title ? true : null) : null"
            placeholder="Ort der Fortbildung eingeben..."
            trim
          />
          <label for="training-state" class="mt-2"
            >Bundesland
            <small>['STRG' für Mehrfachauswahl gedrückt halten]</small></label
          >
          <b-form-select
            id="training-state"
            v-model="state"
            :state="validated ? (state ? true : null) : null"
            style="border-radius: 5px 0 0 5px"
            multiple
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
        </div>
      </b-form-group>

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

      <label for="logo">Logo <small>(jpg, png | max. 5MB)</small></label>
      <ImageUploader
        id="logo"
        :validated="validated"
        :image-url="training.logoUrl"
        :width="200"
        :height="200"
        fit="inside"
        @update-url="training.logoUrl = $event"
      />
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
        <Fa v-else icon="box-open" size="lg" />
      </div>

      <div class="d-flex justify-content-between my-4">
        <b-button variant="outline-danger" @click.prevent="$router.go(-1)">
          Abbrechen
        </b-button>
        <b-button variant="success" @click.prevent="onSubmit">
          <Fa v-if="success" icon="check" class="mr-2" />
          {{ success ? "Gespeichert" : "Speichern" }}
        </b-button>
      </div>
    </b-form>

    <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BFormDatepicker } from "bootstrap-vue";
  Vue.component("BFormDatepicker", BFormDatepicker);
  import TipTapEditor from "@/components/utils/TipTapEditor.vue";
  import ImageUploader from "@/components/utils/ImageUploader.vue";
  import {
    professionOptions,
    companyStateOptions,
    typeOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "TrainingForm",
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
          profession: "",
          startAt: null,
          endAt: null,
          duration: "",
          effort: "",
          cost: null,
          extUrl: "",
          published: this.$store.state.auth.user.isAdmin ? true : false,
          pending: false,
          paid: this.$store.state.auth.user.isAdmin ? true : false
        },
        validated: null,
        success: false,
        error: false,
        professionOptions,
        companyStateOptions,
        typeOptions
      };
    },
    computed: {
      startAt: {
        get() {
          if (this.training.startAt) {
            return new Date(this.training.startAt);
          } else {
            return "";
          }
        },
        set(value) {
          if (value) {
            this.training.startAt = new Date(value).getTime();
          } else {
            this.training.startAt = null;
          }
        }
      },
      endAt: {
        get() {
          if (this.training.endAt) {
            return new Date(this.training.endAt);
          } else {
            return "";
          }
        },
        set(value) {
          if (value) {
            this.training.endAt = new Date(value).getTime();
          } else {
            this.training.endAt = null;
          }
        }
      },
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
                    profession
                    startAt
                    endAt
                    duration
                    effort
                    cost
                    extUrl
                    published
                    pending
                    paid
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
                  profession: "${this.training.profession}"
                  startAt: ${this.training.startAt}
                  endAt: ${this.training.endAt}
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
                  published: ${this.training.published}
                  pending: ${this.training.pending}
                  paid: ${this.training.paid}
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
                  profession
                  startAt
                  endAt
                  duration
                  effort
                  cost
                  extUrl
                  published
                  pending
                  paid
                }
              }
            `
          });

          if (training.data.errors) {
            throw new Error("Training could not be saved.");
          }

          this.$root.$bvToast.toast(
            "Die Fortbildung wurde erfolgreich gespeichert.",
            {
              title: `Fortbildung gespeichert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );

          this.$router.push("/user/dashboard?tab=4");
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
          this.training.effort.length > 55 ||
          this.training.duration.length > 55
          ? false
          : true;
      }
    }
  };
</script>

//
<style lang="scss" scoped>
  //   label[required]::after {
  //     content: " *";
  //   }
  //
</style>
