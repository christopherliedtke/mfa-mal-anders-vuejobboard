<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
    <Overlay />
    <NewsletterSignUpPopUp />
  </div>
</template>

<script>
  import Header from "@/components/layout/Header";
  import Footer from "@/components/layout/Footer";
  const NewsletterSignUpPopUp = () =>
    import(
      /* webpackChunkName: "newsletterSignUpPopUp" */ "@/components/popups/NewsletterSignUpPopUp.vue"
    );
  const Overlay = () =>
    import(/* webpackChunkName: "overlay" */ "@/components/utils/Overlay");
  export default {
    components: {
      Header,
      Footer,
      NewsletterSignUpPopUp,
      Overlay
    },
    watch: {
      $route(to, from) {
        if (from.path && to.path != from.path && this.$config.ga.active) {
          this.track();
        }
      }
    },
    async created() {
      if (this.$store.state.auth.loggedIn && this.$store.state.auth.token) {
        const user = await this.$store.dispatch("fetchUserFromToken");

        if (!user.data.data.meFromToken) {
          this.$store.dispatch("logout");
        } else {
          this.$matomo &&
            this.$matomo.setUserId(user.data.data.meFromToken._id);
        }
      }

      if (this.$store.state.auth.loggedIn) {
        this.$store.dispatch("getStarredJobs");
      }
    },
    methods: {
      track() {
        this.$gtag.pageview({
          page_title: this.$route.name,
          page_path: this.$route.fullPath,
          page_location: window.location.href,
          anonymize_ip: this.$config.ga.anonymizeIP,
          client_storage: this.$config.ga.storage
        });
      }
    }
  };
</script>
