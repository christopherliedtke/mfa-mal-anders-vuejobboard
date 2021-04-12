<template>
  <b-button
    v-if="$store.state.auth.user.isAdmin && $route.meta.public"
    class="recache-btn p-1"
    @click="recache"
  >
    <Fa icon="sync-alt" size="xs" />
  </b-button>
</template>

<script>
  export default {
    name: "PrerenderRecache",
    computed: {
      url() {
        return window.origin + this.$route.fullPath;
      }
    },
    methods: {
      recache() {
        this.$axios.post("/api/prerender/recache", { url: this.url });
      }
    }
  };
</script>
