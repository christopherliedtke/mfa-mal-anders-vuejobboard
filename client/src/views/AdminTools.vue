<template>
  <div id="admin-tools" class="container-fluid admin-container pt-3">
    <h1 class="h2 mb-3">Admin Tools</h1>
    <div>
      <b-button variant="warning" @click="flushWpContentCache"
        >Flush WP Content Cache</b-button
      >
    </div>

    <NavAdmin />
  </div>
</template>

<script>
  import NavAdmin from "@/components/NavAdmin.vue";
  export default {
    name: "DataAnalyticsDashboard",
    components: {
      NavAdmin
    },
    methods: {
      async flushWpContentCache() {
        try {
          await this.$axios.get("/api/admin/flush-wp-content-cache");

          this.$root.$bvToast.toast(
            "WP Content Flush erfolgreich abgeschlossen.",
            {
              title: `Flush completed`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );
        } catch (err) {
          this.$root.$bvToast.toast(
            `WP Content Flush nicht durchgeführt. Error: ${err}`,
            {
              title: `Fehler Flush`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      }
    }
  };
</script>
