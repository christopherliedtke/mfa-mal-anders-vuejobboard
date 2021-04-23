<template>
  <div class="article-card">
    <b-link :to="'/blog/article/' + article.slug" :aria-label="article.title">
      <BCard
        :title="article.title"
        :img-src="
          article.featuredImage ? article.featuredImage.node.sourceUrl : ''
        "
        :img-alt="
          article.featuredImage ? article.featuredImage.node.altText : ''
        "
        img-top
        tag="article"
        class="mb-2"
      >
        <BCardText>
          <!-- eslint-disable-next-line -->
          <div v-html="article.excerpt"></div>
        </BCardText>
        <hr />

        <div class="d-flex justify-content-between">
          <div
            v-if="article.author.node.avatar"
            class="d-flex align-items-center"
          >
            <b-img
              :src="article.author.node.avatar.url"
              :alt="article.author.node.name"
              class="mr-2 rounded-circle"
              height="37.5"
            />
            <div v-if="article.author.node.name" class="mr-3">
              {{ article.author.node.name }}
            </div>
          </div>
          <b-button variant="primary">Weiterlesen</b-button>
        </div>

        <BBadge v-if="article.tags.nodes.length > 0" pill variant="secondary">{{
          article.tags.nodes[0].name
        }}</BBadge>
      </BCard>
    </b-link>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BBadge, BCard, BCardText } from "bootstrap-vue";
  Vue.component("BBadge", BBadge);
  Vue.component("BCard", BCard);
  Vue.component("BCardText", BCardText);
  export default {
    name: "ArticleCard",
    props: { article: { type: Object, default: () => {} } }
  };
</script>

<style lang="scss" scoped>
  .article-card {
    a:not(.btn) {
      color: $dark;
      transition: $transition1;

      &:hover {
        color: $primary;
      }
    }

    .card {
      border: none;
      background-color: $light-shade;
      box-shadow: $shadow1;
      transition: $transition1;

      &:hover {
        box-shadow: $shadow2;
      }

      .badge {
        color: $light;
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 0.9rem;
        font-weight: 400;
        padding: 0.5rem 0.8rem;
      }
    }
  }
</style>
