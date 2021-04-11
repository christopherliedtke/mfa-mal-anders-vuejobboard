<template>
  <div class="article-card">
    <b-link :to="'/blog/article/' + article.slug" :aria-label="article.title">
      <b-card
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
        <b-card-text>
          <!-- eslint-disable-next-line -->
          <div v-html="article.excerpt"></div>
        </b-card-text>
        <hr />

        <div class="d-flex justify-content-between">
          <div
            v-if="article.author.node.avatar"
            class="d-flex align-items-center"
          >
            <b-avatar
              variant="light"
              :src="article.author.node.avatar.url"
              :alt="article.author.node.name"
              class="mr-2"
            />
            <div v-if="article.author.node.name" class="mr-3">
              {{ article.author.node.name }}
            </div>
          </div>
          <b-button variant="primary">Weiterlesen</b-button>
        </div>

        <b-badge
          v-if="article.tags.nodes.length > 0"
          pill
          variant="secondary"
          >{{ article.tags.nodes[0].name }}</b-badge
        >
      </b-card>
    </b-link>
  </div>
</template>

<script>
  export default {
    name: "ArticleCard",
    props: { article: { type: Object, default: () => {} } }
  };
</script>
