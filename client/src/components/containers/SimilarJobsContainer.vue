<template>
    <b-container class="mt-5 px-0">
        <JobCard
            v-for="similarJob in similarJobs"
            :key="similarJob.id"
            :job="similarJob"
        />
    </b-container>
</template>

<script>
    import JobCard from "@/components/ui/JobCard.vue";
    export default {
        name: "SimiarJobsContainer",
        props: ["jobs", "job", "number"],
        components: {
            JobCard
        },
        computed: {
            similarJobs() {
                let similarJobs = [...this.jobs];

                if (
                    this.job.company.geoCodeLat &&
                    this.job.company.geoCodeLng
                ) {
                    similarJobs = similarJobs.sort((a, b) => {
                        return (
                            this.calcDistance(
                                a.company.geoCodeLat,
                                a.company.geoCodeLng,
                                this.job.company.geoCodeLat,
                                this.job.company.geoCodeLng
                            ) -
                            this.calcDistance(
                                b.company.geoCodeLat,
                                b.company.geoCodeLng,
                                this.job.company.geoCodeLat,
                                this.job.company.geoCodeLng
                            )
                        );
                    });
                } else if (
                    this.job.company.location ||
                    this.job.company.state
                ) {
                    similarJobs = similarJobs.filter(
                        job =>
                            job.company.location === this.location ||
                            job.company.state === this.state
                    );
                }

                if (this.job._id) {
                    similarJobs = similarJobs.filter(
                        job => job._id != this.job._id
                    );
                }

                return similarJobs.slice(0, this.number);
            }
        },
        methods: {
            calcDistance(xLat, xLng, yLat, yLng) {
                return Math.sqrt(
                    Math.pow(xLat - yLat, 2) + Math.pow(xLng - yLng, 2)
                );
            }
        }
    };
</script>
