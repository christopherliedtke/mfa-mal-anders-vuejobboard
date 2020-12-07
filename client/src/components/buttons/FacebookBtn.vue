<template>
    <b-button
        class="facebook-btn"
        variant="primary"
        :href="`https://www.facebook.com/${$config.fb.path}`"
        target="_blank"
        aria-label="Facebook"
    >
        <Fa
            :class="content ? 'mr-2' : ''"
            :icon="['fab', 'facebook-square']"
            size="lg"
        />
        {{ content }}
    </b-button>
</template>

<script>
    export default {
        name: "FacebookBtn",
        props: {
            content: {
                type: String,
                default: "Facebook"
            }
        }
    };
</script>
