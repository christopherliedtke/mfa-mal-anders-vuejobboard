<template>
  <div class="d-flex align-items-center">
    PageViews:&nbsp;<span v-if="pageViews != null">{{ pageViews }}</span
    ><b-btn v-else size="sm" class="ml-2 py-1" @click="getPageViews"
      >load</b-btn
    >
  </div>
</template>

<script>
  export default {
    name: "AnalyticsPageViews",
    props: {
      url: {
        type: String,
        default: ""
      },
      day: {
        type: Date,
        default: new Date()
      },
      period: {
        type: String,
        default: "range"
      },
      dateFrom: {
        type: Date,
        default: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7 * 12)
      },
      dateTo: {
        type: Date,
        default: new Date()
      }
    },
    data() {
      return {
        pageViews: null
      };
    },
    methods: {
      async getPageViews() {
        this.$store.dispatch("setOverlay", true);
        try {
          const res = await this.$axios.get("/api/analytics/get-data", {
            params: {
              method: "VisitsSummary.getVisits",
              segment: `pageUrl=@${this.url}`,
              day: this.day.toISOString().split("T")[0],
              period: this.period,
              date:
                this.dateFrom.toISOString().split("T")[0] +
                "," +
                this.dateTo.toISOString().split("T")[0]
            }
          });

          this.pageViews = res.data.value;
        } catch (error) {
          console.error(error);
        }
        this.$store.dispatch("setOverlay", false);
      }
    }
  };
</script>
