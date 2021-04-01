<template>
    <div class="magazin">
        <div class="title">
            <h1>{{ title }}</h1>
            <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        </div>
        <b-container v-if="$config.cms.active && articles" class="py-3 py-lg-5">
            <div class="grid">
                <ArticleCard
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                />
            </div>
        </b-container>
        <Head
            :title="title"
            desc="Interessante Artikel rund Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr..."
            img=""
            :script="snippet"
        />
    </div>
</template>

<script>
    import ArticleCard from "@/components/ui/ArticleCard.vue";
    export default {
        name: "Blog",
        components: {
            ArticleCard
        },
        data() {
            return {
                title: this.$config.cms.postsPageTitle,
                breadcrumbs: [
                    { text: "Home", to: "/" },
                    { text: "Blog", to: "/blog" }
                ],
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
                                "name": "Blog",
                                "item": "https://www.mfa-mal-anders.de/blog"
                            }]
                        }`
                    }
                ]
            };
        },
        computed: {
            articles() {
                return this.$store.state.articles.articles;
            }
        }
    };
</script>

<style scoped lang="scss">
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        @media screen and (max-width: 798px) {
            grid-template-columns: 1fr;
        }
    }
</style>
