<template>
    <b-container class="edit-jobpage py-5">
        <h2>Edit Job</h2>
        <JobForm :jobId="$route.params.jobId"></JobForm>
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
