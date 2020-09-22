<template>
    <b-container class="register auth-container">
        <h2 class="text-center mb-4">{{ title }}</h2>
        <p class="bold text-left text-md-center">
            Sie möchten eine Stellenanzeige bei uns schalten?
        </p>

        <b-row cols-md="3" class="d-none d-md-flex my-4 text-center">
            <b-col>
                <div
                    class="icon-box mx-auto bg-primary rounded-circle"
                    style="width: 75px; height: 75px"
                >
                    <font-awesome-icon
                        :icon="['fa', 'user-plus']"
                        class="text-light m-0"
                        size="2x"
                    />
                </div>
                <h3 class="h6">Registrieren</h3>
            </b-col>
            <b-col>
                <div
                    class="icon-box mx-auto bg-primary rounded-circle"
                    style="width: 75px; height: 75px"
                >
                    <font-awesome-icon
                        :icon="['fa', 'drafting-compass']"
                        class="text-light m-0"
                        size="2x"
                    />
                </div>
                <h3 class="h6">Stellenanzeige erstellen</h3>
            </b-col>
            <b-col>
                <div
                    class="icon-box mx-auto bg-primary rounded-circle"
                    style="width: 75px; height: 75px"
                >
                    <font-awesome-icon
                        :icon="['fa', 'paper-plane']"
                        class="text-light m-0"
                        size="2x"
                    />
                </div>
                <h3 class="h6">Veröffentlichen</h3>
            </b-col>
        </b-row>
        <p class="">
            Registrieren Sie sich jetzt und veröffentlichen Sie noch heute Ihre
            Stellenanzeige!
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
                title: "Registrierung für Arbeitgeber"
            };
        }
    };
</script>
