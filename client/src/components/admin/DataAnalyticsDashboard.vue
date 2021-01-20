<template>
    <div>
        <bar-chart
            v-if="paymentChart.data"
            :chartData="paymentChart.data"
            :options="paymentChart.options"
        ></bar-chart>
    </div>
</template>

<script>
    import BarChart from "@/components/charts/Bar.vue";
    export default {
        name: "DataAnalyticsDashboard",
        components: {
            BarChart
        },
        data() {
            return {
                jobs: Array,
                options: {
                    endDate: new Date().valueOf(),
                    numberOfMonths: 12
                },
                paymentChart: {
                    data: null,
                    options: {
                        responsive: true,
                        title: {
                            display: true,
                            text: "Payment Overview"
                        },
                        scales: {
                            yAxes: [
                                {
                                    id: "A",
                                    type: "linear",
                                    position: "left",
                                    ticks: {
                                        min: 0,
                                        // max: 3000,
                                        stepSize: 200
                                    }
                                },
                                {
                                    id: "B",
                                    type: "linear",
                                    position: "right",
                                    ticks: {
                                        min: 0,
                                        // max: 30,
                                        stepSize: 2
                                    }
                                }
                            ]
                        }
                    }
                }
            };
        },
        async mounted() {
            await this.getAllJobs();
            this.fillPaymentChartData();
        },
        methods: {
            async getAllJobs() {
                this.$store.dispatch("setOverlay", true);

                try {
                    const response = await this.$axios.post("/api/jobs/admin", {
                        query: `
                            query {
                                jobs {
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
                                    paidExpiresAt
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
                                    }
                                }
                            }
                        `
                    });

                    this.jobs = response.data.data.jobs
                        .filter(job => job.paidAmount > 0 && job.paidAt)
                        .sort((a, b) => a.paidAt - b.paidAt);
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
            },
            fillPaymentChartData() {
                this.paymentChart.data = this.makeData();
            },
            makeData() {
                let dates = [];
                let amounts = [];
                let numbers = [];
                let amountPerJob = [];

                for (
                    let i = new Date(this.options.endDate).getMonth();
                    i < this.options.numberOfMonths;
                    i++
                ) {
                    let date = new Date(
                        new Date(this.options.endDate).setMonth(-i)
                    );

                    let month = date.getMonth();
                    let year = date.getFullYear();

                    dates.push(
                        `${new Date(date).toLocaleString("default", {
                            month: "long"
                        })} - ${year}`
                    );

                    let amount =
                        this.jobs
                            .filter(
                                job =>
                                    new Date(job.paidAt).getMonth() === month &&
                                    new Date(job.paidAt).getFullYear() === year
                            )
                            .map(job => job.paidAmount)
                            .reduce(
                                (accumulator, currentValue) =>
                                    accumulator + currentValue,
                                0
                            ) / 100;

                    amounts.push(amount);

                    let number = this.jobs
                        .filter(
                            job =>
                                new Date(job.paidAt).getMonth() === month &&
                                new Date(job.paidAt).getFullYear() === year
                        )
                        .map(job => job.paidAmount)
                        .reduce(currentValue => 1 + currentValue, 0);

                    numbers.push(number);

                    amountPerJob.push(
                        Math.round((amount / number || 1) * 100) / 100
                    );
                }

                return {
                    labels: dates.reverse(),
                    datasets: [
                        {
                            label: "Monthly Income",
                            yAxisID: "A",
                            backgroundColor: "#6d023099",
                            data: amounts.reverse()
                        },
                        {
                            label: "# of Paid Jobs",
                            yAxisID: "B",
                            backgroundColor: "#fda22577",
                            data: numbers.reverse()
                        },
                        {
                            label: " Ave. Amount Paid per Job",
                            yAxisID: "A",
                            backgroundColor: "#b9455944",
                            borderColor: "#b9455944",
                            borderWidth: 1,
                            data: amountPerJob.reverse(),
                            type: "line",
                            borderDash: [5]
                        }
                    ]
                };
            }
        }
    };
</script>
