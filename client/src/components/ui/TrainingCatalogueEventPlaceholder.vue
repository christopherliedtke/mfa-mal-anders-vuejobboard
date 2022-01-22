<template>
  <div class="training-catalogue-event-placeholder">
    <div class="header mb-3">
      <div>
        <BSkeleton class="title mb-3" />
        <BSkeleton class="company" />
      </div>
    </div>
    <div class="meta mb-3">
      <BSkeleton width="140px" />
      <BSkeleton width="230px" />
      <BSkeleton width="90px" />
    </div>
    <div class="body mb-4">
      <div>
        <BSkeleton v-for="index in 7" :key="index" class="text" />
      </div>
      <div>
        <BSkeleton class="heading" />
        <BSkeleton v-for="index in 10" :key="index" class="text" />
      </div>
      <div>
        <BSkeleton class="heading" />
        <BSkeleton v-for="index in 6" :key="index" class="text" />
      </div>
    </div>
    <div class="footer">
      <BSkeleton height="40px" width="205px" class="mr-2 border-radius2" />
      <BSkeleton height="40px" width="152px" class="mr-2 border-radius2" />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
  export default {
    name: "TrainingCatalogueEventPlaceholder"
  };
</script>

<style lang="scss" scoped>
  .training-catalogue-event-placeholder {
    padding: 3rem;
    box-shadow: $shadow1;
    border-radius: $border-radius1;

    @media screen and (max-width: $break-menu) {
      padding: 0;
      box-shadow: none;
      border-radius: none;
    }

    .b-skeleton {
      background-color: transparentize($dark, 0.95);
    }

    .header {
      .title {
        height: 45px;

        @media screen and (max-width: $break-menu) {
          height: 40px;
        }
      }

      .company {
        height: 30px;
        max-width: 50%;
      }
    }

    .meta {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 1rem 0 0 0;

      @media screen and (max-width: $break-menu) {
        height: 0.75rem 0;
      }

      .b-skeleton {
        height: 30px;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border-radius: $border-radius2;

        @media screen and (max-width: $break-menu) {
          height: 25px;
        }
      }
    }

    .body {
      .heading {
        height: 30px;
        margin: 1rem 0;
      }

      .text {
        margin: 0.5rem 0;
      }
    }

    .footer {
      display: flex;
    }
  }
</style>
