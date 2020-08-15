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
    import CompanyForm from "@/components/CompanyForm.vue";
    export default {
        name: "EditCompanyView",
        components: {
            CompanyForm
        }
    };
</script>

<style scoped lang="scss"></style>
