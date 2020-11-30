<template>
    <b-container class="edit-company py-5">
        <h2>Unternehmen bearbeiten</h2>
        <CompanyForm
            :companyId="$route.params.companyId"
            apiJobsSchema="private"
        ></CompanyForm>
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
