<template>
  <div>
    <div v-if="jobs.length > 0" class="position-relative">
      <JobCard v-for="job in jobs" :key="job._id" :job="job" />
      <!-- <div>
        <BPagination
          v-model="currentPage"
          class="mt-4"
          :total-rows="noOfJobs"
          :per-page="perPage"
          pills
          align="center"
          :limit="6"
          aria-controls="my-table"
          @change="scrollToTop"
        ></BPagination>
      </div> -->
    </div>
    <div v-else-if="nojobs && jobs.length === 0" style="min-height: 200px">
      <p class="h5">Leider gibt es hierzu keine Ergebnisse.</p>
    </div>
    <div v-else>
      <JobCardPlaceholder v-for="index in 25" :key="index" class="mb-3" />
    </div>
  </div>
</template>

<script>
  // import Vue from "vue";
  // import { BPagination } from "bootstrap-vue";
  // Vue.component("BPagination", BPagination);
  import JobCard from "@/components/ui/JobCard.vue";
  import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
  export default {
    name: "JobboardList",
    components: {
      JobCard,
      JobCardPlaceholder
    },
    props: {
      jobs: { type: Array, default: () => [] },
      nojobs: { type: Boolean, default: false }
    },
    data() {
      return {
        // perPage: 25,
        // currentPage: 1
      };
    },
    computed: {
      // noOfJobs() {
      //   return this.jobs.length;
      // },
      // activeJobs() {
      //   return this.jobs.slice(
      //     this.currentPage * this.perPage - this.perPage,
      //     this.currentPage * this.perPage
      //   );
      // }
    },
    methods: {
      // scrollToTop() {
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // }
    }
  };
</script>
