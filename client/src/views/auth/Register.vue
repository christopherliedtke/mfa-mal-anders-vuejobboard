<template>
    <b-container class="register auth-container">
        <h2 class="text-center mb-4">{{ title }}</h2>
        <p class="bold">
            Sie möchten eine Stellenanzeige bei uns schalten?
        </p>
        <p>
            Dann registrieren Sie sich jetzt und starten Sie direkt mit der
            Veröffentlichung Ihrer ersten Anzeige.
        </p>
        <RegisterForm />

        <Head
            :title="title"
            desc="Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige."
            img=""
        />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import RegisterForm from "@/components/auth/RegisterForm.vue";
    export default {
        name: "Register",
        components: {
            Head,
            RegisterForm
        },
        data() {
            return {
                title: "Registrieren als Arbeitgeber"
            };
        }
    };
</script>
