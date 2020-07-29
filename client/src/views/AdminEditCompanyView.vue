<template>
    <b-container class="edit-company py-5">
        <h2>Edit Job</h2>
        <CompanyForm
            :companyId="$route.params.companyId"
            apiJobsSchema="admin"
        ></CompanyForm>
    </b-container>
</template>

<script>
    import CompanyForm from "@/components/CompanyForm.vue";
    export default {
        name: "AdminEditCompanyView",
        components: {
            CompanyForm
        }
    };
</script>

<style scoped lang="scss"></style>
