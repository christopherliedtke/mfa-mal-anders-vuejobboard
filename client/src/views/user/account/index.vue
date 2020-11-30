<template>
    <b-container class="dashboard py-5">
        <h2>Account</h2>
        <b-tabs content-class="mt-3">
            <b-tab title="Profil" active>
                <p>
                    Hier können Sie Ihre Profil-Daten ändern bzw. Ihren Account
                    löschen.
                </p>
                <AccountDataForm apiUsersSchema="private"/>
                <DeleteAccountButton
            /></b-tab>
        </b-tabs>

        <Head title="Account" desc="" img="" />
    </b-container>
</template>

<script>
    import DeleteAccountButton from "@/components/buttons/DeleteAccountButton.vue";
    import AccountDataForm from "@/components/forms/AccountDataForm.vue";
    export default {
        name: "UserAccount",
        components: {
            DeleteAccountButton,
            AccountDataForm
        }
    };
</script>
