<template>
  <article v-if="training.title" class="weiterbildung-card">
    <b-link
      :to="'/karriere/fort-und-weiterbildung/ueberblick/' + training.slug"
      :aria-label="training.title"
    >
      <div class="card">
        <b-img-lazy
          v-if="training.featuredImage.sourceUrl"
          class="card-img-top"
          :srcset="training.featuredImage.srcSet"
          sizes="(max-width: 576px) 100vw, 600px"
          :src="training.featuredImage.sourceUrl"
          :alt="training.featuredImage.altText"
          width="1200"
          height="630"
          blank-width="1200"
          blank-height="630"
          blank-color="#f7f6f9"
          offset="1000"
          fluid
        />
        <div class="card-body">
          <h2 class="card-title h4">{{ training.title }}</h2>

          <!-- eslint-disable-next-line -->
          <p class="card-text" v-html="training.excerpt"></p>

          <b-button
            :to="'/karriere/fort-und-weiterbildung/ueberblick/' + training.slug"
            variant="primary"
            >Mehr</b-button
          >
        </div>
      </div>
    </b-link>
  </article>
</template>

<script>
  export default {
    name: "WeiterbildungCard",
    props: { training: { type: Object, default: () => {} } }
  };
</script>

<style lang="scss" scoped>
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
</style>
