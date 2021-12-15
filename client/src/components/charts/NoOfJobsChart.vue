<template>
  <div class="shadow1 border-radius1 p-3">
    <h2 class="h5 text-center">Jobs Overview</h2>
    <b-form
      class="mt-3 px-5"
      @change="fillChartData"
      @submit.prevent="fillChartData"
    >
      <b-input-group class="mb-3" prepend="# of Days" size="sm">
        <b-form-input v-model="options.numberOfDays"></b-form-input>
        <b-input-group-append>
          <b-button variant="success" role="submit" @click="fillChartData"
            >Apply</b-button
          >
        </b-input-group-append>
      </b-input-group>
      <b-form-radio-group
        v-model="options.type"
        :options="[
          { text: 'Created At', value: 'createdAt' },
          { text: 'Updated At', value: 'updatedAt' },
          { text: 'Published At', value: 'publishedAt' }
        ]"
      ></b-form-radio-group>
      <b-form-checkbox v-model="options.onlyAdmin" switch>
        Admin only
      </b-form-checkbox>
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
    name: "NoOfJobsChart",
    components: {
      BarChart
    },
    props: {
      jobs: { type: Array, default: () => [] }
    },
    data() {
      return {
        options: {
          endDate: new Date(),
          numberOfDays: 365,
          type: "createdAt",
          onlyAdmin: false
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
                  type: "time",
                  time: {
                    displayFormats: {
                      day: "dddd, DD.MM.YYYY"
                    },
                    tooltipFormat: "dddd, DD.MM.YYYY"
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
        let numbers = [];

        for (
          let i = 0;
          i < 1000 * 60 * 60 * 24 * this.options.numberOfDays;
          i += 1000 * 60 * 60 * 24
        ) {
          let date = this.options.endDate - i;

          dates.push(new Date(date).setHours(0, 0, 0, 0));

          let number = this.jobs.filter(
            job =>
              job[this.options.type] &&
              new Date(job[this.options.type]).setHours(0, 0, 0, 0) ===
                new Date(date).setHours(0, 0, 0, 0) &&
              job.userId.isAdmin === this.options.onlyAdmin
          ).length;

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
