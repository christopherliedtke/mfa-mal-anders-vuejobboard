<template>
    <div class="mfa-career">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-3 py-lg-5">
            <h2 class="mb-4">
                Verliebt in meinen Beruf - Dein Karriereportal für Medizinische
                / Zahnmedizinische Fachangestellte
            </h2>
            <b-img
                class="border-radius2 mb-4 mr-4"
                left
                src="@/assets/img/KristinMaurach_sitzendAufMauer_500.jpg"
                style="width: 40vw; max-width: 250px"
            />
            <p>
                MFA mal anders ist ein Karriereportal speziell für Medizinische
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
                <b-link :to="`/page/${$config.cms.postsPath}`"
                    >Praxishacks</b-link
                >
                und Informationen zur persönlichen sowie beruflichen
                Weiterentwicklung.
            </p>
            <blockquote class="d-inline-block">
                Unser Ziel: Den Beruf der MFA / ZFA stärken und wieder
                attraktiver machen!
            </blockquote>
            <h3 class="h5 bold">
                Unsere Stellenangebote findest du über verschiedene Wege. Wir
                freuen uns, wenn du einen unserer Kanäle abonnierst.
            </h3>
            <br />
            <b-row class="mb-4">
                <b-col cols="12" md="4">
                    <b-link to="/jobboard" class="icon-box shadow1 py-4 px-3">
                        <Fa
                            class="mr-1"
                            :icon="['fa', 'newspaper']"
                            size="3x"
                        />
                        <h4 class="h5 bold">Stellenangebote</h4>
                        <p>
                            Entdecke täglich neue Stellenangebote und finde das
                            richtige für Dich
                        </p>
                    </b-link>
                </b-col>
                <b-col cols="12" md="4">
                    <div
                        class="icon-box shadow1 py-4 px-3"
                        @click="$bvModal.show('newsletter')"
                        style="cursor: pointer"
                    >
                        <Fa
                            class="mr-1"
                            :icon="['fa', 'envelope-open-text']"
                            size="3x"
                        />
                        <h4 class="h5 bold">Newsletter</h4>
                        <p>
                            Mit unserem wöchentlichen Job Newsletter keine
                            Stellen in Deiner Region verpassen
                        </p>
                    </div>
                    <b-modal centered hide.header hide-footer id="newsletter">
                        <NewsletterSignUpForm class="p-4" />
                    </b-modal>
                </b-col>
                <b-col cols="12" md="4">
                    <b-link
                        :href="`https://www.facebook.com/${$config.fb.path}`"
                        class="icon-box shadow1 py-4 px-3"
                    >
                        <Fa
                            class="mr-1"
                            :icon="['fab', 'facebook-square']"
                            size="3x"
                        />
                        <h4 class="h5 bold">Facebook</h4>
                        <p>
                            Bleibe über Facebook auf dem Laufenden über alle
                            Neuigkeiten auf der Seite
                        </p>
                    </b-link>
                </b-col>
            </b-row>
            <h2 class="my-4">
                Wir helfen dir bei der Suche nach deinem Traumjob
            </h2>
            <b-row>
                <b-col cols="12" md="6">
                    <p>
                        Auf MFA mal anders berichte ich über
                        Aufstiegsmöglichkeiten in der Arztpraxis, aber auch über
                        Karrierechancen, die du als Medizinische Fachangestellte
                        außerhalb der Praxis hast.
                    </p>
                    <p>
                        Gerade Berufe im Gesundheitswesen sind meist kein
                        Zuckerschlecken. Ganz im Gegenteil – sie sind verdammt
                        anstrengend, oftmals schlecht bezahlt und mit
                        familienunfreundlichen Arbeitszeiten. Aber sie sind auch
                        sehr erfüllend. Deswegen machen wir diese Jobs doch,
                        oder?! Immer dieses Helfersyndrom – Fluch und Segen
                        zugleich.
                    </p>
                    <p>
                        Trotzdem, es gibt auch Wege und Möglichkeiten mehr aus
                        dem Beruf der medizinischen Fachangestellten zu machen
                        und wieder glücklicher und zufriedener im Arbeitsalltag
                        zu sein.
                    </p>
                </b-col>
                <b-col cols="12" md="6">
                    <p>
                        MFA mal anders ist ein Netzwerk unter Gleichgesinnten.
                        Um deinen beruflichen Weg im Gesundheitswesen zu finden
                        und erfolgreich deine Ziele zu erreichen. Mit Fachwissen
                        und persönlichen Erfahrungen stehen wir dir zur Seite
                        und unterstützen dich – egal, ob es darum geht für dich
                        die passende Fort- oder Weiterbildung zu finden, einen
                        neuen Job zu finden, deine Gehaltswünsche durchzusetzen
                        oder einfach nur durch den Praxisalltagswahnsinn zu
                        helfen.
                    </p>
                </b-col>
            </b-row>
            <h2 class="my-4">
                Wir helfen dir dabei einen Job zu finden, den du liebst. Und den
                du verdienst.
            </h2>

            <p>
                Viele Praxen haben zum Glück erkannt, dass ohne uns MFAs / ZFAs
                nichts läuft. Und das zeigen die Chefs in einem wertschätzenden
                Umgang, familienfreundlichen Arbeitsbedingungen und einer guten
                Bezahlung. In der Regel trennt sich die Spreu vom Weizen von
                ganz allein. Wir sind trotzdem sehr bemüht, bei den
                veröffentlichten Stellenanzeigen auf unserer Plattform einen
                besonderen Augenmerk auf bestimmte Kriterien zu legen:
            </p>
            <ul>
                <li>Leistungsgerechte Bezahlung</li>
                <li>
                    Tätigkeiten, die du mit einer Ausbildung zur medizinischen
                    Fachangestellten bzw. ArzthelferIn ausüben kannst – auch
                    wenn der ausgeschriebene Job nicht immer der typische
                    MFA-Job ist
                </li>
                <li>
                    Unbefristete Stellen oder befristete Stellen mit Aussicht
                    auf Übernahme
                </li>
                <li>
                    Keine Jobs über Zeitarbeitsfirmen oder Personaldienstleiter
                </li>
            </ul>
            <div class="d-flex justify-content-center my-5">
                <ToJobboardBanner />
            </div>
            <h2 class="my-4">Bock auf Veränderung?</h2>
            <p>
                Als MFA / ZFA hast du einen anspruchsvollen Job in der
                Arztpraxis. Es gibt aber auch viele Karrierechancen darüber
                hinaus.
            </p>
            <p>
                Durch deine Ausbildung als MFA / ZFA und mit wachsender
                Berufserfahrung hast du dir eine Vielzahl an Fähigkeiten und
                Kompetenzen angeeignet.
            </p>
            <p>
                Du bist Organisationstalent, hast medizinisches Wissen, bist
                Profi im Office Management, Assistenz des Arztes bei
                chirurgischen Eingriffen, hast Abrechnungskenntnisse und weißt,
                wie man professionell mit Patienten- bzw. Kunden umgeht. Und
                dies sind nur ein Paar deiner Eigenschaften, die dich zu einer
                begehrten Fachkraft machen. Auch bei Arbeitgebern außerhalb der
                Arztpraxis.
            </p>
            <p>
                Das kann z.B. als Sachbearbeiter, Office Manager oder
                Vertriebler in einem Unternehmen, das dem Gesundheitswesen
                angehört, sein.
            </p>
            <p>
                Auf Mfa mal anders findest du deshalb auch viele alternative
                Jobmöglichkeiten, die du mit deinen Kenntnissen und Fähigkeiten
                als Medizinische Fachangestellte ausüben kannst.
            </p>
            <p>
                Vielleicht möchtest du dich aber auch in deiner Fachrichtung
                spezialisieren? Finde eine
                <b-link to="/page/mfa-career/fort-und-weiterbildungen"
                    >Weiterbildung</b-link
                >, die zu dir und deinen Karrierezielen passt.
            </p>
            <b-row class="my-5">
                <b-col class="my-2">
                    <WeiterbildungenBanner />
                </b-col>
                <b-col class="my-2">
                    <BerufsbilderBanner />
                </b-col>
            </b-row>
            <h2 class="my-4">MFAs sind vernetzt und halten zusammen</h2>
            <p>
                Um unseren Beruf zu stärken und weiter voran zu bringen, müssen
                wir zusammenhalten.
            </p>
            <p>
                Jobs, die schlecht bezahlt werden, sollten wir nicht annehmen.
            </p>
            <p>
                Chefs, die unsere Arbeit nicht wertschätzen, sollen wir die
                Augen öffnen und auf den richtigen Kurs bringen.
            </p>
            <p>
                Man muss bedenken, dass Ärzte nun mal nicht Personalführung
                studiert haben. Manchen fehlt hier das richtige
                Fingerspitzengefühl und wahrscheinlich “vergessen” einige neben
                der Patientenversorgung, Abrechnung, dem Zeitdruck etc. einen
                wertschätzenden Umgang mit ihren “Praxisperlen”.
            </p>
            <p>
                Mfa mal anders unterstützt Praxen bei der Suche nach neuem
                Personal. Dabei sensibilisieren wir die Praxisinhaber stets für
                ein positives Arbeitsklima und Mitarbeiterförderung- führung und
                – entwicklung. Das bringt nicht nur dem Chef was, sondern der
                gesamten Praxis und die Personalsuche erleichert sich ebenfalls.
            </p>
            <p>
                Wenn du auf der Suche nach einer tollen Praxis bist, schau
                regelmäßig auf unserer
                <b-link to="/jobboard">Stellenbörse</b-link> vorbei.
            </p>
            <p>
                Wenn du schon in einer tollen Praxis arbeitest und ihr neue
                Kollegen sucht, kannst du
                <b-link to="/page/fuer-arbeitgeber">hier</b-link>
                eure Stellenanzeige veröffentlichen.
            </p>
            <p>
                Wenn du bereit bist, deiner Karriere als Medizinische
                Fachangestellte neuen Aufschwung zu geben, reiche ich dir die
                Hand und begleite dich auf deinem Weg.
            </p>
            <p>
                Ich freue mich über jedes Feedback und da MFA mal anders eine
                Bereicherung für dich sein soll, kannst du mir gerne jederzeit
                Themen nennen, die dich aktuell beschäftigen und über die hier
                berichtet werden soll.
            </p>
            <p>Ich freue mich auf dich!</p>
            <p>Deine Kristin</p>
            <div class="mt-5">
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
        </b-container>
        <Head
            :title="title"
            desc="Karriereportal für Medizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Jobperspektiven | Fortbildungen | Weiterbildungen | Gehalt | Bewerbung"
            img=""
            :script="snippet"
        />
    </div>
</template>

<script>
    import NewsletterSignUpForm from "@/components/forms/NewsletterSignUpForm.vue";
    import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
    import WeiterbildungenBanner from "@/components/banners/WeiterbildungenBanner.vue";
    import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
    export default {
        name: "CareerHome",
        components: {
            NewsletterSignUpForm,
            ToJobboardBanner,
            WeiterbildungenBanner,
            BerufsbilderBanner
        },
        data() {
            return {
                title: "Karriere machen als MFA / ZFA",
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
                                "name": "MFA / ZFA Karriere",
                                "item": "https://www.mfa-mal-anders.de/page/mfa-career"
                            }]
                        }`
                    }
                ]
            };
        }
    };
</script>
