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
                        src="@/assets/jobsUndBerufsbilder_1200x627.jpg"
                        alt="50+ Alternative Jobs für MFA / ArtzhelferInnen"
                    />
                    <h2 class="bold">
                        Wo man als MFA überall arbeiten kann?
                    </h2>
                    <p>
                        Sprechstundenhilfe sind wir schon lange nicht mehr. Als
                        medizinische Fachangestellte (MFA) und ArzthelferIn sind
                        wir Organisationstalente, medizinische Assistenten,
                        SekretärInnen, Seelsorger, Logistiker, Abrechnungsprofis
                        und Aushängeschild der gesamten Praxis. Du merkst schon:
                        Die Aufgabenspektren und Jobs für medizinische
                        Fachangestellte und ArzthelferInnen sind wahnsinnig
                        vielfältig.
                    </p>
                    <p>
                        Weil wir so viele Kompetenzen mitbringen, sind MFAs
                        nicht nur in der Arztpraxis beliebt. Der Job bietet in
                        viele Richtungen des Gesundheitswesens verschiedene
                        Aufstiegsmöglichkeiten. Auch verschiedenste alternative
                        Jobs und Berufe mit der Ausbildung als medizinische
                        Fachangestellte sind möglich.
                    </p>
                    <p>
                        Willst Du Deinem Job als medizinische Fachangestellte
                        neuen Schwung geben oder beispielsweise Dein Gehalt
                        aufbessern? Wenn du nicht weißt, welche Türen dir offen
                        stehen, informiere Dich hier über Deine Chancen als
                        ausgebildete/r ArzthelferIn. Ganz gleich, ob Du den
                        direkten Patientenkontakt liebst, gerne organisatorische
                        Aufgaben erledigst oder Dich lieber für einen
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
                            <b-card align="center icon-box shadow1 p-0">
                                <b-card-body>
                                    <div class="d-flex justify-content-center">
                                        <div class="icon-box2 shadow1">
                                            <font-awesome-icon
                                                :icon="['fa', card.icon]"
                                                size="3x"
                                            />
                                        </div>
                                    </div>
                                    <b-card-title
                                        :title="card.title"
                                        class="bold"
                                    />
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
            desc="Du brauchst Inspiration? – 50+ Alternative Jobs / Berufe für medizinische Fachangestellte (MFA) und ArzthelferInnen | Finde passende Stellen..."
            img="@/assets/jobsUndBerufsbilder_1200x627.jpg"
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
                title: "50+ Alternative Jobs für medizinische Fachangestellte",
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
