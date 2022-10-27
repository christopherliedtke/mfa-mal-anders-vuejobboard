<template>
  <div class="magazin">
    <div class="title">
      <h1>
        <strong>{{ title }}</strong>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div v-if="articles" class="container py-3 py-lg-5">
      <div v-if="articles && articles.length > 0" class="grid">
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
      <div v-else class="grid">
        <ArticleCardPlaceholder v-for="index in 10" :key="index" />
      </div>
    </div>

    <Head
      :title="title"
      desc="Interessante Artikel rund Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr..."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ArticleCard from "@/components/ArticleCard.vue";
  import ArticleCardPlaceholder from "@/components/ArticleCardPlaceholder.vue";
  export default {
    name: "Blog",
    components: {
      ArticleCard,
      ArticleCardPlaceholder
    },
    data() {
      return {
        title: "Blog",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Blog", to: "/blog" }
        ],
        snippet: [
          {
            id: "breadcrumbs",
            type: "application/ld+json",
            inner: `{
              "@context": "http://schema.org",
              "@type" : "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "MFA mal anders",
                "item": "https://www.mfa-mal-anders.de"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.mfa-mal-anders.de/blog"
              }]
            }`
          }
        ]
      };
    },
    computed: {
      articles() {
        return this.$store.state.articles.articles;
      }
    },
    created() {
      this.$store.dispatch("getArticles");
    }
  };
</script>

<style scoped lang="scss">
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 798px) {
      grid-template-columns: 1fr;
    }
  }
</style>
