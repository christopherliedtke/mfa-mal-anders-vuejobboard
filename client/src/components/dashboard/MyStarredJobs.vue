<template>
  <div>
    <JobCard
      v-for="starredJob in $store.state.starredJobs.starredJobs"
      :key="starredJob._id"
      :job="starredJob.job"
    />
    <h5 v-if="$store.state.starredJobs.starredJobs.length === 0" class="my-5">
      Du hast bisher keine Stellenanzeigen gespeichert.
    </h5>
  </div>
</template>

<script>
  import JobCard from "@/components/ui/JobCard";
  export default {
    name: "MyStarredJobs",
    components: { JobCard }
  };
</script>
