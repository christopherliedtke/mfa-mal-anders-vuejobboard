<template>
  <div class="jobpage container py-5">
    <Job api-jobs-schema="public" />
  </div>
</template>

<script>
  import Job from "@/components/ui/Job.vue";
  export default {
    name: "JobView",
    components: {
      Job
    }
  };
</script>
