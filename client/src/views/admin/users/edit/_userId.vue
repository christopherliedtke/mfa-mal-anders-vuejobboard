<template>
    <b-container class="edit-job py-5">
        <h2>Nutzer bearbeiten</h2>
        <AccountDataForm apiUsersSchema="admin" />
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
