<template>
  <b-container class="edit-company py-5">
    <h2>Unternehmen bearbeiten</h2>
    <CompanyForm api-jobs-schema="admin"></CompanyForm>
  </b-container>
</template>

<script>
  import CompanyForm from "@/components/forms/CompanyForm.vue";
  export default {
    name: "AdminEditCompany",
    components: {
      CompanyForm
    }
  };
</script>
