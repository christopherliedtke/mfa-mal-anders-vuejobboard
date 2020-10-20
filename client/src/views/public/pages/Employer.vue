<template>
    <div class="employer">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5 px-md-5">
            <b-row
                class="bg-primary text-light border-radius2 shadow1 w-100 p-3 p-md-5 mx-auto position-relative"
            >
                <div class="bg-logo"></div>
                <b-col cols="12" md="6">
                    <h2 class="h1 bold mb-4">
                        <em>Motivierte</em> und <em>qualifizierte</em> MFAs und
                        ArzthelferInnen gesucht?
                    </h2>
                    <p>
                        Erstellen Sie noch heute Ihre Stellenanzeige und
                        erreichen Sie unsere große Community von MFAs! Mit
                        unserem
                        <b-link class="text-secondary" href="#pay-what-you-want"
                            >“Pay What You Want”*</b-link
                        >
                        Modell bestimmen Sie, wie viel Sie zahlen.
                    </p>
                    <b-button
                        to="/register"
                        variant="secondary"
                        size="lg"
                        class="my-4"
                        >Jetzt Stellenanzeige schalten</b-button
                    >
                </b-col>
                <b-col
                    cols="12"
                    md="6"
                    class="d-flex justify-content-center align-items-center"
                >
                    <b-img
                        class="p-4"
                        fluid
                        src="@/assets/handshake.svg"
                        alt="MFA trifft Arzt zum Bewerbungsgespräch"
                    />
                </b-col>
            </b-row>
        </b-container>

        <b-container class="my-5">
            <h2 class="h5 text-center">
                Stellenanzeige schalten bei MFA mal anders
            </h2>
            <h3 class="h1 bold text-center">Ihre Zielgruppe genau im Blick</h3>
            <h4 class="h3 text-center">Ihre Vorteile</h4>

            <b-row class="my-4 my-md-5">
                <b-col>
                    <div class="icon-box shadow py-5 px-4">
                        <font-awesome-icon
                            class="m-0"
                            :icon="['fa', 'user-nurse']"
                            size="3x"
                        />
                        <h3 class="h4 mt-4 mb-3">Genau Ihre Zielgruppe</h3>
                        <p>
                            Bei uns erreichen Sie genau Ihre
                            <strong>Zielgruppe ohne</strong> die großen
                            <strong>Streuverluste</strong>
                            der allgemeinen Jobbörsen.
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow py-5 px-4">
                        <font-awesome-icon
                            class="m-0"
                            :icon="['fa', 'credit-card']"
                            size="3x"
                        />
                        <h3 class="h4 mt-4 mb-3">Niedrige Kosten</h3>
                        <p>
                            Veröffentlichen Sie Ihre Stellenanzeige nach unserem
                            <b-link href="#pay-what-you-want">
                                <strong>"Pay What Yout Want"</strong>
                            </b-link>
                            Modell ab 25€ für 60 Tage.
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow py-5 px-4">
                        <font-awesome-icon
                            class="m-0"
                            :icon="['fa', 'paper-plane']"
                            size="3x"
                        />
                        <h3 class="h4 mt-4 mb-3">Geringer Aufwand</h3>
                        <p>
                            <strong
                                >Sie veröffentlichen, wir sorgen für
                                Reichweite</strong
                            >
                            über unsere Webseite, Google Jobs, Facebook, Twitter
                            und unseren Job Newsletter.
                        </p>
                    </div>
                </b-col>
            </b-row>
            <div class="d-flex flex-wrap justify-content-center mt-4">
                <b-button
                    to="/dashboard"
                    variant="secondary"
                    size="lg"
                    class="mx-1 my-1"
                    >Stellenanzeige schalten</b-button
                >
                <b-button
                    href="#more-info"
                    variant="primary"
                    size="lg"
                    class="mx-1 my-1"
                    >Weitere Informationen</b-button
                >
                <b-button
                    href="#faq"
                    variant="outline-primary"
                    size="lg"
                    class="mx-1 my-1"
                    >Fragen oder Hilfe benötigt?</b-button
                >
            </div>
        </b-container>

        <b-container id="numbers-and-facts" class="mb-5 pt.md-5">
            <h2 class="text-center bold mb-4">
                Ein paar Zahlen und Fakten
                <span style="font-size: 0.8rem">(09/2020)</span>
            </h2>
            <b-row cols="1" cols-md="3">
                <b-col
                    v-for="item in numbersAndFacts"
                    :key="item.desc"
                    class="text-center"
                >
                    <font-awesome-icon
                        class="mt-3 mb-4 text-secondary"
                        :icon="['fab', item.icon]"
                        size="4x"
                    />
                    <div class="display-4 bold mb-3">
                        {{ Math.floor(item.current).toLocaleString() }}+
                    </div>
                    <p>{{ item.desc }}</p>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid class="bg-light-shade py-5 mb-5" id="more-info">
            <b-container>
                <h2 class="bold mb-4">
                    Ihre Jobbörse nur für MFAs und ArzthelferInnen – MFA mal
                    anders
                </h2>
                <b-row cols="1" cols-md="2">
                    <b-col>
                        <p>
                            Wir bieten speziell Arztpraxen und MVZs eine
                            vertrauensvolle Plattform mit
                            <strong>Fokus auf Ihre Zielgruppe</strong> .
                        </p>
                        <p>
                            Aufgrund persönlicher Erfahrungen als MFA und im
                            Gesundheitsbereich bringen wir als Initiatoren von
                            MFA mal anders detaillierte Branchenkenntnisse mit.
                            Da wir um die
                            <strong>
                                Probleme beim Finden von qualifiziertem Personal
                            </strong>
                            wissen, können wir unser Angebot punktgenau
                            ausrichten.
                        </p>
                        <p>
                            Ihre Stellenanzeige ist bei uns bestens platziert.
                            Im Gegensatz zu anderen allgemeinen Stellenbörsen,
                            finden Sie hier ausschließlich die richtige
                            Zielgruppe für Ihr Unternehmen: medizinische
                            Fachangestellte / ArzthelferInnen.
                        </p>
                        <h3>Wo wir Ihre Stellenanzeige ausspielen</h3>
                        <p>
                            Ihre Stellenanzeige wird dort ausgespielt, wo Sie
                            Ihre Zielgruppe findet: bei
                            <strong>
                                Social Media, Google Jobs und auf unserer
                                Webseite
                            </strong>
                            . Zusätzlich versenden wir Ihre Anzeige in unserem
                            <strong>
                                wöchentlichen Newsletter
                            </strong>
                            .
                        </p>
                    </b-col>
                    <b-col>
                        <p>
                            Erhöhen Sie die Chance, dass Ihre Stellenanzeige von
                            der richtigen Person gesehen wird.
                        </p>
                        <b-img
                            class="p-2 p-md-4"
                            right
                            style="max-width: 50%"
                            src="@/assets/marketing_.svg"
                            alt="Stellenanzeige für MFA wird über verschiedene Kanäle veröffentlicht"
                        />
                        <p>
                            Damit grenzen wir uns gezielt von allgemeinen
                            Jobbörsen, die eine breite Masse an
                            unterschiedlichen Berufsgruppen ansprechen und hohe
                            Streuverluste haben, ab. Da wir
                            <strong>mehr als eine reine Jobbörse</strong> sind,
                            erreichen wir mit unserem Angebot zudem eine
                            deutlich größere Anzahl von wirklich motivierten
                            MFAs.
                        </p>
                        <p>
                            Wir arbeiten
                            <strong>nicht mit Personalvermittlern</strong>,
                            <strong>Zeitarbeitsfirmen oder Headhuntern</strong>
                            zusammen.
                        </p>

                        <p>
                            Bei uns können Sie Ihre Stellenanzeige zudem
                            <strong>kostengünstig</strong> veröffentlichen und
                            so Ihrem Budget anpassen sowie zusätzliche
                            Reichweite und qualifizierte Bewerbungen erzielen.
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>

        <b-container class="mb-5 py-0 py-md-5" id="pay-what-you-want">
            <h2 class="mb-4 bold">
                Unsere Preise nach dem “Pay What You Want”* Model
            </h2>
            <b-row cols="1" cols-md="2">
                <b-col class="mb-4">
                    <p>
                        Mit MFA mal anders möchten wir medizinischen
                        Fachangestellten die Möglichkeit geben, einen
                        attraktiven Job zu finden. Aber auch Ihnen als
                        Arbeitgeber eine alternative Plattform bereitstellen,
                        die Ihre Stellenangebote an die richtige Zielgruppe
                        ausspielt und so Ihre Chancen erhöht, qualifizierte
                        Bewerbungen zu erhalten.
                    </p>
                    <b-img
                        class="p-2 p-md-4"
                        right
                        src="@/assets/piggy_bank.svg"
                        alt="Person zahlt Preis für MFA Stellenanzeige"
                        style="max-width: 45%"
                    />
                    <p>
                        Bei uns finden Sie keine überteuerten Angebote, um Ihre
                        Stellenanzeige zu veröffentlichen.
                    </p>
                    <p>
                        Die Idee ist ganz einfach: Nach dem Prinzip
                        <strong>“Pay What You Want”</strong>* entscheidet jede*r
                        selbst, was sie/er als Beitrag für die Nutzung der
                        Stellenbörse und der Informationen rund um MFA mal
                        anders zahlen möchte. So können wir jedem Arbeitgeber
                        die Möglichkeit bieten, vergleichsweise kostengünstig
                        eine Stellenanzeige für 60 Tage bei uns zu schalten.
                    </p>
                    <p class="small">
                        * Es fällt ein Mindestbeitrag von 25,- Euro pro
                        Stellenanzeige à 60 Tage an, der für den Betrieb der
                        IT-Infrastruktur und der Pflege des Portals unerlässlich
                        ist.
                    </p>
                </b-col>
                <b-col>
                    <PayWhatYouWantSuggestion
                        class="bg-light-shade border-radius1 p-4"
                        :minimum="false"
                    />
                </b-col>
            </b-row>
        </b-container>

        <b-container class="mb-5" id="tipps-stellenanzeigen">
            <h2 class="bold mb-4">
                Tipps für Ihre Stellenanzeige
            </h2>
            <p>
                Ihre Stellenanzeige ist eine Einladung für BewerberInnen zum
                Dialog – denn bestenfalls wird daraus ein Vorstellungsgespräch.
                Eine gute Stellenanzeige beschreibt nicht nur die zu besetzende
                Stelle, sondern geht auch auf die Bedürfnisse der Zielgruppe
                ein. Machen Sie ein Angebot, dass so attraktiv ist, dass man
                nicht anders kann, als sich zu bewerben!
            </p>
            <p>
                Durch unsere Arbeit hatten wir die Gelegenheit eine Vielzahl von
                Bewerbungsprozessen zu begleiten und aus erster Hand zu
                erfahren, was bei potentiellen BewerberInnen ankommt und was
                nicht. Deshalb geben wir hier eine kleine Übersicht an Tipps.
            </p>
            <b-row>
                <b-col
                    v-for="jobAdTipp in jobAdTipps"
                    :key="jobAdTipp.title"
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <div class="icon-box shadow1">
                        <div
                            style="width: 75px; height: 75px"
                            class="bg-light border-radius1 shadow3 d-flex justify-content-center align-items-center mb-3"
                        >
                            <font-awesome-icon
                                class="m-0"
                                :icon="['fa', jobAdTipp.icon]"
                                size="3x"
                            />
                        </div>
                        <h3 class="bold">{{ jobAdTipp.title }}</h3>
                        <p class="mb-0">
                            {{ jobAdTipp.desc }}
                        </p>
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="8">
                    <JobAdTippsBanner />
                    <div class="icon-box shadow1 py-4">
                        <h4 class="bold mb-3">Jetzt Stellenanzeige schalten</h4>
                        <b-button to="/register" variant="secondary"
                            >Zur Registrierung</b-button
                        >
                    </div>
                </b-col>
                <b-col cols="12">
                    <ApplicationProcessBanner />
                </b-col>
            </b-row>
        </b-container>

        <b-container id="faq">
            <h2 class="h1 bold text-center mb-4">
                Häufige Fragen
            </h2>
            <b-row cols="1" cols-md="2">
                <b-col>
                    <h3 class="h5 bold">
                        Welche Zahlungsarten stehen zur Verfügung?
                    </h3>
                    <p>
                        Für die Zahlung Ihrer Stellenanzeige können Sie eine
                        Kreditkarte nutzen per GooglePay oder per GiroPay
                        bezahlen. Sollten Sie ausschließlich per Rechnung zahlen
                        können, gelangen Sie während des Zahlungsvorgangs zum
                        Kontaktformular. Lesen dazu ** im Bezahlvorgang.
                    </p>
                    <h3 class="h5 bold">
                        Wie lange dauert es bis zur Veröffentlichung meiner
                        Stellenanzeige?
                    </h3>
                    <p>
                        Je nach Zahlungsmethode ist Ihre Stellenanzeige sofort
                        online (GiroPay, GooglePay, Kreditkarte) oder Zahlung
                        auf Rechnung erst nach bei uns erfolgtem
                        Zahlungseingang.
                    </p>
                    <h3 class="h5 bold">
                        Kann ich auch per Rechnungs zahlen?
                    </h3>
                    <p>
                        Ja, die Möglichkeit besteht. Lesen Sie dazu nach einem
                        Klick auf "Jetzt bezahlen" die Anmerkung **. Da wir
                        einen erhöhten Aufwand für die separate Rechnungslegung
                        und Zahlungsabwicklung haben, erhöht sich der
                        Mindestbetrag bei Zahlung per Rechnung um 5,- Euro. Ihre
                        Stellenanzeige wird von uns freigeschaltet sobald wir
                        einen Zahlungseingang von Ihnen verbuchen können.
                    </p>
                    <h3 class="h5 bold">
                        Woher weiß ich, wie viel ich für meine Stellenanzeige
                        zahlen soll?
                    </h3>
                    <p>
                        Wir arbeiten grundsätzlich nach dem "Pay What You Want"
                        Prinzip, d.h. Sie können selbst entscheiden, wie viel
                        Sie für die Veröffentlichung Ihrer Stellenanzeige bei
                        uns zahlen möchten. Um den Betrieb der Plattform zu
                        sichern, erheben wir lediglich einen Mindestbetrag von
                        25,- Euro. Wer heutzutage auf Personalsuche ist, weiß,
                        dass die Veröffentlichung von Stellenanzeigen sehr
                        schnell sehr teuer werden kann. Mit unserem
                        Nischenportal möchten wir Ihnen eine maßgeschneiderte
                        Alternative anbieten. Wir haben Ihnen
                        <b-link href="#pay-what-you-want"
                            >einige Vorschläge</b-link
                        >, die weit unterhalb der großen Allgemein-Jobportale
                        liegen, zusammengestellt.
                    </p>
                </b-col>
                <b-col>
                    <h3 class="h5 bold">
                        Kann ich meine Stellenanzeige im Nachhinein ändern?
                    </h3>
                    <p>
                        Über Ihren registrierten Account können Sie Ihre
                        Stellenanzeige jederzeit anpassen. Die Änderungen werden
                        sofort automatisch übernommen.
                    </p>
                    <h3 class="h5 bold">
                        Wie lange ist meine Stellenanzeige online?
                    </h3>
                    <p>
                        Nach bestätigter Zahlung ist Ihre Stellenanzeige für 60
                        Tage freigeschaltet. Ihre Stelle ist so lange online,
                        wie die 60 Tage sowie Ihre angegebene Bewerbungsfrist
                        nicht abgelaufen sind. Über Ihren Account können Sie
                        Ihre Stellenanzeige jederzeit selbst offline nehmen oder
                        löschen.
                    </p>
                    <h3 class="h5 bold">
                        Wo wird meine Stellenanzeige veröffentlicht?
                    </h3>
                    <p>
                        Mit der Veröffentlichung Ihrer Stellenanzeige auf
                        unserer Webseite wird diese automatisch bei Google Jobs
                        gelistet (es kann ein wenig Zeit in Anspruch nehmen, bis
                        Google Ihre Anzeige integriert). Darüber hinaus
                        verteilen wir Ihre Stellenanzeige über unseren Jobs
                        Newsletter sowie unsere Social Media Kanäle (Facebook,
                        Twitter).
                    </p>
                    <h3 class="h5 bold">
                        Ich benötige Hilfe bei der Erstellung einer attraktiven
                        Stellenanzeige. Kann ich Unterstützung von Ihnen
                        bekommen?
                    </h3>
                    <p>
                        Mit unseren
                        <b-link href="#tipps-stellenanzeigen"
                            >Tipps für attraktive Stellenanzeigen</b-link
                        >
                        geben wir Ihnen unseren Erfahrungsschatz an die Hand.
                        Benötigen Sie darüber hinaus Hilfe, melden Sie sich gern
                        über das Kontaktformular bei uns.
                    </p>
                </b-col>
            </b-row>
            <div class="d-flex flex-wrap justify-content-center mt-4">
                <b-button
                    to="/page/contact"
                    variant="primary"
                    size="lg"
                    class="mx-1 my-1"
                    >Kontakt</b-button
                >
            </div>
        </b-container>

        <!-- <FixedAddJobBtn /> -->

        <Head
            title="Motivierte MFA / ArzthelferIn gesucht?"
            desc="MFA mal anders ist das Jobportal speziell nur für medizinische Fachangestellte. Gesucht – Gefunden! Mit günstigen Stellenanzeigen, die wirklich ankommen."
            img=""
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import PayWhatYouWantSuggestion from "@/components/utils/PayWhatYouWantSuggestion.vue";
    import JobAdTippsBanner from "@/components/utils/JobAdTippsBanner.vue";
    import ApplicationProcessBanner from "@/components/utils/ApplicationProcessBanner.vue";
    // import FixedAddJobBtn from "@/components/utils/FixedAddJobBtn.vue";
    export default {
        name: "Employer",
        components: {
            Head,
            PayWhatYouWantSuggestion,
            JobAdTippsBanner,
            ApplicationProcessBanner
            // FixedAddJobBtn
        },
        data() {
            return {
                title: "Für Arbeitgeber",
                jobAdTipps: [
                    {
                        icon: "drafting-compass",
                        title: "Präziser Stellentitel",
                        desc:
                            "Beschreiben Sie die Stelle in wenigen Worten so konkret wie möglich. Heben Sie bereits hier die Vorteile für die Arbeit bei Ihnen hervor. Versuchen Sie hier positiv aufzufallen!"
                    },
                    {
                        icon: "hospital",
                        title: "Interessanter Einstiegstext",
                        desc:
                            "Erzählen Sie ein wenig über die Praxis bzw. Ihr Unternehmen. Wie viele MitarbeiterInnen gibt es? Seit wann gibt es die Praxis? Was zeichnet Sie aus? Wie ist die Arbeitskultur?"
                    },
                    {
                        icon: "tasks",
                        title: "Konkrete Aufgaben",
                        desc:
                            "Beschreiben Sie die konkreten und wichtigsten Aufgaben, sodass BewerberInnen ein gutes Bild bekommen und wissen, was sie potentiell erwartet."
                    },
                    {
                        icon: "users",
                        title: "Sympathisches Teambild",
                        desc:
                            "Bilder sagen mehr als 1000 Worte. Das gilt auch hier und speziell in Zeiten von Social Media. Ein nettes Bild von Ihrem Praxisteam kann die Zahl der Bewerbungen um ein Vielfaches erhöhen."
                    },
                    {
                        icon: "syringe",
                        title: "Adäquates Stellenprofil",
                        desc:
                            "Werden Sie auch hier konkret und unterscheiden Sie zwischen erforderlichen und wünschenswerten Kenntnissen. Zu viele oder hohe Anforderungen können BewerberInnen abschrecken, die eigentlich geeignet wären."
                    },
                    {
                        icon: "gift",
                        title: "Lukrative Benefits",
                        desc:
                            "Vergessen Sie nicht das wesentliche für die KandidatInnen. Was macht einen Wechsel zu Ihnen lohnenswert? Neben Gehalt und Urlaub können auch Dinge wie Weiterbildungen, spezielle Arbeitszeitmodelle oder Zuschüsse attraktiv sein."
                    },
                    {
                        icon: "door-open",
                        title: "Einfaches Bewerben",
                        desc:
                            "Ermöglichen Sie das einfache Bewerben nur per Lebenslauf. So können Sie die innerliche Hürde für BewerberInnen beträchtlich senken. Das persönliche Gespräch ist letztlich ohnehin entscheidend."
                    }
                ],
                numbersAndFacts: [
                    {
                        icon: "google",
                        number: 432000,
                        current: 0,
                        desc: "Menschen sehen uns monatlich bei Google"
                    },
                    {
                        icon: "facebook",
                        number: 17500,
                        current: 0,
                        desc: "Monatliche Reichweite bei Facebook"
                    },
                    {
                        icon: "chrome",
                        number: 41000,
                        current: 0,
                        desc: "Monatliche Seitenaufrufe auf der Webseite"
                    }
                ]
            };
        },
        methods: {
            startCounters() {
                this.numbersAndFacts.forEach(element => {
                    setInterval(() => {
                        if (element.current < element.number) {
                            element.current =
                                element.current + element.number / 100;
                        }
                    }, 1);
                });
            }
        },
        mounted: function() {
            const elem = window.document.getElementById("numbers-and-facts");

            let intervalId = setInterval(() => {
                if (
                    elem.offsetTop <
                    window.scrollY + window.innerHeight * 0.66
                ) {
                    clearInterval(intervalId);
                    this.startCounters();
                }
            }, 500);
        }
    };
</script>
