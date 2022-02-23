<template>
  <div class="shadow1 border-radius1 p-3">
    <h2 class="h5 text-center">Payment Overview</h2>
    <b-form @submit.prevent="fillChartData">
      <b-input-group
        prepend="# of Months"
        :append="'~ ' + numberToCurrencyString(sum)"
        size="sm"
        class="mt-3 px-2 px-lg-5"
      >
        <b-form-input v-model="options.numberOfMonths"></b-form-input>
        <b-input-group-append>
          <b-button variant="success" role="submit" @click="fillChartData"
            >Apply</b-button
          >
        </b-input-group-append>
        <!-- <b-input-group-append>
          <b-button variant="muted" role="submit">{{ sum }}</b-button>
        </b-input-group-append> -->
      </b-input-group>
    </b-form>
    <bar-chart
      v-if="chart.data"
      :chart-data="chart.data"
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
      payments: { type: Array, default: () => [] }
    },
    data() {
      return {
        sum: 0,
        options: {
          endDate: new Date().setDate(1),
          numberOfMonths: parseInt(localStorage.getItem("numberOfMonths") || 6)
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
                  position: "right",
                  ticks: {
                    min: 0,
                    suggestedMax: 4000,
                    stepSize: 500,
                    callback: this.numberToCurrencyString
                  },
                  gridLines: {
                    color: "#eeefff",
                    zeroLineColor: "#eeefff"
                  }
                },
                {
                  id: "B",
                  type: "linear",
                  position: "left",
                  ticks: {
                    min: 0,
                    suggestedMax: 40,
                    stepSize: 5
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
      payments() {
        if (this.payments) {
          this.fillChartData();
        }
      }
    },
    methods: {
      fillChartData() {
        localStorage.setItem(
          "numberOfMonths",
          this.options.numberOfMonths.toString()
        );
        this.chart.data = this.makeData();
      },
      makeData() {
        let dates = [];
        let amounts = [];
        let numbers = [];
        let amountPerPayment = [];

        for (let i = 0; i < this.options.numberOfMonths; i++) {
          let date = new Date(
            new Date(this.options.endDate).setMonth(
              new Date(this.options.endDate).getMonth() - i
            )
          );

          let month = date.getMonth();
          let year = date.getFullYear();

          dates.push(new Date(new Date(date).setHours(0, 0, 0, 0)).setDate(1));

          let amount =
            this.payments
              .filter(
                payment =>
                  new Date(payment.paidAt).getMonth() === month &&
                  new Date(payment.paidAt).getFullYear() === year
              )
              .map(payment => payment.amount || payment.total)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) / 100;

          amounts.push(Math.round(amount * 100) / 100);

          let number = this.payments
            .filter(
              payment =>
                new Date(payment.paidAt).getMonth() === month &&
                new Date(payment.paidAt).getFullYear() === year
            )
            .map(payment => payment.amount || payment.total)
            .reduce(currentValue => 1 + currentValue, 0);

          numbers.push(number);

          amountPerPayment.push(Math.round((amount / number || 1) * 100) / 100);
        }

        this.chart.options.scales.yAxes[0].ticks.suggestedMax =
          Math.ceil(Math.max.apply(null, amounts) / 1000) * 1000;
        this.chart.options.scales.yAxes[1].ticks.suggestedMax =
          Math.ceil(Math.max.apply(null, amounts) / 1000) * 10;

        this.sum = amounts.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );

        return {
          labels: dates.reverse(),
          datasets: [
            {
              label: "Monthly Net Turnover",
              yAxisID: "A",
              backgroundColor: "#6d0230cc",
              data: amounts.reverse(),
              type: "line",
              order: 3,
              cubicInterpolationMode: "monotone"
            },
            {
              label: "# of Payments",
              yAxisID: "B",
              backgroundColor: "#fda22544",
              data: numbers.reverse(),
              order: 2,
              barPercentage: 0.5
            },
            {
              label: "Ave. Net Amount Paid per Payment",
              yAxisID: "A",
              backgroundColor: "#17a2b888",
              borderColor: "#17a2b888",
              borderWidth: 1,
              data: amountPerPayment.reverse(),
              type: "line",
              order: 1,
              borderDash: [5],
              cubicInterpolationMode: "monotone"
            }
          ]
        };
      },
      numberToCurrencyString(value) {
        return (
          (Math.round(isNaN(value) ? value.parseInt() : value) / 1000).toFixed(
            1
          ) + "k €"
        );
      }
    }
  };
</script>
