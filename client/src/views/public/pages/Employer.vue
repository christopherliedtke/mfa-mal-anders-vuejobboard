<template>
    <div class="employer">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5 px-md-5">
            <b-row
                class="bg-primary text-light border-radius2 shadow1 w-100 p-3 p-md-5 mx-auto position-relative"
            >
                <div class="bg-logo"></div>
                <b-col>
                    <h2 class="h1 bold mb-4">
                        <em>Schneller</em> motivierte MFAs und Arzthelfer*innen
                        finden!
                    </h2>
                    <p>
                        Übersenden Sie uns noch heute Ihre Stellenanzeige und
                        erreichen Sie unsere große Community von MFAs! Mit
                        unserem “Pay What You Want”* Modell zahlen sie nur das,
                        was Sie möchten.
                    </p>
                    <b-button
                        to="/register"
                        variant="secondary"
                        size="lg"
                        class="my-4"
                        >Jetzt Stellenanzeige schalten</b-button
                    >
                </b-col>
                <b-col class="d-flex justify-content-center align-items-center">
                    <b-img
                        class="p-4"
                        fluid
                        src="@/assets/handshake.svg"
                        alt="MFA trifft Arzt zum Bewerbungsgespräch"
                    />
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid class="bg-light-shade py-5 mb-5">
            <b-container>
                <h2 class="bold mb-4">
                    Ihre Jobbörse nur für MFAs und Arzthelfer*innen – MFA mal
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
                            Fachangestellte / Arzthelfer*innen.
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

        <b-container class="mb-5 py-0 py-md-5">
            <h2 class="mb-4">
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
                        eine Stellenanzeige zu schalten.
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

        <b-container class="mb-5">
            <h2 class="mb-4">Unsere Tipps für Ihre Stellenanzeige</h2>
            <b-row cols="1" cols-md="2" cols-lg="3">
                <b-col>
                    <div class="icon-box shadow1">
                        <font-awesome-icon
                            class="mr-1"
                            :icon="['fa', 'lightbulb']"
                            size="3x"
                        />
                        <h3 class="bold">Präziser Stellentitel</h3>
                        <p class="mb-0">
                            Beschreiben Sie die Stelle in wenigen Worten so
                            konkret wie möglich. Heben Sie bereits hier die
                            Vorteile für die Arbeit bei Ihnen hervor. Versuchen
                            Sie bereits hier positiv aufzufallen!
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow1">
                        <font-awesome-icon
                            class="mr-1"
                            :icon="['fa', 'hospital']"
                            size="3x"
                        />
                        <h3 class="bold">Interessanter Einstiegstext</h3>
                        <p class="mb-0">
                            Erzählen Sie ein wenig über die Praxis bzw. Ihr
                            Unternehmen. Wie viele Mitarbeiter*innen gibt es?
                            Seit wann gibt es die Praxis? Was zeichnet Sie aus?
                            Wie ist die Arbeitskultur?
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow1">
                        <font-awesome-icon
                            class="mr-1"
                            :icon="['fa', 'users']"
                            size="3x"
                        />
                        <h3 class="bold">Sympathisches Teambild</h3>
                        <p class="mb-0">
                            Bilder sagen mehr als 1000 Worte. Das gilt auch hier
                            und speziell in Zeiten von Social Media. Ein nettes
                            Bild von Ihrem Praxisteam kann die Zahl der
                            Bewerbungen um ein Vielfaches erhöhen.
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow1">
                        <font-awesome-icon
                            class="mr-1"
                            :icon="['fa', 'tasks']"
                            size="3x"
                        />
                        <h3 class="bold">Konkrete Aufgaben</h3>
                        <p class="mb-0">
                            Beschreiben Sie die konkreten und wichtigsten
                            Aufgaben, sodass Bewerber*innen ein gutes Bild
                            bekommen und wissen, was sie potentiell erwartet.
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow1">
                        <font-awesome-icon
                            class="mr-1"
                            :icon="['fa', 'syringe']"
                            size="3x"
                        />
                        <h3 class="bold">Adequates Profil</h3>
                        <p class="mb-0">
                            Werden Sie auch hier konkret und unterscheiden Sie
                            zwischen erforderlichen und wünschenswerten
                            Kenntnissen. Zu viele oder hohe Anforderungen können
                            Bewerber*innen abschrecken, die eigentlich geeignet
                            wären.
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow1">
                        <font-awesome-icon
                            class="mr-1"
                            :icon="['fa', 'gift']"
                            size="3x"
                        />
                        <h3 class="bold">Lukrative Benefits</h3>
                        <p class="mb-0">
                            Vergessen Sie nicht das wesentliche für die
                            Kandidat*innen. Was macht einen Wechsel zu Ihnen
                            lohnenswert? Neben Gehalt und Urlaub können auch
                            Dinge wie Weiterbildungen, spezielle
                            Arbeitszeitmodelle oder Zuschüsse attraktiv sein.
                        </p>
                    </div>
                </b-col>
                <b-col>
                    <div class="icon-box shadow1">
                        <font-awesome-icon
                            class="mr-1"
                            :icon="['fa', 'door-open']"
                            size="3x"
                        />
                        <h3 class="bold">Einfaches Bewerben</h3>
                        <p class="mb-0">
                            Ermöglichen Sie das einfache Bewerben nur per
                            Lebenslauf. So können Sie die innerliche Hürde für
                            Bewerber*innen beträchtlich senken. Das persönliche
                            Gespräch ist letztlich ohnehin entscheidend.
                        </p>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <Head
            title="Motivierte MFA / Arzthelfer*in gesucht?"
            desc="MFA mal anders ist das Jobportal speziell nur für medizinische Fachangestellte. Gesucht – Gefunden! Mit günstigen Stellenanzeigen, die wirklich ankommen."
            img=""
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import PayWhatYouWantSuggestion from "@/components/utils/PayWhatYouWantSuggestion.vue";
    export default {
        name: "Employer",
        components: {
            Head,
            PayWhatYouWantSuggestion
        },
        data() {
            return {
                title: "Für Arbeitgeber"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
