<template>
  <b-container class="edit-training py-3 py-lg-5">
    <h2>
      Fortbildung
      {{ $route.params.trainingId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <p>Bearbeiten Sie hier Ihre Fortbildung.</p>
    <TrainingForm />
  </b-container>
</template>

<script>
  import TrainingForm from "@/components/forms/TrainingForm.vue";
  export default {
    name: "UserDashboardEditTraining",
    components: {
      TrainingForm
    }
  };
</script>
