<template>
    <div class="edit-jobpage container py-5 position-relative">
        <h2>Edit Job</h2>
        <JobForm :jobId="$route.params.jobId"></JobForm>
    </div>
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
