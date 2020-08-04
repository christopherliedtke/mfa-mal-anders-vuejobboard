<template>
    <b-container class="cms-view my-5">
        <CMSPost />
    </b-container>
</template>

<script>
    import config from "@/utils/config.json";
    import CMSPost from "@/components/cms/CMSPost.vue";
    export default {
        name: "CMSPostView",
        components: {
            CMSPost
        },
        data() {
            return {
                config: config.cms
            };
        }
    };
</script>

<style></style>
