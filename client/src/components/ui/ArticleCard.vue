<template>
  <div class="article-card">
    <b-link :to="'/blog/article/' + article.slug" :aria-label="article.title">
      <BCard no-body tag="article" class="mb-2">
        <BCardImgLazy
          :srcset="
            article.featuredImage ? article.featuredImage.node.srcSet : ''
          "
          :src="
            article.featuredImage ? article.featuredImage.node.sourceUrl : ''
          "
          sizes="(max-width: 768px) 100vw, 50vw"
          :alt="article.featuredImage ? article.featuredImage.node.altText : ''"
          width="1200"
          height="630"
          blank-width="1200"
          blank-height="630"
          blank-color="#f7f6f9"
          offset="1000"
          top
          fluid
        />
        <BCardBody>
          <BCardTitle :title="article.title" />

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
              <BCardImgLazy
                class="mr-2 rounded-circle"
                :src="article.author.node.avatar.url"
                :alt="article.author.node.name"
                height="96"
                width="96"
                blank-width="96"
                blank-height="96"
                style="width: auto; height: 37.5px"
                offset="1000"
              />
              <!-- <b-img
                :src="article.author.node.avatar.url"
                :alt="article.author.node.name"
                class="mr-2 rounded-circle"
                height="37.5"
              /> -->
              <div v-if="article.author.node.name" class="mr-3">
                {{ article.author.node.name }}
              </div>
            </div>
            <b-button variant="primary">Weiterlesen</b-button>
          </div>
        </BCardBody>

        <BBadge v-if="article.tags.nodes.length > 0" pill variant="secondary">{{
          article.tags.nodes[0].name
        }}</BBadge>
      </BCard>
    </b-link>
  </div>
</template>

<script>
  import Vue from "vue";
  import {
    BBadge,
    BCard,
    BCardBody,
    BCardImgLazy,
    BCardTitle,
    BCardText
  } from "bootstrap-vue";
  Vue.component("BBadge", BBadge);
  Vue.component("BCard", BCard);
  Vue.component("BCardBody", BCardBody);
  Vue.component("BCardImgLazy", BCardImgLazy);
  Vue.component("BCardTitle", BCardTitle);
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

      .card-img-top {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
