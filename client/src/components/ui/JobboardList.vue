<template>
    <div v-if="jobs.length > 0">
        <JobCard v-for="job in jobs" :key="job._id" :job="job" />
    </div>
    <div
        v-else-if="jobs.length === 0 && $store.state.jobs.jobs.length > 0"
        style="min-height: 200px"
    >
        <p class="h5">Leider gibt es hierzu keine Ergebnisse.</p>
    </div>
    <div v-else>
        <JobCardPlaceholder class="mb-3" />
        <JobCardPlaceholder class="mb-3" />
        <JobCardPlaceholder class="mb-3" />
    </div>
</template>

<script>
    import JobCard from "@/components/ui/JobCard.vue";
    import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
    export default {
        name: "JobboardList",
        props: ["jobs"],
        components: {
            JobCard,
            JobCardPlaceholder
        }
    };
</script>
