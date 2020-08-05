<template>
    <Article :article="article" />
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    import Article from "@/components/cms/Article.vue";
    export default {
        name: "ArticleView",
        components: {
            Article
        },
        data() {
            return {
                article: {
                    title: "",
                    content: "",
                    featuredImage: {
                        title: "",
                        altText: "",
                        url: ""
                    }
                }
            };
        },
        watch: {
            $route(to, from) {
                this.title = "";
                this.content = "";

                if (to.params.title != from.params.title) {
                    this.getPostContent();
                }
            }
        },
        methods: {
            async fetchArticle() {
                const response = await axios.post(config.cms.url, {
                    query: `
                        query MyQuery {
                            post(id: "/${this.$route.params.title}/", idType: URI) {
                                title
                                content
                                excerpt
                                featuredImage {
                                    node {
                                        altText
                                        sourceUrl
                                        title
                                    }
                                }
                            }
                        }
                    `
                });

                if (!response.data.data.post) {
                    this.$router.push("/404");
                    return;
                }

                this.article = {
                    title: response.data.data.post.title,
                    content: response.data.data.post.content,
                    excerpt: response.data.data.post.excerpt,
                    featuredImage: response.data.data.post.featuredImage && {
                        title: response.data.data.post.featuredImage.node.title,
                        altText:
                            response.data.data.post.featuredImage.node.altText,
                        url:
                            response.data.data.post.featuredImage.node.sourceUrl
                    }
                };
            }
        },
        created() {
            this.fetchArticle();
        }
    };
</script>

<style></style>
