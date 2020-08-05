<template>
    <div class="row">
        <ArticleCard
            class="col-12 col-md-6"
            v-for="article in articles"
            :key="article.id"
            :article="article"
        />
    </div>
</template>

<script>
    import ArticleCard from "@/components/cms/ArticleCard.vue";
    export default {
        name: "Articles",
        props: ["articles"],
        components: {
            ArticleCard
        }
    };
</script>

<style></style>
