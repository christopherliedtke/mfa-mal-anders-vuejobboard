<template>
    <div class="article-card">
        <b-link :to="'/article/' + article.slug">
            <b-card
                :title="article.title"
                :img-src="article.featuredImage.node.sourceUrl"
                :img-alt="article.featuredImage.node.altText"
                img-top
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                    <div v-html="article.excerpt"></div>
                </b-card-text>

                <b-button :to="'/article/' + article.slug" variant="primary"
                    >Weiterlesen</b-button
                >
                <b-badge
                    v-if="article.tags.nodes.length > 0"
                    pill
                    variant="secondary"
                    >{{ article.tags.nodes[0].name }}</b-badge
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
