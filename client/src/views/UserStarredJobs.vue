<template>
  <div class="dashboard container py-3 py-lg-5">
    <NavUser class="mb-3" />

    <div v-if="jobs.length > 0">
      <JobCard v-for="job in jobs" :key="job._id" :job="job" />
    </div>
    <h5 v-else class="my-5">
      Du hast bisher keine Stellenanzeigen gespeichert.
    </h5>
    <p
      v-if="jobs.length < $store.state.starredJobs.starredJobs.length"
      class="small text-right"
    >
      * Einige deiner gespeicherten Stellen sind bereits abgelaufen und werden
      nicht mehr angezeigt.
    </p>

    <Head title="Mein Account" desc="" img="" />
  </div>
</template>

<script>
  import JobCard from "@/components/JobCard";
  import NavUser from "@/components/NavUser.vue";
  export default {
    name: "UserStarredJobs",
    components: { JobCard, NavUser },
    data() {
      return {
        jobs: []
      };
    },
    watch: {
      "$store.state.starredJobs.starredJobs": {
        handler(newValue) {
          if (
            (this.jobs.length === 0 && newValue.length != 0) ||
            this.jobs.length > 0
          ) {
            this.getJobs();
          }
        },
        immediate: true
      }
    },
    methods: {
      async getJobs() {
        this.$store.dispatch("setOverlay", true);
        const jobs = await this.$axios.post("/api/public-jobs/by-ids", {
          ids: this.$store.state.starredJobs.starredJobs.map(
            starredJob => starredJob.job
          )
        });

        this.jobs = jobs.data.jobs;
        this.$store.dispatch("setOverlay", false);
      }
    }
  };
</script>
