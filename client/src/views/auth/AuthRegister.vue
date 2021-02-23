<template>
    <b-container class="register auth-container">
        <b-button-group class="d-flex mb-4">
            <b-button
                @click="$router.push({ query: { role: 'employer' } })"
                :variant="
                    $route.query.role != 'employee'
                        ? 'primary'
                        : 'outline-primary'
                "
                >Ich bin Arbeitgeber</b-button
            >
            <b-button
                @click="$router.push({ query: { role: 'employee' } })"
                :variant="
                    $route.query.role === 'employee'
                        ? 'primary'
                        : 'outline-primary'
                "
                >Ich bin MFA / ZFA</b-button
            >
        </b-button-group>
        <h2 class="text-center mb-0">
            {{
                $route.query.role === "employee"
                    ? "Registrierung als MFA / ZFA"
                    : "Registrierung als Arbeitgeber"
            }}
        </h2>

        <div v-if="$route.query.role != 'employee'" class="mt-4">
            <p class="bold text-left text-md-center">
                Sie möchten eine Stellenanzeige bei uns schalten?
            </p>

            <b-row cols-md="3" class="d-none d-md-flex my-4 text-center">
                <b-col>
                    <div
                        class="icon-box mx-auto bg-primary rounded-circle"
                        style="width: 75px; height: 75px"
                    >
                        <Fa icon="user-plus" class="text-light m-0" size="2x" />
                    </div>
                    <h3 class="h6">Registrieren</h3>
                </b-col>
                <b-col>
                    <div
                        class="icon-box mx-auto bg-primary rounded-circle"
                        style="width: 75px; height: 75px"
                    >
                        <Fa
                            icon="drafting-compass"
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
                        <Fa
                            icon="paper-plane"
                            class="text-light m-0"
                            size="2x"
                        />
                    </div>
                    <h3 class="h6">Veröffentlichen</h3>
                </b-col>
            </b-row>
            <p class="">
                Registrieren Sie sich jetzt und veröffentlichen Sie noch heute
                Ihre Stellenanzeige!
            </p>
        </div>

        <RegisterForm />

        <Head
            :title="title"
            desc="Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige."
            img=""
        />
    </b-container>
</template>

<script>
    import RegisterForm from "@/components/forms/RegisterForm.vue";
    export default {
        name: "AuthRegister",
        components: {
            RegisterForm
        },
        data() {
            return {
                title: "Registrierung für Arbeitgeber"
            };
        }
    };
</script>
