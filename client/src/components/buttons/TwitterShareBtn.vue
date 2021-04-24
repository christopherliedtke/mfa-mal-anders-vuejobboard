<template>
  <b-button
    :disabled="!$route.meta.public"
    class="twitter-share-btn"
    :href="
      `
        https://twitter.com/share?text=${title}&url=%0A%0A${url}${
        sharePath ? sharePath : ''
      }%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders`
    "
    target="_blank"
    aria-label="Twitter"
    @click="track('share', 'twitter', sharePath)"
  >
    <Fa class="mr-2" :icon="['fab', 'twitter']" size="lg" />
    Twitter
    <Fa class="ml-2" icon="share-alt" />
  </b-button>
</template>

<script>
  export default {
    name: "TwitterShareBtn",
    props: {
      sharePath: { type: String, default: "" },
      title: { type: String, default: "" }
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
