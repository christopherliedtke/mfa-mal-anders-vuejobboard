<template>
    <div class="home">
        <b-container
            fluid
            class="hero d-flex justify-content-center align-items-center"
        >
            <b-container style="max-width: 850px" class="p-0">
                <div class="hero-text mt-4 mb-5 my-lg-5 p-4">
                    <h1>
                        <span class="bold display-2">
                            MFA <br class="d-md-none" />
                            mal anders
                        </span>
                        <br />
                        <span
                            class="h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"
                        >
                            Das Karriere- & Stellenportal nur für MFA & ZFA
                        </span>
                    </h1>
                    <p class="lead mt-2 mt-md-3 mb-0">
                        Informiere Dich über berufliche Perspektiven, Fort- und
                        Weiterbildungen, Stellenangebote und vieles mehr<span
                            class="d-none d-md-inline"
                        >
                            – speziell für ArzthelferInnen | Medizinische &
                            Zahnmedizinische Fachangestellte (MFA / ZFA)</span
                        >.
                    </p>
                </div>
                <b-form
                    @submit.prevent="
                        $router.push(
                            `/stellenangebote?searchTerm=${searchTerm}`
                        )
                    "
                >
                    <label
                        class="sr-only sr-only-focusable"
                        for="landing-search"
                        >Suchbegriff</label
                    >
                    <b-input-group>
                        <b-form-input
                            id="landing-search"
                            size="lg"
                            class="shadow1"
                            placeholder="Stelle finden..."
                            v-model="searchTerm"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-button
                                size="lg"
                                class="shadow1"
                                variant="secondary"
                                :to="
                                    `/stellenangebote?searchTerm=${searchTerm}`
                                "
                                ><Fa icon="search"
                            /></b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
                <div class="mt-2 text-right">
                    <b-link class="pt-3 pb-4 px-3 small" to="/fuer-arbeitgeber">
                        Stellenanzeige schalten
                    </b-link>
                </div>
            </b-container>
        </b-container>

        <b-container class="my-3 my-md-5 py-3 py-md-5">
            <b-row cols="1" cols-md="3" class="flex-lg-row-reverse">
                <b-col>
                    <b-link to="/stellenangebote" class="icon-box shadow1">
                        <b-img-lazy
                            class="mr-4 mb-4 ml-4"
                            src="@/assets/img/career_.svg"
                            alt="MFA / ZFA macht nächsten Schritt in der Jobsuche"
                            height="130"
                        />
                        <h2 class="bold">Stellenbörse für MFA & ZFA</h2>
                        <p>
                            Bist Du auf der Suche nach einer interessanten
                            Stelle, die genau zu Dir passt? Schau direkt in
                            unserer Stellenbörse nur für ArzthelferInnen (MFA &
                            ZFA) vorbei!
                        </p>
                        <b-button variant="primary">Zur Stellenbörse</b-button>
                    </b-link>
                </b-col>
                <b-col>
                    <b-link
                        to="/karriere/jobs-und-berufsbilder"
                        class="icon-box shadow1"
                    >
                        <b-img-lazy
                            class="mr-4 mb-4 ml-4"
                            src="@/assets/img/health_.svg"
                            alt="Medizinische Fachangestellte im Untersuchungsraum"
                            height="130"
                        />
                        <h2 class="bold">Jobs und Berufsbilder</h2>
                        <p>
                            Schau Dir unsere 52 Jobs und Berufsbilder für
                            ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten
                            sind größer als Du denkst.
                        </p>
                        <b-button variant="primary"
                            >Zu den Berufsbildern</b-button
                        >
                    </b-link>
                </b-col>
                <b-col>
                    <b-link
                        to="/karriere/fort-und-weiterbildungen"
                        class="icon-box shadow1"
                    >
                        <b-img-lazy
                            class="mr-4 mb-4 ml-4"
                            src="@/assets/img/coach.svg"
                            alt="MFA studiert bei Weiterbildung"
                            height="130"
                        />
                        <h2 class="bold">Fort- und Weiterbildungen</h2>
                        <p>
                            Auf der Suche nach Deinem nächsten Karriereschritt?
                            Informiere Dich über verschiedene Fort- und
                            Weiterbildungen für ArzthelferInnen – MFA & ZFA!
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
                            class="border-radius2 mr-3 mb-2"
                            style="max-width: 170px"
                            src="@/assets/img/KristinMaurach_portrait_800.jpg"
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
                            stehen. Der Beruf der MFA & ZFA findet gar keine
                            Beachtung. Obwohl unser Job auch nicht immer
                            Zuckerschlecken ist und Ärzte auch hier händeringend
                            nach Personal suchen. Ich will kein Mitleid
                            erzeugen, sondern den Beruf würdigen und mehr
                            Aufmerksamkeit schenken.
                        </p>
                        <p>
                            Mit MFA mal anders möchte ich in erster Linie den
                            Beruf der MFA & ZFA stärken und Dir Tipps und
                            Hilfestellungen zu Themen wie
                            <b-link
                                class="text-secondary"
                                to="/karriere/fort-und-weiterbildungen"
                                >Weiterbildungsmöglichkeiten</b-link
                            >,
                            <b-link
                                class="text-secondary"
                                to="/karriere/jobs-und-berufsbilder"
                                >Karrierechancen</b-link
                            >
                            aber auch
                            <b-link to="/karriere/gehalt" class="text-secondary"
                                >Gehalt</b-link
                            >
                            (inkl. Gehaltsrechner),
                            <b-link
                                to="/karriere/bewerbungstipps"
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
                            Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und
                            Ärzte zusammenzubringen. Am Ende des Tages ist
                            entscheidend, dass das Zusammenspiel zwischen
                            ArzthelferInnen und Ärzten funktioniert und Kollegen
                            gern zusammenarbeiten. Nur so kann der Praxisalltag
                            auf lange Sicht für alle Beteiligten positiv
                            gestaltet werden.
                        </p>
                        <p>
                            <b-link
                                class="text-secondary"
                                to="/blog/article/warum-es-mfa-mal-anders-gibt"
                                ><Fa icon="caret-right" /> Mehr über die Story
                                dahinter</b-link
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
                        Als Medizinische / Zahnmedizinische Fachangestellte
                        haben wir viele Möglichkeiten uns zu qualifizieren und
                        im Job aufzusteigen oder sogar in anderen Bereichen des
                        Gesundheitswesens Fuß zu fassen. Nur leider ist der
                        Dschungel an Weiterbildungen für Medizinische
                        Fachangestellte so stark bewachsen und undurchdringlich,
                        dass es nicht leicht fällt, den Durchblick zu behalten.
                    </p>
                    <p>
                        Wir haben einige
                        <b-link to="/karriere/fort-und-weiterbildungen"
                            >Fort- und Weiterbildungen</b-link
                        >
                        speziell für ArzthelferInnen (MFA & ZFA) für dich
                        zusammengestellt und erweitern die Auswahl stetig,
                        sodass du dich ein wenig inspirieren lassen kannst.
                        Schau doch gleich mal rein!
                    </p>
                    <b-button
                        to="/karriere/fort-und-weiterbildungen"
                        variant="primary"
                        >Zu den Fort- und Weiterbildungen</b-button
                    >
                </b-col>
                <b-col cols="12" md="8">
                    <RandomTrainingsContainer :number="2" />
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid class="bg-light-shade my-5 py-5">
            <b-container>
                <h2 class="h1 bold display-4 text-center">Blog</h2>
                <h3 class="h5 text-center mb-4">
                    Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere,
                    Persönlichkeitsentwicklung und vieles mehr...
                </h3>
                <RandomArticlesContainer />
            </b-container>
        </b-container>

        <Head
            title="Das Karriere- & Stellenportal nur für MFA & ZFA"
            desc="Dein Job- und Karriereportal für ArzthelferInnen – Medizinische / Zahnmedizinische Fachangestellte (MFA / ZFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung"
            img=""
            :script="snippet"
        />
    </div>
</template>

<script>
    import StellenanzeigeSchaltenBanner from "@/components/banners/StellenanzeigeSchaltenBanner.vue";
    import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
    import RandomArticlesContainer from "@/components/containers/RandomArticlesContainer.vue";
    export default {
        name: "Home",
        components: {
            StellenanzeigeSchaltenBanner,
            RandomTrainingsContainer,
            RandomArticlesContainer
        },
        data() {
            return {
                searchTerm: "",
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
                            }]
                        }`
                    }
                ]
            };
        }
    };
</script>
