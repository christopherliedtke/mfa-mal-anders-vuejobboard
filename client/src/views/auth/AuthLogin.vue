<template>
    <b-container class="login auth-container">
        <h2 class="text-center">{{ title }}</h2>
        <LoginForm />

        <Head :title="title" desc="Anmelden bei MFA mal anders" img="" />
    </b-container>
</template>

<script>
    import LoginForm from "@/components/forms/LoginForm.vue";
    export default {
        name: "AuthLogin",
        components: { LoginForm },
        data() {
            return {
                title: "Anmeldung"
            };
        }
    };
</script>
