<template>
  <b-row>
    <b-col
      v-for="training in trainings"
      :key="training.id"
      cols="12"
      :md="12 / 2"
      :lg="12 / number"
      class="mb-4"
    >
      <div class="article-card">
        <b-link
          :to="'/karriere/fort-und-weiterbildungen/' + training.slug"
          :aria-label="training.title"
        >
          <BCard no-body>
            <BCardImgLazy
              :src="training.featuredImage.node.sourceUrl"
              :alt="training.featuredImage.node.altText"
              offset="1000"
              top
            />
            <BCardBody>
              <BCardTitle :title="training.title" />

              <BCardText>
                <!-- eslint-disable-next-line -->
                <div v-html="training.excerpt"></div>
              </BCardText>

              <b-button
                :to="'/karriere/fort-und-weiterbildungen/' + training.slug"
                variant="primary"
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
      $route(to, from) {
        if (to != from) {
          this.getTrainings();
        }
      },
      "$store.state.trainings.trainings"() {
        this.getTrainings();
      }
    },
    mounted() {
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
