<template>
    <div class="magazin">
        <h1 class="title">{{ title }}</h1>
        <b-container v-if="config.cms.active && articles" class="py-5">
            <div class="row">
                <ArticleCard
                    class="col-12 col-md-6"
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                />
            </div>
        </b-container>
        <Head
            :title="title"
            desc="Im MFA-mal-anders Magazin schreibe ich über den Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr..."
            img=""
        />
    </div>
</template>

<script>
    import config from "@/utils/config.json";
    import ArticleCard from "@/components/cms/ArticleCard.vue";
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Magazin",
        components: {
            ArticleCard,
            Head
        },
        data() {
            return {
                title: config.cms.postsPageTitle,
                config
            };
        },
        computed: {
            articles: function() {
                return this.$store.state.articles.articles;
            }
        }
    };
</script>

<style></style>
