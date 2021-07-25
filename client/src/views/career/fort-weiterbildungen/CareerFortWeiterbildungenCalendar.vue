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
            <label for="s-trainings" class="sr-only">Suchbegriff *</label>
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
            <label for="state-training" class="sr-only">Bundesland *</label>
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
        </b-col>
        <b-col v-if="trainings.length > 0">
          <TrainingCalendarCard
            v-for="training in trainings"
            :key="training._id"
            :training="training"
          />
        </b-col>
        <b-col v-else
          ><span class="h5"
            >Keine passenden Fortbildungen gefunden.</span
          ></b-col
        >
      </b-row>
    </b-container>

    <Head
      title="Fortbildungskalender für ArzthelferInnen – MFA & ZFA"
      :desc="
        `Fortbildungskalender für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) || Weiterbildungen | Online & Offline`
      "
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import TrainingCalendarCard from "@/components/ui/TrainingCalendarCard.vue";
  import {
    companyStateOptions,
    typeOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "CareerFortWeiterbildungenCalendar",
    components: {
      TrainingCalendarCard
    },
    data() {
      return {
        title: "Fortbildungskalender",
        trainings: [{}, {}, {}, {}, {}],
        filterTrainingsTimeoutId: null,
        // loading: false,
        loadMoreTrainingsTimeoutId: null,
        filter: {
          s: "",
          remote: false,
          type: "",
          state: ""
        },
        error: false,
        companyStateOptions,
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
      async getTrainings(delay = 400, limit = 0, offset = 0) {
        clearTimeout(this.filterTrainingsTimeoutId);
        this.trainings = [{}, {}, {}, {}, {}];

        try {
          this.filterTrainingsTimeoutId = setTimeout(async () => {
            const trainings = await this.$axios.get("/graphql", {
              params: {
                query: `
                  query {
                      publicTrainings (
                        limit: ${limit}
                        skip: ${offset}
                        search: "${this.filter.s}"
                        type: "${this.filter.type}"
                        state: "${this.filter.state}"
                        remote: ${this.filter.remote}
                        ) {
                          _id
                          title
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

            //   this.trainings = [];
            this.trainings = trainings.data.data.publicTrainings;
          }, delay);
        } catch (err) {
          this.error = true;
        }
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
