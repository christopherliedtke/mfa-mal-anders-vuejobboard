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
                        MFA und ArzthelferIn sind wir Organisationstalente,
                        medizinische Assistenten, SekretärInnen, Seelsorger,
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
                        ausgebildeter ArzthelferIn. Ganz gleich, ob du den
                        direkten Patientenkontakt liebst, gerne organisatorische
                        Aufgaben erledigst oder dich lieber für einen
                        alternativen Job außerhalb der Arztpraxis interessierst.
                    </p>
                    <b-row>
                        <b-col
                            class="my-3"
                            v-for="card in cards"
                            :key="card.title"
                            cols="12"
                            md="6"
                        >
                            <b-card align="center">
                                <b-card-body>
                                    <div class="d-flex justify-content-center">
                                        <div class="icon-box2">
                                            <font-awesome-icon
                                                :icon="['fa', card.icon]"
                                                size="3x"
                                            />
                                        </div>
                                    </div>
                                    <b-card-title :title="card.title" />
                                    <b-card-text>
                                        <p>
                                            {{ card.desc }}
                                        </p>
                                    </b-card-text>
                                    <b-button
                                        :to="
                                            `/page/mfa-career/jobs-und-berufsbilder/${card.title}`
                                        "
                                        variant="primary"
                                        >Mehr</b-button
                                    >
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                    <ToJobboardBanner />
                </b-col>
            </b-row>
            <RandomTrainingsContainer class="mt-5" />
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
    import ToJobboardBanner from "@/components/utils/ToJobboardBanner.vue";
    export default {
        name: "JobsBerufsbilderHome",
        components: {
            Head,
            JobsBerufsbilderNav,
            RandomTrainingsContainer,
            ToJobboardBanner
        },
        data() {
            return {
                title: "Jobs und Berufsbilder für medizinische Fachangestellte",
                cards: [
                    {
                        title: "Beratung",
                        desc:
                            "Jobs, bei denen du aufgrund deines Expertenwissens andere Menschen berätst.",
                        icon: "comments"
                    },
                    {
                        title: "Forschung",
                        desc:
                            "Jobs, bei denen du zum medizinischen Fortschritt beitragen kannst.",
                        icon: "flask"
                    },
                    {
                        title: "Management",
                        desc:
                            "Jobs, bei denen du betriebswirtschaftliche Aufgaben und Personalverantwortung übernehmen kannst.",
                        icon: "briefcase"
                    },
                    {
                        title: "Medizinisch-Technisch",
                        desc:
                            "Jobs, bei denen die medizinische Arbeit am bzw. mit dem Patienten im Mittelpunkt steht.",
                        icon: "stethoscope"
                    },
                    {
                        title: "Verwaltung",
                        desc:
                            "Jobs, bei denen deine administrativen und organisatorischen Fähigkeiten gefragt sind.",
                        icon: "building"
                    }
                ]
            };
        }
    };
</script>
