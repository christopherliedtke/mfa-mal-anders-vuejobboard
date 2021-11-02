<template>
  <div></div>
</template>

<script>
  export default {
    name: "Head",
    props: {
      title: {
        type: String,
        default: ""
      },
      separator: {
        type: String,
        default: ""
      },
      complement: {
        type: String,
        default: ""
      },
      desc: {
        type: String,
        default: ""
      },
      img: { type: String, default: "" },
      imgAlt: { type: String, default: "" },
      twitterCard: { type: String, default: "" },
      script: { type: Array, default: () => [] },
      link: { type: Array, default: () => [] }
    },
    head: {
      title() {
        if (this.title) {
          const title = {
            inner: this.title
          };

          if (this.separator) {
            title.separator = this.separator;
          }
          if (this.complement) {
            title.complement = this.complement;
          }

          return title;
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
              content: "website",
              id: "og-type"
            },
            {
              property: "og:title",
              content: `${this.title} – ${this.$config.website.name}`,
              id: "og-title"
            },
            {
              property: "og:description",
              content: this.desc,
              id: "og-description"
            },
            {
              property: "og:url",
              content: this.$route.path,
              id: "og-url"
            },
            {
              property: "og:image",
              content: this.img || `/img/MfaMalAnders_Banner_1200.jpg`,
              id: "og-image"
            },
            {
              property: "og:image:alt",
              content: this.imgAlt || this.title,
              id: "og-image-alt"
            },
            {
              property: "fb:app_id",
              content: this.$config.fb.appId,
              id: "fb-app-id"
            },
            {
              property: "twitter:card",
              content: this.twitterCard || "summary_large_image",
              id: "twitter-card"
            },
            {
              property: "twitter:title",
              content: `${this.title} – ${this.$config.website.name}`,
              id: "twitter-title"
            },
            {
              property: "twitter:description",
              content: this.desc,
              id: "twitter-description"
            },
            {
              property: "twitter:image",
              content: this.img || `/img/MfaMalAnders_Banner_1200.jpg`,
              id: "twitter-image"
            },
            {
              property: "twitter:image:alt",
              content: this.imgAlt || this.title,
              id: "twitter-image-alt"
            },
            {
              property: "twitter:site",
              content: "@MfaMalAnders",
              id: "twitter-site"
            }
          ];
        }
      },
      link() {
        return [
          {
            rel: "canonical",
            href: `${this.$config.website.url + this.$route.path}`,
            id: "canonical"
          },
          ...this.link
        ];
      },
      script() {
        return [...this.script];
      }
    },
    watch: {
      "title"() {
        this.$emit("updateHead");
      },
      "desc"() {
        this.$emit("updateHead");
      },
      "img"() {
        this.$emit("updateHead");
      },
      "imgAlt"() {
        this.$emit("updateHead");
      },
      "twitterCard"() {
        this.$emit("updateHead");
      },
      "script"() {
        this.$emit("updateHead");
      },
      "link"() {
        this.$emit("updateHead");
      },
      "$route.fullPath"() {
        this.$emit("updateHead");
      }
    }
  };
</script>
