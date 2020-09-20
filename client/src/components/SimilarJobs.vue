<template>
    <b-container class="mt-5">
        <JobCard v-for="job in similarJobs" :key="job.id" :job="job" />
    </b-container>
</template>

<script>
    import JobCard from "@/components/JobCard.vue";
    export default {
        name: "SimiarJobs",
        props: ["location", "state", "zipCode", "excludeId", "number"],
        components: {
            JobCard
        },
        computed: {
            similarJobs: function() {
                let similarJobs = [...this.$store.state.jobs.jobs];
                similarJobs = similarJobs
                    .sort((a, b) => {
                        console.log(
                            Math.abs(
                                parseInt(a.company.zipCode) -
                                    parseInt(this.zipCode)
                            ) -
                                Math.abs(
                                    parseInt(b.company.zipCode) -
                                        parseInt(this.zipCode)
                                )
                        );

                        return (
                            Math.abs(
                                parseInt(a.company.zipCode) -
                                    parseInt(this.zipCode)
                            ) -
                            Math.abs(
                                parseInt(b.company.zipCode) -
                                    parseInt(this.zipCode)
                            )
                        );
                    })
                    .filter(job => job._id != this.excludeId);

                // const similarJobs = this.$store.state.jobs.jobs.filter(
                // job =>
                //     (job.company.location === this.location ||
                //         job.company.state === this.state) &&
                //     job._id != this.excludeId
                // );

                return similarJobs.slice(0, this.number);
            }
        }
    };
</script>

<style></style>
