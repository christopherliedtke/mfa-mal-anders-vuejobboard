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
    import NewsletterSignUpPopUp from "@/components/utils/NewsletterSignUpPopUp.vue";
    import Overlay from "@/components/utils/Overlay";
    import { mapActions } from "vuex";

    export default {
        components: {
            Header,
            Footer,
            NewsletterSignUpPopUp,
            Overlay
        },
        methods: {
            ...mapActions([
                "getTrainings",
                "getArticles",
                "getProfessions",
                "getJobs"
            ]),
            track() {
                this.$gtag.pageview({
                    page_title: this.$route.name,
                    page_path: this.$route.fullPath,
                    page_location: window.location.href,
                    anonymize_ip: this.$config.ga.anonymizeIP,
                    client_storage: this.$config.ga.storage
                });
            }
        },
        watch: {
            $route(to, from) {
                if (to.path != from.path && this.$config.ga.active) {
                    this.track();
                }
            }
        },
        created: function() {
            if (this.$config.ga.active) {
                this.track();
            }

            if (this.$config.cms.active) {
                this.getTrainings();
                this.getArticles();
                this.getProfessions();
            }

            this.getJobs({
                query: `
                    query {
                        jobs {
                            _id
                            createdAt
                            paidAt
                            title
                            description
                            employmentType
                            applicationDeadline
                            simpleApplication
                            specialization
                            company {
                                _id
                                name
                                street
                                location
                                zipCode
                                state
                                country
                                geoCodeLat
                                geoCodeLng
                                size
                                logoUrl
                            }
                        }
                    }
                `
            });
        }
    };
</script>

<style lang="scss">
    @import "@/styles/custom_bootstrap.scss";
    @import "node_modules/bootstrap/scss/bootstrap";
    @import "node_modules/bootstrap-vue/src/index.scss";
    @import "@/styles/custom.scss";
</style>
