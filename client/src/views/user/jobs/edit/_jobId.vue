<template>
  <div class="edit-job container py-3 py-lg-5">
    <h2>
      Stellenanzeige
      {{ $route.params.jobId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <p>
      Bearbeiten Sie hier Ihre Stellenanzeige.
      <strong
        >Beachten Sie auch unsere
        <b-link href="/fuer-arbeitgeber#tipps-stellenanzeigen" target="_blank"
          >Tipps
        </b-link>
      </strong>
      <svg
        id="popover-job-ad-tipps"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        class="bi bi-info-circle-fill position-relative text-info"
        style="top: -5px; cursor: pointer"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
      </svg>
      <BPopover
        target="popover-job-ad-tipps"
        triggers="hover"
        placement="bottomleft"
      >
        <template #title>Tipps für Ihre Stellenanzeige</template>
        <b-link href="/fuer-arbeitgeber#tipps-stellenanzeigen" target="_blank"
          >Hier</b-link
        >
        haben wir Ihnen aus unseren Erfahrungen einige Tipps für eine attraktive
        Stellenanzeige zusammengestellt.
      </BPopover>
    </p>
    <JobDataForm api-jobs-schema="private"></JobDataForm>
  </div>
</template>

<script>
  import { BPopover } from "bootstrap-vue";
  import Vue from "vue";
  Vue.component("BPopover", BPopover);
  import JobDataForm from "@/components/JobDataForm.vue";
  export default {
    name: "UserEditJob",
    components: {
      JobDataForm
    }
  };
</script>
