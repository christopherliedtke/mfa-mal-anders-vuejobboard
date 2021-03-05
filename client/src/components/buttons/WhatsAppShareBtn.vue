<template>
    <b-button
        :disabled="!$route.meta.public"
        class="whatsapp-share-btn"
        :href="
            `https://wa.me/send?text=${url}${
                sharePath ? sharePath : $route.fullPath
            }`
        "
        target="_blank"
        @click="
            $gtag.event('share', {
                method: 'whatsapp',
                content_id: sharePath ? sharePath : $route.fullPath
            })
        "
        aria-label="WhatsApp"
    >
        <Fa class="mr-2" :icon="['fab', 'whatsapp']" size="lg" />
        WhatsApp
        <Fa class="ml-2" icon="share-alt" />
    </b-button>
</template>

<script>
    export default {
        name: "WhatsAppShareBtn",
        props: ["sharePath"],
        data() {
            return {
                url: window.location.origin
            };
        }
    };
</script>

<style lang="scss">
    @import "@/styles/custom_bootstrap.scss";
    .btn.whatsapp-share-btn {
        background-color: #25d366;
        border: 1px solid #25d366;

        &:hover,
        &:focus,
        &:active {
            background-color: darken($color: #25d366, $amount: 10%) !important;
            border: 1px solid darken($color: #25d366, $amount: 10%) !important;
            color: $light !important;
        }
    }
</style>
