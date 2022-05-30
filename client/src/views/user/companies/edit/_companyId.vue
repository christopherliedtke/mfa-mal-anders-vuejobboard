<template>
  <div class="edit-company container py-5">
    <h2>
      Unternehmen
      {{ $route.params.companyId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <CompanyDataForm api-jobs-schema="private"></CompanyDataForm>
  </div>
</template>

<script>
  import CompanyDataForm from "@/components/CompanyDataForm.vue";
  export default {
    name: "UserEditCompany",
    components: {
      CompanyDataForm
    }
  };
</script>
