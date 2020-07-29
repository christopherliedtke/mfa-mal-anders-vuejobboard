<template>
    <b-container class="edit-job py-5">
        <h2>Edit Job</h2>
        <AccountDataForm apiUsersSchema="admin" />
    </b-container>
</template>

<script>
    import AccountDataForm from "@/components/account/AccountDataForm.vue";
    export default {
        name: "AdminEditUserView",
        components: {
            AccountDataForm
        }
    };
</script>

<style scoped lang="scss"></style>
