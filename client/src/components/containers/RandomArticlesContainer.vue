<template>
  <div>
    <div v-if="articles && articles.length > 0" class="row">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :class="['col-12 mb-4', `col-md-${12 / 2}`, `col-lg-${12 / number}`]"
        :article="article"
      />
    </div>
    <div v-else class="row">
      <ArticleCardPlaceholder
        v-for="index in number"
        :key="index"
        :class="['col-12 mb-4', `col-md-${12 / 2}`, `col-lg-${12 / number}`]"
      />
    </div>
  </div>
</template>

<script>
  import ArticleCard from "@/components/ui/ArticleCard.vue";
  import ArticleCardPlaceholder from "@/components/ui/ArticleCardPlaceholder.vue";
  export default {
    name: "RandomArticlesContainer",
    components: {
      ArticleCard,
      ArticleCardPlaceholder
    },
    props: {
      number: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        articles: null
      };
    },
    watch: {
      $route(to, from) {
        if (to != from) {
          this.getArticles();
        }
      }
    },
    async created() {
      this.getArticles();
    },
    methods: {
      async getArticles() {
        try {
          const articles = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  articles(random: ${true}, limit: ${this.number}, exclude: "${
                this.$route.params.slug ? this.$route.params.slug : ""
              }") {
                    title
                    excerpt
                    slug
                    tags
                    author {
                      firstName
                      avatarUrl
                    }
                    featuredImage {
                      sourceUrl
                      srcSet
                      sizes
                      altText
                    }
                  }
                }
              `
            }
          });

          if (!articles.data.data.articles) {
            return;
          }

          this.articles = articles.data.data.articles;
        } catch (err) {
          return;
        }
      }
    }
  };
</script>
