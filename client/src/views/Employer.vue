<template>
  <div class="employer">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="py-3 py-lg-5 px-md-5">
      <b-row
        style="overflow-x: hidden"
        class="bg-primary text-light border-radius2 shadow1 w-100 p-3 py-4 p-md-5 mx-auto position-relative"
      >
        <div class="bg-logo"></div>
        <b-col cols="12" lg="8" style="z-index: 1">
          <h2 class="display-4 bold mb-4">
            <em>Motivierte</em> und <em>qualifizierte</em> MFA & ZFA{{
              $route.query.location ? ` in ${$route.query.location}` : ""
            }}
            gesucht?
          </h2>
          <ul class="lead no-bullets my-4 my-lg-5">
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                Einfach und bequem
                <span class="text-secondary">in wenigen Minuten</span>
                Ihre Stellenanzeige veröffentlichen
              </div>
            </li>
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                <span class="text-secondary"
                  >Erhalten Sie mit uns mehr Reichweite</span
                >
                über Google Jobs, Social Media und unsere MFA & ZFA Community
              </div>
            </li>
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                Veröffentlichen Sie Ihre Stellenaneige
                <b-link class="text-secondary" href="#pay-what-you-want"
                  >ab
                  {{ $config.payment.minCost / 100 }}
                  {{ $config.payment.currency }}</b-link
                >
              </div>
            </li>
          </ul>

          <div class="my-3">
            <b-button
              to="/auth/register"
              variant="secondary"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Stellenanzeige erstellen</b-button
            >
            <b-button
              href="#advantages"
              variant="outline-light"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Mehr erfahren</b-button
            >
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="4"
          class="d-none d-lg-flex justify-content-center align-items-center"
        >
          <b-img
            style="width: 450px; opacity: 0.9; right: 0"
            class="position-absolute p-0"
            src="@/assets/img/handshake.svg"
            alt="MFA / ZFA trifft Arzt zum Bewerbungsgespräch"
          />
        </b-col>
      </b-row>
    </b-container>

    <b-container id="advantages" class="my-5">
      <h2 class="h5 text-center">
        Stellenanzeige schalten bei MFA mal anders
      </h2>
      <p class="bold display-4 text-center">
        Ihre Zielgruppe genau im Blick
      </p>
      <h3 class="h3 text-center">
        Stellenanzeigen nur für ArzthelferInnen – MFA & ZFA
      </h3>

      <b-row class="my-4 my-md-5">
        <b-col>
          <div class="icon-box shadow1 py-5 px-4">
            <Fa class="m-0" :icon="['fa', 'user-nurse']" size="3x" />
            <h4 class="h4 mt-4 mb-3">Genau Ihre Zielgruppe</h4>
            <p>
              Bei uns erreichen Sie
              <strong>exklusiv motivierte ArzthelferInnen – MFA & ZFA</strong>
              und damit genau Ihre Zielgruppe.
            </p>
          </div>
        </b-col>
        <b-col>
          <div class="icon-box shadow1 py-5 px-4">
            <Fa class="m-0" :icon="['fa', 'credit-card']" size="3x" />
            <h4 class="h4 mt-4 mb-3">Niedrige Kosten</h4>
            <p>
              Veröffentlichen Sie Ihre Stellenanzeige nach unserem
              <b-link href="#pay-what-you-want">
                <strong>"Pay What You Want"</strong>
              </b-link>
              Modell
              <strong>
                ab
                {{ $config.payment.minCost / 100 }}
                {{ $config.payment.currency }}
                für {{ $config.payment.duration }} Tage.
              </strong>
            </p>
          </div>
        </b-col>
        <b-col>
          <div class="icon-box shadow1 py-5 px-4">
            <Fa class="m-0" :icon="['fa', 'paper-plane']" size="3x" />
            <h4 class="h4 mt-4 mb-3">Einfach und bequem</h4>
            <p>
              <strong
                >Sie erstellen Ihre Anzeige, wir sorgen für den Rest</strong
              >
              - Reichweite auf MFA mal anders, Google Jobs, Facebook und
              <b-link to="#more-info">mehr...</b-link>
            </p>
          </div>
        </b-col>
      </b-row>
      <div class="d-flex flex-column align-items-center mt-4">
        <div class="mb-3">
          <b-button
            to="/auth/register"
            variant="secondary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Stellenanzeige erstellen</b-button
          >
          <b-button
            href="#pay-what-you-want"
            variant="primary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Preise</b-button
          >
        </div>
        <div>
          <b-button
            href="#tipps-stellenanzeigen"
            variant="outline-secondary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Tipps für Stellenanzeigen</b-button
          >
          <b-button
            href="#more-info"
            variant="outline-primary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Weitere Informationen</b-button
          >
          <b-button
            href="#faq"
            variant="outline-primary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Fragen oder Hilfe benötigt?</b-button
          >
        </div>
      </div>
    </b-container>

    <b-container fluid class="pt-3 bg-light-shade">
      <b-container class="my-4 my-md-5">
        <h2 class="display-4 text-center bold">
          Wir kooperieren mit
        </h2>
        <b-row cols="1" cols-lg="4" class="py-4">
          <b-col
            v-for="partner in partners"
            :key="partner.name"
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-link :href="partner.url" target="_blank">
              <img
                fluid
                :src="partner.img"
                :alt="`Logo - ${partner.name}`"
                style="max-height: 130px; max-width: 220px"
                class="m-5 blend"
              />
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container id="numbers-and-facts" class="mb-5 py-md-5">
      <h2 class="h1 text-center bold mb-4">
        Ein paar Zahlen und Fakten
        <span style="font-size: 0.8rem">(01/2021)</span>
      </h2>
      <b-row cols="1" cols-md="3">
        <b-col
          v-for="item in numbersAndFacts"
          :key="item.desc"
          class="text-center"
        >
          <Fa
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

    <!-- <b-container id="testimonials" class="mb-5 pb-md-5" fluid>
            <h2 class="h4 text-center">Feedback</h2>
            <h3 class="h1 text-center bold mb-4">Was unsere Kunden sagen</h3>
            <b-container
                style="max-width: 600px"
                class="position-relative bg-light-shade border-radius2 shadow1 p-5"
            >
                <Fa
                    style="right: 15%; top: 25%"
                    class="position-absolute text-primary icon-transparent"
                    icon="quote-right"
                    size="7x"
                />
                <b-row>
                    <b-col cols="12" md="3" class="d-flex py-2 px-4">
                        <b-img
                            class="rounded-circle shadow1"
                            height="100"
                            src="@/assets/img/kinderarztpraxis_ostertor_200.jpg"
                        />
                    </b-col>
                    <b-col cols="12" md="9" class="d-flex flex-column py-2">
                        <p>
                            Durch die Online-Suche haben wir deutlich mehr und
                            auch besser qualifizierte Zuschriften erhalten.
                            Vielen Dank noch einmal für Ihre Unterstützung und
                            die wertvollen Tipps.
                        </p>
                        <p class="h6 mb-0">
                            &ndash; Franziska Fritz |
                            <em>Kinderarztpraxis Ostertor</em>
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-container> -->

    <b-container id="pay-what-you-want" class="mb-5 py-0 py-md-5">
      <h2 class="mb-4 bold">
        Unsere Preise nach dem “Pay What You Want”* Model
      </h2>
      <b-row cols="1" cols-md="2">
        <b-col class="mb-4">
          <p>
            Mit MFA mal anders möchten wir Medizinischen Fachangestellten die
            Möglichkeit geben, einen attraktiven Job zu finden. Aber auch Ihnen
            als Arbeitgeber eine alternative Plattform bereitstellen, die Ihre
            Stellenangebote an die richtige Zielgruppe ausspielt und so Ihre
            Chancen erhöht, qualifizierte Bewerbungen zu erhalten.
          </p>
          <b-img
            class="p-2 p-md-4"
            right
            src="@/assets/img/piggy_bank.svg"
            alt="Person zahlt Preis für MFA / ZFA Stellenanzeige"
            style="max-width: 45%"
          />
          <p>
            Bei uns finden Sie keine überteuerten Angebote, um Ihre
            Stellenanzeige zu veröffentlichen.
          </p>
          <p>
            Die Idee ist ganz einfach: Nach dem Prinzip
            <strong>“Pay What You Want”</strong>* entscheiden Sie, welchen
            Beitrag Sie für die Nutzung der Stellenbörse und der Informationen
            rund um MFA mal anders zahlen möchten. So können wir jedem
            Arbeitgeber die Möglichkeit bieten, vergleichsweise kostengünstig
            eine Stellenanzeige für {{ $config.payment.duration }} Tage bei uns
            zu schalten.
          </p>
          <p class="small">
            * Es fällt ein Mindestbeitrag von
            {{
              ($config.payment.minCost / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")
            }}
            {{ $config.payment.currency }} pro Stellenanzeige à
            {{ $config.payment.duration }} Tage an, der für den Betrieb der
            IT-Infrastruktur und der Pflege des Portals unerlässlich ist.
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

    <b-container id="more-info" fluid class="bg-light-shade py-5 mb-5">
      <b-container>
        <h2 class="bold mb-4">
          Ihre Jobbörse nur für ArzthelferInnen – MFA & ZFA – MFA mal anders
        </h2>
        <b-row cols="1" cols-md="2">
          <b-col>
            <p>
              Wir bieten speziell Arztpraxen, MVZs und allen weiteren
              Einrichtungen aus dem Gesundheitswesen eine vertrauensvolle
              Plattform mit
              <strong>Fokus auf Ihre Zielgruppe</strong>.
            </p>
            <p>
              Aufgrund persönlicher Erfahrungen als MFA und im
              Gesundheitsbereich bringen wir als Initiatoren von MFA mal anders
              detaillierte Branchenkenntnisse mit. Da wir um die
              <strong>
                Probleme beim Finden von qualifiziertem Personal
              </strong>
              wissen, können wir unser Angebot punktgenau ausrichten.
            </p>
            <p>
              Ihre Stellenanzeige ist bei uns bestens platziert. Im Gegensatz zu
              anderen allgemeinen Stellenbörsen, finden Sie hier ausschließlich
              die richtige Zielgruppe für Ihr Unternehmen: Medizinische &
              Zahnmedizinische Fachangestellte.
            </p>
            <h3>Wo wir Ihre Stellenanzeige ausspielen</h3>
            <p>
              Ihre Stellenanzeige wird dort ausgespielt, wo Sie Ihre Zielgruppe
              findet: bei
              <strong>
                Social Media, Google Jobs und auf unserer Webseite
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
              Erhöhen Sie die Chance, dass Ihre Stellenanzeige von der richtigen
              Person gesehen wird.
            </p>
            <b-img
              class="p-2 p-md-4"
              right
              style="max-width: 50%"
              src="@/assets/img/marketing_.svg"
              alt="Stellenanzeige für MFA / ZFA wird über verschiedene Kanäle veröffentlicht"
            />
            <p>
              Damit grenzen wir uns gezielt von allgemeinen Jobbörsen, die eine
              breite Masse an unterschiedlichen Berufsgruppen ansprechen und
              hohe Streuverluste haben, ab. Da wir
              <strong>mehr als eine reine Jobbörse</strong> sind, erreichen wir
              mit unserem Angebot zudem eine deutlich größere Anzahl von
              wirklich motivierten MFAs & ZFAs.
            </p>
            <p>
              Wir arbeiten
              <strong>nicht mit Personalvermittlern</strong>,
              <strong>Zeitarbeitsfirmen oder Headhuntern</strong>
              zusammen.
            </p>

            <p>
              Bei uns können Sie Ihre Stellenanzeige zudem
              <strong>kostengünstig</strong> veröffentlichen und so Ihrem Budget
              anpassen sowie zusätzliche Reichweite und qualifizierte
              Bewerbungen erzielen.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container id="tipps-stellenanzeigen" class="mb-5">
      <h2 class="bold mb-4">
        Tipps für Ihre Stellenanzeige
      </h2>
      <p>
        Ihre Stellenanzeige ist eine Einladung für BewerberInnen zum Dialog –
        denn bestenfalls wird daraus ein Vorstellungsgespräch. Eine gute
        Stellenanzeige beschreibt nicht nur die zu besetzende Stelle, sondern
        geht auch auf die Bedürfnisse der Zielgruppe ein. Machen Sie ein
        Angebot, dass so attraktiv ist, dass man nicht anders kann, als sich zu
        bewerben!
      </p>
      <p>
        Durch unsere Arbeit hatten wir die Gelegenheit eine Vielzahl von
        Bewerbungsprozessen zu begleiten und aus erster Hand zu erfahren, was
        bei potentiellen BewerberInnen ankommt und was nicht. Deshalb geben wir
        hier eine kleine Übersicht an Tipps.
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
              <Fa class="m-0" :icon="['fa', jobAdTipp.icon]" size="3x" />
            </div>
            <h3 class="bold">{{ jobAdTipp.title }}</h3>
            <p class="mb-0">
              {{ jobAdTipp.desc }}
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <div class="icon-box shadow1 py-4">
            <h4 class="bold mb-3">
              Jetzt Stellenanzeige erstellen
            </h4>
            <p>
              Erstellen Sie jetzt Ihre attraktive Stellenanzeige und erreichen
              Sie unsere große Community von MFAs & ZFAs! Mit unserem
              <b-link class="text-secondary" href="#pay-what-you-want"
                >“Pay What You Want”*</b-link
              >
              Modell bestimmen Sie, wie viel Sie zahlen.
            </p>
            <b-button to="/auth/register" variant="secondary"
              >Zur Registrierung</b-button
            >
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="12">
          <JobAdTippsBanner />
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
            Für die Zahlung Ihrer Stellenanzeige können Sie eine Kreditkarte
            nutzen, per GooglePay oder per GiroPay bezahlen. Bei diesen
            Zahlungsmethoden wird Ihre Stellenanzeige sofort veröffentlicht.
            Ebenso steht Ihnen die Zahlung per Rechnung zur Verfügung. Bitte
            beachten Sie hierbei, dass Ihre Stellenanzeige erst dann
            veröffentlicht wird, wenn Ihre Zahlung bei uns eingegangen ist.
          </p>
          <h3 class="h5 bold">
            Wie lange dauert es bis zur Veröffentlichung meiner Stellenanzeige?
          </h3>
          <p>
            Je nach Zahlungsmethode ist Ihre Stellenanzeige sofort online
            (GiroPay, GooglePay, Kreditkarte) oder Zahlung auf Rechnung erst
            nach bei uns erfolgtem Zahlungseingang.
          </p>
          <h3 class="h5 bold">
            Kann ich auch per Rechnung zahlen?
          </h3>
          <p>
            Ja, die Möglichkeit besteht. Lesen Sie dazu nach einem Klick auf
            "Jetzt bezahlen" die Anmerkung **im Zahlungsprozess haben Sie die
            Auswahl zwischen verschiedenen Bezahlfunktionen und können dort
            unter anderem die "Zahlung per Rechnung" nutzen. Da wir einen
            erhöhten Aufwand für die separate Rechnungslegung und
            Zahlungsabwicklung haben, erhöht sich der Rechnungsbetrag bei
            Zahlung per Rechnung um 5,- Euro. Ihre Stellenanzeige wird von uns
            freigeschaltet sobald wir einen Zahlungseingang von Ihnen verbuchen
            können.
          </p>
          <h3 class="h5 bold">
            Woher weiß ich, wie viel ich für meine Stellenanzeige zahlen soll?
          </h3>
          <p>
            Wir arbeiten grundsätzlich nach dem "Pay What You Want" Prinzip,
            d.h. Sie können selbst entscheiden, wie viel Sie für die
            Veröffentlichung Ihrer Stellenanzeige bei uns zahlen möchten. Um den
            Betrieb der Plattform zu sichern, erheben wir lediglich einen
            Mindestbetrag von
            {{
              ($config.payment.minCost / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")
            }}
            {{ $config.payment.currency }}. Wer heutzutage auf Personalsuche
            ist, weiß, dass die Veröffentlichung von Stellenanzeigen sehr
            schnell sehr teuer werden kann. Mit unserem Nischenportal möchten
            wir Ihnen eine maßgeschneiderte Alternative anbieten. Wir haben
            Ihnen <b-link href="#pay-what-you-want">einige Vorschläge</b-link>,
            die weit unterhalb der großen Allgemein-Jobportale liegen,
            zusammengestellt.
          </p>
        </b-col>
        <b-col>
          <h3 class="h5 bold">
            Kann ich meine Stellenanzeige im Nachhinein ändern?
          </h3>
          <p>
            Über Ihren registrierten Account können Sie Ihre Stellenanzeige
            jederzeit anpassen. Die Änderungen werden sofort automatisch
            übernommen.
          </p>
          <h3 class="h5 bold">
            Wie lange ist meine Stellenanzeige online?
          </h3>
          <p>
            Nach bestätigter Zahlung ist Ihre Stellenanzeige für
            {{ $config.payment.duration }} Tage freigeschaltet. Ihre Stelle ist
            so lange online, wie die {{ $config.payment.duration }} Tage sowie
            Ihre angegebene Bewerbungsfrist nicht abgelaufen sind. Über Ihren
            Account können Sie Ihre Stellenanzeige jederzeit selbst offline
            nehmen oder löschen. Für individuelle Stellenpakete können Sie uns
            direkt über das
            <b-link to="/kontakt">Kontaktformular</b-link>
            kontaktieren.
          </p>
          <h3 class="h5 bold">
            Wo wird meine Stellenanzeige veröffentlicht?
          </h3>
          <p>
            Mit der Veröffentlichung Ihrer Stellenanzeige auf unserer Webseite
            wird diese automatisch bei Google Jobs gelistet (es kann ein wenig
            Zeit in Anspruch nehmen, bis Google Ihre Anzeige integriert).
            Darüber hinaus verteilen wir Ihre Stellenanzeige über unseren Jobs
            Newsletter sowie unsere Social Media Kanäle.
          </p>
          <h3 class="h5 bold">
            Ich benötige Hilfe bei der Erstellung einer attraktiven
            Stellenanzeige. Kann ich Unterstützung von Ihnen bekommen?
          </h3>
          <p>
            Mit unseren
            <b-link href="#tipps-stellenanzeigen"
              >Tipps für attraktive Stellenanzeigen</b-link
            >
            geben wir Ihnen unseren Erfahrungsschatz an die Hand. Benötigen Sie
            darüber hinaus Hilfe, melden Sie sich gern über das
            <b-link to="/kontakt">Kontaktformular</b-link> bei uns.
          </p>
        </b-col>
      </b-row>
      <div class="d-flex flex-column align-items-center mt-4">
        <b-button to="/kontakt" variant="primary" size="lg" class="mx-1 my-1"
          >Kontakt</b-button
        >
        <b-button
          to="/auth/register"
          variant="secondary"
          size="lg"
          class="d-block d-md-inline-block my-2 mr-md-2"
          >Stellenanzeige erstellen</b-button
        >
      </div>
    </b-container>

    <!-- <FixedAddJobBtn /> -->

    <Head
      title="Motivierte ArzthelferInnen – MFA & ZFA gesucht?"
      desc="MFA mal anders ist das Jobportal speziell nur für Medizinische / Zahnmedizinische Fachangestellte. Gesucht – Gefunden! Mit günstigen Stellenanzeigen, die wirklich ankommen."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import PayWhatYouWantSuggestion from "@/components/containers/PayWhatYouWantSuggestion.vue";
  import JobAdTippsBanner from "@/components/banners/JobAdTippsBanner.vue";
  import ApplicationProcessBanner from "@/components/banners/ApplicationProcessBanner.vue";
  // import FixedAddJobBtn from "@/components/buttons/FixedAddJobBtn.vue";
  export default {
    name: "Employer",
    components: {
      PayWhatYouWantSuggestion,
      JobAdTippsBanner,
      ApplicationProcessBanner
      // FixedAddJobBtn
    },
    data() {
      return {
        title: "Für Arbeitgeber",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Für Arbeitgeber", to: "/fuer-arbeitgeber" }
        ],
        jobAdTipps: [
          {
            icon: "drafting-compass",
            title: "Präziser Stellentitel",
            desc:
              "Beschreiben Sie die Stelle in wenigen Worten so konkret wie möglich. Heben Sie bereits hier die Vorteile für die Arbeit bei Ihnen hervor. Versuchen Sie positiv aufzufallen!"
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
          },
          {
            icon: "desktop",
            title: "Moderner Webauftritt",
            desc:
              "Platzieren Sie sich als moderner Arbeitgeber. Potentielle BewerberInnen informieren sich meist auf Ihrer Webseite über Ihr Unternehmen. Hier können Sie punkten und positiv herausstechen."
          }
        ],
        partners: [
          {
            name: "Landarzt sein.",
            img: "/img/landarztSein_logo.png",
            url:
              "https://www.landarzt-sein.de/?utm_source=mfa-mal-anders&utm_medium=linkref&utm_campaign=other"
          },
          {
            name: "Hausärzteverband HH",
            img: "/img/hzv-logo-hamburg2.png",
            url: "https://www.hausaerzteverband-hamburg.de/"
          },
          {
            name: "Hausärzteverband Westfalen-Lippe",
            img: "/img/hvwl_logo.png",
            url: "https://www.hausaerzteverband-wl.de/"
          },
          {
            name: "Ihre „gesunde“ Arztpraxis",
            img: "/img/ihreGesundeArztpraxis_logo2.png",
            url: "https://www.facebook.com/ihregesundearztpraxis/"
          }
        ],
        numbersAndFacts: [
          {
            icon: "google",
            number: 423000,
            current: 0,
            desc: "Menschen sehen uns monatlich bei Google"
          },
          {
            icon: "facebook",
            number: 28000,
            current: 0,
            desc: "Monatliche Reichweite bei Facebook"
          },
          {
            icon: "chrome",
            number: 53000,
            current: 0,
            desc: "Monatliche Seitenaufrufe auf der Webseite"
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
                                "name": "Für Arbeitgeber",
                                "item": "https://www.mfa-mal-anders.de/fuer-arbeitgeber"
                            }]
                        }`
          }
        ]
      };
    },
    mounted() {
      const elem = window.document.getElementById("numbers-and-facts");

      let intervalId = setInterval(() => {
        if (elem.offsetTop < window.scrollY + window.innerHeight * 0.66) {
          clearInterval(intervalId);
          this.startCounters();
        }
      }, 500);
    },
    methods: {
      startCounters() {
        this.numbersAndFacts.forEach(element => {
          setInterval(() => {
            if (element.current < element.number) {
              element.current = element.current + element.number / 100;
            }
          }, 1);
        });
      }
    }
  };
</script>