<template>
  <div class="edit-user container py-5">
    <h2>Nutzer bearbeiten</h2>
    <UserDataForm api-users-schema="admin" />
  </div>
</template>

<script>
  import UserDataForm from "@/components/UserDataForm.vue";
  export default {
    name: "AdminEditUser",
    components: {
      UserDataForm
    }
  };
</script>
