<template>
  <div class="container py-4 py-lg-5">
    <div v-if="!company">
      <CompanyItemPlaceholder />
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
          <span
            v-if="$store.state.auth.user.isAdmin"
            class="border-radius1 bg-light-shade ml-2 p-2"
          >
            <b-link :to="`/admin/companies/edit/${company._id}`">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                style="cursor: pointer"
                class="bi bi-pencil-square text-info"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </b-link>
          </span>
        </div>

        <div
          class="row border-radius1 bg-light-shade mb-5 px-3 px-lg-4 py-4 py-lg-5"
        >
          <div class="col-12 col-lg-6 order-2 order-lg-1">
            <div class="mb-0">
              <h2 class="display-4 bold">Standort</h2>

              <p>
                {{ company.street }} <br />
                {{ company.zipCode }}, {{ company.location }} <br />
                {{ company.country }}
              </p>

              <MapJobSingle
                v-if="company.geoCodeLat && company.geoCodeLng"
                :job="{ company }"
                class="mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="mb-0">
              <h2 class="display-4 bold">Über</h2>
              <!-- eslint-disable -->
              <div
                v-if="company.description && company.description != 'undefined'"
                v-html="company.description"
              ></div>
              <!-- eslint-enable -->
              <p v-if="company.size" class="mb-0">
                Unternehmensgröße: {{ company.size }}
              </p>
              <p v-if="company.url" class="text-truncate">
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
          <h2 class="mb-3">
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
          <p v-else>
            Aktuell gibt es keine offenen Stellen auf <em>MFA mal anders</em>.
          </p>
        </div>
      </article>

      <div class="bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4">
        <SearchWidgetJob class="mb-3" placeholder="Weitere Stellen finden..." />
        <JobListTeaser
          :location="{
            geoCodeLat: company.geoCodeLat,
            geoCodeLng: company.geoCodeLng
          }"
        />
      </div>

      <Head
        :title="`${company.name} | ${company.location}`"
        :desc="`Unternehmensprofil – ${company.name} | ${company.location}`"
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
  import MapJobSingle from "@/components/MapJobSingle.vue";
  import JobCard from "@/components/JobCard.vue";
  import CompanyItemPlaceholder from "@/components/CompanyItemPlaceholder.vue";
  import JobListTeaser from "@/components/JobListTeaser.vue";
  import SearchWidgetJob from "@/components/SearchWidgetJob.vue";
  export default {
    name: "CompanyView",
    components: {
      MapJobSingle,
      JobCard,
      CompanyItemPlaceholder,
      JobListTeaser,
      SearchWidgetJob
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
