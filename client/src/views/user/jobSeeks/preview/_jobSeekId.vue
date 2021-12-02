<template>
  <div class="jobpage container py-5">
    <JobSeekCard :job-seek="jobSeek" :link-disabled="true" />
    <JobSeek :job-seek="jobSeek" :link-disabled="true" class="mt-5" />
  </div>
</template>

<script>
  import JobSeekCard from "@/components/ui/JobSeekCard.vue";
  import JobSeek from "@/components/ui/JobSeek.vue";
  export default {
    name: "UserJobSeekPreview",
    components: {
      JobSeekCard,
      JobSeek
    },
    data() {
      return {
        jobSeek: null
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
                  myJobSeek(
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
                    state
                    geoCodeLat
                    geoCodeLng
                    lastCheckedAt
                  }
                }
              `
            }
          });
          console.log("jobSeek: ", jobSeek);

          if (jobSeek.data.errors) {
            throw new Error();
          }

          this.jobSeek = jobSeek.data.data.myJobSeek;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden des Stellengesuchs ist ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite neu lädst.",
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
