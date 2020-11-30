<template>
    <b-container class="edit-job py-5">
        <h2>Stellenanzeige bearbeiten</h2>
        <JobForm :jobId="$route.params.jobId" apiJobsSchema="admin"></JobForm>
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

<style scoped lang="scss"></style>
