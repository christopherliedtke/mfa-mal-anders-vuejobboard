<template>
    <b-container class="new-job py-5">
        <h2>New Company</h2>
        <CompanyForm :companyId="null"></CompanyForm>
    </b-container>
</template>

<script>
    import CompanyForm from "@/components/CompanyForm.vue";
    export default {
        name: "NewCompanyView",
        components: {
            CompanyForm
        }
    };
</script>

<style scoped lang="scss"></style>
