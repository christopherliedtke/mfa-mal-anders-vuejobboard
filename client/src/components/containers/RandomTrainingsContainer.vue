<template>
  <div class="row">
    <div
      v-for="training in trainings"
      :key="training.id"
      :class="['col-12 mb-4', `col-md-${12 / 2}`, `col-lg-${12 / number}`]"
    >
      <article class="article-card">
        <b-link
          :to="'/karriere/fort-und-weiterbildungen/' + training.slug"
          :aria-label="training.title"
        >
          <div class="card">
            <b-img-lazy
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
              <h4 class="card-title">{{ training.title }}</h4>

              <!-- eslint-disable-next-line -->
              <p class="card-text" v-html="training.excerpt"></p>

              <b-button
                :to="'/karriere/fort-und-weiterbildungen/' + training.slug"
                variant="primary"
                >Mehr</b-button
              >
            </div>
          </div>
        </b-link>
      </article>
    </div>
  </div>
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
    name: "RandomTrainingsContainer",
    props: {
      number: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        trainings: Array
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
            this.number
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
