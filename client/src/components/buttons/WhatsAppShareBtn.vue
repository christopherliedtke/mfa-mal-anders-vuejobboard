<template>
  <b-button
    :disabled="!$route.meta.public"
    class="whatsapp-share-btn"
    :href="
      `https://wa.me/?text=${url}${sharePath ? sharePath : $route.fullPath}`
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
