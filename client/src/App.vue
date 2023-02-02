<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
    <TheOverlay />
    <TheStarJobModal v-if="$store.state.utils.starJobModal" />
    <NewsletterSignUpPopUp v-if="loadNewsletterPopUp" />
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
    data() {
      return {
        loadNewsletterPopUp: false
      };
    },
    watch: {
      $route(to, from) {
        if (from.path && to.path != from.path) {
          // this.track();
          this.loadNewsletterPopUp = true;
        }
      }
    },
    async created() {
      await this.checkLoggedIn();
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
      document.addEventListener("visibilitychange", this.checkVersion);
      document.addEventListener("visibilitychange", this.checkLoggedIn);
      this.$cookiebot.consentBanner();
    },
    destroyed() {
      document.removeEventListener("visibilitychange", this.checkVersion);
      document.removeEventListener("visibilitychange", this.checkLoggedIn);
    },
    methods: {
      async checkLoggedIn() {
        if (this.$store.state.auth.loggedIn || this.$store.state.auth.token) {
          const user = await this.$store.dispatch("fetchUserFromToken");

          if (!user.data.data.meFromToken) {
            this.$store.dispatch(
              "logout",
              `/auth/login?redirect=${this.$route.fullPath}`
            );
            this.$root.$bvToast.toast(
              "Ihre Sitzung ist abgelaufen. Bitte loggen Sie sich erneut ein.",
              {
                title: `Sitzung abgelaufen`,
                variant: "info",
                toaster: "b-toaster-bottom-right",
                solid: false,
                noAutoHide: true
              }
            );
          } else {
            this.$matomo &&
              this.$matomo.setUserId(user.data.data.meFromToken._id);
          }

          if (this.$store.state.auth.loggedIn) {
            this.$store.dispatch("getStarredJobs");
          }
        }
      },
      async checkVersion() {
        if (document.visibilityState !== "visible") {
          return;
        }
        try {
          const clientVersion = document.getElementsByName("version")[0]
            .content;

          const response = await this.$axios.post("/api/version/check", {
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

            document.removeEventListener("visibilitychange", this.checkVersion);
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
