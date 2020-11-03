<template>
    <div v-if="article">
        <!-- <h1 class="title d-none d-md-block">{{ article.title }}</h1> -->
        <b-container class="cms-article mt-3 mb-5">
            <div class="position-relative">
                <b-img
                    v-if="article.featuredImage"
                    :src="article.featuredImage.node.sourceUrl"
                    :alt="article.featuredImage.node.altText"
                    class="mt-3 mb-4"
                    fluid
                />
                <div
                    v-if="article.author.node.avatar"
                    class="position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1"
                    style="bottom: 0; right: 5%"
                >
                    <b-avatar
                        variant="light"
                        :src="article.author.node.avatar.url"
                        :alt="article.author.node.name"
                        size=""
                        class="mr-2"
                    />
                    <div v-if="article.author.node.name">
                        by {{ article.author.node.name }}
                    </div>
                </div>
            </div>
            <div class="mt-3" v-html="article.content"></div>
            <div
                class="d-flex flex-wrap justify-content-between align-items-center mt-5"
            >
                <div
                    v-if="article.author.node.avatar"
                    class="d-flex align-items-center mb-4 mb-lg-0"
                >
                    <b-avatar
                        variant="light"
                        :src="article.author.node.avatar.url"
                        :alt="article.author.node.name"
                        size="60"
                        class="mr-3"
                    />
                    <div class="h6">
                        <span>
                            Liebe Grüße,
                        </span>
                        <br />
                        <span>{{ article.author.node.name }}</span>
                    </div>
                </div>
                <div>
                    <FacebookShareBtn class="mb-2 mb-lg-0 mr-2" />
                    <TwitterShareBtn class="mb-2 mb-lg-0 mr-2" />
                    <WhatsAppShareBtn class="mb-2 mb-lg-0" />
                </div>
            </div>
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
    import FacebookShareBtn from "@/components/utils/FacebookShareBtn.vue";
    import TwitterShareBtn from "@/components/utils/TwitterShareBtn.vue";
    import WhatsAppShareBtn from "@/components/utils/WhatsAppShareBtn.vue";

    export default {
        name: "ArticleView",
        components: {
            Head,
            RandomArticlesContainer,
            FacebookShareBtn,
            TwitterShareBtn,
            WhatsAppShareBtn
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
