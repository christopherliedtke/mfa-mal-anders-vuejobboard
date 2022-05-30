<script>
  import Chart from "chart.js";
  Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif";

  import { Bar, mixins } from "vue-chartjs";
  const { reactiveProp } = mixins;

  export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: { options: { type: Object, default: () => {} } },
    watch: {
      chartData() {
        this.renderChart(this.chartData, this.options);
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options);
    }
  };
</script>
