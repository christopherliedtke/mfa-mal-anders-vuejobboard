<template>
  <div>
    <div v-if="jobs.length > 0">
      <JobCard v-for="job in activeJobs" :key="job._id" :job="job" />
      <div>
        <b-pagination
          v-model="currentPage"
          class="mt-4"
          :total-rows="noOfJobs"
          :per-page="perPage"
          pills
          align="center"
          :limit="6"
          aria-controls="my-table"
          @change="scrollToTop"
        ></b-pagination>
      </div>
    </div>
    <div
      v-else-if="jobs.length === 0 && $store.state.jobs.jobs.length > 0"
      style="min-height: 200px"
    >
      <p class="h5">Leider gibt es hierzu keine Ergebnisse.</p>
    </div>
    <div v-else>
      <JobCardPlaceholder v-for="index in perPage" :key="index" class="mb-3" />
    </div>
  </div>
</template>

<script>
  import JobCard from "@/components/ui/JobCard.vue";
  import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
  import { BPagination } from "bootstrap-vue";
  import Vue from "vue";
  // eslint-disable-next-line
  Vue.component("b-pagination", BPagination);
  export default {
    name: "JobboardList",
    components: {
      JobCard,
      JobCardPlaceholder
    },
    props: { jobs: { type: Array, default: () => [] } },
    data() {
      return {
        perPage: 25,
        currentPage: 1
      };
    },
    computed: {
      noOfJobs() {
        return this.jobs.length;
      },
      activeJobs() {
        return this.jobs.slice(
          this.currentPage * this.perPage - this.perPage,
          this.currentPage * this.perPage
        );
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };
</script>
