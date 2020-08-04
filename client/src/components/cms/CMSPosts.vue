<template>
    <div class="cms-posts">
        <h1>{{ title }}</h1>
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    import PostCard from "@/components/cms/PostCard.vue";
    export default {
        name: "CMSPosts",
        components: {
            PostCard
        },
        data() {
            return {
                title: config.cms.postsPageTitle,
                posts: Array
            };
        },
        methods: {
            async getPosts() {
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

                this.posts = response.data.data.posts.edges.map(edge => {
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
            this.getPosts();
        }
    };
</script>

<style></style>
