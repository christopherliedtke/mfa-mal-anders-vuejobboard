<template>
  <b-button
    :disabled="!$route.meta.public"
    :size="size"
    class="twitter-share-btn"
    :href="
      `
        https://twitter.com/share?text=${title}&url=%0A%0A${url}${
        sharePath ? sharePath : ''
      }%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders`
    "
    target="_blank"
    rel="nofollow"
    aria-label="Twitter"
    @click="track('share', 'twitter', sharePath)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-twitter mr-2"
      viewBox="0 0 16 16"
    >
      <path
        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
      />
    </svg>
    Twitter
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-share-fill ml-2"
      viewBox="0 0 16 16"
    >
      <path
        d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
      />
    </svg>
  </b-button>
</template>

<script>
  export default {
    name: "SocialButtonTwitterShare",
    props: {
      sharePath: { type: String, default: "" },
      title: { type: String, default: "" },
      size: { type: String, default: "" }
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
          content_type: "link",
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
