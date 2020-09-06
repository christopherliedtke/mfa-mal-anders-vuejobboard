<template>
    <div class="jobs-berufsbilder-home">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <b-row>
                <b-col md="4" class="mb-4" order="2" order-md="1">
                    <JobsBerufsbilderNav />
                </b-col>
                <b-col class="mb-4" order="1" order-md="2">
                    <b-img
                        class="border-radius1 shadow mb-5"
                        fluid
                        src="@/assets/jobsUndBerufsbilder_1024x535.png"
                        alt="Banner - Alternative Jobs für MFA / Artzhelfer"
                    />
                    <h2>
                        Mal was anderes – mit MFA mal anders
                    </h2>
                    <p>
                        Sprechstundenhilfe sind wir schon lange nicht mehr. Als
                        MFA und Arzthelfer*in sind wir Organisationstalente,
                        medizinische Assistenten, Sekretär*innen, Seelsorger,
                        Logistiker, Abrechnungsprofis und Aushängeschild der
                        gesamten Praxis. Du merkst schon: Die Aufgabenspektren
                        und Jobs für medizinische Fachangestellte sind
                        wahnsinnig vielfältig.
                    </p>
                    <p>
                        Weil wir so viele Kompetenzen mitbringen, sind MFA nicht
                        nur in der Arztpraxis beliebt. Der Job bietet in viele
                        Richtungen des Gesundheitswesens verschiedene
                        Aufstiegsmöglichkeiten. Auch alternative Jobs mit der
                        Ausbildung als medizinische Fachangestellte sind
                        möglich.
                    </p>
                    <p>
                        Willst du deinem Job als medizinische Fachangestellte
                        neuen Schwung geben oder beispielsweise dein Gehalt
                        aufbessern? Wenn du nicht weißt, welche Türen dir offen
                        stehen, informiere dich hier über deine Chancen als
                        ausgebildete*r Arzthelfer*in. Ganz gleich, ob du den
                        direkten Patientenkontakt liebst, gerne organisatorische
                        Aufgaben erledigst oder dich lieber für einen
                        alternativen Job außerhalb der Arztpraxis interessierst.
                    </p>
                </b-col>
            </b-row>
            <RandomTrainingsContainer />
        </b-container>
        <Head
            :title="title"
            desc="Du brauchst Inspiration? – 52 Alternative Jobs für medizinische Fachangestellte (MFA) | Suche gleich nach passenden Stellen in unserer Jobbörse."
            img="@/assets/jobsUndBerufsbilder_1024x535.png"
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import JobsBerufsbilderNav from "@/components/utils/JobsBerufsbilderNav.vue";
    import RandomTrainingsContainer from "@/components/utils/RandomTrainingsContainer.vue";
    export default {
        name: "JobsBerufsbilderHome",
        components: {
            Head,
            JobsBerufsbilderNav,
            RandomTrainingsContainer
        },
        data() {
            return {
                title: "Jobs und Berufsbilder für medizinische Fachangestellte"
            };
        }
    };
</script>
