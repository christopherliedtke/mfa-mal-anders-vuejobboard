<template>
    <div></div>
</template>

<script>
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
            title() {
                if (this.title) {
                    return {
                        inner: this.title
                    };
                }
            },
            meta() {
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
                            content: `${this.title} – ${this.$config.website.name}`
                        },
                        {
                            property: "og:description",
                            content: this.desc
                        },
                        {
                            property: "og:url",
                            content: this.$route.path
                        },
                        {
                            property: "og:image",
                            content:
                                this.img || `/img/MfaMalAnders_Banner_1200.jpg`
                        },
                        {
                            property: "og:image:alt",
                            content: this.imgAlt || this.title
                        },
                        {
                            property: "fb:app_id",
                            content: this.$config.fb.appId
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
            link() {
                return [
                    {
                        rel: "canonical",
                        href: `${this.$config.website.url + this.$route.path}`
                    }
                ];
            },
            script() {
                return [
                    ...this.script,
                    {
                        type: "application/ld+json",
                        inner: JSON.stringify({
                            "@context": "http://schema.org",
                            "@type": "Organization",
                            url: this.$config.website.url,
                            logo: require("@/assets/img/logo_800.png")
                        })
                    }
                    // {
                    //     type: "application/ld+json",
                    //     inner: JSON.stringify({
                    //         "@context": "http://schema.org",
                    //         "@type": "WebSite",
                    //         url: this.$config.website.url,
                    //         potentialAction: {
                    //             "@type": "SearchAction",
                    //             target: `${this.$config.website.googleCustomSearchUrl}&q={search_term_string}`,
                    //             "query-input":
                    //                 "required name=search_term_string"
                    //         }
                    //     })
                    // }
                ];
            }
        },
        watch: {
            title() {
                this.$emit("updateHead");
            }
        }
    };
</script>
