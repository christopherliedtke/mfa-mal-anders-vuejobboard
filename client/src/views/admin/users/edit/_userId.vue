<template>
  <b-container class="edit-user py-5">
    <h2>Nutzer bearbeiten</h2>
    <AccountDataForm api-users-schema="admin" />
  </b-container>
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
