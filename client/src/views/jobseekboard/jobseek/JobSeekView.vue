<template>
  <div class="container py-5">
    <JobSeek :job-seek="jobSeek" />
    <JobSeekPlaceholder v-if="!jobSeek" />
    <div v-else-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
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
    created() {
      this.getJobSeek(this.$route.params.jobSeekId);
    },
    methods: {
      async getJobSeek(_id) {
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
