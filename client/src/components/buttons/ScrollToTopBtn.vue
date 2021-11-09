<template>
  <span ref="scrollToTopBtn" class="scroll-to-top-btn" @click="scrollToTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="bi bi-arrow-bar-up text-light"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  </span>
</template>

<script>
  export default {
    name: "ScrollToTopBtn",
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .scroll-to-top-btn {
    position: fixed;
    z-index: 2;
    bottom: 2vh;
    right: 2vh;
    width: 50px;
    height: 50px;
    background-color: transparentize($secondary, $amount: 0.2);
    padding: 12px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: $shadow1;
    transition: $transition1;

    &:hover {
      box-shadow: $shadow2;
      background-color: $primary;
    }
  }
</style>
