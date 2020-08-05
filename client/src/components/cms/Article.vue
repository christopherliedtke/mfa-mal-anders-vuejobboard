<template>
    <b-container class="cms-page my-5">
        <h1>{{ article.title }}</h1>
        <b-img
            v-if="article.featuredImage"
            :src="article.featuredImage.url"
            :alt="article.featuredImage.altText"
            class="my-3"
            fluid
        ></b-img>
        <div v-html="article.content"></div>

        <Head
            v-if="article.title"
            :title="article.title"
            :desc="article.excerpt"
            :img="article.featuredImage.url"
        />
    </b-container>
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
