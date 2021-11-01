<template>
  <div class="container py-4 py-lg-5">
    <div v-if="!company">
      <CompanyPlaceholder />
    </div>
    <div v-else>
      <article class="company position-relative">
        <div
          class="mb-4 mb-lg-5 d-flex align-items-start justify-content-start align-items-center"
        >
          <b-link
            v-if="company.logoUrl"
            :to="`/unternehmen/${company._id}/${company.slug}`"
            class="logo-container mr-3 mr-lg-4"
          >
            <b-img
              class="logo"
              :src="company.logoUrl"
              :alt="`Logo - ${company.name}`"
            />
          </b-link>
          <!-- eslint-disable-next-line -->
          <h1 class="overflow-hidden bold" v-html="company.name"></h1>
        </div>

        <div
          class="row border-radius1 bg-light-shade mb-5 px-3 px-lg-4 py-4 py-lg-5"
        >
          <div class="col-12 col-lg-6 order-2 order-lg-1">
            <div class="mb-0">
              <h2 class="h3">Standort</h2>

              <p>
                {{ company.street }} <br />
                {{ company.zipCode }}, {{ company.location }} <br />
                {{ company.country }}
              </p>

              <HereMapSingleJob
                v-if="company.geoCodeLat && company.geoCodeLng"
                :job="{ company }"
                class="mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="mb-0">
              <h2 class="h3">Über</h2>
              <!-- eslint-disable -->
              <div
                v-if="company.description"
                v-html="company.description"
              ></div>
              <!-- eslint-enable -->
              <p class="mb-0">Unternehmensgröße: {{ company.size }}</p>
              <p v-if="company.url">
                Webseite:
                <b-link class="bold" :href="company.url" target="_blank">{{
                  company.url
                }}</b-link>
              </p>
            </div>
          </div>
        </div>

        <div>
          <!-- eslint-disable -->
          <h2 class="h3 mb-3">
            Aktuelle Stellenangebote bei <span v-html="company.name"></span>
          </h2>
          <!-- eslint-enable -->
          <div v-if="company.publicJobs.length > 0">
            <JobCard
              v-for="job in company.publicJobs"
              :key="job._id"
              :job="job"
            />
          </div>
          <p v-else>Aktuell gibt es keine offenen Stellen.</p>
        </div>
      </article>

      <Head
        :title="`${company.name} | ${company.location}`"
        :desc="`${company.name} | ${company.location}`"
        :img="
          company.logoUrl && !company.logoUrl.includes('.svg')
            ? company.logoUrl
            : ''
        "
        :twitter-card="
          company.logoUrl && !company.logoUrl.includes('.svg')
            ? 'summary'
            : 'summary_large_image'
        "
        :script="snippet"
        :link="link"
      />
    </div>
  </div>
</template>

<script>
  import HereMapSingleJob from "@/components/hereMaps/HereMapSingleJob.vue";
  import JobCard from "@/components/ui/JobCard.vue";
  import CompanyPlaceholder from "@/components/ui/CompanyPlaceholder.vue";
  export default {
    name: "CompanyView",
    components: {
      HereMapSingleJob,
      JobCard,
      CompanyPlaceholder
    },
    data() {
      return {
        company: null,
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
      jobQuery: function() {
        return this.apiJobsSchema === "admin"
          ? "adminJob"
          : this.apiJobsSchema === "private"
          ? "myJob"
          : "publicJob";
      },
      snippet: function() {
        return [
          {
            id: "canonical",
            rel: "canonical",
            href: `${this.$config.website.url}/unternehmen/${this.company._id}/${this.company.slug}`
          }
        ];
      }
    },
    created() {
      this.getCompany(this.$route.params.companyId);
    },
    methods: {
      async getCompany(companyId) {
        try {
          const company = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  company(_id: "${companyId}") {
                    _id
                    name
                    description
                    street
                    zipCode
                    location
                    country
                    size
                    logoUrl
                    url
                    slug
                    geoCodeLat
                    geoCodeLng
                    publicJobs {
                      _id
                      title
                      description
                      employmentType
                      simpleApplication
                      specialization
                      salaryMin
                      salaryMax
                      company {
                        name
                        location
                        logoUrl
                      }
                      slug
                    }
                  }
                }
              `
            }
          });

          if (company.data.data.company) {
            this.company = company.data.data.company;
          } else {
            throw new Error();
          }
        } catch (err) {
          this.$root.$bvToast.toast(
            "Dieses Unternehmen ist nicht oder nicht mehr verfügbar.",
            {
              title: `Unternehmen nicht verfügbar`,
              variant: "warning",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );

          this.$router.push("/stellenangebote");
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .company {
    word-wrap: break-word;

    .logo-container {
      background-color: $light;
      border-radius: $border-radius1;
      box-shadow: $shadow1;
      min-width: 120px;
      min-height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 767px) {
        min-width: 90px;
        min-height: 90px;
      }

      .logo {
        max-width: 100px;
        max-height: 100px;
        //   padding: 0.5rem;

        @media screen and (max-width: 767px) {
          max-width: 70px;
          max-height: 70px;
        }
      }
    }
  }
</style>
