<template>
  <b-container class="jobpage py-5">
    <Job api-jobs-schema="public" />
  </b-container>
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
