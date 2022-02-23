<template>
  <div class="pricing-card-placeholder bg-light m-1 mb-3">
    <BSkeleton height="68px" class="border-radius2" />
    <div class="d-flex flex-column align-items-center p-3">
      <BSkeleton height="80px" width="180px" class="mb-3" />
      <BSkeleton height="18px" width="70px" />
    </div>
    <BSkeleton height="1px" class="mb-3" />
    <div class="p-4">
      <BSkeleton height="20px" class="mb-3" />
      <BSkeleton height="50px" class="mb-3" />
      <BSkeleton height="50px" class="mb-3" />
      <BSkeleton height="50px" class="mb-3" />
      <BSkeleton height="50px" class="mb-3" />
      <BSkeleton height="40px" class="border-radius2 mt-4" />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
  export default {
    name: "PricingCardPlaceholder"
  };
</script>

<style lang="scss" scoped>
  .pricing-card-placeholder {
    border-radius: $border-radius2;
    box-shadow: $shadow1;

    .b-skeleton {
      background-color: transparentize($dark, 0.95);
    }

    .body {
      padding: 0.2rem 0.8rem;

      .b-skeleton {
        margin: 0.5rem 0;
      }
    }

    .footer {
      padding: 0.5rem 0.8rem;
    }
  }
</style>
