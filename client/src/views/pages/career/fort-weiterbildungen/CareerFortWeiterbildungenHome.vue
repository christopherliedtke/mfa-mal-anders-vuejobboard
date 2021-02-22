<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-3 py-lg-5">
            <b-row>
                <b-col md="4" class="mb-4">
                    <FortWeiterbildungenNav />
                </b-col>
                <b-col>
                    <b-img
                        class="border-radius1 shadow1 mb-3 mb-lg-5"
                        fluid
                        src="/img/Banner_Weiterbildungsdschungel_1200.jpg"
                        alt="Banner - So viel verdienst Du wirklich"
                    />
                    <p>
                        Als Medizinische Fachangestellte haben wir viele
                        Möglichkeiten uns zu qualifizieren und im Job
                        aufzusteigen oder sogar in anderen Bereichen des
                        Gesundheitswesens Fuß zu fassen. Nur leider ist der
                        Dschungel an Fort- und Weiterbildungen für Medizinische
                        Fachangestellte so stark bewachsen und undurchdringlich,
                        dass es nicht leicht fällt, den Durchblick zu behalten.
                    </p>
                    <p>
                        MFA mal anders bietet dir die Informationen, die du
                        brauchst. Und das komprimiert und zusammengefasst auf
                        einer Seite. Ohne, dass du dich endlos durchs Internet
                        klicken musst, um einen Überblick über deine Chancen zu
                        bekommen.
                    </p>
                    <p>
                        Ob
                        <b-link
                            to="/article/fortbildung-weiterbildung-oder-studium"
                            >Fortbildung, Weiterbildung oder Studium für
                            MFA</b-link
                        >, finde deinen richtigen Weg.
                    </p>
                    <p>
                        In der Rubrik "Fort- und Weiterbildungen" kannst du dich
                        informieren, welche Möglichkeiten du als Medizinische
                        Fachangestellte in und außerhalb der Arztpraxis hast.
                    </p>
                    <div class="d-flex justify-content-center">
                        <b-card
                            style="max-width: 600px"
                            title="Die richtige Weiterbildung für dich?!"
                            img-src="@/assets/img/Banner_In6SchrittenZurRichtigenWeiterbildung_1200.jpg"
                            img-alt="Banner - In 6 Schritten zur richtigen Weiterbildung für MFA und ArzthelferIn"
                            img-top
                            align="center"
                            class="my-5"
                        >
                            <b-card-text>
                                Hier findest du eine kleine Anleitung, wie du
                                Schritt für Schritt vorgehen kannst.
                            </b-card-text>

                            <b-button
                                to="/page/mfa-career/jobs-und-berufsbilder"
                                variant="primary"
                                >Los geht's!</b-button
                            >
                        </b-card>
                    </div>
                    <p>
                        Wir beschreiben anerkannte Fortbildungen der
                        Ärztekammer, zertifizierte Weiterbildungen, Lehrgänge,
                        Studiengänge und andere Weiterentwicklungsmöglichkeiten
                        für MFA. Die Eckdaten wie Kosten, Dauer, Inhalte und
                        Lernkonzepte werden für dich übersichtlich und
                        verständlich dargestellt. Daneben zeigen wir dir vor
                        allem auch, was du mit welchem Abschluss anschließend
                        anfangen kannst. Und natürlich auch wo. Das
                        Gesundheitswesen bietet dir zahlreiche Karrierewege.
                    </p>
                    <p>
                        Die Liste ist noch lange nicht vollständig. Nach und
                        nach erstellen wir für dich eine grandiose Übersicht
                        über deine Karrieremöglichkeiten in- und außerhalb der
                        Arztpraxis zusammenstellen.
                    </p>
                    <p>Also bleib dran!</p>
                    <p>
                        PS: Wenn du interessiert an einer bestimmten
                        Weiterbildung für MFA bist, die wir noch nicht
                        aufgeführt haben, schreib uns doch. Oder vielleicht hast
                        du schon eine Fortbildung gemacht von der deine
                        Kolleginnen unbedingt wissen sollten?!
                    </p>
                    <p>
                        Wir freuen uns über
                        <b-link to="/page/contact">eure Nachrichten</b-link>.
                    </p>
                </b-col>
            </b-row>
            <RandomTrainingsContainer class="mt-5" />
        </b-container>
        <Head
            title="Fort- und Weiterbildung für MFA / ArzthelferIn"
            desc="Fortbildungen und Weiterbildunger für Medizinische Fachangestellte (MFA) / ArzthelferInnen im Gesundheitswesen || Karriere | Gehalt | Stellenangebote"
            img="/img/Banner_Weiterbildungsdschungel_1200.jpg"
            :script="snippet"
        />
    </div>
</template>

<script>
    import FortWeiterbildungenNav from "@/components/navs/FortWeiterbildungenNav.vue";
    import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";

    export default {
        name: "CareerFortWeiterbildungen",
        components: {
            FortWeiterbildungenNav,
            RandomTrainingsContainer
        },
        data() {
            return {
                title: "Fort- und Weiterbildungen für MFA",
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
                                "name": "MFA Karriere",
                                "item": "https://www.mfa-mal-anders.de/page/mfa-career"
                            },{
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Fort- und Weiterbildungen",
                                "item": "https://www.mfa-mal-anders.de/page/mfa-career/fort-und-weiterbildungen"
                            }]
                        }`
                    }
                ]
            };
        }
    };
</script>
