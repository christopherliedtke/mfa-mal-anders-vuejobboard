<template>
  <div class="edit-job container py-3 py-lg-5">
    <h2>
      Stellengesuch
      {{ $route.params.jobSeekId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <p>
      Bearbeite Dein Stellengesuch. Felder mit * sind Pflichtfelder. Nach dem
      Speichern ist das Stellengesuch nicht automatisch veröffentlicht.
    </p>
    <JobSeekDataForm class="mt-4" />
  </div>
</template>

<script>
  import JobSeekDataForm from "@/components/JobSeekDataForm.vue";
  export default {
    name: "AdminJobSeekEdit",
    components: {
      JobSeekDataForm
    }
  };
</script>
