<template>
    <div>
        <JobCard v-for="job in jobs" :key="job._id" :job="job" />
    </div>
</template>

<script>
    import JobCard from "@/components/JobCard.vue";
    export default {
        name: "JobboardList",
        props: ["jobs"],
        components: {
            JobCard
        }
    };
</script>
