<template>
  <b-row>
    <b-col
      v-for="article in articles"
      :key="article.id"
      cols="12"
      :md="12 / 2"
      :lg="12 / number"
      class="mb-4"
    >
      <ArticleCard :article="article" />
    </b-col>
  </b-row>
</template>

<script>
  import ArticleCard from "@/components/ui/ArticleCard.vue";
  export default {
    name: "RandomArticlesContainer",
    components: {
      ArticleCard
    },
    props: {
      number: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        articles: Array
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
