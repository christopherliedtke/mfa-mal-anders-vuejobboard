<template>
    <div class="article-card">
        <b-link :to="'/article' + article.path">
            <b-card
                :title="article.title"
                :img-src="article.featuredImage.url"
                :img-alt="article.featuredImage.altText"
                img-top
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                    <div v-html="article.excerpt"></div>
                </b-card-text>

                <b-button :to="'/article' + article.path" variant="primary"
                    >Weiterlesen</b-button
                >
            </b-card>
        </b-link>
    </div>
</template>

<script>
    export default {
        name: "ArticleCard",
        props: ["article"]
    };
</script>

<style lang="scss">
    @import "@/styles/custom_bootstrap.scss";
    @import "@/styles/_config.scss";

    a {
        color: $dark;
        transition: $transition1;

        &:hover {
            color: $primary;
        }
    }

    .card {
        // border: none;
        background-color: darken($light, $amount: 2%);
    }
</style>
