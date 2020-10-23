<template>
    <div v-if="jobs.length > 0">
        <JobCard v-for="job in jobs" :key="job._id" :job="job" />
    </div>
    <div v-else>
        <JobCardPlaceholder class="mb-3" />
        <JobCardPlaceholder class="mb-3" />
        <JobCardPlaceholder class="mb-3" />
    </div>
</template>

<script>
    import JobCard from "@/components/JobCard.vue";
    import JobCardPlaceholder from "@/components/utils/JobCardPlaceholder.vue";
    export default {
        name: "JobboardList",
        props: ["jobs"],
        components: {
            JobCard,
            JobCardPlaceholder
        }
    };
</script>
