<template>
  <b-button
    :disabled="!$route.meta.public"
    class="whatsapp-share-btn"
    :href="
      `https://wa.me/send?text=${url}${sharePath ? sharePath : $route.fullPath}`
    "
    target="_blank"
    aria-label="WhatsApp"
    @click="track('share', 'whatsapp', sharePath ? sharePath : $route.fullPath)"
  >
    <Fa class="mr-2" :icon="['fab', 'whatsapp']" size="lg" />
    WhatsApp
    <Fa class="ml-2" icon="share-alt" />
  </b-button>
</template>

<script>
  export default {
    name: "WhatsAppShareBtn",
    props: { sharePath: { type: String, default: "" } },
    data() {
      return {
        url: window.location.origin
      };
    },
    methods: {
      track(eventAction, method, path) {
        this.$gtag.event(eventAction, {
          method: method,
          content_id: path
        });

        this.$matomo &&
          this.$matomo.trackEvent(
            "engagement",
            eventAction,
            `method: ${method}; path: ${path}`
          );
      }
    }
  };
</script>

<style lang="scss">
  @import "@/styles/custom_bootstrap.scss";
  .btn.whatsapp-share-btn {
    background-color: #25d366;
    border: 1px solid #25d366;

    &:hover,
    &:focus,
    &:active {
      background-color: darken($color: #25d366, $amount: 10%) !important;
      border: 1px solid darken($color: #25d366, $amount: 10%) !important;
      color: $light !important;
    }
  }
</style>
