<template>
    <b-container class="jobpage py-5">
        <Job apiJobsSchema="public" />
    </b-container>
</template>

<script>
    import Job from "@/components/Job.vue";
    export default {
        name: "PublicJobView",
        components: {
            Job
        }
    };
</script>

<style scoped lang="scss"></style>
