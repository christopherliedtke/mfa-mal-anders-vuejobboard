<template>
  <b-button
    variant="primary"
    class="facebook-share-btn"
    :href="
      `https://www.facebook.com/sharer/sharer.php?u=${url}${
        sharePath ? sharePath : $route.fullPath
      }`
    "
    target="_blank"
    @click="track('share', 'facebook', sharePath ? sharePath : $route.fullPath)"
  >
    <Fa class="mr-2" :icon="['fab', 'facebook-square']" size="lg" />
    {{ content }}
    <Fa class="ml-2" icon="share-alt" />
  </b-button>
</template>

<script>
  export default {
    name: "FacebookShareBtn",
    props: {
      sharePath: { type: String, default: "" },
      content: { type: String, default: "Teilen" }
    },
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
