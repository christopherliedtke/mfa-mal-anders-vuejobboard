<template>
  <div class="jobpage container py-5">
    <div v-if="error">
      {{ error }}
      <div class="mt-3">
        <b-btn to="/stellenangebote">Zurück zu den Stellenangeboten</b-btn>
      </div>
    </div>
    <Job v-else-if="job" :job="job" />
    <JobPlaceholder v-else-if="!job" class="mb-5" />

    <SimilarJobsContainer :job="job" :number="5" />
    <JobSeeksLargeBanner class="mt-4 mt-lg-5" />
    <RandomTrainingsContainer :number="3" class="mt-4 mt-lg-5" />

    <Head
      v-if="job"
      :title="
        `${job.title || ''} | ${
          job.employmentType
            ? employmentTypeOptions.filter(
                option => option.value === job.employmentType
              )[0].text
            : ''
        } | ${job.company.location}`
      "
      :desc="
        `Stellenangebot – ${job.title || ''} | ${job.company.name || ''} | ${
          job.employmentType
            ? employmentTypeOptions.filter(
                option => option.value === job.employmentType
              )[0].text
            : ''
        } | ${job.company.location}${
          job.company.state != job.company.location
            ? ', ' + job.company.state
            : ''
        }`
      "
      :img="
        job.imageUrl && !job.imageUrl.includes('.svg')
          ? job.imageUrl
          : job.company.logoUrl && !job.company.logoUrl.includes('.svg')
          ? job.company.logoUrl
          : job.profession === 'ZFA'
          ? '/img/MfaMalAnders_NeuesStellenangebot_ZFA.jpg'
          : '/img/MfaMalAnders_NeuesStellenangebot_MFA.jpg'
      "
      :twitter-card="
        job.imageUrl && !job.imageUrl.includes('.svg')
          ? 'summary_large_image'
          : job.company.logoUrl && !job.company.logoUrl.includes('.svg')
          ? 'summary'
          : 'summary_large_image'
      "
      :script="snippet"
    />
  </div>
</template>

<script>
  import Job from "@/components/ui/Job.vue";
  import JobPlaceholder from "@/components/ui/JobPlaceholder.vue";
  import SimilarJobsContainer from "@/components/containers/SimilarJobsContainer.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import JobSeeksLargeBanner from "@/components/banners/JobSeeksLargeBanner.vue";
  import { employmentTypeOptions } from "@/config/formDataConfig.json";
  export default {
    name: "JobView",
    components: {
      Job,
      JobPlaceholder,
      SimilarJobsContainer,
      RandomTrainingsContainer,
      JobSeeksLargeBanner
    },
    data() {
      return {
        job: null,
        error: null,
        employmentTypeOptions
      };
    },
    computed: {
      snippet: function() {
        return [
          {
            id: "breadcrumbs",
            type: "application/ld+json",
            inner: `{
              "@context": "http://schema.org",
              "@type" : "BreadcrumbList",
              "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "MFA mal anders",
                    "item": "https://www.mfa-mal-anders.de"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Stellenangebote",
                    "item": "https://www.mfa-mal-anders.de/stellenangebote"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Stellenangebot",
                    "item": "https://www.mfa-mal-anders.de/stellenangebote/job/${
                      this.job ? this.job._id : ""
                    }"
                }
              ]
            }`
          },
          {
            id: "canonical",
            rel: "canonical",
            href: `${this.$config.website.url}/stellenangebote/job/${
              this.job ? this.job._id : ""
            }/${this.job ? this.job.slug : ""}`
          }
        ];
      }
    },
    watch: {
      "$route.params.jobId"() {
        this.getJob(this.$route.params.jobId);
      }
    },
    created() {
      this.getJob(this.$route.params.jobId);
    },
    methods: {
      async getJob(jobId) {
        this.error = null;

        if (!jobId) {
          throw new Error();
        }

        this.job = null;

        try {
          const job = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                  query {
                    publicJob(_id: "${jobId}") {
                      _id
                      updatedAt
                      publishedAt
                      paidAt
                      paid
                      paidExpiresAt
                      title
                      description
                      profession
                      employmentType
                      applicationDeadline
                      simpleApplication
                      extJobUrl
                      applicationEmail
                      imageUrl
                      salaryMin
                      salaryMax
                      specialization
                      contactGender
                      contactTitle
                      contactFirstName
                      contactLastName
                      contactPosition
                      contactEmail
                      contactPhone
                      company {
                        _id
                        name
                        street
                        location
                        zipCode
                        state
                        country
                        geoCodeLat
                        geoCodeLng
                        size
                        url
                        logoUrl
                        slug
                      }
                    }
                  }
                `
            }
          });

          if (job.data.errors) {
            throw new Error();
          }

          if (!job.data.data.publicJob) {
            this.jobSeek = {};
            this.error = `Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.`;
            return;
          }

          this.job = job.data.data.publicJob;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      }
    }
  };
</script>
