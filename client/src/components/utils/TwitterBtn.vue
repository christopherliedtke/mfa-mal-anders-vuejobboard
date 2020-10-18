<template>
    <b-button
        class="twitter-btn"
        variant="primary"
        :href="`https://www.twitter.com/${config.twitter.path}`"
        target="_blank"
    >
        <font-awesome-icon
            :class="content ? 'mr-2' : ''"
            :icon="['fab', 'twitter']"
            size="lg"
        />
        {{ content }}
    </b-button>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "TwitterBtn",
        props: {
            content: {
                type: String,
                default: "Twitter"
            }
        },
        data() {
            return {
                config
            };
        }
    };
</script>
