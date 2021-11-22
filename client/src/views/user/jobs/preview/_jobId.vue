<template>
  <div class="jobpage container py-5">
    <Job api-jobs-schema="private" />
  </div>
</template>

<script>
  import Job from "@/components/ui/Job.vue";
  export default {
    name: "UserJobPreview",
    components: {
      Job
    }
  };
</script>
