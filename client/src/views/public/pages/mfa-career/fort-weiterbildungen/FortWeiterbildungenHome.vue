<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <b-row>
                <b-col md="4" class="mb-4">
                    <FortWeiterbildungenNav />
                </b-col>
                <b-col>
                    <b-img
                        class="border-radius1 shadow mb-5"
                        fluid
                        src="@/assets/Weiterbildungsdschungel-Fragen-ueber-Fragen-1024x535.jpg"
                        alt="Banner - So viel verdienst Du wirklich"
                    />
                    <p>
                        Als medizinische Fachangestellte haben wir viele
                        Möglichkeiten uns zu qualifizieren und im Job
                        aufzusteigen oder sogar in anderen Bereichen des
                        Gesundheitswesens Fuß zu fassen. Nur leider ist der
                        Dschungel an Fort- und Weiterbildungen für medizinische
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
                        informieren, welche Möglichkeiten du als medizinische
                        Fachangestellte in und außerhalb der Arztpraxis hast.
                    </p>
                    <div class="d-flex justify-content-center">
                        <b-card
                            style="max-width: 600px"
                            title="Die richtige Weiterbildung für dich?!"
                            img-src="@/assets/Banner_In6SchrittenZurRichtigenWeiterbildung.jpg"
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
            :title="title"
            desc="Finde heraus, welche Möglichkeiten zur Weiterbildung du als medizinische Fachangestellte im Gesundheitswesen hast und starte erfolgreich durch."
            img="@/assets/Weiterbildungsdschungel-Fragen-ueber-Fragen-1024x535.jpg"
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import FortWeiterbildungenNav from "@/components/utils/FortWeiterbildungenNav.vue";
    import RandomTrainingsContainer from "@/components/utils/RandomTrainingsContainer.vue";

    export default {
        name: "FortWeiterbildungen",
        components: {
            Head,
            FortWeiterbildungenNav,
            RandomTrainingsContainer
        },
        data() {
            return {
                title: "Fort- und Weiterbildungen für MFA"
            };
        }
    };
</script>
