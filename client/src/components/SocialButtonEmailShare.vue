<template>
  <b-button
    variant="secondary"
    :size="size"
    :disabled="!$route.meta.public"
    class="email-share-btn"
    :href="
      `mailto:?subject=${subject}&body=Stellenanzeige auf MFA mal anders: ${url}${
        sharePath ? sharePath : ''
      }`
    "
    target="_blank"
    rel="nofollow"
    aria-label="E-Mail"
    @click="track('share', 'email', sharePath)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-envelope-fill mr-2"
      viewBox="0 0 16 16"
    >
      <path
        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
      />
    </svg>
    E-Mail
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
    name: "SocialButtonEmailShare",
    props: {
      sharePath: { type: String, default: "" },
      subject: { type: String, default: "" },
      size: { type: String, default: "" }
    },
    data() {
      return {
        url: window.location.origin
      };
    },
    methods: {
      track(eventAction, method, path) {
        // this.$gtag.event(eventAction, {
        //   method: method,
        //   content_id: path
        // });

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
