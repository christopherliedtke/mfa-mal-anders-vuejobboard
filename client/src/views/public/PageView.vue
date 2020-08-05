<template>
    <div class="page-view">
        <component :is="renderedComponent"></component>
    </div>
</template>

<script>
    import MFACareer from "@/components/pages/MFACareer.vue";
    import Magazin from "@/components/pages/Magazin.vue";
    import About from "@/components/pages/About.vue";
    import PrivacyPolicy from "@/components/pages/PrivacyPolicy.vue";
    import Impressum from "@/components/pages/Impressum.vue";
    export default {
        name: "PageView",
        components: {
            MFACareer,
            Magazin,
            About,
            PrivacyPolicy,
            Impressum
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
                    case "magazin":
                        comp = "Magazin";
                        break;
                    case "about":
                        comp = "About";
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
