<template>
    <div>
        <h1 class="title d-none d-md-block">{{ article.title }}</h1>
        <b-container class="cms-article my-5">
            <b-img
                v-if="article.featuredImage"
                :src="article.featuredImage.url"
                :alt="article.featuredImage.altText"
                class="my-3"
                fluid
            ></b-img>
            <div v-html="article.content"></div>
        </b-container>
        <Head
            v-if="article.title"
            :title="article.title"
            :desc="article.excerpt"
            :img="article.featuredImage.url"
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Article",
        props: ["article"],
        components: {
            Head
        }
    };
</script>

<style></style>
