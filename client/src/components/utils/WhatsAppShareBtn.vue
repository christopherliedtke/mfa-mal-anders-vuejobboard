<template>
    <b-button
        :disabled="!$route.meta.public"
        class="whatsapp-share-btn"
        :href="`https://wa.me/send?text=${url}${sharePath ? sharePath : ''}`"
        target="_blank"
    >
        <font-awesome-icon class="mr-2" :icon="['fab', 'whatsapp']" size="lg" />
        WhatsApp
        <b-icon class="ml-2" icon="share-fill" font-scale="0.95"></b-icon>
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
