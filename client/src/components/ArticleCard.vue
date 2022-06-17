<template>
  <article class="article-card">
    <!-- <b-link :to="'/blog/artikel/' + article.slug" :aria-label="article.title"> -->
    <div class="card mb-2">
      <b-img-lazy
        :srcset="article.featuredImage ? article.featuredImage.srcSet : ''"
        :src="article.featuredImage ? article.featuredImage.sourceUrl : ''"
        sizes="(max-width: 768px) 100vw, 600px"
        :alt="article.featuredImage ? article.featuredImage.altText : ''"
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
        blank-color="#f7f6f9"
        offset="1000"
        class="card-img-top"
        fluid
      />
      <div class="card-body">
        <b-link
          :to="'/blog/artikel/' + article.slug"
          :aria-label="article.title"
          class="stretched-link"
        >
          <h4 class="card-title">{{ article.title }}</h4>
        </b-link>

        <!-- eslint-disable-next-line -->
          <p class="card-text" v-html="article.excerpt"></p>
        <hr />

        <div class="d-flex justify-content-between">
          <div
            v-if="article.author.avatarUrl"
            class="d-flex align-items-center"
          >
            <b-img-lazy
              class="mr-2 rounded-circle"
              :src="article.author.avatarUrl"
              :alt="article.author.firstName"
              height="96"
              width="96"
              blank-width="96"
              blank-height="96"
              style="width: auto; height: 37.5px"
              offset="1000"
            />
            <div v-if="article.author.firstName" class="mr-3">
              {{ article.author.firstName }}
            </div>
          </div>
          <b-button :aria-label="article.title" variant="primary"
            >Weiterlesen</b-button
          >
        </div>
      </div>

      <span
        v-if="article.tags.length > 0"
        class="badge badge-pill badge-secondary"
        >{{ article.tags[0] }}</span
      >
    </div>
    <!-- </b-link> -->
  </article>
</template>

<script>
  export default {
    name: "ArticleCard",
    props: { article: { type: Object, default: () => {} } }
  };
</script>

<style lang="scss" scoped>
  .article-card {
    position: relative;

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
      border-radius: $border-radius1;
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
