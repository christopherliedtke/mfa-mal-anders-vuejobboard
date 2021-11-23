<template>
  <article v-if="training" class="training">
    <div v-if="training._id" class="header mb-3 mb-md-4">
      <div class="training-title">
        <h1 class="h2 bold">{{ training.title }}</h1>
        <!-- eslint-disable-next-line -->
        <span class="text-muted lead" v-html="training.company"></span>
        <span
          v-if="$store.state.auth.user.isAdmin"
          class="border-radius1 bg-light-shade ml-2 p-2"
        >
          <b-link :to="`/user/trainings/edit/${training._id}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              style="cursor: pointer"
              class="bi bi-pencil-square text-info"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </b-link>
        </span>
      </div>
      <div class="logo-container">
        <b-img-lazy
          v-if="training.logoUrl"
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
    <div v-else class="mb-3 mb-md-4">
      <BSkeleton class="mb-2" height="40px" width="90%" />
      <BSkeleton height="30px" width="40%" />
    </div>
    <div v-if="training._id" class="meta mb-3">
      <div
        v-if="training.startAt"
        class="badge badge-secondary badge-pill mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-calendar2-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"
          /></svg
        >{{ new Date(training.startAt).toLocaleDateString() }}
      </div>
      <div
        v-if="training.startAnytime"
        class="badge badge-secondary badge-pill mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-calendar2-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"
          />
        </svg>
        Jederzeit starten
      </div>
      <div
        v-if="training.location && !training.remote"
        class="badge badge-secondary badge-pill mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-geo-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
          /></svg
        >{{ training.location }}
      </div>
      <div v-if="training.remote" class="badge badge-secondary badge-pill mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-laptop mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
          /></svg
        >Online
      </div>
      <div
        v-if="training.duration"
        class="badge badge-secondary badge-pill mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-hourglass-split mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
          /></svg
        >{{ training.duration }}
      </div>
      <div v-if="training.effort" class="badge badge-secondary badge-pill mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-stopwatch-fill mr-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"
          /></svg
        >{{ training.effort }}
      </div>
      <div v-if="training.cost" class="badge badge-secondary badge-pill mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
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
        }}
      </div>
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
        to="/karriere/fort-und-weiterbildung/fortbildungskatalog"
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
  </article>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
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
        padding: 0.4rem 0.8rem;
        margin-bottom: 0.5rem;
        color: $light;
        border-radius: 14px;
        text-align: left;
        word-wrap: break-word;
        max-width: 100%;

        svg {
          vertical-align: top;
        }
      }
    }
  }
</style>
