<template>
  <div class="edit-training container py-3 py-lg-5">
    <h2>
      Fortbildung
      {{ $route.params.trainingId === "new" ? "erstellen" : "bearbeiten" }}
    </h2>
    <p>Bearbeiten Sie hier Ihre Fortbildung.</p>
    <TrainingDataForm />
  </div>
</template>

<script>
  import TrainingDataForm from "@/components/TrainingDataForm.vue";
  export default {
    name: "UserEditTraining",
    components: {
      TrainingDataForm
    }
  };
</script>
