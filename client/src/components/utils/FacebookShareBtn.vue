<template>
    <b-button
        variant="primary"
        :disabled="!$route.meta.public"
        class="facebook-share-btn"
        :href="
            `https://www.facebook.com/sharer/sharer.php?u=${url}${
                sharePath ? sharePath : ''
            }`
        "
        target="_blank"
    >
        <font-awesome-icon
            class="mr-2"
            :icon="['fab', 'facebook-square']"
            size="lg"
        />
        Facebook
        <b-icon class="ml-2" icon="share-fill" font-scale="0.95"></b-icon>
    </b-button>
</template>

<script>
    export default {
        name: "FacebookShareBtn",
        props: ["sharePath"],
        data() {
            return {
                url: window.location.origin
            };
        }
    };
</script>
