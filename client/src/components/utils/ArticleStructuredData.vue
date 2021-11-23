<template>
  <div></div>
</template>

<script>
  export default {
    name: "ArticleStructuredData",
    props: { article: { type: Object, default: () => {} } },
    head: {
      script() {
        if (this.article.title) {
          return [
            {
              type: "application/ld+json",
              inner: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": this.article.title,
                "author": {
                  "@type": "Person",
                  "name": `${this.article.author.node.firstName} ${this.article.author.node.lastName}`,
                  "image": this.article.author.node.avatar
                    ? this.article.author.node.avatar.url
                    : ""
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "MFA mal anders",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "/img/MfaMalAnders_logo_circle_bgdark_white.png"
                  }
                },
                "image": this.article.featuredImage.node.sourceUrl,
                "datePublished": this.article.date,
                "dateModofied": this.article.modified
              })
            }
          ];
        }
      }
    },
    watch: {
      article() {
        this.$emit("updateHead");
      }
    }
  };
</script>
