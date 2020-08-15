<template>
    <b-container class="dashboard py-5">
        <h2>Account</h2>
        <b-tabs content-class="mt-3">
            <b-tab title="Profil" active>
                <AccountDataForm apiUsersSchema="private"/>
                <DeleteAccountButton
            /></b-tab>
        </b-tabs>

        <Head title="Account" desc="" img="" />
    </b-container>
</template>

<script>
    import DeleteAccountButton from "@/components/account/DeleteAccountButton.vue";
    import AccountDataForm from "@/components/account/AccountDataForm.vue";
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Account",
        components: {
            DeleteAccountButton,
            AccountDataForm,
            Head
        }
    };
</script>
