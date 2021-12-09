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
      "$route"(to, from) {
        if (to != from) {
          this.getArticles();
        }
      },
      "$store.state.articles.articles"() {
        this.getArticles();
      }
    },
    async created() {
      this.$store.dispatch("getArticles");
      this.getArticles();
    },
    methods: {
      getRandom(arr, n) {
        var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
        if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
      },
      getArticles() {
        if (this.$store.state.articles.articles.length > 0) {
          this.articles = this.getRandom(
            this.$store.state.articles.articles,
            this.number
          );
        }
      }
    }
  };
</script>
