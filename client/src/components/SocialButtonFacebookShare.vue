<template>
  <b-button
    variant="primary"
    :size="size"
    :disabled="!$route.meta.public"
    class="facebook-share-btn"
    :href="
      `https://www.facebook.com/sharer/sharer.php?u=${url}${
        sharePath ? sharePath : $route.fullPath
      }`
    "
    target="_blank"
    rel="nofollow"
    @click="track('share', 'facebook', sharePath ? sharePath : $route.fullPath)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-facebook mr-2"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
      />
    </svg>
    {{ content }}
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
    name: "SocialButtonFacebookShare",
    props: {
      sharePath: { type: String, default: "" },
      content: { type: String, default: "Teilen" },
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
