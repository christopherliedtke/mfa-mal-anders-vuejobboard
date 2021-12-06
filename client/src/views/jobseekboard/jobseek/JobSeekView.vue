<template>
  <div class="container py-5">
    <div v-if="error">
      {{ error }}
      <div class="mt-3">
        <b-btn to="/stellengesuche">Zurück zu den Stellengesuchen</b-btn>
      </div>
    </div>
    <JobSeek v-else-if="jobSeek" :job-seek="jobSeek" />
    <JobSeekPlaceholder v-else-if="!jobSeek" />

    <Head
      v-if="jobSeek"
      :title="`${jobSeek.title || ''} | ${jobSeek.location || ''}`"
      :desc="`Stellengesuch – ${jobSeek.title || ''}`"
      img=""
      twitter-card="summary_large_image"
      :script="snippet"
    />
  </div>
</template>

<script>
  // TODO add general og-image
  import JobSeek from "@/components/ui/JobSeek.vue";
  import JobSeekPlaceholder from "@/components/ui/JobSeekPlaceholder.vue";
  export default {
    name: "JobSeekView",
    components: {
      JobSeek,
      JobSeekPlaceholder
    },
    data() {
      return {
        jobSeek: null,
        error: null
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
                    "name": "Stellengesuche",
                    "item": "https://www.mfa-mal-anders.de/stellengesuche"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Stellenangebot",
                    "item": "https://www.mfa-mal-anders.de/stellengesuche/gesuch/${this.jobSeek._id}/${this.jobSeek.slug}"
                }
              ]
            }`
          },
          {
            id: "canonical",
            rel: "canonical",
            href: `${this.$config.website.url}/stellengesuche/gesuch/${this.jobSeek._id}/${this.jobSeek.slug}`
          }
        ];
      }
    },
    watch: {
      "$route.params.jobSeekId"() {
        this.getJobSeek(this.$route.params.jobSeekId);
      }
    },
    created() {
      this.getJobSeek(this.$route.params.jobSeekId);
    },
    methods: {
      async getJobSeek(_id) {
        this.error = null;

        try {
          if (!_id) {
            throw new Error();
          }

          const jobSeek = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  publicJobSeek(
                    _id: "${_id}"
                  ) {
                    _id
                    updatedAt
                    title
                    about
                    experiences
                    tasks
                    isMfa
                    isZfa
                    qualifications
                    partTime
                    fullTime
                    training
                    miniJob
                    salaryMin
                    gender
                    publicFirstName
                    publicLastName
                    imageUrl
                    location
                    zipCode
                    slug
                  }
                }
              `
            }
          });

          if (jobSeek.data.errors) {
            throw new Error();
          }

          if (!jobSeek.data.data.publicJobSeek) {
            this.jobSeek = {};
            this.error = `Das Stellengesuch konnte nicht gefunden werden. Möglicherweise wurde es von dem/der NutzerIn offline genommen.`;
            return;
          }

          this.jobSeek = jobSeek.data.data.publicJobSeek;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden des Stellengesuchs ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
