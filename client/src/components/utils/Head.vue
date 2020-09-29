<template>
    <div></div>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "Head",
        props: ["title", "desc", "img", "imgAlt"],
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
                                require("@/assets/mfaMalAnders_Facebook_Banner.png")
                        },
                        {
                            property: "og:image:alt",
                            content: this.imgAlt || this.title
                        },
                        {
                            property: "fb:app_id",
                            content: config.fb.appId
                        },
                        {
                            property: "twitter:card",
                            content: "summary_large_image"
                        },
                        {
                            property: "twitter:site",
                            content: "@MfaMalAnders"
                        }
                    ];
                }
            },
            script: function() {
                return [
                    {
                        type: "application/ld+json",
                        inner: `{
                            "@context": "http://schema.org",
                            "@type" : "Organization",
                            "url": "${config.website.url}",
                            "logo": "${require("@/assets/logo.png")}"
                        }`
                    }
                ];
            }
        }
    };
</script>

<style></style>
