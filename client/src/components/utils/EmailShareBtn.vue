<template>
    <b-button
        variant="secondary"
        :disabled="!$route.meta.public"
        class="email-share-btn"
        :href="
            `mailto:?subject=${subject}&body=Stellenanzeige auf ${
                config.website.name
            }: ${url}${sharePath ? sharePath : ''}`
        "
        target="_blank"
        aria-label="E-Mail"
    >
        <font-awesome-icon class="mr-2" :icon="['fa', 'envelope']" size="lg" />
        E-Mail
        <b-icon class="ml-2" icon="share-fill" font-scale="0.95"></b-icon>
    </b-button>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "EmailShareBtn",
        props: ["sharePath", "subject"],
        data() {
            return {
                config,
                url: window.location.origin
            };
        }
    };
</script>
