<template>
  <div>
    <h3>Meine Job-Newsletter</h3>

    <b-form-group
      label="Bitte wählen Sie Ihre wöchentlichen Job-Newsletter aus."
    >
      <b-form-checkbox-group
        id="job-alert-checkbox"
        v-model="jobAlerts"
        :options="jobAlertOptions"
        switches
        stacked
        @change="updateJobAlert"
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
  import { companyStateOptions } from "@/config/formDataConfig.json";
  export default {
    name: "MyJobAlerts",
    data() {
      return {
        jobAlerts: [],
        oldJobAlerts: [],
        jobAlertOptions: companyStateOptions
      };
    },
    mounted() {
      this.getJobAlerts();
    },
    methods: {
      async getJobAlerts() {
        this.$store.dispatch("setOverlay", true);

        const jobAlerts = await this.$axios.get("/graphql", {
          params: {
            query: `
                query {
                    myJobAlerts {
                        state
                    }
                }
            `
          }
        });

        this.jobAlerts = jobAlerts.data.data.myJobAlerts.map(
          jobAlert => jobAlert.state
        );
        this.oldJobAlerts = this.jobAlerts;

        this.$store.dispatch("setOverlay", false);
      },
      async updateJobAlert(newJobAlerts) {
        this.$store.dispatch("setOverlay", true);

        let difference;

        if (newJobAlerts.length > this.oldJobAlerts.length) {
          difference = this.getDifference(newJobAlerts, this.oldJobAlerts);

          await this.$axios.post("/graphql", {
            query: `
                mutation {
                    addJobAlert (state: "${difference[0]}") {
                        _id
                        state
                    }
                }
            `
          });
        } else {
          difference = this.getDifference(this.oldJobAlerts, newJobAlerts);

          await this.$axios.post("/graphql", {
            query: `
                mutation {
                    deleteJobAlert (state: "${difference[0]}") {
                        _id
                        state
                    }
                }
            `
          });
        }

        this.oldJobAlerts = newJobAlerts;

        this.$store.dispatch("setOverlay", false);
      },
      getDifference(a, b) {
        return a.filter(x => !b.includes(x));
      }
    }
  };
</script>
