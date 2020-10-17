<template>
    <b-button
        class="facebook-btn"
        variant="primary"
        :href="`https://www.facebook.com/${config.fb.path}`"
        target="_blank"
    >
        <font-awesome-icon
            :class="content ? 'mr-2' : ''"
            :icon="['fab', 'facebook-square']"
            size="lg"
        />
        {{ content }}
    </b-button>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "FacebookBtn",
        props: {
            content: {
                type: String,
                default: "Facebook"
            }
        },
        data() {
            return {
                config
            };
        }
    };
</script>
