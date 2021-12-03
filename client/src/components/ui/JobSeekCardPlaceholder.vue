<template>
  <div class="jobseek-card-placeholder p-4 mb-3">
    <div class="row">
      <div class="col-3 col-md-2 order-2">
        <BSkeleton
          width="75px"
          height="auto"
          class="rounded-circle img-fluid"
          style="aspect-ratio: 1"
        />
      </div>
      <div class="col-9 col-md-10 order-1 pr-0 pr-md-2">
        <BSkeleton height="40px" class="border-radius1 mb-2" />
        <BSkeleton width="200px" height="18px" class="border-radius1" />
        <div class="d-flex flex-wrap mt-3">
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
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);

  export default {
    name: "JobSeekCardPlaceholder",
    props: {
      compact: { type: Boolean, default: false }
    }
  };
</script>

<style lang="scss" scoped>
  .jobseek-card-placeholder {
    border-radius: $border-radius2;
    box-shadow: $shadow1;
    background-color: $light-shade;

    .b-skeleton {
      background-color: transparentize($dark, 0.95);
    }
  }
</style>
