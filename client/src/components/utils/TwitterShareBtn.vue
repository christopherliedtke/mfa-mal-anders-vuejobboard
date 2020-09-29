<template>
    <b-button
        :disabled="!$route.meta.public"
        class="twitter-share-btn"
        :href="
            `
        https://twitter.com/share?text=${title}&url=%0A%0A${
                config.website.url
            }${
                sharePath ? sharePath : ''
            }%0A%0A&hashtags=mfa,arzthelfer,mfajobs`
        "
        target="_blank"
    >
        <font-awesome-icon class="mr-2" :icon="['fab', 'twitter']" size="lg" />
        Twitter
        <b-icon class="ml-2" icon="share-fill" font-scale="0.95"></b-icon>
    </b-button>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "TwitterShareBtn",
        props: ["sharePath", "title"],
        data() {
            return {
                config
            };
        }
    };
</script>

<style lang="scss">
    @import "@/styles/custom_bootstrap.scss";
    .btn.twitter-share-btn {
        background-color: #1da1f2;
        border: 1px solid #1da1f2;

        &:hover,
        &:focus,
        &:active {
            background-color: darken($color: #1da1f2, $amount: 10%) !important;
            border: 1px solid darken($color: #1da1f2, $amount: 10%) !important;
            color: $light !important;
        }
    }
</style>
