<template>
  <div>
    <div v-if="jobs.length > 0" class="position-relative">
      <JobCard v-for="job in jobs" :key="job._id" :job="job" />
    </div>
    <div v-else-if="nojobs && jobs.length === 0" style="min-height: 200px">
      <div v-if="errors">
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </div>
      <p v-else>Leider gibt es hierzu keine Ergebnisse.</p>
    </div>
    <div v-else>
      <JobCardPlaceholder v-for="index in 25" :key="index" class="mb-3" />
    </div>
  </div>
</template>

<script>
  import JobCard from "@/components/ui/JobCard.vue";
  import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
  export default {
    name: "JobboardList",
    components: {
      JobCard,
      JobCardPlaceholder
    },
    props: {
      jobs: { type: Array, default: () => [] },
      nojobs: { type: Boolean, default: false },
      errors: { type: Array, default: null }
    }
  };
</script>
