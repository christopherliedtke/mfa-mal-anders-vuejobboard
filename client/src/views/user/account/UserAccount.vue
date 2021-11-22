<template>
  <div class="dashboard container py-3 py-lg-5">
    <UserNav class="mb-3" />

    <h3>Mein Account</h3>
    <p>
      Hier können Sie Ihre Account-Daten ändern bzw. Ihren Account löschen.
    </p>
    <AccountDataForm api-users-schema="private" />
    <DeleteAccountButton />

    <Head title="Mein Account" desc="" img="" />
  </div>
</template>

<script>
  import DeleteAccountButton from "@/components/buttons/DeleteAccountButton.vue";
  import AccountDataForm from "@/components/forms/AccountDataForm.vue";
  import UserNav from "@/components/navs/UserNav.vue";
  export default {
    name: "MyAccount",
    components: {
      DeleteAccountButton,
      AccountDataForm,
      UserNav
    }
  };
</script>
