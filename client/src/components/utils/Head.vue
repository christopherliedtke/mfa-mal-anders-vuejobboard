<template>
    <div></div>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "Head",
        props: ["title", "desc", "img"],
        head: {
            title: function() {
                if (this.title) {
                    return {
                        inner: this.title
                    };
                }
            },
            meta: function() {
                if (this.desc) {
                    return [
                        {
                            name: "description",
                            content: this.desc,
                            id: "desc"
                        },
                        {
                            property: "og:title",
                            content: `${this.title} – ${config.website.name}`
                        },
                        {
                            property: "og:description",
                            content: this.desc
                        },
                        {
                            property: "og:url",
                            content: config.website.url + this.$route.path
                        },
                        {
                            property: "og:image",
                            content:
                                this.img ||
                                config.website.url +
                                    "/assets/mfaMalAnders_Facebook_Banner.png"
                        },
                        {
                            property: "fb:app_id",
                            content: config.fb.appId
                        }
                    ];
                }
            }
        }
    };
</script>

<style></style>
