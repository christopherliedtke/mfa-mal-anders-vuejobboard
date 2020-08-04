<template>
    <div class="cms-page">
        <h1>{{ post.title }}</h1>
        <b-img
            v-if="post.featuredImage"
            :src="post.featuredImage.url"
            :alt="post.featuredImage.altText"
            class="my-3"
            fluid
        ></b-img>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    export default {
        name: "CMSPost",
        data() {
            return {
                post: {
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

                if (to.params.path != from.params.path) {
                    this.getPostContent();
                }
            }
        },
        methods: {
            async getPostContent() {
                const response = await axios.post(config.cms.url, {
                    query: `
                        query MyQuery {
                            post(id: "/${this.$route.params.path}/", idType: URI) {
                                title
                                content
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

                this.post = {
                    title: response.data.data.post.title,
                    content: response.data.data.post.content,
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
            this.getPostContent();
        }
    };
</script>

<style></style>
