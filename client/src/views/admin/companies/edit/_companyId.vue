<template>
  <div class="edit-company container py-5">
    <h2>Unternehmen bearbeiten</h2>
    <CompanyDataForm api-jobs-schema="admin"></CompanyDataForm>
  </div>
</template>

<script>
  import CompanyDataForm from "@/components/CompanyDataForm.vue";
  export default {
    name: "AdminEditCompany",
    components: {
      CompanyDataForm
    }
  };
</script>
