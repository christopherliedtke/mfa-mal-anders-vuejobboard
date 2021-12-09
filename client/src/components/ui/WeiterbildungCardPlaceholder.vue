<template>
  <div class="weiterbildung-card-placeholder mb-2">
    <div class="card">
      <BSkeleton
        width="100%"
        height="auto"
        class="img-fluid card-img-top"
        style="aspect-ratio: 1200/630"
      />
      <div class="card-body">
        <BSkeleton height="30px" class="border-radius1 mb-2" />
        <div class="mt-3">
          <BSkeleton
            height="16px"
            class="border-radius1 mb-2"
            style="max-width: 94%"
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
            style="max-width: 96%"
          />
          <BSkeleton
            height="16px"
            class="border-radius1 mb-2"
            style="max-width: 94%"
          />
          <BSkeleton
            height="16px"
            class="border-radius1 mb-2"
            style="max-width: 95%"
          />
          <BSkeleton
            height="16px"
            class="border-radius1 mb-2"
            style="max-width: 96%"
          />
          <BSkeleton
            height="16px"
            class="border-radius1 mb-2"
            style="max-width: 94%"
          />
        </div>

        <BSkeleton width="86px" height="39px" class="border-radius2 mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);

  export default {
    name: "WeiterbildungCardPlaceholder",
    props: {
      compact: { type: Boolean, default: false }
    }
  };
</script>

<style lang="scss" scoped>
  .weiterbildung-card-placeholder {
    .card {
      border-radius: $border-radius1;
      box-shadow: $shadow1;
      background-color: $light-shade;

      .b-skeleton {
        background-color: transparentize($dark, 0.95);
      }
    }
  }
</style>
