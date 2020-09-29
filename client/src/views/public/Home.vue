<template>
    <div class="home">
        <b-container
            fluid
            class="hero d-flex justify-content-center align-items-center"
        >
            <b-container style="max-width: 850px">
                <div class="mb-5">
                    <h1>
                        <span class="bold display-2">
                            MFA mal anders
                        </span>
                        <br />
                        <span
                            class="h1 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"
                        >
                            Dein Karriereportal nur für MFAs
                        </span>
                    </h1>
                </div>
                <b-form
                    @submit.prevent="
                        $router.push(`/jobboard?searchTerm=${searchTerm}`)
                    "
                >
                    <b-input-group>
                        <b-form-input
                            size="lg"
                            class="shadow1"
                            placeholder="Stellenangebot finden..."
                            v-model="searchTerm"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-button
                                size="lg"
                                class="shadow1"
                                variant="secondary"
                                :to="`/jobboard?searchTerm=${searchTerm}`"
                                ><b-icon icon="search"
                            /></b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
                <div class="mt-2 text-right">
                    <b-link class="mr-3 small" to="/page/fuer-arbeitgeber">
                        Stellenanzeige schalten
                    </b-link>
                </div>
            </b-container>
        </b-container>

        <b-container class="my-3 my-md-5 py-3 py-md-5">
            <b-row cols="1" cols-md="3">
                <b-col>
                    <b-link to="/jobboard" class="icon-box shadow1">
                        <b-img-lazy
                            class="mr-4 mb-4 ml-4"
                            src="@/assets/career_.svg"
                            alt="MFA mach nächsten Schritt in der Jobsuche"
                            height="130"
                        />
                        <h2 class="bold">Stellenbörse für MFAs</h2>
                        <p>
                            Bist Du auf der Suche nach einer interessanten
                            Stelle, die genau zu Dir passt? Schau direkt in
                            unserer Stellenbörse nur für MFAs / Arzthelfer*innen
                            vorbei!
                        </p>
                        <b-button variant="primary">Zur Stellenbörse</b-button>
                    </b-link>
                </b-col>
                <b-col>
                    <b-link
                        to="/page/mfa-career/jobs-und-berufsbilder"
                        class="icon-box shadow1"
                    >
                        <b-img-lazy
                            class="mr-4 mb-4 ml-4"
                            src="@/assets/health_.svg"
                            alt="Medizinische Fachangestellte im Untersuchungsraum"
                            height="130"
                        />
                        <h2 class="bold">Jobs und Berufsbilder</h2>
                        <p>
                            Schau Dir unsere 52 Jobs und Berufsbilder für MFAs /
                            Arzthelfer*innen an! Deine Möglichkeiten sind größer
                            als Du denkst.
                        </p>
                        <b-button variant="primary"
                            >Zu den Berufsbildern</b-button
                        >
                    </b-link>
                </b-col>
                <b-col>
                    <b-link
                        to="/page/mfa-career/fort-und-weiterbildungen"
                        class="icon-box shadow1"
                    >
                        <b-img-lazy
                            class="mr-4 mb-4 ml-4"
                            src="@/assets/coach.svg"
                            alt="MFA studiert bei Weiterbildung"
                            height="130"
                        />
                        <h2 class="bold">Fort- und Weiterbildungen</h2>
                        <p>
                            Auf der Suche nach Deinem nächsten Karriereschritt?
                            Informiere Dich über verschiedene Fort- und
                            Weiterbildungen für MFAs / Arzthelfer*innen!
                        </p>
                        <b-button variant="primary"
                            >Zu den Weiterbildungen</b-button
                        >
                    </b-link>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid class="bg-primary text-light py-5">
            <b-container class="py-0 py-md-3">
                <h2 class="h1 mb-4 bold display-4">Warum MFA mal anders?</h2>
                <b-row cols="1" cols-md="3">
                    <b-col>
                        <b-img-lazy
                            fluid
                            left
                            class=" border-radius2 mr-3 mb-3"
                            style="max-width: 170px"
                            src="@/assets/KristinMaurach_portrait-1541x2048.jpg"
                            alt="Portrait Kristin Maurach"
                        />
                        <p>
                            Ich habe selbst über 10 Jahre in Praxen gearbeitet.
                            Und obwohl ich meinen Job mit Herz und Seele gemacht
                            habe, wurde ich mit der Zeit immer frustrierter, was
                            bestimmte Punkte anging: ich stand auf der Stelle
                            und habe nichts neues mehr gelernt. Aber ich wusste
                            auch nicht so recht, was ich dagegen tun kann, wie
                            ich es schaffe, dass ich wieder glücklicher im Job
                            werde. Ob mir eine Weiterbildungen etwas bringt? Und
                            wenn ja: welche? Mein Gehalt damals war echt nicht
                            viel. Im Anbetracht dessen, was ich an Tätigkeiten
                            übernommen habe, nicht angemessen.
                        </p>
                    </b-col>
                    <b-col>
                        <p>
                            Die Gesellschaft und Politik spricht immer nur von
                            katastrophalen Zuständen in der Pflege, zu wenig
                            Pflegepersonal und unter welchem Zeitdruck Ärzte
                            stehen. Der Beruf der MFA findet gar keine
                            Beachtung. Obwohl unser Job auch nicht immer
                            Zuckerschlecken ist und Ärzte auch hier händeringend
                            nach Personal suchen. Ich will kein Mitleid
                            erzeugen, sondern den Beruf würdigen und mehr
                            Aufmerksamkeit schenken.
                        </p>
                        <p>
                            Mit MFA mal anders möchte ich in erster Linie den
                            Beruf der MFA stärken und Dir Tipps und
                            Hilfestellungen zu Themen wie
                            <b-link
                                class="text-secondary"
                                to="/page/mfa-career/fort-und-weiterbildungen"
                                >Weiterbildungsmöglichkeiten</b-link
                            >
                            ,
                            <b-link
                                class="text-secondary"
                                to="/page/mfa-career/jobs-und-berufsbilder"
                                >Karrierechancen</b-link
                            >
                            aber auch
                            <b-link
                                to="/page/mfa-career/gehalt"
                                class="text-secondary"
                                >Gehalt</b-link
                            >
                            (inkl. Gehaltsrechner),
                            <b-link
                                to="/page/mfa-career/bewerbungstipps"
                                class="text-secondary"
                                >Bewerbungen</b-link
                            >
                            und vieles, vieles mehr geben.
                        </p>
                    </b-col>
                    <b-col>
                        <p>
                            Auf der anderen Seite weiß ich auch um die Probleme
                            bei der Personalsuche für Arbeitgeber. Auch hier
                            möchte ich mit meiner Expertise und Erfahrung aus
                            dem Personal Recruiting unterstützen, um
                            Arbeitnehmer und Arbeitgeber bzw. MFAs und Ärzte
                            zusammenzubringen. Am Ende des Tages ist
                            entscheidend, dass das Zusammenspiel zwischen MFAs /
                            Arzthelfer*innen und Ärzten funktioniert und
                            Kollegen gern zusammenarbeiten. Nur so kann der
                            Praxisalltag auf lange Sicht für alle Beteiligten
                            positiv gestaltet werden.
                        </p>
                        <p>
                            <b-link
                                class="text-secondary"
                                to="/article/warum-es-mfa-mal-anders-gibt"
                                ><b-icon icon="caret-right-fill" /> Mehr über
                                die Story dahinter</b-link
                            >
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>

        <b-container class="my-5 py-0 py-md-5 d-flex justify-content-center">
            <StellenanzeigeSchaltenBanner />
        </b-container>

        <b-container>
            <b-row>
                <b-col cols="12" md="4" class="mb-5">
                    <h2 class="bold">
                        Fort- und Weiterbildungen
                    </h2>
                    <h3 class="h4">Informiere Dich</h3>
                    <p>
                        Als medizinische Fachangestellte haben wir viele
                        Möglichkeiten uns zu qualifizieren und im Job
                        aufzusteigen oder sogar in anderen Bereichen des
                        Gesundheitswesens Fuß zu fassen. Nur leider ist der
                        Dschungel an Weiterbildungen für medizinische
                        Fachangestellte so stark bewachsen und undurchdringlich,
                        dass es nicht leicht fällt, den Durchblick zu behalten.
                    </p>
                    <p>
                        Wir haben einige
                        <b-link to="/page/mfa-career/fort-und-weiterbildungen"
                            >Fort- und Weiterbildungen</b-link
                        >
                        speziell für MFAs / Arzthelfer*innen für dich
                        zusammengestellt und erweitern die Auswahl stetig,
                        sodass du dich ein wenig inspirieren lassen kannst.
                        Schau doch gleich mal rein!
                    </p>
                    <b-button
                        to="/page/mfa-career/fort-und-weiterbildungen"
                        variant="primary"
                        >Zu den Fort- und Weiterbildungen</b-button
                    >
                </b-col>
                <b-col cols="12" md="8">
                    <RandomTrainingsContainer :number="2" />
                </b-col>
            </b-row>
        </b-container>

        <Head
            title="Dein Karriereportal nur für MFAs"
            desc="Dein Job- und Karriereportal für medizinische Fachangestellte (MFA) | Attraktive Stellenangebote im Gesundheitswesen | Weiterbildungen | Alternative Jobs"
            :img="require('@/assets/mfaMalAnders_Facebook_Banner.png')"
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import StellenanzeigeSchaltenBanner from "@/components/utils/StellenanzeigeSchaltenBanner.vue";
    import RandomTrainingsContainer from "@/components/utils/RandomTrainingsContainer.vue";
    export default {
        name: "Home",
        components: {
            Head,
            StellenanzeigeSchaltenBanner,
            RandomTrainingsContainer
        },
        data() {
            return {
                searchTerm: ""
            };
        }
    };
</script>
