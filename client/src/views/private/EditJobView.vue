<template>
    <b-container class="edit-job py-5">
        <h2>Job bearbeiten</h2>
        <JobForm :jobId="$route.params.jobId" apiJobsSchema="private"></JobForm>
    </b-container>
</template>

<script>
    import JobForm from "@/components/JobForm.vue";
    export default {
        name: "EditJobView",
        components: {
            JobForm
        }
    };
</script>

<style scoped lang="scss"></style>
