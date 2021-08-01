<template>
  <div v-if="training" class="training">
    <div v-if="training._id" class="header mb-3 mb-md-4">
      <div class="training-title">
        <h1 class="h2 bold">{{ training.title }}</h1>
        <span class="text-muted lead">{{ training.company }}</span>
      </div>
      <div class="logo-container">
        <b-img-lazy
          v-if="training.logoUrl"
          fluid
          blank-src="/img/MfaMalAnders_logo_circle_dark.svg"
          blank-width="90"
          offset="1000"
          height="70"
          :src="training.logoUrl"
          :alt="`Logo ${training.company}`"
        />
      </div>
    </div>
    <div v-else class="mb-3 mb-md-4">
      <BSkeleton class="mb-2" height="40px" width="90%" />
      <BSkeleton height="30px" width="40%" />
    </div>
    <div v-if="training._id" class="meta mb-3 ">
      <BBadge v-if="training.startAt" class="mr-1" pill variant="secondary"
        ><Fa class="mr-1" :icon="['fas', 'calendar']" size="sm" />{{
          new Date(training.startAt).toLocaleDateString()
        }}</BBadge
      >
      <BBadge v-if="training.startAnytime" class="mr-1" pill variant="secondary"
        ><Fa class="mr-1" :icon="['fas', 'calendar']" size="sm" />Jederzeit
        starten</BBadge
      >
      <BBadge
        v-if="training.location && !training.remote"
        class="mr-1"
        pill
        variant="secondary"
        ><Fa class="mr-1" :icon="['fas', 'map-marker']" size="sm" />{{
          training.location
        }}</BBadge
      >
      <BBadge v-if="training.remote" class="mr-1" pill variant="secondary"
        ><Fa class="mr-1" icon="laptop" size="sm" />Online</BBadge
      >
      <BBadge v-if="training.duration" class="mr-1" pill variant="secondary"
        ><Fa class="mr-1" icon="hourglass" size="sm" />{{
          training.duration
        }}</BBadge
      >
      <BBadge v-if="training.effort" class="mr-1" pill variant="secondary"
        ><Fa class="mr-1" icon="clock" size="sm" />{{ training.effort }}</BBadge
      >
      <BBadge v-if="training.cost" class="mr-1" pill variant="secondary"
        ><Fa class="mr-1" icon="euro-sign" size="sm" />{{
          parseInt(training.cost)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }}</BBadge
      >
    </div>
    <div v-else class="meta mb-3  d-flex">
      <BSkeleton
        height="30px"
        width="80px"
        class="mr-2"
        style="border-radius: 15px"
      />
      <BSkeleton
        height="30px"
        width="90px"
        class="mr-2"
        style="border-radius: 15px"
      />
      <BSkeleton
        height="30px"
        width="120px"
        class="mr-2"
        style="border-radius: 15px"
      />
      <BSkeleton
        height="30px"
        width="110px"
        class="mr-2"
        style="border-radius: 15px"
      />
      <BSkeleton
        height="30px"
        width="70px"
        class="mr-2"
        style="border-radius: 15px"
      />
    </div>
    <div class="mb-3 mb-md-4">
      <!-- eslint-disable-next-line -->
      <div v-if="training._id" v-html="training.desc"></div>
      <div v-else>
        <div class="mb-3">
          <BSkeleton
            class="mb-2"
            height="2rem"
            :width="`${Math.random() * (80 - 40) + 40}%`"
          />
          <BSkeleton v-for="index in 7" :key="index" class="text" />
        </div>
        <div class="mb-3">
          <BSkeleton
            class="mb-2"
            height="2rem"
            :width="`${Math.random() * (80 - 40) + 40}%`"
          />
          <BSkeleton v-for="index in 10" :key="index" class="text" />
        </div>
        <div class="mb-3">
          <BSkeleton
            class="mb-2"
            height="2rem"
            :width="`${Math.random() * (80 - 40) + 40}%`"
          />
          <BSkeleton v-for="index in 11" :key="index" class="text" />
        </div>
        <div>
          <BSkeleton
            class="mb-2"
            height="2rem"
            :width="`${Math.random() * (80 - 40) + 40}%`"
          />
          <BSkeleton v-for="index in 6" :key="index" class="text" />
        </div>
      </div>
    </div>
    <div class="footer">
      <b-button
        v-if="training._id"
        class="mr-2 mb-2 mb-lg-0"
        to="/karriere/fortbildungskalender"
        variant="outline-primary"
        >Zurück zur Übersicht</b-button
      >
      <b-button
        v-if="training._id"
        :href="training.extUrl"
        target="_blank"
        class="mr-2"
        variant="success"
        >Zum Anbieter</b-button
      >
      <BSkeleton
        v-if="!training._id"
        height="36px"
        width="150px"
        style="border-radius: 18px"
      />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BBadge, BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
  Vue.component("BBadge", BBadge);
  export default {
    name: "TrainingView",
    props: {
      training: {
        type: Object,
        default: () => {}
      }
    }
  };
</script>

<style scoped lang="scss">
  .training {
    box-shadow: $shadow1;
    border-radius: $border-radius1;
    padding: 3rem;

    @media screen and (max-width: $break-menu) {
      box-shadow: none;
      border-radius: none;
      padding: 0;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-top-left-radius: $border-radius1;
      border-top-right-radius: $border-radius1;

      .training-title {
        h1 {
          font-family: $headings-font-family;
          word-break: break-word;
        }
      }

      .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin-left: 0.5rem;
        width: 110px;
        min-width: 110px;
        border-radius: 5px;
        box-shadow: $shadow1;

        @media screen and (max-width: $break-menu) {
          width: 70px;
          min-width: 70px;
          padding: 0.5rem;
        }

        img {
          max-height: 70px;
          max-width: 80%;
        }
      }
    }

    .meta {
      .badge {
        font-size: 0.9rem;
        font-weight: 400;
        padding: 0.4rem 0.6rem;
        margin-bottom: 0.5rem;
        color: $light;
      }
    }
  }
</style>
