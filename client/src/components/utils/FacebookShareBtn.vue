<template>
    <b-button
        class="facebook-share-btn"
        variant="primary"
        :href="
            `https://www.facebook.com/sharer/sharer.php?u=${shareUrl ||
                config.website.url}`
        "
        target="_blank"
    >
        <font-awesome-icon
            class="mr-2"
            :icon="['fab', 'facebook-square']"
            size="lg"
        />
        Teilen
        <b-icon class="ml-2" icon="share-fill" font-scale="0.95"></b-icon>
    </b-button>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "FacebookBtn",
        props: ["shareUrl"],
        data() {
            return {
                config
            };
        }
    };
</script>

<style lang="scss"></style>
