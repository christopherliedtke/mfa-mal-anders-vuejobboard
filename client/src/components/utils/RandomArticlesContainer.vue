<template>
    <b-row class="mt-4">
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="mb-4"
            v-for="article in articles"
            :key="article.id"
        >
            <div class="article-card">
                <b-link :to="'/article/' + article.slug">
                    <b-card
                        :title="article.title"
                        :img-src="article.featuredImage.node.sourceUrl"
                        :img-alt="article.featuredImage.node.altText"
                        img-top
                        class="mb-2"
                    >
                        <b-card-text>
                            <div v-html="article.excerpt"></div>
                        </b-card-text>

                        <b-button
                            :to="'/article/' + article.slug"
                            variant="primary"
                            >Mehr</b-button
                        >
                    </b-card>
                </b-link>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "RandomArticlesContainer",
        props: ["number"],
        data() {
            return {
                articles: Array
            };
        },
        methods: {
            getRandom(arr, n) {
                var result = new Array(n),
                    len = arr.length,
                    taken = new Array(len);
                if (n > len)
                    throw new RangeError(
                        "getRandom: more elements taken than available"
                    );
                while (n--) {
                    var x = Math.floor(Math.random() * len);
                    result[n] = arr[x in taken ? taken[x] : x];
                    taken[x] = --len in taken ? taken[len] : len;
                }
                return result;
            },
            getArticles() {
                if (this.$store.state.articles.articles.length > 0) {
                    this.articles = this.getRandom(
                        this.$store.state.articles.articles,
                        this.number || 3
                    );
                }
            }
        },
        mounted: function() {
            this.getArticles();
        },
        watch: {
            $route(to, from) {
                if (to != from) {
                    this.getArticles();
                }
            },
            "$store.state.articles.articles": function() {
                this.getArticles();
            }
        }
    };
</script>
