<template>
  <div class="jobpage container py-5">
    <div class="row">
      <div class="col-12 col-lg-8">
        <JobSeekCard :job-seek="jobSeek" :link-disabled="true" />
        <JobSeekCardPlaceholder v-if="!jobSeek" />
      </div>
    </div>
    <JobSeekItem :job-seek="jobSeek" :link-disabled="true" class="mt-5" />
    <JobSeekItemPlaceholder v-if="!jobSeek" class="mt-5" />
  </div>
</template>

<script>
  import JobSeekCard from "@/components/JobSeekCard.vue";
  import JobSeekCardPlaceholder from "@/components/JobSeekCardPlaceholder.vue";
  import JobSeekItem from "@/components/JobSeekItem.vue";
  import JobSeekItemPlaceholder from "@/components/JobSeekItemPlaceholder.vue";
  export default {
    name: "AdminJobSeekPreview",
    components: {
      JobSeekCard,
      JobSeekCardPlaceholder,
      JobSeekItem,
      JobSeekItemPlaceholder
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
                  adminJobSeek(
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

          this.jobSeek = jobSeek.data.data.adminJobSeek;
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
