<template>
  <div :class="['overlay', { invisible: !$store.state.utils.overlay }]">
    <div
      class="position-absolute"
      style="top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);"
    >
      <span aria-hidden="true" class="spinner-grow spinner-grow-xl text-primary"
        ><!----></span
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "Overlay"
  };
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparentize($dark, $amount: 0.5);
    z-index: 99999;
    transition: $transition1;
    opacity: 1;

    &.invisible {
      opacity: 0;
    }
  }
</style>
