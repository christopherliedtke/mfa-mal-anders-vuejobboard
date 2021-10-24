<template>
  <div class="jobpage container py-5">
    <Job api-jobs-schema="admin" />
  </div>
</template>

<script>
  import Job from "@/components/ui/Job.vue";
  export default {
    name: "AdminJobPreview",
    components: {
      Job
    }
  };
</script>
