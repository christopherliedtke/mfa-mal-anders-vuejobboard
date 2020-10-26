<template>
    <div></div>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "Head",
        props: {
            title: {
                type: String
            },
            desc: {
                type: String
            },
            img: { type: String },
            imgAlt: { type: String },
            twitterCard: { type: String },
            script: { type: Array, default: () => [] }
        },
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
                            property: "og:type",
                            content: "website"
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
                            content: window.location.origin + this.$route.path
                        },
                        {
                            property: "og:image",
                            content:
                                this.img ||
                                `${
                                    window.location.origin
                                }${require("@/assets/mfaMalAnders_Facebook_Banner.jpg")}`
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
                            content: this.twitterCard || "summary_large_image"
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
                    ...this.script,
                    {
                        type: "application/ld+json",
                        inner: `{
                            "@context": "http://schema.org",
                            "@type" : "Organization",
                            "url": "${window.location.origin}",
                            "logo": "${require("@/assets/logo.png")}"
                        }`
                    }
                ];
            }
        }
    };
</script>
