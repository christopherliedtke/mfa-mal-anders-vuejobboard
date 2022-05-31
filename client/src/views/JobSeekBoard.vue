<template>
  <div class="jobseekboard">
    <div class="title">
      <h1>
        <strong>Stellengesuche</strong> <br />
        <span class="h4"
          >Qualifizierte MFA & ZFA finden{{
            filter.ort ? " in " + filter.ort : ""
          }}</span
        >
      </h1>
      <b-breadcrumb :items="breadcrumbs" class="text-capitalize"></b-breadcrumb>
    </div>

    <div class="container py-3 py-lg-4">
      <div class="row mt-2">
        <div class="col-12 col-lg-4 pt-2 pr-lg-5">
          <b-form
            id="job-filter"
            @submit.prevent="
              () => {
                getJobSeeks();
                setQuery();
              }
            "
          >
            <label for="location" class="sr-only">Ort / PLZ</label>
            <b-input-group class="mb-2 mr-2">
              <template #prepend>
                <b-input-group-text class="bg-secondary text-light border-0"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                    /></svg
                ></b-input-group-text>
              </template>
              <b-form-input
                id="location"
                v-model="filter.ort"
                type="text"
                placeholder="PLZ oder Ort..."
                trim
                lazy
                :formatter="capitalize"
              />
              <b-input-group-append>
                <b-button
                  aria-label="Zurücksetzen"
                  class="px-2"
                  @click.prevent="
                    () => {
                      filter.ort = '';
                      getJobSeeks();
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
                  ><span class="sr-only">Zurücksetzen</span></b-button
                >
              </b-input-group-append>
            </b-input-group>

            <label for="radius" class="sr-only">Umkreisradius</label>
            <b-input-group>
              <template #prepend>
                <b-input-group-text class="bg-secondary text-light border-0"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bullseye"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    />
                    <path
                      d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    />
                    <path
                      d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    /></svg
                ></b-input-group-text>
              </template>
              <b-form-input
                id="radius"
                v-model="filter.radius"
                type="number"
                min="15"
                step="5"
                placeholder="Umkreis..."
                debounce="500"
                number
                trim
                lazy
              />
              <b-input-group-append>
                <b-input-group-text class="bg-light text-muted px-2"
                  >km</b-input-group-text
                >
                <b-button
                  aria-label="Zurücksetzen"
                  class="px-2"
                  @click.prevent="
                    () => {
                      filter.radius = null;
                      getJobSeeks();
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
                  ><span class="sr-only">Zurücksetzen</span></b-button
                >
              </b-input-group-append>
            </b-input-group>

            <div
              style="cursor: pointer"
              class="text-primary mt-3 mb-2 ml-2"
              @click="showAdvancedSearch = !showAdvancedSearch"
            >
              Erweiterte Suche
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                :class="[
                  'bi bi-caret-right-fill animate ml-2 mb-1',
                  { 'rotate-90': showAdvancedSearch }
                ]"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                />
              </svg>
            </div>
            <b-collapse
              id="advanced-search"
              v-model="showAdvancedSearch"
              class="mb-3"
            >
              <label for="employmentType" class="sr-only">Anstellungsart</label>
              <b-input-group class="mr-2">
                <template #prepend>
                  <b-input-group-text class="bg-secondary text-light border-0"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-briefcase-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"
                      /></svg
                  ></b-input-group-text>
                </template>
                <b-form-select
                  id="employmentType"
                  v-model="filter.anstellungsart"
                  class=""
                  @change="
                    () => {
                      getJobSeeks();
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

              <b-form-group class="d-flex flex-wrap mt-2">
                <b-form-checkbox
                  id="is-mfa"
                  v-model="filter.isMfa"
                  class="mr-sm-4"
                  name="is-mfa"
                  switch
                  @change="
                    () => {
                      getJobSeeks();
                      setQuery();
                    }
                  "
                >
                  MFA Ausbildung
                </b-form-checkbox>
                <b-form-checkbox
                  id="is-zfa"
                  v-model="filter.isZfa"
                  class="mr-sm-4"
                  name="is-zfa"
                  switch
                  @change="
                    () => {
                      getJobSeeks();
                      setQuery();
                    }
                  "
                >
                  ZFA Ausbildung
                </b-form-checkbox>
              </b-form-group>
            </b-collapse>

            <div>
              <span
                style="cursor: pointer"
                class="text-danger small ml-2"
                @click="resetFilter"
                >Filter zurücksetzen</span
              >
            </div>

            <div class="mt-2">
              <b-button variant="success" type="submit" block
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  /></svg
                >Stellengesuche finden</b-button
              >
            </div>
          </b-form>
          <div class="small text-right mt-2 mb-2 pr-3 pt-1">
            <b-link to="/stellengesuche/info">Stellengesuch schalten</b-link>
          </div>

          <div class="d-none d-lg-block my-5">
            <BannerJobSeeksSmall />
            <SocialButtonFacebook
              class="mt-3 mr-1"
              content="Facebook"
              size="sm"
            />
            <SocialButtonInstagram class="mt-3 mr-1" content="" size="sm" />
            <SocialButtonTwitter class="mt-3 mr-1" content="" size="sm" />
          </div>
        </div>

        <div class="col-12 col-lg-8 pt-2">
          <div v-if="errors">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.message }}
            </p>
          </div>
          <div v-else-if="!jobSeeks">
            <JobSeekCardPlaceholder v-for="index in 25" :key="index" />
          </div>
          <div v-else-if="jobSeeks.length > 0">
            <JobSeekCard
              v-for="jobSeek in jobSeeks"
              :key="jobSeek._id"
              :job-seek="jobSeek"
            />
          </div>
          <div v-else-if="count === 0">
            Leider konnten für Ihre Anfrage aktuell keine Stellengesuche
            gefunden werden.
          </div>

          <div class="d-flex justify-content-center">
            <button
              v-if="jobSeeks && jobSeeks.length < count"
              class="btn btn-secondary"
              @click="loadMoreJobSeeks()"
            >
              Weitere Laden
            </button>
            <BSpinner
              v-else-if="loading"
              variant="primary"
              label="Lade weitere Stellengesuche..."
            ></BSpinner>
          </div>

          <div class="my-4 my-lg-5 clearfix">
            <h2 class="h5 bold mb-3">
              Ihre Stellenanzeige auf MFA mal anders?
            </h2>
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
                >Medizinischen Fachangestellten (MFA) | Zahnmedizinischen
                Fachangestellten (ZFA) | ArzthelferIn</em
              >{{
                $route.query.ort || $route.query.state
                  ? ` in ${$route.query.ort || $route.query.state}`
                  : ""
              }}? Dann
              <b-link to="/auth/register" class="bold">registrieren</b-link>
              Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem
              Karriereportal. <br />
              <b-link to="/fuer-arbeitgeber" class="bold">Mehr erfahren</b-link>
            </p>
          </div>
        </div>
      </div>

      <BannerJobSeeksLarge class="mb-4 mb-lg-5" />
      <ArticleListRandom />
    </div>

    <ScrollTopButton />

    <Head
      :title="
        `Stellengesuche ArzthelferIn | MFA | ZFA${
          filter.ort ? ' in ' + filter.ort : ''
        }`
      "
      :desc="
        `Stellengesuche von Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) ${
          filter.ort ? ' in ' + filter.ort + ' & Umgebung' : ''
        } ✓ Teilzeit | Vollzeit`
      "
      img="/img/MfaMalAnders_Stellengesuche.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import ScrollTopButton from "@/components/ScrollTopButton.vue";
  import Vue from "vue";
  import { BSpinner, BCollapse } from "bootstrap-vue";
  Vue.component("BSpinner", BSpinner);
  Vue.component("BCollapse", BCollapse);

  import { employmentTypeOptions } from "@/config/formDataConfig.json";
  import textToSlug from "@/helpers/textToSlug.js";

  import JobSeekCard from "@/components/JobSeekCard.vue";
  import JobSeekCardPlaceholder from "@/components/JobSeekCardPlaceholder.vue";
  import ArticleListRandom from "@/components/ArticleListRandom.vue";
  import BannerJobSeeksLarge from "@/components/BannerJobSeeksLarge.vue";
  import BannerJobSeeksSmall from "@/components/BannerJobSeeksSmall.vue";
  import SocialButtonFacebook from "@/components/SocialButtonFacebook.vue";
  import SocialButtonInstagram from "@/components/SocialButtonInstagram.vue";
  import SocialButtonTwitter from "@/components/SocialButtonTwitter.vue";

  export default {
    name: "JobSeekBoard",
    components: {
      JobSeekCard,
      JobSeekCardPlaceholder,
      ScrollTopButton,
      ArticleListRandom,
      BannerJobSeeksLarge,
      BannerJobSeeksSmall,
      SocialButtonFacebook,
      SocialButtonInstagram,
      SocialButtonTwitter
    },
    data() {
      return {
        title: "",
        jobSeeks: null,
        count: null,
        filter: {
          ort: "",
          radius: null,
          anstellungsart: "",
          isMfa: false,
          isZfa: false
        },
        showAdvancedSearch: false,
        employmentTypeOptions: Object.freeze(employmentTypeOptions),
        loading: false,
        errors: null
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
                    "name": "Stellengesuche",
                    "item": "https://www.mfa-mal-anders.de/stellengesuche"
                }${
                  this.filter.ort
                    ? ',{"@type": "ListItem","position": 3,"name": "' +
                      this.filter.ort +
                      '","item": "https://www.mfa-mal-anders.de/stellengesuche/ort/' +
                      this.filter.ort.toLowerCase() +
                      '"}'
                    : ""
                }]
              }`
          },
          {
            rel: "canonical",
            href: `${
              this.$config.website.url
            }/stellengesuche${this.getCanonical()}`,
            id: "canonical"
          }
        ];
      },
      breadcrumbs() {
        const breadcrumbs = [
          { text: "Home", to: "/" },
          { text: "Stellengesuche", to: "/stellengesuche" }
        ];

        if (this.filter.ort) {
          breadcrumbs.push({
            text: this.filter.ort,
            to: `/stellengesuche/ort/${this.filter.ort.toLowerCase()}`
          });
        }

        return breadcrumbs;
      }
    },
    async created() {
      this.setFilter();
      this.getJobSeeks();
    },
    methods: {
      async getJobSeeks(limit = null, skip = null) {
        if (this.loading === true) {
          return;
        }

        this.loading = true;
        this.jobSeeks = skip ? this.jobSeeks : null;
        this.errors = null;

        try {
          const jobSeeks = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  publicJobSeeks(
                      limit: ${limit}
                      skip: ${skip}
                      location: "${this.filter.ort}"
                      radius: ${
                        Number.isInteger(this.filter.radius)
                          ? this.filter.radius
                          : null
                      }
                      employmentType: "${this.filter.anstellungsart}"
                      isMfa: ${this.filter.isMfa}
                      isZfa: ${this.filter.isZfa}
                    ) {
                    jobSeeks {
                      _id
                      title
                      isMfa
                      isZfa
                      partTime
                      fullTime
                      training
                      miniJob
                      publicFirstName
                      publicLastName
                      imageUrl
                      location
                      slug
                    }
                    count
                  }
                }
              `
            }
          });

          if (jobSeeks.data.errors) {
            if (
              jobSeeks.data.errors.some(
                error => error.extensions.argumentName == "location"
              )
            ) {
              this.errors = jobSeeks.data.errors;
              this.loading = false;
              return;
            }

            throw new Error();
          }

          this.count = jobSeeks.data.data.publicJobSeeks.count;

          this.jobSeeks = [
            ...(this.jobSeeks || ""),
            ...jobSeeks.data.data.publicJobSeeks.jobSeeks
          ];
        } catch (err) {
          this.$root.$bvToast.toast(
            `Beim Laden der Stellengesuche ist ein Fehler aufgetreten. Bitte versuchen Sie die Seite neu zu laden.`,
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.loading = false;
      },
      async loadMoreJobSeeks() {
        if (this.jobSeeks && this.jobSeeks.length < this.count) {
          await this.getJobSeeks(undefined, this.jobSeeks.length);
        }
      },
      setQuery() {
        const query = {
          ...this.filter,
          ort: textToSlug(this.filter.ort)
        };

        for (const key in query) {
          if (!query[key]) {
            delete query[key];
          }
        }

        this.$router
          .replace({
            query,
            path: "/stellengesuche"
          })
          .catch(() => {});
      },
      setFilter() {
        this.filter = {
          ...this.filter,
          ort: this.capitalize(
            `${this.$route.params.location || this.$route.query.ort || ""}`
          ).replace(/-/g, " "),
          radius: parseInt(this.$route.query.radius) || null,
          anstellungsart: this.$route.query.anstellungsart || "",
          isMfa: !!this.$route.query.isMfa,
          isZfa: !!this.$route.query.isZfa
        };

        if (
          this.filter.radius ||
          this.filter.anstellungsart ||
          this.filter.isMfa ||
          this.filter.isZfa
        ) {
          this.showAdvancedSearch = true;
        }
      },
      resetFilter() {
        this.filter = {
          ort: "",
          radius: null,
          anstellungsart: "",
          isMfa: false,
          isZfa: false
        };

        this.setQuery();
        this.getJobSeeks();
      },
      capitalize(value) {
        return value.replace(/(^[a-z]| [a-z]|-[a-z])/g, letter =>
          letter.toUpperCase()
        );
      },
      getCanonical() {
        let canonical = "";
        const location = this.$route.params.location || this.$route.query.ort;

        if (location) {
          canonical += "/ort/" + location.toLowerCase();
        }

        return canonical;
      }
    }
  };
</script>

<style lang="scss">
  .jobseekboard {
    .custom-control-label {
      justify-content: flex-start;
      margin-top: 0.25rem;
    }
  }
</style>
