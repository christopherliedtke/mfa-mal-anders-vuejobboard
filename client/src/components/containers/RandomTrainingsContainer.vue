<template>
  <div v-if="trainings" class="row">
    <div
      v-for="training in trainings"
      :key="training.id"
      :class="[
        'article-card col-12 mb-4',
        `col-md-${12 / 2}`,
        `col-lg-${12 / (number === 3 ? 3 : 2)}`
      ]"
    >
      <WeiterbildungCard :training="training" />
    </div>
  </div>
  <div v-else class="row">
    <WeiterbildungCardPlaceholder
      v-for="index in number"
      :key="index"
      :class="[
        'article-card col-12 mb-4',
        `col-md-${12 / 2}`,
        `col-lg-${12 / (number === 3 ? 3 : 2)}`
      ]"
    />
  </div>
</template>

<script>
  import WeiterbildungCard from "../ui/WeiterbildungCard.vue";
  import WeiterbildungCardPlaceholder from "../ui/WeiterbildungCardPlaceholder.vue";
  export default {
    name: "RandomTrainingsContainer",
    components: { WeiterbildungCard, WeiterbildungCardPlaceholder },
    props: {
      number: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        trainings: null
      };
    },
    watch: {
      $route(to, from) {
        if (to != from) {
          this.getTrainings();
        }
      }
    },
    created() {
      this.getTrainings();
    },
    methods: {
      async getTrainings() {
        try {
          const trainings = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  weiterbildungen(random: ${true}, limit: ${
                this.number
              }, exclude: "${
                this.$route.params.slug ? this.$route.params.slug : ""
              }") {
                    title
                    excerpt
                    slug
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

          if (!trainings.data.data.weiterbildungen) {
            return;
          }

          this.trainings = trainings.data.data.weiterbildungen;
        } catch (err) {
          return;
        }
      }
    }
  };
</script>
