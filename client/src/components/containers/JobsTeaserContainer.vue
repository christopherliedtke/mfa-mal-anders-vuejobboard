<template>
  <div v-if="jobs">
    <b-row
      v-if="jobs.length > 0"
      :cols="cols"
      :cols-md="colsMd"
      :cols-lg="colsLg"
    >
      <b-col v-for="job in jobs" :key="job._id">
        <JobCard :job="job" :compact="compact" />
      </b-col>
    </b-row>
    <b-row v-else :cols="cols" cols-md="3">
      <b-col v-for="index in number" :key="index">
        <JobCardPlaceholder :compact="compact" />
      </b-col>
    </b-row>
    <div v-if="showMoreBtn" class="d-flex justify-content-end mt-2">
      <b-button
        :to="
          `/stellenangebote?s=${searchTerm}&employmentType=${employmentType}&profession=${profession}`
        "
        variant="outline-primary"
        size="sm"
        >Weitere</b-button
      >
    </div>
  </div>
</template>

<script>
  import JobCard from "@/components/ui/JobCard.vue";
  import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
  export default {
    name: "JobsTeaserContainer",
    components: {
      JobCard,
      JobCardPlaceholder
    },
    props: {
      number: {
        type: Number,
        default: 3
      },
      compact: {
        type: Boolean,
        default: true
      },
      searchTerm: {
        type: String,
        default: ""
      },
      employmentType: {
        type: String,
        default: ""
      },
      profession: {
        type: String,
        default: ""
      },
      showMoreBtn: {
        type: Boolean,
        default: true
      },
      cols: {
        type: Number,
        default: 1
      },
      colsMd: {
        type: Number,
        default: 3
      },
      colsLg: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        jobs: []
      };
    },
    created() {
      this.getPublicJobs();
    },
    methods: {
      async getPublicJobs() {
        const response = await this.$axios.get("/api/public-jobs", {
          params: {
            s: this.searchTerm,
            employmentType: this.employmentType,
            profession: this.profession,
            limit: this.number
          }
        });

        this.jobs = response.data.jobs.length > 0 ? response.data.jobs : null;
      }
    }
  };
</script>
