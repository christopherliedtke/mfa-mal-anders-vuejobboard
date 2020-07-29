<template>
    <b-container class="edit-job py-5">
        <h2>Edit Job</h2>
        <JobForm :jobId="$route.params.jobId" apiJobsSchema="admin"></JobForm>
    </b-container>
</template>

<script>
    import JobForm from "@/components/JobForm.vue";
    export default {
        name: "AdminEditJobView",
        components: {
            JobForm
        }
    };
</script>

<style scoped lang="scss"></style>
