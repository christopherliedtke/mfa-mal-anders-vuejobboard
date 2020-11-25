<template>
    <b-button
        variant="primary"
        class="facebook-share-btn"
        :href="
            `https://www.facebook.com/sharer/sharer.php?u=${url}${
                sharePath ? sharePath : $route.fullPath
            }`
        "
        target="_blank"
    >
        <font-awesome-icon
            class="mr-2"
            :icon="['fab', 'facebook-square']"
            size="lg"
        />
        {{ content }}
        <b-icon class="ml-2" icon="share-fill" font-scale="0.95"></b-icon>
    </b-button>
</template>

<script>
    export default {
        name: "FacebookShareBtn",
        props: {
            sharePath: { type: String, default: "" },
            content: { type: String, default: "Teilen" }
        },
        data() {
            return {
                url: window.location.origin
            };
        }
    };
</script>
