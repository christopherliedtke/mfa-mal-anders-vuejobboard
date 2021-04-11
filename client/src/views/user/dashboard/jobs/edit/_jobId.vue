<template>
  <b-container class="edit-job py-3 py-lg-5">
    <h2>
      Stellenanzeige
      {{ $route.params.jobId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <p>
      Bearbeiten Sie hier Ihre Stellenanzeige. <strong>Tipps </strong>
      <Fa
        id="popover-job-ad-tipps"
        class="position-relative text-info"
        style="top: -5px; cursor: pointer"
        icon="info-circle"
        scale="1"
      />
      <b-popover
        target="popover-job-ad-tipps"
        triggers="hover"
        placement="bottomleft"
      >
        <template #title>Tipps für Ihre Stellenanzeige</template>
        <b-link
          href="/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas"
          target="_blank"
          >Hier</b-link
        >
        haben wir Ihnen aus unseren Erfahrungen einige Tipps für eine attraktive
        Stellenanzeige zusammengestellt.
      </b-popover>
    </p>
    <JobForm api-jobs-schema="private"></JobForm>
  </b-container>
</template>

<script>
  import JobForm from "@/components/forms/JobForm.vue";
  export default {
    name: "UserDashboardEditJob",
    components: {
      JobForm
    }
  };
</script>
