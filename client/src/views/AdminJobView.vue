<template>
    <b-container class="jobpage py-5">
        <Job apiJobsSchema="admin" />
    </b-container>
</template>

<script>
    import Job from "@/components/Job.vue";
    export default {
        name: "AdminJobView",
        components: {
            Job
        }
    };
</script>

<style scoped lang="scss"></style>
