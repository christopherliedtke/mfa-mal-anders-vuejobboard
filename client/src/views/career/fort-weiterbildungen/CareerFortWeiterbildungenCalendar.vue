<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <b-container class="py-4 py-lg-5">
      <b-row>
        <b-col md="4" class="mb-4">
          <b-form>
            <label for="s-trainings" class="sr-only">Suchbegriff / Ort *</label>
            <b-input-group class="mb-1 mr-2">
              <b-form-input
                id="s-trainings"
                v-model="filter.s"
                :class="filter.s ? 'border-secondary' : ''"
                type="text"
                placeholder="Suchbegriff / Ort..."
                @input="
                  () => {
                    getTrainings();
                    setQuery();
                  }
                "
              />
              <b-input-group-append>
                <b-button
                  @click.prevent="
                    () => {
                      filter.s = '';
                      getTrainings();
                      setQuery();
                    }
                  "
                  ><Fa icon="times"
                /></b-button>
              </b-input-group-append>
            </b-input-group>
            <label for="type-jobboard" class="sr-only">Bereich</label>
            <b-form-select
              id="type-training"
              v-model="filter.type"
              class="my-1 mr-2"
              @change="
                () => {
                  getTrainings();
                  setQuery();
                }
              "
            >
              <b-form-select-option :value="''"
                >Alle Bereiche</b-form-select-option
              >
              <b-form-select-option
                v-for="type in typeOptions"
                :key="type"
                :value="type"
                >{{ type }}</b-form-select-option
              >
            </b-form-select>
            <label for="state-training" class="sr-only">Bundesland</label>
            <b-form-select
              id="state-training"
              v-model="filter.state"
              class="my-1 mr-2"
              @change="
                () => {
                  getTrainings();
                  setQuery();
                }
              "
            >
              <b-form-select-option :value="''"
                >Alle Bundesländer</b-form-select-option
              >
              <b-form-select-option
                v-for="state in companyStateOptions"
                :key="state"
                :value="state"
                >{{ state }}</b-form-select-option
              >
            </b-form-select>
            <label for="profession-training" class="sr-only"
              >Berufsgruppe</label
            >
            <b-form-select
              id="profession-training"
              v-model="filter.profession"
              class="my-1 mr-2"
              @change="
                () => {
                  getTrainings();
                  setQuery();
                }
              "
            >
              <b-form-select-option :value="''"
                >Alle Berufsgruppen</b-form-select-option
              >
              <b-form-select-option
                v-for="profession in professionOptions"
                :key="profession.value"
                :value="profession.value"
                >{{ profession.text }}</b-form-select-option
              >
            </b-form-select>
            <b-form-checkbox
              v-model="filter.remote"
              switch
              :button-variant="filter.remote ? 'success' : 'outline-primary'"
              size="sm"
              @change="
                () => {
                  getTrainings();
                  setQuery();
                }
              "
            >
              Nur Onlinefortbildungen
            </b-form-checkbox>
          </b-form>
          <div class="d-none d-lg-block">
            <SgdBanner class="mt-4" />
            <!-- <DelstBanner class="my-2" /> -->
          </div>
          <div class="small text-right my-3 pt-1">
            <b-link
              to="/auth/register?role=education&redirect=/user/dashboard?tab=4"
              >Jetzt kostenfrei Fortbildung veröffentlichen</b-link
            >
          </div>
        </b-col>
        <b-col>
          <div v-if="trainings.length > 0" id="training-list">
            <TrainingCalendarCard
              v-for="training in trainings"
              :key="training._id"
              :training="training"
            />
          </div>

          <span v-else class="h5">Keine passenden Fortbildungen gefunden.</span>

          <div v-if="loading" class="text-center">
            <BSpinner
              variant="primary"
              label="Lade weitere Fortbildungen..."
            ></BSpinner>
          </div>

          <div class="mt-5">
            <ToJobboardBanner class="mt-3" />
            <BerufsbilderBanner class="mt-3" />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Head
      title="Fortbildungskalender für ArzthelferInnen – MFA & ZFA"
      :desc="
        `Fortbildungskalender für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) || Weiterbildungen | Online & Offline`
      "
      img="/img/MfaMalAnders_Fortbildungskalender_Banner_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSpinner } from "bootstrap-vue";
  Vue.component("BSpinner", BSpinner);
  import TrainingCalendarCard from "@/components/ui/TrainingCalendarCard.vue";
  import {
    companyStateOptions,
    professionOptions,
    typeOptions
  } from "@/config/formDataConfig.json";
  import SgdBanner from "@/components/banners/SgdBanner.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  export default {
    name: "CareerFortWeiterbildungenCalendar",
    components: {
      TrainingCalendarCard,
      SgdBanner,
      ToJobboardBanner,
      BerufsbilderBanner
    },
    data() {
      return {
        title: "Fortbildungskalender für MFA & ZFA",
        trainings: [{}, {}, {}, {}, {}],
        getTrainingsTimeoutId: null,
        loadMoreTrainingsTimeoutId: null,
        loading: false,
        filter: {
          s: "",
          remote: false,
          type: "",
          profession: "",
          state: ""
        },
        error: false,
        companyStateOptions,
        professionOptions,
        typeOptions,
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fortbildungskalender",
            to: "/karriere/fortbildungskalender"
          }
        ],
        snippet: [
          {
            type: "application/ld+json",
            inner: `{
                "@context": "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "MFA mal anders",
                    "item": "https://www.mfa-mal-anders.de"
                },{
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Karriere",
                    "item": "https://www.mfa-mal-anders.de/karriere"
                },{
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Fortbildungskalender",
                    "item": "https://www.mfa-mal-anders.de/karriere/fortbildungskalender
                }]
            }`
          }
        ]
      };
    },
    async created() {
      this.setFilter();
      this.getTrainings(0);
    },
    methods: {
      async getTrainings(delay = 400, limit = 0, offset = 0, loadMore = false) {
        try {
          clearTimeout(this.getTrainingsTimeoutId);
          clearTimeout(this.loadMoreTrainingsTimeoutId);

          if (!loadMore) {
            // this.loading = false;
            this.trainings = [{}, {}, {}, {}, {}];
          }

          await new Promise(resolve => {
            this.getTrainingsTimeoutId = setTimeout(async () => {
              const trainings = await this.$axios.get("/graphql", {
                params: {
                  query: `
                    query {
                      publicTrainings (
                        limit: ${limit}
                        skip: ${offset}
                        search: "${this.filter.s}"
                        type: "${this.filter.type}"
                        profession: "${this.filter.profession}"
                        state: "${this.filter.state}"
                        remote: ${this.filter.remote}
                        ) {
                          _id
                          title
                          desc
                          excerpt
                          company
                          logoUrl
                          type
                          remote
                          startAnytime
                          startAt
                          endAt
                          location
                          duration
                          effort
                          cost
                          extUrl
                        }
                    }
                  `
                }
              });

              if (trainings.data.errors) {
                throw new Error("Fortbildungen konnten nicht geladen werden!");
              }

              if (trainings.data.data.publicTrainings.length === 0) {
                clearTimeout(this.loadMoreTrainingsTimeoutId);
                this.loading = false;
              }

              if (!loadMore) {
                this.trainings = trainings.data.data.publicTrainings;
              } else {
                this.trainings = [
                  ...this.trainings,
                  ...trainings.data.data.publicTrainings
                ];
              }

              if (trainings.data.data.publicTrainings.length > 0) {
                this.loadMoreTrainings();
              }

              resolve(trainings.data.data.publicTrainings.length > 0);
            }, delay);
          });
        } catch (err) {
          this.error = true;
        }
      },
      loadMoreTrainings() {
        // this.loading = false;

        this.loadMoreTrainingsTimeoutId = setTimeout(async () => {
          clearTimeout(this.loadMoreTrainingsTimeoutId);
          clearTimeout(this.getTrainingsTimeoutId);
          const trainingsList = window.document.getElementById("training-list");

          if (trainingsList) {
            const trainingsListBottom = trainingsList.getBoundingClientRect()
              .bottom;
            const clientBottom = document.documentElement.clientHeight;

            // this.loading = true;

            let loadMore = true;

            if (trainingsListBottom - clientBottom < 500) {
              loadMore = await this.getTrainings(
                0,
                undefined,
                this.trainings.length,
                true
              );
            }
            if (loadMore) {
              this.loadMoreTrainings();
            }

            // this.loading = false;
          }
        }, 200);
      },
      setQuery() {
        const query = {
          ...this.filter
        };

        for (const key in query) {
          if (!query[key]) {
            delete query[key];
          }
        }

        this.$router.push({
          query
        });
      },
      setFilter() {
        this.filter = {
          s: this.$route.query.s || "",
          type: this.$route.query.type || "",
          profession: this.$route.query.profession || "",
          location: this.$route.query.location || "",
          state: this.$route.query.state || "",
          remote: this.$route.query.remote === "true" ? true : false
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  // .custom-switch {
  //   cursor: pointer;
  // }
</style>
