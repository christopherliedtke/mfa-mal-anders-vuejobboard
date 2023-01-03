<template>
  <article class="training-card">
    <div v-if="training._id" class="side">
      <div v-if="training.startAnytime">Jederzeit</div>
      <div v-else>Regelmäßig / Auf Anfrage</div>
    </div>
    <div v-if="training._id" class="header">
      <div class="training-title">
        <b-link
          :to="
            training.desc
              ? `/fortbildungskatalog/${training._id}/${training.slug}`
              : ''
          "
          :href="!training.desc ? training.extUrl : ''"
          :target="training.desc ? '_self' : '_blank'"
          class="text-reset stretched-link"
        >
          <!-- eslint-disable-next-line -->
          <h2 class="h4 mb-2" v-html="training.title"></h2>
        </b-link>

        <!-- eslint-disable-next-line -->
        <span class="text-muted" v-html="training.company"></span>
      </div>
      <div v-if="training.logoUrl" class="logo-container">
        <b-img-lazy
          fluid
          blank-src="/img/MfaMalAnders_logo_circle_bgdark_white.svg"
          blank-width="90"
          offset="1000"
          height="70"
          :src="training.logoUrl"
          :alt="`Logo ${training.company}`"
        />
      </div>
    </div>
    <div v-else class="header">
      <BSkeleton height="40px" width="90%" />
    </div>
    <div v-if="training._id" class="meta">
      <span
        v-if="training.eventType"
        class="badge badge-pill badge-secondary mr-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-tag-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          /></svg
        >{{ training.eventType }}</span
      >
      <span
        v-if="training.location && !training.remote"
        class="badge badge-pill badge-secondary mr-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-geo-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
          /></svg
        >{{ training.location }}</span
      >
      <span v-if="training.remote" class="badge badge-pill badge-secondary mr-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-laptop mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
          /></svg
        >Online / Fern</span
      >
      <span
        v-if="training.duration"
        class="badge badge-pill badge-secondary mr-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-hourglass-split mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
          /></svg
        >{{ training.duration }}</span
      >
      <span v-if="training.effort" class="badge badge-pill badge-secondary mr-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-stopwatch-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"
          /></svg
        >{{ training.effort }}</span
      >
      <span v-if="training.cost" class="badge badge-pill badge-secondary mr-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-currency-euro mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"
          /></svg
        >{{
          parseInt(training.cost)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }}</span
      >
      <span
        v-if="training.graduation"
        class="badge badge-pill badge-secondary mr-1"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-mortarboard-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"
          />
          <path
            d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"
          /></svg
        >{{ training.graduation }}</span
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
        :to="`/fortbildungskatalog/${training._id}/${training.slug}`"
        target="_self"
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
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
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
      padding: 0.25rem 0.6rem;
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
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      // flex-wrap: wrap;
      border-top-left-radius: $border-radius1;
      border-top-right-radius: $border-radius1;
      // color: $light;
      // background-color: $primary;
      padding: 1.5rem 1.5rem 0 1.5rem;
      // padding: 1rem 1rem 1rem 1rem;
      // border-bottom: 1px solid #ddd;

      @media screen and (max-width: $break-menu) {
        justify-content: space-between;
      }

      .training-title {
        order: 1;

        h2 {
          font-weight: bold;
          word-break: break-word;
        }

        @media screen and (max-width: $break-menu) {
          padding-right: 0.5rem;
          order: 0;
        }
      }

      .logo-container {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        // background-color: darken($light-shade, $amount: 1%);
        padding-right: 1rem;
        // padding: 0 0 0 0.5rem;
        width: 80px;
        min-width: 80px;
        // border-radius: 5px;
        order: 0;

        @media screen and (max-width: $break-menu) {
          width: 60px;
          min-width: 60px;
          // padding: 1.8rem 0.5rem 1.5rem 0.5rem;
          // position: absolute;
          // top: 0;
          // right: 0;
          padding-right: 0;
          padding-left: 0.5rem;
          background-color: $light;
          border-bottom-right-radius: 0;
          order: 1;
        }

        img {
          aspect-ratio: 1.2;
          object-fit: contain;
          // max-height: 70px;
          // max-width: 80%;
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

        svg {
          vertical-align: top;
        }
      }
    }

    .body {
      padding: 0 1.5rem 0.5rem 1.5rem;
    }

    .footer {
      padding: 0 1.5rem 1.5rem 1.5rem;
    }
  }
</style>
