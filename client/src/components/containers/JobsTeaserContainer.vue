<template>
  <div v-if="jobs">
    <div
      v-if="jobs.length > 0"
      :class="[
        'row',
        `row-cols-${cols}`,
        `row-cols-md-${colsMd}`,
        `row-cols-lg-${colsLg}`
      ]"
    >
      <div v-for="job in jobs" :key="job._id" class="col">
        <JobCard :job="job" :compact="compact" />
      </div>
    </div>
    <div
      v-else
      :class="[
        'row',
        `row-cols-${cols}`,
        `row-cols-md-${colsMd}`,
        `row-cols-lg-${colsLg}`
      ]"
    >
      <div v-for="index in number" :key="index" class="col">
        <JobCardPlaceholder :compact="compact" />
      </div>
    </div>
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
      location: {
        type: Object,
        default: null
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
    mounted() {
      this.getPublicJobs();
    },
    methods: {
      async getPublicJobs() {
        const response = await this.$axios.get("/api/public-jobs", {
          params: {
            s: this.searchTerm,
            employmentType: this.employmentType,
            profession: this.profession,
            geoCodeLat: this.location ? this.location.geoCodeLat : undefined,
            geoCodeLng: this.location ? this.location.geoCodeLng : undefined,
            limit: this.number
          }
        });

        this.jobs = response.data.jobs.length > 0 ? response.data.jobs : null;
      }
    }
  };
</script>
