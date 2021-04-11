<template>
  <b-container class="edit-company py-5">
    <h2>
      Unternehmen
      {{ $route.params.companyId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <CompanyForm api-jobs-schema="private"></CompanyForm>
  </b-container>
</template>

<script>
  import CompanyForm from "@/components/forms/CompanyForm.vue";
  export default {
    name: "UserDashboardEditCompany",
    components: {
      CompanyForm
    }
  };
</script>
