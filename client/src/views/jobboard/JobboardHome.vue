<template>
  <div class="jobboard">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="py-3 py-lg-5">
      <b-row class="mt-2">
        <b-col cols="12" lg="4" class="px-2 pr-lg-5">
          <div v-if="$config.externalJobs.active" class="mb-2">
            <p class="small text-muted text-right m-0">
              {{
                jobsCount > 0
                  ? parseInt(jobsCount)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : "-"
              }}
              Stellenangebote
            </p>
          </div>
          <BButtonToolbar aria-label="Jobboard view toolbar">
            <BButtonGroup v-if="$config.jobboardMap.active" class="mb-3">
              <b-button
                :variant="
                  jobboardView == 'list' ? 'primary' : 'outline-primary'
                "
                size="sm"
                @click.prevent="jobboardView = 'list'"
                ><Fa class="mr-2" icon="list-ul" />Liste</b-button
              >
              <b-button
                :variant="jobboardView == 'map' ? 'primary' : 'outline-primary'"
                size="sm"
                @click.prevent="jobboardView = 'map'"
                ><Fa class="mr-2" icon="map" />Karte</b-button
              >
            </BButtonGroup>
            <FacebookBtn class="d-lg-none mb-3 ml-1" content="" />
            <InstagramBtn class="d-lg-none mb-3 ml-1" content="" />
          </BButtonToolbar>
          <b-form id="job-filter" @submit.prevent>
            <label for="s-jobboard" class="sr-only">Suchbegriff *</label>
            <b-input-group class="mb-1 mr-2">
              <b-form-input
                id="s-jobboard"
                v-model="filter.s"
                :class="filter.s ? 'border-secondary' : ''"
                type="text"
                placeholder="Suchbegriff..."
                @input="
                  () => {
                    getJobs();
                    setQuery();
                  }
                "
              />
              <b-input-group-append>
                <b-button
                  @click.prevent="
                    () => {
                      filter.s = '';
                      getJobs();
                      setQuery();
                    }
                  "
                  ><Fa icon="times"
                /></b-button>
              </b-input-group-append>
            </b-input-group>
            <label for="employmentType-jobboard" class="sr-only"
              >Anstellungsart *</label
            >
            <b-form-select
              id="employmentType-jobboard"
              v-model="filter.employmentType"
              class="my-1 mr-2"
              @change="
                () => {
                  getJobs();
                  setQuery();
                }
              "
            >
              <b-form-select-option :value="''"
                >Alle Anstellungsarten</b-form-select-option
              >
              <b-form-select-option
                v-for="type in employmentTypeOptions"
                :key="type.value"
                :value="type.value"
                >{{ type.text }}</b-form-select-option
              >
            </b-form-select>

            <label for="location-jobboard" class="sr-only">Ort *</label>
            <b-input-group class="my-1 mr-2">
              <b-form-input
                id="location-jobboard"
                v-model="filter.location"
                :class="filter.location ? 'border-secondary' : ''"
                type="text"
                placeholder="Ort..."
                @input="
                  () => {
                    getJobs();
                    setQuery();
                  }
                "
              />
              <b-input-group-append>
                <b-button
                  @click.prevent="
                    () => {
                      filter.location = '';
                      getJobs();
                      setQuery();
                    }
                  "
                  ><Fa icon="times"
                /></b-button>
              </b-input-group-append>
            </b-input-group>
            <!-- <b-form-datalist
              id="location-list"
              :options="locationsList"
            ></b-form-datalist> -->
            <label for="state-jobboard" class="sr-only">Bundesland *</label>
            <b-form-select
              id="state-jobboard"
              v-model="filter.state"
              class="my-1 mr-2"
              @change="
                () => {
                  getJobs();
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
            <label for="profession-jobboard" class="mb-2 pl-2">Berufe </label>
            <b-form-group id="profession-jobboard" class="pl-2">
              <b-form-checkbox-group
                v-model="profession.active"
                class="ml-1"
                :options="professionOptions"
                size="sm"
                stacked
                @change="
                  () => {
                    getJobs();
                  }
                "
              ></b-form-checkbox-group>
            </b-form-group>
            <label
              for="specialization-jobboard"
              style="cursor: pointer"
              class="mt-0 mb-2 pl-2"
              @click="specialization.visible = !specialization.visible"
              >Fachgebiete
              <Fa
                icon="caret-right"
                size="1x"
                :class="
                  specialization.visible === true
                    ? 'animate rotate-90 ml-2'
                    : 'animate ml-2'
                "
            /></label>
            <BCollapse
              :visible="specialization.visible === true"
              role="tabpanel"
            >
              <b-form-group id="specialization-jobboard" class="pl-2">
                <template #label>
                  <b-form-checkbox
                    v-model="specialization.allSelected"
                    :indeterminate="specialization.indeterminate"
                    size="sm"
                    stacked
                    @change="toggleAll"
                  >
                    {{
                      specialization.allSelected
                        ? "Alle Abwählen"
                        : "Alle Auswählen"
                    }}
                  </b-form-checkbox>
                </template>

                <b-form-checkbox-group
                  v-model="specialization.active"
                  class="ml-1"
                  :options="
                    specializationOptions.map(specialization => {
                      return {
                        text: specialization,
                        value: specialization
                      };
                    })
                  "
                  size="sm"
                  stacked
                  @change="
                    () => {
                      getJobs();
                    }
                  "
                ></b-form-checkbox-group>
              </b-form-group>
            </BCollapse>
          </b-form>
          <div class="small text-right mb-2 pr-3 pt-1">
            <b-link to="/fuer-arbeitgeber">Stellenanzeige schalten</b-link>
          </div>
          <div class="d-none d-lg-block mt-5">
            <b-button
              v-if="
                $config.starredJobs.active &&
                  $store.state.auth.loggedIn &&
                  $store.state.starredJobs.starredJobs &&
                  $store.state.starredJobs.starredJobs.length > 0
              "
              to="/user/dashboard?tab=4"
              variant="secondary"
              size="sm"
              >Meine gespeicherten Jobs</b-button
            >
          </div>
          <TrainingCalendarSmallBanner class="d-none d-lg-block mt-4" />
          <div class="d-none d-lg-block mt-4">
            <p class="h5">
              Verpasse keine Neuigkeiten und folge uns auf
            </p>
            <FacebookBtn class="mt-2 mr-1" content="Facebook" />
            <InstagramBtn class="mt-2 mr-1" content="" />
            <TwitterBtn class="mt-2 mr-1" content="" />
          </div>
        </b-col>
        <b-col cols="12" lg="8">
          <keep-alive>
            <component
              :is="computedJobboardView"
              id="job-list"
              class="mb-4"
              :jobs="filteredJobs"
              :nojobs="nojobs"
            ></component>
          </keep-alive>
          <div v-if="loading && !nojobs" class="text-center">
            <BSpinner
              variant="primary"
              label="Lade weitere Stellenanzeigen..."
            ></BSpinner>
          </div>
          <!-- <b-button
            v-if="filteredJobs.length < jobsCount"
            variant="secondary"
            block
            @click.prevent="getJobs(0, 25, filteredJobs.length)"
            >Weitere laden</b-button
          > -->
          <div class="my-4 clearfix">
            <h2 class="h5 bold mb-3">Ihre Stellenanzeige hier?</h2>
            <b-img
              style="max-width: 120px"
              class="mr-3 mb-2"
              fluid
              left
              src="~@/assets/img/undraw_Updates_re_o5af.svg"
              alt="Stellenanzeige wird auf MFA mal anders veröffentlicht"
            />
            <p>
              Sie sind als attraktiver Arbeitergeber auf der Suche nach einer
              motivierten und kompetenten
              <em
                >Medizinischen Fachangestellten (MFA) / ArzthelferIn oder
                Zahnmedizinischen Fachangestellten (ZFA)</em
              >{{
                $route.query.location || $route.query.state
                  ? ` in ${$route.query.location || $route.query.state}`
                  : ""
              }}? Dann
              <b-link to="/auth/register" class="bold">registrieren</b-link>
              Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem
              Karriereportal. <br />
              <b-link to="/fuer-arbeitgeber" class="bold">Mehr erfahren</b-link>
            </p>
          </div>
          <TrainingCalendarSmallBanner class="d-lg-none mt-3" />
          <div class="mt-4 mt-lg-5">
            <b-link
              class="h2 text-primary"
              to="/karriere/fort-und-weiterbildungen"
              >Fort- und Weiterbildungen für MFA & ZFA</b-link
            >
            <RandomTrainingsContainer class="mt-3" :number="2" />
            <BerufsbilderBanner class="mt-3" />
          </div>
          <div class="mt-5">
            <p class="small">
              Stellenangebote, Stellen, Jobs, Jobangebote für Medizinische
              Fachangestellte (MFA), Arzthelferin, Zahnmedizinische
              Fachangestellte (ZFA), ZMF, ZMV, MTRA in
              {{ companyStateOptions.join(", ") }}.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Head
      :title="
        'Stellenangebote ArzthelferIn | ' +
          profession.active.join(' & ') +
          ' Jobs' +
          (filter.state ? ` | ${filter.state}` : '')
      "
      :separator="' '"
      :complement="' '"
      :desc="
        `Stellenangebote (Teilzeit | Vollzeit) für ArzthelferInnen ✓ ${profession.active.join(
          ' & '
        )} Jobs ${
          filter.state ? 'in ' + filter.state + ' ' : ''
        }– Die Jobbörse für Medizinische / Zahnmedizinische Fachangestellte.`
      "
      img=""
      :script="snippet"
      :link="link"
    />
  </div>
</template>

<script>
  import Vue from "vue";
  import {
    BButtonToolbar,
    BButtonGroup,
    BSpinner,
    BCollapse
  } from "bootstrap-vue";
  Vue.component("BButtonToolbar", BButtonToolbar);
  Vue.component("BButtonGroup", BButtonGroup);
  Vue.component("BSpinner", BSpinner);
  Vue.component("BCollapse", BCollapse);
  import {
    employmentTypeOptions,
    companyStateOptions,
    specializationOptions,
    professionOptions
  } from "@/config/formDataConfig.json";
  const HereMapMultiJobs = () =>
    import(
      /* webpackChunkName: "HereMapMultiJobs" */ "@/components/hereMaps/HereMapMultiJobs.vue"
    );
  // import HereMapMultiJobs from "@/components/hereMaps/HereMapMultiJobs.vue";
  import JobboardList from "@/components/ui/JobboardList.vue";
  import FacebookBtn from "@/components/buttons/FacebookBtn.vue";
  import InstagramBtn from "@/components/buttons/InstagramBtn.vue";
  import TwitterBtn from "@/components/buttons/TwitterBtn.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  import TrainingCalendarSmallBanner from "@/components/banners/TrainingCalendarSmallBanner.vue";
  // import { getHereServiceMixin } from "@/mixins/getHereServiceMixin.js";
  export default {
    name: "Jobboard",
    components: {
      JobboardList,
      HereMapMultiJobs,
      FacebookBtn,
      InstagramBtn,
      TwitterBtn,
      RandomTrainingsContainer,
      BerufsbilderBanner,
      TrainingCalendarSmallBanner
    },
    // mixins: [getHereServiceMixin],
    data() {
      return {
        title: "Stellenangebote für ArzthelferInnen – MFA & ZFA",
        filteredJobs: [],
        filterJobTimeoutId: null,
        loading: false,
        loadMoreJobsTimeoutId: null,
        nojobs: false,
        jobsCount: 0,
        filter: {
          s: "",
          employmentType: "",
          location: "",
          state: ""
        },
        locationSuggestions: [],
        specialization: {
          active: specializationOptions,
          visible: false,
          allSelected: true,
          indeterminate: false
        },
        profession: {
          active: this.$route.query.profession
            ? typeof this.$route.query.profession === "object"
              ? this.$route.query.profession
              : [this.$route.query.profession]
            : professionOptions.map(profession => profession.value)
        },
        employmentTypeOptions: employmentTypeOptions.filter(
          type => type.value != "part_full"
        ),
        companyStateOptions,
        specializationOptions,
        professionOptions,
        jobboardView: this.$route.query.jobboardView || "list",
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
                                "name": "Stellenangebote",
                                "item": "https://www.mfa-mal-anders.de/stellenangebote"
                            }${
                              this.$route.query.state
                                ? ',{"@type": "ListItem","position": 3,"name": "' +
                                  this.$route.query.state +
                                  '","item": "https://www.mfa-mal-anders.de/stellenangebote?state=' +
                                  this.$route.query.state +
                                  '"}'
                                : ""
                            }]
                        }`
          }
        ],
        link: [
          {
            rel: "stylesheet",
            href: "https://js.api.here.com/v3/3.1/mapsjs-ui.css",
            type: "text/css"
          }
        ]
      };
    },
    computed: {
      computedJobboardView: {
        get() {
          return this.jobboardView === "map"
            ? "HereMapMultiJobs"
            : "JobboardList";
        }
      },
      breadcrumbs() {
        const breadcrumbs = [
          { text: "Home", to: "/" },
          { text: "Stellenangebote", to: "/stellenangebote" }
        ];

        if (this.filter.state) {
          breadcrumbs.push({
            text: this.filter.state,
            to: `/stellenangebote/?state=${this.filter.state}`
          });
        }
        if (this.filter.location) {
          breadcrumbs.push({
            text: this.filter.location,
            to: `/stellenangebote/?location=${this.filter.location}`
          });
        }

        return breadcrumbs;
      }
    },
    watch: {
      "specialization.active"(newValue) {
        if (newValue.length === 0) {
          this.specialization.indeterminate = false;
          this.specialization.allSelected = false;
        } else if (newValue.length === this.specializationOptions.length) {
          this.specialization.indeterminate = false;
          this.specialization.allSelected = true;
        } else {
          this.specialization.indeterminate = true;
          this.specialization.allSelected = false;
        }
      },
      "profession.active"() {
        this.setQuery();
      },
      "$route.query"() {
        this.getJobs();
      }
    },
    async created() {
      this.getJobs(0);
      this.setFilter();
    },
    mounted() {
      // this.loadMoreJobs();
    },
    methods: {
      async getJobs(delay = 400, limit = "", offset = "") {
        clearTimeout(this.filterJobTimeoutId);

        this.filteredJobs = offset > 0 ? this.filteredJobs : [];

        this.filterJobTimeoutId = setTimeout(async () => {
          let response = await this.$axios.get("/api/public-jobs", {
            params: {
              s: this.filter.s,
              employmentType: this.filter.employmentType,
              state: this.filter.state,
              location: this.filter.location,
              profession:
                typeof this.$route.query.profession === "object"
                  ? this.$route.query.profession.join("+")
                  : this.$route.query.profession,
              specialization:
                this.specialization.active.length ===
                this.specializationOptions.length
                  ? ""
                  : typeof this.specialization.active === "object"
                  ? this.specialization.active.join("+")
                  : this.specialization.active,
              limit,
              offset
            }
          });

          // console.log("response.data.jobs: ", response.data.jobs);

          this.filteredJobs = [...this.filteredJobs, ...response.data.jobs];
          this.jobsCount = response.data.jobsCount;

          this.loadMoreJobs();

          if (this.filteredJobs.length === 0) {
            this.nojobs = true;
          } else {
            this.nojobs = false;
          }
        }, delay);
      },
      loadMoreJobs() {
        clearTimeout(this.loadMoreJobsTimeoutId);
        this.loading = false;

        if (
          this.filteredJobs.length < this.jobsCount ||
          this.filteredJobs.length === 0
        ) {
          const jobsList = window.document.getElementById("job-list");

          if (jobsList) {
            const jobsListBottom = jobsList.getBoundingClientRect().bottom;
            const clientBottom = document.documentElement.clientHeight;

            this.loading = true;
            this.loadMoreJobsTimeoutId = setTimeout(async () => {
              if (!this.nojobs && jobsListBottom - clientBottom < 500) {
                await this.getJobs(0, undefined, this.filteredJobs.length);
              }
              this.loading = false;
              this.loadMoreJobs();
            }, 200);
          }
        }
      },
      setQuery() {
        const query = {
          ...this.filter,
          profession:
            typeof this.profession.active === "object" &&
            this.profession.active.length === this.professionOptions.length
              ? ""
              : this.profession.active
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
          employmentType: this.$route.query.employmentType || "",
          location: this.$route.query.location || "",
          state: this.$route.query.state || ""
        };
      },
      toggleAll(checked) {
        this.specialization.active = checked
          ? this.specializationOptions.slice()
          : [];
        this.getJobs(0);
      }
      // async getLocationSuggestions(str) {
      //   if (!str) {
      //     return [];
      //   }
      //   const suggestions = await this.getHereLocationSuggestions(str);
      //   console.log(
      //     "suggestions: ",
      //     suggestions.map(suggestion => suggestion.label)
      //   );

      //   this.locationSuggestions = suggestions.map(
      //     suggestion =>
      //       `${suggestion.address.city}, ${suggestion.address.state}`
      //   );
      // }
    }
  };
</script>

<style lang="scss">
  .jobboard {
    input,
    .input-group,
    select {
      min-width: 100%;
      max-width: 100%;
    }

    .job-list {
      a {
        color: unset;
        transition: linear 0.1s;

        &:hover {
          text-decoration: unset;
          color: $primary;
        }
      }
    }

    #specialization-jobboard,
    #profession-jobboard {
      & .custom-control-label {
        justify-content: flex-start;
        margin-top: 0;
      }
    }
  }
</style>
