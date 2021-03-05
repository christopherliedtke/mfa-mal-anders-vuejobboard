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
        @click="
            $gtag.event('share', {
                method: 'facebook',
                content_id: sharePath ? sharePath : $route.fullPath
            })
        "
    >
        <Fa class="mr-2" :icon="['fab', 'facebook-square']" size="lg" />
        {{ content }}
        <Fa class="ml-2" icon="share-alt" />
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
