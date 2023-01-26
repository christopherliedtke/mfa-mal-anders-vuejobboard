<template>
  <div class="jobpage container py-5">
    <div v-if="error">
      {{ error }}
    </div>
    <Job v-else-if="job" :job="job" />
    <JobItemPlaceholder v-else-if="!job" class="mb-5" />
  </div>
</template>

<script>
  import Job from "@/components/JobItem.vue";
  import JobItemPlaceholder from "@/components/JobItemPlaceholder.vue";
  export default {
    name: "UserJobPreview",
    components: {
      Job,
      JobItemPlaceholder
    },
    data() {
      return {
        job: null,
        error: null
      };
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
                    myJob(_id: "${jobId}") {
                      _id
                      updatedAt
                      status
                      publishedAt
                      timeSincePublished
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
                      videoUrl
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
                        noLocation
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

          if (!job.data.data.myJob) {
            this.jobSeek = {};
            this.error = `Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.`;
            return;
          }

          this.job = job.data.data.myJob;
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
