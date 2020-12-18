<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="privacy-policy py-5">
            <b-row>
                <b-col cols="12" md="3" order="2" order-md="1">
                    <b-img
                        class="border-radius2 my-3 p-3 p-md-0 my-md-0"
                        fluid
                        src="@/assets/img/KristinMaurach_portrait_800.jpg"
                        alt="Portrait Kristin Maurach"
                    />
                </b-col>
                <b-col order="1" order-md="2">
                    <p class="lead bold mb-4">
                        MFA mal anders ist ein Karriereportal für Medizinische
                        Fachangestellte sowie auf die professionelle
                        Personalsuche für Arztpraxen und Medizinische
                        Versorgungszentren spezialisiert.
                    </p>
                    <p>
                        Als Praxismanagerin mit Führungsverantwortung, als
                        Assistentin des Ärztlichen Direktors, als Referentin in
                        der Qualitätssicherung sowie im Personalbereich als
                        Recruiterin und HR Managerin. In allen meinen
                        beruflichen Stationen gab es immer ein gemeinsames
                        Problem: unterschiedliche Sichtweisen von Arbeitgeber
                        und Mitarbeitern, Konflikte im Team, Personalmangel.
                    </p>
                    <p>
                        Das ist der Grund, weshalb ich mich von meinem
                        ursprünglich erlernten Beruf als ArzthelferIn entfernt
                        und mich mehr und mehr auf das Thema Personalführung und
                        Human Ressources spezialisiert habe.
                    </p>
                    <p>
                        Es ist mir eine Herzensangelegenheit Arbeitgeber und
                        Arbeitnehmer zusammenzubringen.
                    </p>
                </b-col>
            </b-row>
            <div>
                <blockquote>
                    MFA mal anders hat die Mission, Medizinische Fachangestellte
                    und Arztpraxen erfolgreich zusammen zu bringen.
                </blockquote>
                <p>
                    Jobsuchende MFAs finden bei uns eine große Auswahl an freien
                    Stellen in Arztpraxen und MVZs. Den Arbeitgebern bieten wir
                    eine kostengünstige Möglichkeit ihre Stellenanzeige effektiv
                    an ihre Zielgruppe auszuspielen.
                </p>
                <h2>
                    Mein Arbeitsstil
                </h2>
                <p>
                    …ist in erster Linie ein menschlicher. Im Human Ressource
                    Bereich arbeite ich täglich mit Menschen, ihren Emotionen,
                    Wünschen und Ängsten. Daher spielen in meiner täglichen
                    Arbeit Werte wie Respekt und Wertschätzung genauso eine
                    wichtige Rolle wie Verlässlichkeit, Ehrgeiz und Anspruch.
                    Grundlage dafür sind meine Berufs- und Lebenserfahrung,
                    ständige Weiterbildung sowie meine unternehmerische
                    Denkweise.
                </p>
                <p>
                    Vor diesem Hintergrund habe ich das Angebot von MFA mal
                    anders geschaffen und entwickle dieses kontinuierlich
                    weiter!
                </p>
                <p class="h5 my-5">Kristin Maurach</p>
                <div class="mt-3">
                    <b-link class="mr-3" to="/page/contact">
                        <Fa class="mr-1" :icon="['fab', 'wpforms']" />
                        Kontaktformular
                    </b-link>
                    <b-link
                        class="mr-3"
                        :href="`mailto:${$config.website.contactEmail}`"
                    >
                        <Fa class="mr-1" :icon="['fa', 'envelope']" />
                        {{ $config.website.contactEmail }}
                    </b-link>
                </div>
            </div>
        </b-container>
        <Head
            :title="title"
            desc="MFA mal anders ist ein Job- und Karriereportal für MFA / ArzthelferInnen sowie auf die Personalsuche für Arztpraxen und MVZs spezialisiert."
            img=""
            :script="snippet"
        />
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                title: "Über MFA mal anders",
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
                                "name": "Über MFA mal anders",
                                "item": "https://www.mfa-mal-anders.de/page/about"
                            }]
                        }`
                    }
                ]
            };
        }
    };
</script>
