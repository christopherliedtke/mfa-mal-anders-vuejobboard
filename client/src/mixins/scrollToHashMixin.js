export const scrollToHashMixin = {
  mounted() {
    this.scrollToHash();
  },
  methods: {
    scrollToHash() {
      this.$nextTick(() => {
        if (this.$route.hash) {
          const elem = window.document.getElementById(
            this.$route.hash.replace("#", "")
          );

          if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }
  }
};
