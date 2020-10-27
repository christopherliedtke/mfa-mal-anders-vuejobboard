<template>
    <div id="app">
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
        <NewsletterSignUpPopUp />
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";
    import Footer from "@/components/layout/Footer";
    import NewsletterSignUpPopUp from "@/components/utils/NewsletterSignUpPopUp.vue";
    import config from "@/utils/config.json";
    import { mapActions } from "vuex";

    export default {
        components: {
            Header,
            Footer,
            NewsletterSignUpPopUp
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
        created: function() {
            if (config.ga.active) {
                this.track();
            }

            if (config.cms.active) {
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
