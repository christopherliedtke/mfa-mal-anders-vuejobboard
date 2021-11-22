<template>
  <div id="admin-data-analytics" class="container-fluid admin-container pt-3">
    <h1 class="h2 mb-3">Admin Data Analytics</h1>
    <PaymentOverviewChart
      :payments="
        payments
          .filter(payment => payment.status === 'paid' && payment.paidAt)
          .sort((a, b) => a.paidAt - b.paidAt)
      "
      class="mb-4"
    />
    <NoOfJobsChart :jobs="jobs" class="mb-4" />

    <AdminNav />
  </div>
</template>

<script>
  import PaymentOverviewChart from "@/components/charts/PaymentOverviewChart.vue";
  import NoOfJobsChart from "@/components/charts/NoOfJobsChart.vue";
  import AdminNav from "@/components/navs/AdminNav.vue";
  export default {
    name: "DataAnalyticsDashboard",
    components: {
      PaymentOverviewChart,
      NoOfJobsChart,
      AdminNav
    },
    data() {
      return {
        jobs: [],
        payments: []
      };
    },
    async mounted() {
      this.$store.dispatch("setOverlay", true);

      await this.getAllJobs();
      await this.getAllPayments();

      this.$store.dispatch("setOverlay", false);
    },
    methods: {
      async getAllJobs() {
        try {
          const jobs = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  adminJobs {
                    _id
                    createdAt
                    updatedAt
                    paid
                    paidExpiresAt
                    publishedAt
                    refreshFrequency
                    status
                    applicationDeadline
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
            }
          });

          if (jobs.data.errors) {
            throw new Error("Jobs could not be loaded!");
          }

          this.jobs = jobs.data.data.adminJobs;
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Jobs konnten nicht geladen werden. Error: ${err.message}`,
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      async getAllPayments() {
        try {
          const payments = await this.$axios.get("/graphql", {
            params: {
              query: `
                  query {
                      payments {
                          _id
                          createdAt
                          updatedAt
                          paidAt
                          paymentExpiresAt
                          status
                          amount
                          fee
                          taxes

                      }
                  }
              `
            }
          });

          if (payments.data.errors) {
            throw new Error("Payments could not be loaded!");
          }

          this.payments = payments.data.data.payments;
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Zahlungen konnten nicht geladen werden. Error: ${err.message}`,
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      }
    }
  };
</script>
