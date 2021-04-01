<template>
    <div v-if="training" class="fort-weiterbildung">
        <div class="title">
            <h1>{{ training.title }}</h1>
            <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        </div>
        <b-container class="py-3 py-lg-5">
            <b-row>
                <b-col md="4" order="2" order-md="1">
                    <FortWeiterbildungenNav />
                </b-col>
                <b-col class="mb-4" order="1" order-md="2">
                    <b-img
                        v-if="training.featuredImage"
                        class="border-radius1 shadow1 mb-3 mb-lg-5"
                        fluid
                        :src="training.featuredImage.node.sourceUrl"
                        :alt="`Banner - ${training.title}`"
                    />
                    <div v-html="training.content"></div>
                    <ToJobboardBanner class="mt-4" />
                </b-col>
            </b-row>
            <RandomTrainingsContainer />
        </b-container>
        <Head
            :title="training.seo && training.seo.title"
            :desc="training.seo && training.seo.metaDesc"
            :img="
                training.featuredImage && training.featuredImage.node.sourceUrl
            "
            :script="snippet"
        />
    </div>
</template>

<script>
    import FortWeiterbildungenNav from "@/components/navs/FortWeiterbildungenNav.vue";
    import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
    import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
    export default {
        name: "CareerFortWeiterbildung",
        components: {
            FortWeiterbildungenNav,
            RandomTrainingsContainer,
            ToJobboardBanner
        },
        data() {
            return {
                snippet: [
                    {
                        type: "application/ld+json",
                        inner: `{
                            "@context": "http://schema.org",
                            "@type" : "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "MFA mal anders",
                                "item": "https://www.mfa-mal-anders.de"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Karriere",
                                "item": "https://www.mfa-mal-anders.de/karriere"
                            },{
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Fort- und Weiterbildungen",
                                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen"
                            },{
                                "@type": "ListItem",
                                "position": 4,
                                "name": "${this.$route.params.slug
                                    .split("-")
                                    .map(
                                        elem =>
                                            elem.charAt(0).toUpperCase() +
                                            elem.slice(1)
                                    )
                                    .join(" ")}",
                                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen/${
                                    this.$route.params.slug
                                }"
                            }]
                        }`
                    }
                ]
            };
        },
        computed: {
            training() {
                return this.$store.state.trainings.trainings.find(
                    training => training.slug === this.$route.params.slug
                );
            },
            breadcrumbs() {
                return [
                    { text: "Home", to: "/" },
                    { text: "Karriere", to: "/karriere" },
                    {
                        text: "Fort- & Weiterbildungen",
                        to: "/karriere/jobs-und-berufsbilder"
                    },
                    {
                        text: this.training.title,
                        to: `/karriere/jobs-und-berufsbilder/${this.training.slug}`
                    }
                ];
            }
        }
    };
</script>
