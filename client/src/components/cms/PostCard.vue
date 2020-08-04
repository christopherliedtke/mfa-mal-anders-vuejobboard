<template>
    <div class="post-card">
        <b-card
            :title="post.title"
            :img-src="post.featuredImage.url"
            :img-alt="post.featuredImage.altText"
            img-top
            tag="article"
            class="mb-2"
        >
            <b-card-text>
                <div v-html="post.excerpt"></div>
            </b-card-text>

            <b-button :to="'/post' + post.path" variant="primary"
                >Weiterlesen</b-button
            >
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "PostCard",
        props: ["post"]
    };
</script>

<style></style>
