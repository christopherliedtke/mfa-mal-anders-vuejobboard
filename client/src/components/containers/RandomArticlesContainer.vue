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
      <div class="article-card">
        <b-link
          :to="'/blog/article/' + article.slug"
          :aria-label="article.title"
        >
          <b-card no-body>
            <b-card-img-lazy
              :src="
                article.featuredImage
                  ? article.featuredImage.node.sourceUrl
                  : ''
              "
              :alt="
                article.featuredImage ? article.featuredImage.node.altText : ''
              "
              offset="1000"
              top
            />
            <b-card-body>
              <b-card-title :title="article.title" />
              <b-card-text>
                <!-- eslint-disable-next-line -->
                <div v-html="article.excerpt"></div>
              </b-card-text>

              <b-button :to="'/blog/article/' + article.slug" variant="primary"
                >Mehr</b-button
              >
            </b-card-body>
          </b-card>
        </b-link>
      </div>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: "RandomArticlesContainer",
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
      $route(to, from) {
        if (to != from) {
          this.getArticles();
        }
      },
      "$store.state.articles.articles"() {
        this.getArticles();
      }
    },
    mounted() {
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
