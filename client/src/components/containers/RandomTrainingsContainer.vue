<template>
  <div v-if="trainings" class="row">
    <article
      v-for="training in trainings"
      :key="training.id"
      :class="[
        'article-card col-12 mb-4',
        `col-md-${12 / 2}`,
        `col-lg-${12 / (number === 3 ? 3 : 2)}`
      ]"
    >
      <b-link
        :to="'/karriere/fort-und-weiterbildung/ueberblick/' + training.slug"
        :aria-label="training.title"
      >
        <div class="card">
          <b-img-lazy
            v-if="training.featuredImage.node.sourceUrl"
            class="card-img-top"
            :srcset="training.featuredImage.node.srcSet"
            sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
            :src="training.featuredImage.node.sourceUrl"
            :alt="training.featuredImage.node.altText"
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
              :to="
                '/karriere/fort-und-weiterbildung/ueberblick/' + training.slug
              "
              variant="primary"
              >Mehr</b-button
            >
          </div>
        </div>
      </b-link>
    </article>
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
  import WeiterbildungCardPlaceholder from "../ui/WeiterbildungCardPlaceholder.vue";
  export default {
    name: "RandomTrainingsContainer",
    components: { WeiterbildungCardPlaceholder },
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
      "$route"(to, from) {
        if (to != from) {
          this.getTrainings();
        }
      },
      "$store.state.trainings.trainings"() {
        this.getTrainings();
      }
    },
    created() {
      this.$store.dispatch("getTrainings");
      this.getTrainings();
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
      getTrainings() {
        if (this.$store.state.trainings.trainings.length > 0) {
          this.trainings = this.getRandom(
            this.$store.state.trainings.trainings,
            this.number > this.$store.state.trainings.trainings.length
              ? this.$store.state.trainings.trainings.length
              : this.number
          );
        }
      }
    }
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
