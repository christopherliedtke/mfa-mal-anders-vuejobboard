<template>
    <div v-if="article">
        <!-- <h1 class="title d-none d-md-block">{{ article.title }}</h1> -->
        <b-container class="cms-article my-5">
            <b-img
                v-if="article.featuredImage"
                :src="article.featuredImage.node.sourceUrl"
                :alt="article.featuredImage.node.altText"
                class="mt-3 mb-4"
                fluid
            ></b-img>
            <div v-html="article.content"></div>
        </b-container>
        <b-container>
            <RandomArticlesContainer />
        </b-container>
        <Head
            v-if="article.title"
            :title="article.title"
            :desc="article.excerpt"
            :img="article.featuredImage.node.sourceUrl"
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import RandomArticlesContainer from "@/components/utils/RandomArticlesContainer.vue";

    export default {
        name: "ArticleView",
        components: {
            Head,
            RandomArticlesContainer
        },
        computed: {
            article: function() {
                return this.$store.state.articles.articles.find(
                    article => article.slug === this.$route.params.slug
                );
            }
        }
    };
</script>
