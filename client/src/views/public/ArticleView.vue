<template>
    <div v-if="article">
        <h1 class="title d-none d-md-block">{{ article.title }}</h1>
        <b-container class="cms-article my-5">
            <b-img
                v-if="article.featuredImage"
                :src="article.featuredImage.node.sourceUrl"
                :alt="article.featuredImage.node.altText"
                class="my-3"
                fluid
            ></b-img>
            <div v-html="article.content"></div>
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
    // import axios from "@/axios";
    // import config from "@/utils/config.json";
    // import Article from "@/components/cms/Article.vue";
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "ArticleView",
        components: {
            Head
        },
        computed: {
            article: function() {
                return this.$store.state.articles.articles.find(
                    article => article.slug === this.$route.params.slug
                );
            }
        }
        // data() {
        //     return {
        //         article: {
        //             title: "",
        //             content: "",
        //             featuredImage: {
        //                 title: "",
        //                 altText: "",
        //                 url: ""
        //             }
        //         }
        //     };
        // },
        // watch: {
        //     $route(to, from) {
        //         this.title = "";
        //         this.content = "";

        //         if (to.params.title != from.params.title) {
        //             this.getPostContent();
        //         }
        //     }
        // },
        // methods: {
        //     async fetchArticle() {
        //         const response = await axios.post(config.cms.url, {
        //             query: `
        //                 query MyQuery {
        //                     post(id: "/${this.$route.params.title}/", idType: URI) {
        //                         title
        //                         content
        //                         excerpt
        //                         featuredImage {
        //                             node {
        //                                 altText
        //                                 sourceUrl
        //                                 title
        //                             }
        //                         }
        //                     }
        //                 }
        //             `
        //         });

        //         if (!response.data.data.post) {
        //             this.$router.push("/404");
        //             return;
        //         }

        //         this.article = {
        //             title: response.data.data.post.title,
        //             content: response.data.data.post.content,
        //             excerpt: response.data.data.post.excerpt,
        //             featuredImage: response.data.data.post.featuredImage && {
        //                 title: response.data.data.post.featuredImage.node.title,
        //                 altText:
        //                     response.data.data.post.featuredImage.node.altText,
        //                 url:
        //                     response.data.data.post.featuredImage.node.sourceUrl
        //             }
        //         };
        //     }
        // },
        // created() {
        //     this.fetchArticle();
        // }
    };
</script>
