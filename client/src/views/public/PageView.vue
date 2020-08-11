<template>
    <div class="page-view">
        <component :is="renderedComponent"></component>
    </div>
</template>

<script>
    import config from "@/utils/config.json";
    import MFACareer from "@/components/pages/MFACareer.vue";
    import About from "@/components/pages/About.vue";
    import PrivacyPolicy from "@/components/pages/PrivacyPolicy.vue";
    import Impressum from "@/components/pages/Impressum.vue";
    import Contact from "@/components/pages/Contact.vue";
    import NewsletterSubscriptionSuccess from "@/components/pages/NewsletterSubscriptionSuccess.vue";
    // CMS Blog component
    import Magazin from "@/components/pages/Magazin.vue";
    export default {
        name: "PageView",
        components: {
            MFACareer,
            About,
            Contact,
            NewsletterSubscriptionSuccess,
            PrivacyPolicy,
            Impressum,
            // CMS blog component
            Magazin
        },
        data() {
            return {
                renderedComponent: ""
            };
        },
        mounted() {
            this.updatePage();
        },
        watch: {
            $route(to, from) {
                if (to.params.title != from.params.title) {
                    this.updatePage();
                }
            }
        },
        methods: {
            updatePage() {
                let comp = "";

                switch (this.$route.params.title) {
                    case "mfa-career":
                        comp = "MFACareer";
                        break;
                    case config.cms.postsPath:
                        comp = config.cms.postsPageTitle;
                        break;
                    case "about":
                        comp = "About";
                        break;
                    case "contact":
                        comp = "Contact";
                        break;
                    case "subscription-successful":
                        comp = "NewsletterSubscriptionSuccess";
                        break;
                    case "privacy-policy":
                        comp = "PrivacyPolicy";
                        break;
                    case "impressum":
                        comp = "Impressum";
                        break;

                    default:
                        this.$router.push("/404");
                        break;
                }

                this.renderedComponent = comp;
            }
        }
    };
</script>

<style></style>
