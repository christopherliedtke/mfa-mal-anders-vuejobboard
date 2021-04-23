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
          <BCard no-body>
            <BCardImgLazy
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
            <BCardBody>
              <BCardTitle :title="article.title" />
              <BCardText>
                <!-- eslint-disable-next-line -->
                <div v-html="article.excerpt"></div>
              </BCardText>

              <b-button :to="'/blog/article/' + article.slug" variant="primary"
                >Mehr</b-button
              >
            </BCardBody>
          </BCard>
        </b-link>
      </div>
    </b-col>
  </b-row>
</template>

<script>
  import Vue from "vue";
  import {
    BCard,
    BCardBody,
    BCardImgLazy,
    BCardTitle,
    BCardText
  } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardBody", BCardBody);
  Vue.component("BCardImgLazy", BCardImgLazy);
  Vue.component("BCardTitle", BCardTitle);
  Vue.component("BCardText", BCardText);
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
