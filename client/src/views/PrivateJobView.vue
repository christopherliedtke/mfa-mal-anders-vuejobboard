<template>
    <b-container class="jobpage py-5">
        <Job apiRequest="private" />
    </b-container>
</template>

<script>
    import Job from "@/components/Job.vue";
    export default {
        name: "PrivateJobView",
        components: {
            Job
        }
    };
</script>

<style scoped lang="scss"></style>
