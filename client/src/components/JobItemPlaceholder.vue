<template>
  <div class="job-placeholder">
    <div class="header mb-4">
      <div>
        <BSkeleton class="title mb-3" />
        <BSkeleton class="company" />
      </div>
    </div>
    <BSkeleton height="1px" />
    <div class="meta">
      <div class="item">
        <BSkeleton type="avatar" />
        <BSkeleton />
      </div>
      <div class="item">
        <BSkeleton type="avatar" />
        <BSkeleton />
      </div>
      <div class="item">
        <BSkeleton type="avatar" />
        <BSkeleton />
      </div>
      <div class="item">
        <BSkeleton type="avatar" />
        <BSkeleton />
      </div>
    </div>
    <BSkeleton height="1px" />
    <div class="d-flex mt-4">
      <BSkeleton type="avatar" height="40px" width="40px" class="mr-3" />
      <BSkeleton
        type="button"
        height="40px"
        width="300px"
        style="max-width: 50vw"
        class="border-radius2"
      />
    </div>
    <div class="body">
      <BSkeleton height="35vh" />
      <div>
        <BSkeleton class="heading" />
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
      <BSkeleton class="map-skeleton" />
      <BSkeleton height="30px" />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
  export default {
    name: "JobItemPlaceholder"
  };
</script>

<style lang="scss" scoped>
  .job-placeholder {
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
        height: 70px;

        @media screen and (max-width: $break-menu) {
          height: 50px;
        }
      }

      .company {
        height: 25px;
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

      .item {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        margin-bottom: 1rem;
      }

      .b-skeleton {
        height: 25px;

        @media screen and (max-width: $break-menu) {
          height: 20px;
        }
      }

      .b-skeleton-avatar {
        margin-right: 0.4rem;
        width: 25px;

        @media screen and (max-width: $break-menu) {
          width: 20px;
        }
      }

      .b-skeleton-text {
        margin: 0;
        min-width: 150px;
      }
    }

    .body {
      padding: 1rem 0;

      .heading {
        height: 30px;
        margin: 1rem 0;
      }

      .text {
        margin: 0.5rem 0;
      }
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
