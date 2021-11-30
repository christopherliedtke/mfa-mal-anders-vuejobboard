<template>
  <div class="edit-job container py-3 py-lg-5">
    <h2>
      Stellengesuch
      {{ $route.params.jobSeekId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <p>
      Bearbeite Dein Stellengesuch. Felder mit * sind Pflichtfelder.
    </p>
    <JobSeekForm />
  </div>
</template>

<script>
  import JobSeekForm from "@/components/forms/JobSeekForm.vue";
  export default {
    name: "UserEditJobSeek",
    components: {
      JobSeekForm
    }
  };
</script>
