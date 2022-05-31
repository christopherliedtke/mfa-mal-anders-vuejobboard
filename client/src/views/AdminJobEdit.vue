<template>
  <div class="edit-job container py-5">
    <h2>Stellenanzeige bearbeiten</h2>
    <JobDataForm api-jobs-schema="admin"></JobDataForm>
  </div>
</template>

<script>
  import JobDataForm from "@/components/JobDataForm.vue";
  export default {
    name: "AdminJobEdit",
    components: {
      JobDataForm
    }
  };
</script>
