<template>
  <div class="jobboard">
    <div class="title">
      <h1>
        {{
          `Stellenangebote${
            profession.active.length > 0
              ? " – " + profession.active.join(" & ")
              : ""
          } ${filter.location ? " | " + filter.location : ""}
      `
        }}
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <div class="row mt-2">
        <div class="col-12 col-lg-4 px-2 pr-lg-5">
          <b-form
            id="job-filter"
            @submit.prevent="
              () => {
                getJobs();
                setQuery();
              }
            "
          >
            <label for="location-jobboard" class="sr-only">Ort / PLZ</label>
            <b-input-group class="mb-2 mr-2">
              <template #prepend>
                <b-input-group-text class="bg-secondary text-light border-0"
                  ><Fa :icon="['fas', 'map-marker']"
                /></b-input-group-text>
              </template>
              <b-form-input
                id="location-jobboard"
                v-model="filter.location"
                :class="filter.location ? 'border-secondary' : ''"
                type="text"
                placeholder="Ort oder PLZ..."
                trim
                lazy
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

            <div
              style="cursor: pointer"
              class="text-primary my-3 ml-2"
              @click="showAdvancedSearch = !showAdvancedSearch"
            >
              Erweiterte Suche
              <Fa
                icon="caret-right"
                size="1x"
                :class="
                  showAdvancedSearch === true
                    ? 'animate rotate-90 ml-2'
                    : 'animate ml-2'
                "
              />
            </div>
            <b-collapse id="advanced-search" v-model="showAdvancedSearch">
              <label for="s-jobboard" class="sr-only">Suchbegriff</label>
              <b-input-group class="mb-2 mr-2">
                <template #prepend>
                  <b-input-group-text class="bg-secondary text-light border-0"
                    ><Fa icon="search"
                  /></b-input-group-text>
                </template>
                <b-form-input
                  id="s-jobboard"
                  v-model="filter.s"
                  :class="filter.s ? 'border-secondary' : ''"
                  type="text"
                  placeholder="Suchbegriff..."
                  lazy
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
                >Anstellungsart</label
              >
              <b-input-group class="mb-2 mr-2">
                <template #prepend>
                  <b-input-group-text class="bg-secondary text-light border-0"
                    ><Fa :icon="['fas', 'briefcase']"
                  /></b-input-group-text>
                </template>
                <b-form-select
                  id="employmentType-jobboard"
                  v-model="filter.employmentType"
                  class=""
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
              </b-input-group>

              <label for="profession-jobboard" class="mb-2 pl-2"
                >Berufsgruppe</label
              >
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
              <div>
                <span
                  style="cursor: pointer"
                  class="text-danger small ml-2"
                  @click="resetFilter"
                  >Filter zurücksetzen</span
                >
              </div>
            </b-collapse>

            <div class="mt-2">
              <b-button variant="success" type="submit" block
                ><Fa class="mr-2" size="sm" icon="search" />Jobs
                finden</b-button
              >
            </div>
          </b-form>
          <div class="small text-right mt-2 mb-2 pr-3 pt-1">
            <b-link to="/fuer-arbeitgeber">Stellenanzeige schalten</b-link>
          </div>
          <div class="mt-3 mt-lg-5 text-right text-lg-left">
            <b-button
              v-if="
                $config.starredJobs.active &&
                  $store.state.auth.loggedIn &&
                  $store.state.starredJobs.starredJobs &&
                  $store.state.starredJobs.starredJobs.length > 0
              "
              to="/user/dashboard?tab=4"
              variant="outline-secondary"
              size="sm"
              >Meine gespeicherten Jobs</b-button
            >
            <SubscribeNewsletterBtn
              v-else
              class="mt-2 mr-1 d-flex justify-content-end justify-content-lg-start"
              size="sm"
              variant="secondary"
            />
          </div>
          <div class="d-none d-lg-block mt-4">
            <TrainingCatalogueSmallBanner />
          </div>
          <div class="d-none d-lg-block mt-3">
            <FacebookBtn class="mt-2 mr-1" content="Facebook" size="sm" />
            <InstagramBtn class="mt-2 mr-1" content="" size="sm" />
            <TwitterBtn class="mt-2 mr-1" content="" size="sm" />
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <JobboardList
            id="job-list"
            class="mb-4"
            :jobs="filteredJobs"
            :nojobs="nojobs"
            :errors="errors"
          ></JobboardList>

          <div class="d-flex justify-content-center">
            <button
              v-if="!nojobs && !loading && filteredJobs.length < jobsCount"
              class="btn btn-secondary"
              @click="loadMoreJobs()"
            >
              Weitere Laden
            </button>
            <BSpinner
              v-else-if="loading && !nojobs"
              variant="primary"
              label="Lade weitere Stellenanzeigen..."
            ></BSpinner>
          </div>

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
          <TrainingCatalogueSmallBanner class="d-lg-none mt-3" />
          <div class="mt-4 mt-lg-5">
            <BerufsbilderBanner class="mt-3 mb-5" />
            <b-link
              class="h2 text-primary"
              to="/karriere/fort-und-weiterbildungen"
              >Fort- und Weiterbildungen für MFA & ZFA</b-link
            >
            <RandomTrainingsContainer class="mt-3" :number="2" />
          </div>
          <div class="mt-5">
            <p class="small">
              Stellenangebote, Stellen, Jobs, Jobangebote für Medizinische
              Fachangestellte (MFA), Arzthelferin, Zahnmedizinische
              Fachangestellte (ZFA), ZMF, ZMV, MTRA in
              <span v-for="(state, index) in companyStateOptions" :key="state">
                <b-link
                  :to="`/stellenangebote/ort/${state.toLowerCase()}`"
                  @click="
                    () => {
                      filter.location = state;
                      getJobs();
                    }
                  "
                  >{{ state }}</b-link
                ><span v-if="index < companyStateOptions.length - 1"
                  >,
                </span></span
              >.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Head
      :title="
        `Stellenangebote ArzthelferIn | ${profession.active.join(' & ')} Jobs${
          filter.location ? ' | ' + filter.location : ''
        }
      `
      "
      :desc="
        `Stellenangebote (Teilzeit | Vollzeit) für ArzthelferIn ✓ ${profession.active.join(
          ' & '
        )} Jobs ${
          filter.location ? 'in ' + filter.location + ' ' : ''
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
  import { BSpinner, BCollapse } from "bootstrap-vue";
  Vue.component("BSpinner", BSpinner);
  Vue.component("BCollapse", BCollapse);
  import {
    employmentTypeOptions,
    companyStateOptions,
    specializationOptions,
    professionOptions
  } from "@/config/formDataConfig.json";

  import JobboardList from "@/components/ui/JobboardList.vue";
  import FacebookBtn from "@/components/buttons/FacebookBtn.vue";
  import InstagramBtn from "@/components/buttons/InstagramBtn.vue";
  import TwitterBtn from "@/components/buttons/TwitterBtn.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  import TrainingCatalogueSmallBanner from "@/components/banners/TrainingCatalogueSmallBanner.vue";
  import SubscribeNewsletterBtn from "@/components/buttons/SubscribeNewsletterBtn.vue";
  export default {
    name: "Jobboard",
    components: {
      JobboardList,
      FacebookBtn,
      InstagramBtn,
      TwitterBtn,
      RandomTrainingsContainer,
      BerufsbilderBanner,
      TrainingCatalogueSmallBanner,
      SubscribeNewsletterBtn
    },
    data() {
      return {
        filteredJobs: [],
        loading: false,
        nojobs: false,
        jobsCount: 0,
        filter: {
          s: "",
          employmentType: "",
          location: "",
          state: ""
        },
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
        showAdvancedSearch: false,
        companyStateOptions,
        specializationOptions,
        professionOptions,
        jobboardView: this.$route.query.jobboardView || "list",
        errors: null,
        link: [
          {
            id: "mapsjs-ui",
            rel: "stylesheet",
            href: "https://js.api.here.com/v3/3.1/mapsjs-ui.css",
            type: "text/css"
          }
        ]
      };
    },
    computed: {
      snippet() {
        return [
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
                    "name": "Stellenangebote",
                    "item": "https://www.mfa-mal-anders.de/stellenangebote"
                }${
                  this.$route.query.location || this.$route.query.state
                    ? ',{"@type": "ListItem","position": 3,"name": "' +
                      (this.$route.params.location ||
                        this.$route.query.location ||
                        this.$route.query.state) +
                      '","item": "https://www.mfa-mal-anders.de/stellenangebote/ort/' +
                      (
                        this.$route.params.location ||
                        this.$route.query.location ||
                        this.$route.query.state
                      ).toLowerCase() +
                      '"}'
                    : ""
                }]
              }`
          },
          {
            rel: "canonical",
            href: `${this.$config.website.url +
              `/stellenangebote${
                this.$route.params.location ||
                this.$route.query.location ||
                this.$route.query.state
                  ? "/ort/" +
                    (
                      this.$route.params.location ||
                      this.$route.query.location ||
                      this.$route.query.state
                    ).toLowerCase()
                  : ""
              }`}`,
            id: "canonical"
          }
        ];
      },
      breadcrumbs() {
        const breadcrumbs = [
          { text: "Home", to: "/" },
          { text: "Stellenangebote", to: "/stellenangebote" }
        ];

        if (this.filter.state || this.filter.location) {
          breadcrumbs.push({
            text: this.filter.state || this.filter.location,
            to: `/stellenangebote/ort/${(
              this.filter.state || this.filter.location
            ).toLowerCase()}`
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
      }
    },
    async created() {
      this.setFilter();
      this.getJobs();
    },
    methods: {
      async getJobs(limit = "", offset = "") {
        this.errors = null;
        this.nojobs = false;
        this.filteredJobs = offset > 0 ? this.filteredJobs : [];

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

        if (response.data.errors) {
          this.errors = response.data.errors;
        }

        this.filteredJobs = [...this.filteredJobs, ...response.data.jobs];
        this.jobsCount = response.data.jobsCount;

        if (this.filteredJobs.length === 0) {
          this.nojobs = true;
        } else {
          this.nojobs = false;
        }
      },
      async loadMoreJobs() {
        this.loading = false;

        if (
          this.filteredJobs.length < this.jobsCount ||
          this.filteredJobs.length === 0
        ) {
          this.loading = true;
          await this.getJobs(undefined, this.filteredJobs.length);
          this.loading = false;
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

        this.$router
          .replace({
            query,
            path: "/stellenangebote"
          })
          .catch(() => {});
      },
      setFilter() {
        this.filter = {
          s: this.$route.query.s || "",
          employmentType: this.$route.query.employmentType || "",
          location: `${this.$route.params.location ||
            this.$route.query.location ||
            ""}${this.$route.query.state ? " " : ""}${this.$route.query.state ||
            ""}`
        };

        if (
          this.$route.query.s ||
          this.$route.query.employmentType ||
          this.$route.query.profession
        ) {
          this.showAdvancedSearch = true;
        }
      },
      toggleAll(checked) {
        this.specialization.active = checked
          ? this.specializationOptions.slice()
          : [];
        this.getJobs();
      },
      resetFilter() {
        this.filter = {
          s: "",
          employmentType: "",
          location: "",
          state: ""
        };

        this.specialization = {
          active: this.specializationOptions,
          visible: false,
          allSelected: true,
          indeterminate: false
        };

        this.profession.active = this.professionOptions.map(
          profession => profession.value
        );

        this.setQuery();
        this.getJobs();
      }
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
