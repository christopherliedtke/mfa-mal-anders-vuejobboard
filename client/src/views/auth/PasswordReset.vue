<template>
    <b-container class="password-reset py-5 position-relative">
        <h2>{{ title }}</h2>
        <PasswordResetForm />
    </b-container>
</template>

<script>
    import PasswordResetForm from "@/components/auth/PasswordResetForm.vue";
    export default {
        name: "PasswordReset",
        components: {
            PasswordResetForm
        },
        data() {
            return {
                title: "Passwort zurücksetzen"
            };
        }
    };
</script>

<style scoped lang="scss">
    .password-reset {
        &.container {
            width: 90%;
            max-width: 450px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
    }
</style>
