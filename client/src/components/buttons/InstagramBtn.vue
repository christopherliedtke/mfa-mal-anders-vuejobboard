<template>
  <b-button
    class="instagram-btn"
    variant="primary"
    :href="`https://www.instagram.com/${$config.ig.path}`"
    target="_blank"
    aria-label="Instagram"
  >
    <Fa :class="content ? 'mr-2' : ''" :icon="['fab', 'instagram']" size="lg" />
    {{ content }}
  </b-button>
</template>

<script>
  export default {
    name: "InstagramBtn",
    props: {
      content: {
        type: String,
        default: "Instagram"
      }
    }
  };
</script>
