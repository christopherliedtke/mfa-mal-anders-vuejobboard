<template>
  <div class="container mt-5 px-0">
    <div v-if="job && similarJobs.length > 0">
      <JobCard
        v-for="similarJob in similarJobs"
        :key="similarJob.id"
        :job="similarJob"
        :compact="compact"
      />
      <div class="text-right mt-4">
        <b-button
          :to="`/stellenangebote/${textToSlug(job.company.location)}`"
          variant="outline-primary"
        >
          Weitere Stellenangebote in der Nähe von {{ job.company.location }}
        </b-button>
      </div>
    </div>
    <div v-if="loading">
      <JobCardPlaceholder v-for="index in number" :key="index" class="mb-3" />
    </div>
  </div>
</template>

<script>
  import JobCard from "@/components/JobCard.vue";
  import JobCardPlaceholder from "@/components/JobCardPlaceholder.vue";
  import textToSlug from "@/helpers/textToSlug.js";
  export default {
    name: "JobListSimilar",
    components: {
      JobCard,
      JobCardPlaceholder
    },
    props: {
      job: { type: Object, default: () => {} },
      number: { type: Number, default: 5 },
      compact: { type: Boolean, default: false }
    },
    data() {
      return {
        similarJobs: [],
        loading: false,
        textToSlug
      };
    },
    watch: {
      job() {
        this.getSimilarJobs(this.job);
      }
    },
    created() {
      this.getSimilarJobs(this.job);
    },
    methods: {
      async getSimilarJobs(job) {
        if (!job) {
          return;
        }

        this.loading = true;

        try {
          const jobs = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  publicJobs (
                    limit: ${this.number + 1}
                    position: { 
                      lat: ${job.company.geoCodeLat || null},
                      lng: ${job.company.geoCodeLng || null}
                    }
                  ) {
                    jobs {
                      _id
                      title
                      excerpt
                      profession
                      employmentType
                      specialization
                      salaryMin
                      salaryMax
                      slug
                      company {
                        name
                        location
                        logoUrl
                      }
                    }
                  }
                }
              `
            }
          });

          this.similarJobs = jobs.data.data.publicJobs.jobs
            .filter(similarJob => job._id != similarJob._id)
            .slice(0, this.number);
        } catch (err) {
          //
        }

        this.loading = false;
      }
    }
  };
</script>
