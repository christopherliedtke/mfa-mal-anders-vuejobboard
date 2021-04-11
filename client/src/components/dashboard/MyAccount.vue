<template>
  <div>
    <h3>Mein Account</h3>
    <p>
      Hier können Sie Ihre Account-Daten ändern bzw. Ihren Account löschen.
    </p>
    <AccountDataForm api-users-schema="private" />
    <DeleteAccountButton />
  </div>
</template>

<script>
  import DeleteAccountButton from "@/components/buttons/DeleteAccountButton.vue";
  import AccountDataForm from "@/components/forms/AccountDataForm.vue";
  export default {
    name: "MyAccount",
    components: {
      DeleteAccountButton,
      AccountDataForm
    }
  };
</script>
