<template>
  <b-container class="edit-job py-5">
    <h2>Stellenanzeige bearbeiten</h2>
    <JobForm api-jobs-schema="admin"></JobForm>
  </b-container>
</template>

<script>
  import JobForm from "@/components/forms/JobForm.vue";
  export default {
    name: "AdminEditJob",
    components: {
      JobForm
    }
  };
</script>
