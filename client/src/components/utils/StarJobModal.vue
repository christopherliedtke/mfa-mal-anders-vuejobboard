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
      <Fa icon="times" />
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
