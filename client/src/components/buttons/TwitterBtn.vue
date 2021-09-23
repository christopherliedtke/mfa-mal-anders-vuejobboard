<template>
  <b-button
    class="twitter-btn"
    variant="primary"
    :size="size"
    :href="`https://www.twitter.com/${$config.twitter.path}`"
    target="_blank"
    aria-label="Twitter"
  >
    <Fa :class="content ? 'mr-2' : ''" :icon="['fab', 'twitter']" size="lg" />
    {{ content }}
  </b-button>
</template>

<script>
  export default {
    name: "TwitterBtn",
    props: {
      content: {
        type: String,
        default: "Twitter"
      },
      size: { type: String, default: "" }
    }
  };
</script>
