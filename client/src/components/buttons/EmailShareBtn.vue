<template>
    <b-button
        variant="secondary"
        :disabled="!$route.meta.public"
        class="email-share-btn"
        :href="
            `mailto:?subject=${subject}&body=Stellenanzeige auf ${
                $config.website.name
            }: ${url}${sharePath ? sharePath : ''}`
        "
        target="_blank"
        @click="track('share', 'email', sharePath)"
        aria-label="E-Mail"
    >
        <Fa class="mr-2" :icon="['fa', 'envelope']" size="lg" />
        E-Mail
        <Fa class="ml-2" icon="share-alt" />
    </b-button>
</template>

<script>
    export default {
        name: "EmailShareBtn",
        props: ["sharePath", "subject"],
        data() {
            return {
                url: window.location.origin
            };
        },
        methods: {
            track(eventAction, method, path) {
                this.$gtag.event(eventAction, {
                    method: method,
                    content_id: path
                });

                this.$matomo &&
                    this.$matomo.trackEvent(
                        "engagement",
                        eventAction,
                        `method: ${method}; path: ${path}`
                    );
            }
        }
    };
</script>
