<template>
  <BModal
    id="star-job-modal"
    content-class="border-0"
    body-class="shadow1 border-radius1"
    no-close-on-backdrop
    no-close-on-esc
    hide-footer
    hide-header
    centered
    :visible="$store.state.utils.starJobModal"
  >
    <span
      class="position-absolute"
      style="right: 15px; top: 15px; cursor: pointer"
      @click="$store.commit('setStarJobModal', false)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
        />
        <path
          fill-rule="evenodd"
          d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
        />
      </svg>
    </span>

    <div class="py-2 px-3 ">
      <h2 class="h4 mb-4 bold">Für später speichern?</h2>
      <div class="clearfix mb-3">
        <b-img
          style="max-width: 150px"
          class="mr-4 mb-2"
          fluid
          left
          src="~@/assets/img/starredJobs.svg"
        />
        <p>
          Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu
          bewerben. Registriere Dich dazu jetzt ganz einfach.
        </p>
      </div>
      <b-button
        to="/auth/register?role=employee"
        block
        variant="secondary"
        @click="$store.commit('setStarJobModal', false)"
        >Jetzt registrieren</b-button
      >
    </div>
  </BModal>
</template>

<script>
  import Vue from "vue";
  import { BModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  export default {
    name: "StarJobModal"
  };
</script>

<style></style>
