<template>
  <div class="edit-company container py-5">
    <h2>
      Unternehmen
      {{ $route.params.companyId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <CompanyForm api-jobs-schema="private"></CompanyForm>
  </div>
</template>

<script>
  import CompanyForm from "@/components/forms/CompanyForm.vue";
  export default {
    name: "UserEditCompany",
    components: {
      CompanyForm
    }
  };
</script>
