<template>
    <div class="shadow1 border-radius1 p-3">
        <h2 class="h5 text-center">Jobs Overview</h2>
        <b-form class="mt-3 px-5" @change="fillChartData">
            <b-input-group prepend="# of Days" size="sm">
                <b-form-input v-model="options.numberOfDays"></b-form-input>
                <b-input-group-append>
                    <b-button @click="fillChartData" variant="success"
                        >Apply</b-button
                    >
                </b-input-group-append>
            </b-input-group>
            <b-form-radio-group
                v-model="options.type"
                :options="[
                    { text: 'Created At', value: 'createdAt' },
                    { text: 'Updated At', value: 'updatedAt' },
                    { text: 'Paid At', value: 'paidAt' },
                    { text: 'Published At', value: 'publishedAt' }
                ]"
            ></b-form-radio-group>
            <b-form-checkbox v-model="options.inclAdmin" switch>
                incl. Admin
            </b-form-checkbox>
        </b-form>
        <bar-chart
            v-if="chart.data"
            :chartData="chart.data"
            :options="chart.options"
        ></bar-chart>
    </div>
</template>

<script>
    import BarChart from "@/components/utils/BarChart.vue";
    export default {
        name: "NoOfJobsChart",
        components: {
            BarChart
        },
        props: {
            jobs: Array
        },
        data() {
            return {
                options: {
                    endDate: new Date().valueOf(),
                    numberOfDays: 365,
                    type: "createdAt",
                    inclAdmin: false
                },
                chart: {
                    data: null,
                    options: {
                        responsive: true,
                        scales: {
                            yAxes: [
                                {
                                    id: "A",
                                    type: "linear",
                                    position: "left",
                                    ticks: {
                                        min: 0,
                                        suggestedMax: 5,
                                        stepSize: 1
                                    },
                                    gridLines: {
                                        color: "#eeefff",
                                        zeroLineColor: "#eeefff"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    id: "x1",
                                    ticks: {
                                        maxRotation: Math.round(365 / 7),
                                        minRotation: Math.round(365 / 7)
                                    },
                                    gridLines: {
                                        color: "#eeefff",
                                        zeroLineColor: "#eeefff"
                                    }
                                }
                            ]
                        }
                    }
                }
            };
        },
        watch: {
            jobs() {
                if (this.jobs) {
                    this.fillChartData();
                }
            }
        },
        methods: {
            fillChartData() {
                this.chart.options.scales.xAxes[0].ticks.maxRotation = Math.round(
                    this.options.numberOfDays / 7
                );
                this.chart.options.scales.xAxes[0].ticks.minRotation = Math.round(
                    this.options.numberOfDays / 7
                );
                this.chart.data = this.makeData();
            },
            makeData() {
                let dates = [];
                let numbers = [];

                for (
                    let i = 0;
                    i < 1000 * 60 * 60 * 24 * this.options.numberOfDays;
                    i += 1000 * 60 * 60 * 24
                ) {
                    let date = this.options.endDate - i;

                    dates.push(
                        `${new Date(date).toLocaleDateString("de-DE", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}`
                    );

                    let number = this.jobs
                        .filter(
                            job =>
                                new Date(job[this.options.type])
                                    .setHours(0, 0, 0, 0)
                                    .valueOf() ===
                                    new Date(date)
                                        .setHours(0, 0, 0, 0)
                                        .valueOf() &&
                                job.userId.isAdmin === this.options.inclAdmin
                        )
                        .map(job => job.paidAmount)
                        .reduce(currentValue => 1 + currentValue, 0);

                    numbers.push(number);
                }

                return {
                    labels: dates.reverse(),
                    datasets: [
                        {
                            label: `# of Jobs ${this.options.type}`,
                            yAxisID: "A",
                            backgroundColor: "#6d0230cc",
                            data: numbers.reverse(),
                            // type: "line",
                            order: 2
                            // barPercentage: 0.5
                        }
                    ]
                };
            }
        }
    };
</script>
