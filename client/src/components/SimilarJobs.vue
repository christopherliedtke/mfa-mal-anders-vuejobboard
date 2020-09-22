<template>
    <b-container class="mt-5 px-0">
        <JobCard v-for="job in similarJobs" :key="job.id" :job="job" />
    </b-container>
</template>

<script>
    import JobCard from "@/components/JobCard.vue";
    export default {
        name: "SimiarJobs",
        props: ["jobs", "location", "state", "zipCode", "excludeId", "number"],
        components: {
            JobCard
        },
        computed: {
            similarJobs: function() {
                let similarJobs = [...this.jobs];

                if (this.zipCode) {
                    similarJobs = similarJobs.sort((a, b) => {
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
                    });
                } else if (this.location || this.state) {
                    similarJobs = similarJobs.filter(
                        job =>
                            job.company.location === this.location ||
                            job.company.state === this.state
                    );
                }

                if (this.excludeId) {
                    similarJobs = similarJobs.filter(
                        job => job._id != this.excludeId
                    );
                }

                return similarJobs.slice(0, this.number);
            }
        }
    };
</script>
