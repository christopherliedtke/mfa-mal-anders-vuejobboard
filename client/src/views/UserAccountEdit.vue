<template>
  <div class="dashboard container py-3 py-lg-5">
    <NavUser class="mb-3" />

    <h3>Mein Account</h3>
    <p>
      Hier können Sie Ihre Account-Daten ändern bzw. Ihren Account löschen.
    </p>
    <UserDataForm api-users-schema="private" />
    <UserDeleteButton />

    <Head title="Mein Account" desc="" img="" />
  </div>
</template>

<script>
  import UserDeleteButton from "@/components/UserDeleteButton.vue";
  import UserDataForm from "@/components/UserDataForm.vue";
  import NavUser from "@/components/NavUser.vue";
  export default {
    name: "UserAccountEdit",
    components: {
      UserDeleteButton,
      UserDataForm,
      NavUser
    }
  };
</script>
