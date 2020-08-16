<template>
    <b-container class="new-job py-5">
        <h2>Neue Stellenanzeige</h2>
        <JobForm :jobId="null" apiJobsSchema="private"></JobForm>
    </b-container>
</template>

<script>
    import JobForm from "@/components/JobForm.vue";
    export default {
        name: "NewJobView",
        components: {
            JobForm
        }
    };
</script>

<style scoped lang="scss"></style>
