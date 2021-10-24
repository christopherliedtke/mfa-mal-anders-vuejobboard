<template>
  <div class="edit-user container py-5">
    <h2>Nutzer bearbeiten</h2>
    <AccountDataForm api-users-schema="admin" />
  </div>
</template>

<script>
  import AccountDataForm from "@/components/forms/AccountDataForm.vue";
  export default {
    name: "AdminEditUser",
    components: {
      AccountDataForm
    }
  };
</script>
