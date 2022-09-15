<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
    <TheOverlay />
    <TheStarJobModal v-if="$store.state.utils.starJobModal" />
    <NewsletterSignUpPopUp />
  </div>
</template>

<script>
  import TheHeader from "@/components/TheHeader";
  import TheFooter from "@/components/TheFooter";
  import TheOverlay from "@/components/TheOverlay";
  const NewsletterSignUpPopUp = () =>
    import(
      /* webpackChunkName: "NewsletterSignUpPopUp" */ "@/components/NewsletterSignUpPopUp.vue"
    );
  const TheStarJobModal = () =>
    import(
      /* webpackChunkName: "starJobModal" */ "@/components/TheStarJobModal"
    );
  export default {
    components: {
      TheHeader,
      TheFooter,
      NewsletterSignUpPopUp,
      TheOverlay,
      TheStarJobModal
    },
    // watch: {
    //   $route(to, from) {
    //     if (from.path && to.path != from.path && this.$config.ga.active) {
    //       this.track();
    //     }
    //   }
    // },
    async created() {
      if (this.$store.state.auth.loggedIn && this.$store.state.auth.token) {
        const user = await this.$store.dispatch("fetchUserFromToken");

        if (!user.data.data.meFromToken) {
          this.$store.dispatch("logout");
        } else {
          this.$matomo &&
            this.$matomo.setUserId(user.data.data.meFromToken._id);
        }

        if (this.$store.state.auth.loggedIn) {
          this.$store.dispatch("getStarredJobs");
        }
      }

      // #GA4 no cookies
      // this.gtag.query("consent", "default", {
      //   ad_storage: "denied",
      //   analytics_storage: "denied",
      //   functionality_storage: "denied",
      //   personalization_storage: "denied",
      //   security_storage: "denied"
      // });
    },
    mounted() {
      window.addEventListener("focus", this.checkVersion);
    },
    destroyed() {
      window.removeEventListener("focus", this.checkVersion);
    },
    methods: {
      async checkVersion() {
        try {
          const clientVersion = document.getElementsByName("version")[0]
            .content;

          const response = await this.$axios.get("/api/version/check", {
            clientVersion
          });

          if (response.data.checkPassed === false) {
            this.$root.$bvToast.toast(
              "Es ist eine neue Version der Webseite verfügbar. Du kannst die Seite neu laden, um auf dem aktuellen Stand zu sein.",
              {
                title: `Neue Version der Webseite`,
                variant: "info",
                toaster: "b-toaster-bottom-right",
                solid: false,
                noAutoHide: true
              }
            );

            window.removeEventListener("focus", this.checkVersion);
          }
        } catch (error) {
          //
        }
      }
      // track() {
      //   this.$gtag.pageview({
      //     page_title: this.$route.name,
      //     page_path: this.$route.fullPath,
      //     page_location: window.location.href,
      //     anonymize_ip: this.$config.ga.anonymizeIP,
      //     client_storage: this.$config.ga.storage
      //   });
      // }
    }
  };
</script>
