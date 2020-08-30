<template>
    <div class="mfa-career">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <b-img
                class="border-radius2 mr-4 mb-4"
                left
                src="@/assets/KristinMaurach_sitzendAufMauer.png"
                style="width: 50vw; max-width: 250px"
            />
            <h2>
                Verliebt in meinen Beruf - Ein Karriereportal für medizinische
                Fachangestellte
            </h2>
            <p>
                MFA mal anders ist ein Karriereportal speziell für medizinische
                Fachangestellte, die sich beruflich wie persönlich
                weiterentwickeln wollen, um mehr aus ihrem Beruf und Leben raus
                zu holen.
            </p>
            <p>
                Hier findest du
                <b-link to="/jobboard">Stellenangebote</b-link>,
                <b-link to="/page/mfa-career/fort-und-weiterbildungen"
                    >Fort- und Weiterbildungsmöglichkeiten</b-link
                >,
                <b-link to="/page/magazin">Praxishacks</b-link>
                und Informationen zur persönlichen sowie beruflichen
                Weiterentwicklung.
            </p>
        </b-container>
        <Head
            :title="title"
            desc="Dein Karriereportal für medizinische Fachangestellte | Informationen über Karrieremöglichkeiten | Fortbildungen | Weiterbildungen"
            img=""
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "MFACareerHome",
        components: {
            Head
        },
        data() {
            return {
                title: "Karriere machen als MFA"
            };
        }
    };
</script>
