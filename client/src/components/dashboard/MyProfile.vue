<template>
    <div>
        <h3>Mein Profil</h3>
        <p>
            Hier können Sie Ihre Profil-Daten ändern bzw. Ihren Account löschen.
        </p>
        <AccountDataForm apiUsersSchema="private" />
        <DeleteAccountButton />
    </div>
</template>

<script>
    import DeleteAccountButton from "@/components/buttons/DeleteAccountButton.vue";
    import AccountDataForm from "@/components/forms/AccountDataForm.vue";
    export default {
        name: "MyProfile",
        components: {
            DeleteAccountButton,
            AccountDataForm
        }
    };
</script>
