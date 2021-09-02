<template>
  <b-button
    variant="secondary"
    :disabled="!$route.meta.public"
    class="email-share-btn"
    :href="
      `mailto:?subject=${subject}&body=Stellenanzeige auf ${
        $config.website.name
      }: ${url}${sharePath ? sharePath : ''}`
    "
    target="_blank"
    aria-label="E-Mail"
    @click="track('share', 'email', sharePath)"
  >
    <Fa class="mr-2" :icon="['fa', 'envelope']" size="lg" />
    E-Mail
    <Fa class="ml-2" icon="share-alt" />
  </b-button>
</template>

<script>
  export default {
    name: "EmailShareBtn",
    props: {
      sharePath: { type: String, default: "" },
      subject: { type: String, default: "" }
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
      }
    }
  };
</script>
