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
    import NewsletterSignUpPopUp from "@/components/popups/NewsletterSignUpPopUp.vue";
    import Overlay from "@/components/utils/Overlay";
    export default {
        components: {
            Header,
            Footer,
            NewsletterSignUpPopUp,
            Overlay
        },
        async created() {
            if (
                this.$store.state.auth.loggedIn &&
                this.$store.state.auth.token
            ) {
                const user = await this.$store.dispatch("fetchUserFromToken");

                if (!user.data.data.meFromToken) {
                    this.$store.dispatch("logout");
                }
            }

            this.$store.dispatch("getJobs");

            if (this.$config.cms.active) {
                this.$store.dispatch("getArticles");
                this.$store.dispatch("getTrainings");
                this.$store.dispatch("getProfessions");
            }
        },
        watch: {
            $route(to, from) {
                if (
                    from.path &&
                    to.path != from.path &&
                    this.$config.ga.active
                ) {
                    this.track();
                }
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

<style lang="scss">
    @import "@/styles/custom_bootstrap.scss";
    @import "node_modules/bootstrap/scss/bootstrap";
    @import "node_modules/bootstrap-vue/src/index.scss";
    @import "@/styles/custom.scss";
</style>
