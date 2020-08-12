<template>
    <b-button
        class="facebook-btn"
        variant="primary"
        :href="`https://www.facebook.com/${config.fb.path}`"
        target="_blank"
    >
        <font-awesome-icon
            class="mr-2"
            :icon="['fab', 'facebook-square']"
            size="lg"
        />
        Facebook
    </b-button>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "FacebookBtn",
        data() {
            return {
                config
            };
        }
    };
</script>

<style scoped lang="scss"></style>
