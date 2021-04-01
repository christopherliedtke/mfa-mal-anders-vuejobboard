<template>
    <div class="jobs-berufsbilder-home">
        <div class="title">
            <h1>{{ title }}</h1>
            <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        </div>
        <b-container class="py-3 py-lg-5">
            <b-row>
                <b-col md="4" class="mb-4" order="2" order-md="1">
                    <JobsBerufsbilderNav />
                </b-col>
                <b-col class="mb-4" order="1" order-md="2">
                    <b-img
                        class="border-radius1 shadow1 mb-3 mb-lg-5"
                        fluid
                        src="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg"
                        alt="50+ Alternative Jobs für MFA / ZFA / ArtzhelferInnen"
                    />
                    <h2 class="bold">
                        Wo man als MFA / ZFA überall arbeiten kann?
                    </h2>
                    <p>
                        Sprechstundenhilfe sind wir schon lange nicht mehr. Als
                        Medizinische & Zahnmedizinische Fachangestellte (MFA /
                        ZFA) und ArzthelferIn sind wir Organisationstalente,
                        Medizinische Assistenten, SekretärInnen, Seelsorger,
                        Logistiker, Abrechnungsprofis und Aushängeschild der
                        gesamten Praxis. Du merkst schon: Die Aufgabenspektren
                        und Jobs für Medizinische & Zahnmedizinische
                        Fachangestellte und ArzthelferInnen sind wahnsinnig
                        vielfältig.
                    </p>
                    <p>
                        Weil wir so viele Kompetenzen mitbringen, sind MFAs
                        nicht nur in der Arztpraxis beliebt. Der Job bietet in
                        viele Richtungen des Gesundheitswesens verschiedene
                        Aufstiegsmöglichkeiten. Auch verschiedenste alternative
                        Jobs und Berufe mit der Ausbildung als Medizinische
                        Fachangestellte sind möglich.
                    </p>
                    <p>
                        Hast Du schon einmal gedacht:
                        <strong>"Ich will keine MFA mehr sein"</strong>? Willst
                        Du Deinem Job als Medizinische / Zahnmedizinische
                        Fachangestellte neuen Schwung geben, Dein Gehalt
                        aufbessern oder bist einfach auf der Suche nach
                        alternativen Jobs für Medizinische / Zahnmedizinische
                        Fachangestellte?
                    </p>
                    <p>
                        Wenn du nicht weißt, welche Türen dir offen stehen,
                        informiere Dich hier über Deine Chancen als
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
                                            <Fa
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
                                            `/karriere/jobs-und-berufsbilder/${card.slug}`
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
            desc="50+ Alternative Jobs / Berufe für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Stellenangebote | Fortbildungen | Weiterbildungen"
            img="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg"
            :script="snippet"
        />
    </div>
</template>

<script>
    import JobsBerufsbilderNav from "@/components/navs/JobsBerufsbilderNav.vue";
    import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
    import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
    export default {
        name: "CareerJobsBerufsbilderHome",
        components: {
            JobsBerufsbilderNav,
            RandomTrainingsContainer,
            ToJobboardBanner
        },
        data() {
            return {
                title: `50+ Alternative Jobs für ArzthelferInnen ${new Date().getFullYear()} – MFA & ZFA`,
                breadcrumbs: [
                    { text: "Home", to: "/" },
                    { text: "Karriere", to: "/karriere" },
                    {
                        text: "Jobs & Berufsbilder",
                        to: "/karriere/jobs-und-berufsbilder"
                    }
                ],
                cards: [
                    {
                        title: "Beratung",
                        slug: "beratung",
                        desc:
                            "Jobs, bei denen du aufgrund deines Expertenwissens andere Menschen berätst.",
                        icon: "comments"
                    },
                    {
                        title: "Forschung",
                        slug: "forschung",
                        desc:
                            "Jobs, bei denen du zum medizinischen Fortschritt beitragen kannst.",
                        icon: "flask"
                    },
                    {
                        title: "Management",
                        slug: "management",
                        desc:
                            "Jobs, bei denen du betriebswirtschaftliche Aufgaben und Personalverantwortung übernehmen kannst.",
                        icon: "briefcase"
                    },
                    {
                        title: "Medizinisch-Technisch",
                        slug: "medizinisch-technisch",
                        desc:
                            "Jobs, bei denen die medizinische Arbeit am bzw. mit dem Patienten im Mittelpunkt steht.",
                        icon: "stethoscope"
                    },
                    {
                        title: "Verwaltung",
                        slug: "verwaltung",
                        desc:
                            "Jobs, bei denen deine administrativen und organisatorischen Fähigkeiten gefragt sind.",
                        icon: "building"
                    }
                ],
                snippet: [
                    {
                        type: "application/ld+json",
                        inner: `{
                            "@context": "http://schema.org",
                            "@type" : "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "MFA mal anders",
                                "item": "https://www.mfa-mal-anders.de"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Karriere",
                                "item": "https://www.mfa-mal-anders.de/karriere"
                            },{
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Jobs und Berufsbilder",
                                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"
                            }]
                        }`
                    }
                ]
            };
        }
    };
</script>
