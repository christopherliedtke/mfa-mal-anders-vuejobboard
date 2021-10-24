<template>
  <article class="training-card">
    <div v-if="training._id" class="side">
      <div v-if="training.startAnytime">Jederzeit</div>
      <div
        v-else-if="training.startAt && new Date(training.startAt) >= new Date()"
      >
        {{
          new Date(training.startAt).toLocaleString("default", {
            month: "long"
          })
        }}
      </div>
      <div v-else>Regelmäßig / Auf Anfrage</div>
    </div>
    <div v-if="training._id" class="header">
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
      <div class="training-title">
        <!-- eslint-disable-next-line -->
        <h2 class="h4" v-html="training.title"></h2>
        <!-- eslint-disable-next-line -->
        <span class="text-muted" v-html="training.company"></span>
      </div>
    </div>
    <div v-else class="header">
      <BSkeleton height="40px" width="90%" />
    </div>
    <div v-if="training._id" class="meta">
      <BBadge v-if="training.startAt" class="mr-1" pill variant="secondary"
        ><Fa class="mr-1" :icon="['fas', 'calendar']" size="sm" />{{
          new Date(training.startAt).toLocaleDateString()
        }}</BBadge
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
    <div v-else class="meta d-flex">
      <BSkeleton
        height="19px"
        width="70px"
        class="mr-2"
        style="border-radius: 10px"
      />
      <BSkeleton
        height="19px"
        width="90px"
        class="mr-2"
        style="border-radius: 10px"
      />
      <BSkeleton
        height="19px"
        width="60px"
        class="mr-2"
        style="border-radius: 10px"
      />
    </div>
    <div v-if="training._id" class="body">{{ training.excerpt }}</div>
    <div v-else class="body">
      <BSkeleton />
      <BSkeleton />
      <BSkeleton />
      <BSkeleton />
      <BSkeleton />
      <BSkeleton />
    </div>
    <div class="footer">
      <b-button
        v-if="training.desc"
        :to="`/karriere/fortbildungskatalog/${training._id}`"
        target="_blank"
        class="mr-2 mt-2"
        variant="primary"
        size="sm"
        >Weitere Informationen</b-button
      >
      <b-button
        v-if="training._id"
        :href="training.extUrl"
        target="_blank"
        class="mt-2"
        variant="success"
        size="sm"
        >Zum Anbieter</b-button
      >
      <BSkeleton
        v-if="!training._id"
        height="36px"
        width="150px"
        style="border-radius: 18px"
      />
    </div>
  </article>
</template>

<script>
  import Vue from "vue";
  import { BBadge, BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
  Vue.component("BBadge", BBadge);
  export default {
    name: "TrainingCatalogueCard",
    props: {
      training: {
        type: Object,
        default: () => {}
      }
    }
  };
</script>

<style lang="scss" scoped>
  .training-card {
    position: relative;
    margin-bottom: 1rem;
    padding-right: 2rem;
    // background-color: $light-shade;
    border-radius: $border-radius1;
    box-shadow: $shadow1;

    .badge {
      overflow-x: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .side {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      width: 30px;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: $primary;
      color: $light;
      border-top-right-radius: $border-radius1;
      border-bottom-right-radius: $border-radius1;

      div {
        transform: rotate(90deg);
        white-space: nowrap;

        @media screen and (max-width: $break-menu) {
          padding-left: 2rem;
        }
      }
    }

    .header {
      display: flex;
      align-items: flex-start;
      // flex-wrap: wrap;
      border-top-left-radius: $border-radius1;
      border-top-right-radius: $border-radius1;
      // color: $light;
      // background-color: $primary;
      padding: 1.5rem 1.5rem 0 1.5rem;
      // padding: 1rem 1rem 1rem 1rem;
      // border-bottom: 1px solid #ddd;

      .training-title {
        h2 {
          font-family: $headings-font-family;
          word-break: break-word;
        }

        @media screen and (max-width: $break-menu) {
          padding-right: 0.5rem;
        }
      }

      .logo-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        // background-color: darken($light-shade, $amount: 1%);
        padding: 0.5rem;
        width: 110px;
        min-width: 110px;
        border-radius: 5px;

        @media screen and (max-width: $break-menu) {
          width: 60px;
          min-width: 60px;
          padding: 1.8rem 0.5rem 1.5rem 0.5rem;
          position: absolute;
          top: 0;
          right: 0;
          background-color: $light;
          border-bottom-right-radius: 0;
        }

        img {
          max-height: 70px;
          max-width: 80%;
        }
      }
    }

    .meta {
      // display: flex;
      padding: 0 1.5rem;
      margin: 0.75rem 0;

      .badge {
        font-size: 0.8rem;
        color: $light;
      }
    }

    .body {
      padding: 0 1.5rem 1rem 1.5rem;
    }

    .footer {
      padding: 0 1.5rem 1.5rem 1.5rem;
    }
  }
</style>
