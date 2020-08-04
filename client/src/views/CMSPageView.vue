<template>
    <b-container class="cms-view my-5">
        <CMSPosts
            v-if="config.postsActive && $route.params.path === config.postsPath"
        />
        <CMSPage v-else />
    </b-container>
</template>

<script>
    import config from "@/utils/config.json";
    import CMSPage from "@/components/cms/CMSPage.vue";
    import CMSPosts from "@/components/cms/CMSPosts.vue";
    export default {
        name: "CMSPageView",
        components: {
            CMSPage,
            CMSPosts
        },
        data() {
            return {
                config: config.cms
            };
        }
    };
</script>

<style></style>
