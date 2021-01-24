<template>
    <div class="shadow1 border-radius1 p-3">
        <h2 class="h5 text-center">Payment Overview</h2>
        <b-form>
            <b-input-group prepend="# of Months" size="sm" class="mt-3 px-5">
                <b-form-input v-model="options.numberOfMonths"></b-form-input>
                <b-input-group-append>
                    <b-button @click="fillChartData" variant="success"
                        >Apply</b-button
                    >
                </b-input-group-append>
            </b-input-group>
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
        name: "PaymentOverviewChart",
        components: {
            BarChart
        },
        props: {
            jobs: Array
        },
        data() {
            return {
                options: {
                    endDate: new Date(),
                    numberOfMonths: 12
                },
                chart: {
                    data: null,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    id: "A",
                                    type: "linear",
                                    position: "left",
                                    ticks: {
                                        min: 0,
                                        suggestedMax: 2000,
                                        stepSize: 200,
                                        callback: function(value) {
                                            return (
                                                value
                                                    .toString()
                                                    .replace(
                                                        /\B(?=(\d{3})+(?!\d))/g,
                                                        "."
                                                    ) + "€"
                                            );
                                        }
                                    },
                                    gridLines: {
                                        color: "#eeefff",
                                        zeroLineColor: "#eeefff"
                                    }
                                },
                                {
                                    id: "B",
                                    type: "linear",
                                    position: "right",
                                    ticks: {
                                        min: 0,
                                        suggestedMax: 20,
                                        stepSize: 2
                                    },
                                    gridLines: {
                                        color: "#eeefff",
                                        zeroLineColor: "#eeefff"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    type: "time",
                                    time: {
                                        unit: "month",
                                        tooltipFormat: "MMMM YYYY"
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
                this.chart.data = this.makeData();
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
                        new Date(new Date(date).setHours(0, 0, 0, 0)).setDate(1)
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
                            backgroundColor: "#6d0230cc",
                            data: amounts.reverse(),
                            type: "line",
                            order: 3,
                            cubicInterpolationMode: "monotone"
                        },
                        {
                            label: "# of Paid Jobs",
                            yAxisID: "B",
                            backgroundColor: "#fda22544",
                            data: numbers.reverse(),
                            order: 2,
                            barPercentage: 0.5
                        },
                        {
                            label: "Ave. Amount Paid per Job",
                            yAxisID: "A",
                            backgroundColor: "#17a2b888",
                            borderColor: "#17a2b888",
                            borderWidth: 1,
                            data: amountPerJob.reverse(),
                            type: "line",
                            order: 1,
                            borderDash: [5],
                            cubicInterpolationMode: "monotone"
                        }
                    ]
                };
            }
        }
    };
</script>
