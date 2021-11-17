<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <div class="container py-3 py-lg-4">
      <div class="row mt-2">
        <div class="col-12 col-md-4 mb-4 pt-2">
          <b-form @submit.prevent>
            <label for="s-trainings" class="sr-only">Suchbegriff</label>
            <b-input-group class="mb-1 mr-2">
              <b-form-input
                id="s-trainings"
                v-model="filter.s"
                :class="filter.s ? 'border-secondary' : ''"
                type="text"
                placeholder="Suchbegriff..."
                @input="
                  () => {
                    getTrainings();
                    setQuery();
                  }
                "
              />
              <b-input-group-append>
                <b-button
                  class="px-2"
                  @click.prevent="
                    () => {
                      filter.s = '';
                      getTrainings();
                      setQuery();
                    }
                  "
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    /></svg
                ></b-button>
              </b-input-group-append>
            </b-input-group>
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
          <div class="mt-3">
            <span
              style="cursor: pointer"
              class="text-danger small ml-2"
              @click="resetFilter"
              >Filter zurücksetzen</span
            >
          </div>
          <div class="d-none d-lg-block">
            <SgdBanner class="mt-4" />
          </div>
          <div class="small text-right my-3 pt-1">
            <b-link
              to="/auth/register?role=education&redirect=/user/dashboard?tab=4"
              >Jetzt kostenfrei Fortbildung veröffentlichen</b-link
            >
          </div>
        </div>
        <div class="col-12 col-md-8 pt-2" style="overflow: hidden">
          <div v-if="trainings.length > 0" id="training-list">
            <TrainingCatalogueCard
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
            <BerufsbilderBanner class="my-3" />
          </div>
        </div>
      </div>
    </div>

    <ScrollToTopBtn />

    <Head
      title="Fortbildungskatalog speziell für MFA & ZFA"
      :desc="
        `Deutschlands größte Übersicht an Fortbildungen / Weiterbildungen für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) || ArzthelferIn`
      "
      img="/img/MfaMalAnders_Fortbildungskatalog_Banner_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSpinner } from "bootstrap-vue";
  Vue.component("BSpinner", BSpinner);
  import TrainingCatalogueCard from "@/components/ui/TrainingCatalogueCard.vue";
  import {
    companyStateOptions,
    professionOptions,
    typeOptions
  } from "@/config/formDataConfig.json";
  import SgdBanner from "@/components/banners/SgdBanner.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  import ScrollToTopBtn from "@/components/buttons/ScrollToTopBtn.vue";
  export default {
    name: "CareerFortWeiterbildungenCatalogue",
    components: {
      TrainingCatalogueCard,
      SgdBanner,
      ToJobboardBanner,
      BerufsbilderBanner,
      ScrollToTopBtn
    },
    data() {
      return {
        title: "Fortbildungskatalog für MFA & ZFA",
        trainings: [{}, {}, {}, {}, {}],
        getTrainingsTimeoutId: null,
        loadMoreTrainingsTimeoutId: null,
        loading: false,
        filter: {
          s: "",
          remote: false,
          type: "",
          profession: "",
          state: "",
          location: ""
        },
        error: false,
        companyStateOptions,
        professionOptions,
        typeOptions,
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fort- & Weiterbildung",
            to: "/karriere/fort-und-weiterbildung"
          },
          {
            text: "Fortbildungskatalog",
            to: "/karriere/fort-und-weiterbildung/fortbildungskatalog"
          }
        ],
        snippet: [
          {
            id: "breadcrumbs",
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
                    "name": "Fort- & Weiterbildung",
                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"
                },{
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Fortbildungskatalog",
                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/fortbildungskatalog"
                }]
            }`
          },
          {
            rel: "canonical",
            href: `${this.$config.website.url +
              "/karriere/fort-und-weiterbildung/fortbildungskatalog"}`,
            id: "canonical"
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
                          slug
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
      },
      resetFilter() {
        this.filter = {
          s: "",
          type: "",
          profession: "",
          location: "",
          state: "",
          remote: false
        };

        // this.specialization = {
        //   active: this.specializationOptions,
        //   visible: false,
        //   allSelected: true,
        //   indeterminate: false
        // };

        // this.profession.active = this.professionOptions.map(
        //   profession => profession.value
        // );

        this.setQuery();
        this.getTrainings();
      }
    }
  };
</script>
