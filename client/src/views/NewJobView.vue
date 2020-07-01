<template>
    <div class="new-job container py-5 position-relative">
        <h2>New Job</h2>
        <JobForm :jobId="null"></JobForm>
    </div>
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
