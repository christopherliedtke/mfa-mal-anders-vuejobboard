<template>
  <div class="container py-4 py-lg-5">
    <div class="mb-4 mb-lg-5">
      <h1 class="display-4 bold text-center">Kurzbewerbung</h1>
      <p v-if="job" class="lead text-center uppercase">
        <b-link :to="`/job/${job._id}/${job.slug}`" target="_blank"
          >{{ job.title }} | {{ job.company.name }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-up-right position-relative"
            style="top: -0.4em"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            /></svg
        ></b-link>
      </p>
      <p class="text-center">
        Beantworte ein paar kurze Fragen und bewirb Dich innerhalb von 2
        Minuten.
      </p>
    </div>
    <SimpleApplicationDataForm :job="job" />

    <Head v-if="job" :title="`Kurzbewerbung – ${job.title}`" />
  </div>
</template>

<script>
  import SimpleApplicationDataForm from "@/components/SimpleApplicationDataForm.vue";

  export default {
    name: "SimpleApplicationView",
    components: { SimpleApplicationDataForm },
    data() {
      return {
        job: null
      };
    },
    head: {
      meta() {
        return [
          {
            name: "robots",
            content: "noindex",
            id: "noindex"
          }
        ];
      }
    },
    created() {
      this.getJob();
    },
    methods: {
      async getJob() {
        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                  query {
                    publicJob(_id: "${this.$route.params.jobId}") {
                      _id
                      title
                      profession
                      employmentType
                      simpleApplication
                      slug
                      company {
                        name
                      }
                    }
                  }
                `
            }
          });

          this.job = response.data.data.publicJob;
          if (!this.job) {
            this.$root.$bvToast.toast(
              "Das Stellenangebot konnte nicht gefunden werden.",
              {
                title: `Stellenangebot nicht gefunden`,
                variant: "info",
                toaster: "b-toaster-bottom-right",
                solid: false,
                noAutoHide: true
              }
            );

            this.$router.push("/stellenangebote");
          }

          if (!this.job.simpleApplication) {
            this.$root.$bvToast.toast(
              "Für das Stellenangebot wurde keine Kurzbewerbung aktiviert. Bitte bewirb Dich über die angegebenen Kontaktdaten.",
              {
                title: `Kurzbewerbung nicht möglich`,
                variant: "info",
                toaster: "b-toaster-bottom-right",
                solid: false,
                noAutoHide: true
              }
            );

            this.$router.push(`/job/${this.job._id}`);
          }
        } catch (error) {
          this.$root.$bvToast.toast(
            "Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite neu lädst.",
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
