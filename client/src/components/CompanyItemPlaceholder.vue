<template>
  <div class="company-placeholder">
    <div class="header mb-4 mb-lg-5">
      <BSkeleton class="logo shadow1 mr-3 mr-lg-4" />
      <BSkeleton class="name" />
    </div>

    <div class="body mb-4">
      <BSkeleton height="60vh" />
    </div>

    <div>
      <JobCardPlaceholder v-for="index in 3" :key="index" class="mb-3" />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
  import JobCardPlaceholder from "@/components/JobCardPlaceholder.vue";
  export default {
    name: "CompanyItemPlaceholder",
    components: {
      JobCardPlaceholder
    }
  };
</script>

<style lang="scss" scoped>
  .company-placeholder {
    .b-skeleton {
      background-color: transparentize($dark, 0.95);
    }

    .header {
      display: flex;
      align-items: center;

      .logo {
        width: 120px;
        height: 120px;
        //   padding: 0.5rem;

        @media screen and (max-width: 767px) {
          width: 100px;
          height: 100px;
        }
      }
      .name {
        height: 50px;
        width: 100%;
        max-width: 500px;
      }
    }

    .body {
      padding: 1rem 0;
    }

    .footer {
      .map-skeleton {
        height: 40vh;
        min-height: 300px;
        margin-bottom: 1rem;
      }
    }
  }
</style>
