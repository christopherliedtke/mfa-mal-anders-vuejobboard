<template>
    <div id="app">
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";
    import Footer from "@/components/layout/Footer";
    import config from "@/utils/config.json";

    export default {
        components: {
            Header,
            Footer
        },
        methods: {
            track() {
                this.$gtag.pageview({
                    page_title: this.$route.name,
                    page_path: this.$route.fullPath,
                    page_location: window.location.href,
                    anonymize_ip: config.ga.anonymizeIP,
                    client_storage: config.ga.storage
                });
            }
        },
        watch: {
            $route(to, from) {
                if (to.path != from.path && config.ga.active) {
                    this.track();
                }
            }
        },
        created() {
            this.track();
        }
    };
</script>

<style lang="scss">
    @import "@/styles/custom_bootstrap.scss";
    @import "node_modules/bootstrap/scss/bootstrap";
    @import "node_modules/bootstrap-vue/src/index.scss";
    @import "@/styles/custom.scss";
</style>
