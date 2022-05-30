<template>
  <div class="jobseek-placeholder">
    <div class="row mb-4 mb-lg-5">
      <div class="col-3 col-md-2 col-xl-2 order-2 order-md-1">
        <BSkeleton
          width="120px"
          height="auto"
          class="rounded-circle img-fluid"
          style="aspect-ratio: 1"
        />
      </div>
      <div class="col-9 col-md-10 col-xl-10 order-1 order-md-2 pr-0 pr-md-2">
        <BSkeleton height="60px" class="border-radius1 mb-3" />
        <BSkeleton width="200px" height="24px" class="border-radius1" />
        <div class="d-flex flex-wrap mt-4">
          <BSkeleton
            width="150px"
            height="16px"
            class="border-radius1 mr-3 mb-2"
          />
          <BSkeleton
            width="200px"
            height="16px"
            class="border-radius1 mr-3 mb-2"
          />
          <BSkeleton
            width="160px"
            height="16px"
            class="border-radius1 mr-3 mb-2"
          />
        </div>
      </div>
    </div>

    <div class="mb-4">
      <BSkeleton
        height="30px"
        class="border-radius1 mb-3"
        style="max-width: 300px"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 98%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 95%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 94%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 97%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 95%"
      />
    </div>
    <div class="mb-4">
      <BSkeleton
        height="30px"
        class="border-radius1 mb-3"
        style="max-width: 450px"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 98%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 95%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 94%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 97%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 95%"
      />
    </div>
    <div class="mb-4">
      <BSkeleton
        height="30px"
        class="border-radius1 mb-3"
        style="max-width: 550px"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 98%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 95%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 94%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 97%"
      />
      <BSkeleton
        height="16px"
        class="border-radius1 mb-2"
        style="max-width: 95%"
      />
    </div>

    <div class="d-flex justify-content-between mt-5">
      <BSkeleton width="100px" height="39px" class="border-radius2" />
      <BSkeleton width="185px" height="39px" class="border-radius2" />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);

  export default {
    name: "JobSeekItemPlaceholder",
    props: {
      compact: { type: Boolean, default: false }
    }
  };
</script>

<style lang="scss" scoped>
  .jobseek-placeholder {
    border-radius: $border-radius2;
    box-shadow: $shadow1;
    background-color: $light-shade;
    padding: 3rem;

    @media screen and (max-width: $break-menu) {
      padding: 0;
      box-shadow: none;
      border-radius: none;
      background-color: unset;
    }

    .b-skeleton {
      background-color: transparentize($dark, 0.95);
    }
  }
</style>
