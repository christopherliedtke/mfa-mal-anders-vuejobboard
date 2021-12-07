<template>
  <div class="article-card-placeholder mb-2">
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

        <BSkeleton height="1px" class="border-radius1 my-3" />

        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <BSkeleton
              width="38px"
              height="auto"
              class="rounded-circle img-fluid mr-2"
              style="aspect-ratio: 1"
            />
            <BSkeleton height="18px" width="70px" class="border-radius1 mb-2" />
          </div>
          <BSkeleton width="136px" height="39px" class="border-radius2" />
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
    name: "ArticleCardPlaceholder",
    props: {
      compact: { type: Boolean, default: false }
    }
  };
</script>

<style lang="scss" scoped>
  .article-card-placeholder {
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
