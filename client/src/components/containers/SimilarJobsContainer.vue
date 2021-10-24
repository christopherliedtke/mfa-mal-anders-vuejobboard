<template>
  <div class="container mt-5 px-0">
    <div v-if="similarJobs.length > 0">
      <JobCard
        v-for="similarJob in similarJobs"
        :key="similarJob.id"
        :job="similarJob"
        :compact="compact"
      />
    </div>
    <div v-if="loading">
      <JobCardPlaceholder v-for="index in number" :key="index" class="mb-3" />
    </div>
  </div>
</template>

<script>
  import JobCard from "@/components/ui/JobCard.vue";
  import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
  export default {
    name: "SimiarJobsContainer",
    components: {
      JobCard,
      JobCardPlaceholder
    },
    props: {
      job: { type: Object, default: () => {} },
      number: { type: Number, default: 5 },
      compact: { type: Boolean, default: false }
    },
    data() {
      return {
        similarJobs: [],
        loading: true
      };
    },
    watch: {
      job() {
        this.getSimilarJobs(this.job);
      }
    },
    created() {
      this.getSimilarJobs(this.job);
    },
    methods: {
      async getSimilarJobs(job = {}) {
        const response = await this.$axios.get("/api/public-jobs", {
          params: {
            limit: this.number + 1,
            geoCodeLat: job.company ? job.company.geoCodeLat : undefined,
            geoCodeLng: job.company ? job.company.geoCodeLng : undefined
          }
        });

        this.loading = false;
        this.similarJobs = response.data.jobs
          .filter(similarJob => job._id != similarJob._id)
          .slice(0, this.number);
      }
    }
  };
</script>
