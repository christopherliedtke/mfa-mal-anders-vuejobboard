<template>
    <div>
        <PaymentOverviewChart
            :jobs="
                jobs
                    .filter(job => job.paidAmount > 0 && job.paidAt)
                    .sort((a, b) => a.paidAt - b.paidAt)
            "
            class="mb-4"
        />
        <NoOfJobsChart :jobs="jobs" class="mb-4" />
    </div>
</template>

<script>
    import PaymentOverviewChart from "@/components/charts/PaymentOverviewChart.vue";
    import NoOfJobsChart from "@/components/charts/NoOfJobsChart.vue";
    export default {
        name: "DataAnalyticsDashboard",
        components: {
            PaymentOverviewChart,
            NoOfJobsChart
        },
        data() {
            return {
                jobs: []
            };
        },
        async mounted() {
            await this.getAllJobs();
        },
        methods: {
            async getAllJobs() {
                this.$store.dispatch("setOverlay", true);

                try {
                    const response = await this.$axios.post("/graphql", {
                        query: `
                            query {
                                adminJobs {
                                    _id
                                    createdAt
                                    updatedAt
                                    paidExpiresAt
                                    paidAmount
                                    refreshFrequency
                                    status
                                    applicationDeadline
                                    paid
                                    publishedAt
                                    paidAt
                                    sentReminder
                                    title
                                    company {
                                        name
                                        street
                                        location
                                        state
                                        zipCode
                                        country
                                    }
                                    userId {
                                        _id
                                        createdAt
                                        firstName
                                        lastName
                                        email
                                        isAdmin
                                    }
                                }
                            }
                        `
                    });

                    this.jobs = response.data.data.adminJobs;
                } catch (err) {
                    this.error = true;
                    this.$root.$bvToast.toast(
                        `Jobs konnten nicht geladen werden. Error: ${err}`,
                        {
                            title: `Fehler beim Laden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }

                this.$store.dispatch("setOverlay", false);
            }
        }
    };
</script>
