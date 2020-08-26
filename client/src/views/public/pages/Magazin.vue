<template>
    <div class="magazin">
        <h1 class="title">{{ title }}</h1>
        <b-container v-if="config.cms.active" class="py-5">
            <Articles :articles="articles" />
        </b-container>
        <Head :title="title" desc="This is the meta of Magazin..." img="" />
    </div>
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    import Articles from "@/components/cms/Articles.vue";
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Magazin",
        components: {
            Articles,
            Head
        },
        data() {
            return {
                title: config.cms.postsPageTitle,
                articles: Array,
                config
            };
        },
        methods: {
            async getArticles() {
                const response = await axios.post(config.cms.url, {
                    query: `
                        query MyQuery {
                            posts {
                                edges {
                                    node {
                                        id
                                        title
                                        uri
                                        categories {
                                            nodes {
                                                name
                                            }
                                        }
                                        excerpt
                                        featuredImage {
                                            node {
                                                title
                                                altText
                                                sourceUrl
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `
                });

                this.articles = response.data.data.posts.edges.map(edge => {
                    return {
                        id: edge.node.id,
                        title: edge.node.title,
                        excerpt: edge.node.excerpt,
                        categories: edge.node.categories.nodes.map(
                            node => node.name
                        ),
                        featuredImage: edge.node.featuredImage && {
                            title: edge.node.featuredImage.node.title,
                            altText: edge.node.featuredImage.node.altText,
                            url: edge.node.featuredImage.node.sourceUrl
                        },
                        path: edge.node.uri
                    };
                });
            }
        },
        created() {
            if (config.cms.active) {
                this.getArticles();
            }
        }
    };
</script>

<style></style>
