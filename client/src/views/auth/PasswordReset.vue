<template>
    <b-container class="password-reset auth-container">
        <h2 class="text-center">{{ title }}</h2>
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
