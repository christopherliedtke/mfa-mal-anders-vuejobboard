<template>
  <div>
    <div class="title">
      <h1>
        {{ title }} <br />
        <span class="h3">Tipps | Beispiele | Vorlage</span>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <b-img-lazy
        class="border-radius1 shadow1 mb-3 mb-lg-5 w-100"
        fluid
        srcset="
          /img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_350.jpg 350w,
          /img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_745.jpg 745w,
          /img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_1200.jpg 1200w
        "
        sizes="100vw"
        src="/img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_1200.jpg"
        alt="Banner - Schnell und einfach eine Top-Bewerbung schreiben"
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
        offset="1000"
      />
      <p>
        Hast Du eine Stellenanzeige entdeckt, die Dir richtig gut gefällt? Am
        liebsten würdest Du Dich bewerben, wäre da nicht der innere
        Schweinehund, dem es vor der Erstellung der Bewerbungsunterlagen graut.
      </p>
      <p>
        Nutze unsere Vorlage zum Anschreiben und Lebenslauf und erstelle schnell
        und unkompliziert eine Top-Bewerbung.
      </p>
      <p>
        Bewerbungsunterlagen unterliegen heute nicht mehr ganz so strengen
        Vorschriften, wie es noch vor ein paar Jahren der Fall war. Die meisten
        Arbeitgeber suchen händeringend nach neuen Mitarbeitern. Daher sollte
        der Bewerbungsprozess für Kandidaten so einfach, wie möglich gemacht
        werden.
      </p>

      <nav class="content my-4 py-4 px-3 px-lg-5">
        <h2 class="h1">Inhalt</h2>
        <ol class="text-tertiary pl-4">
          <li class="lead mt-3">
            <b-link to="#anschreiben">Bewerbungsschreiben</b-link>
            <ol>
              <li class="lead mt-3">
                <b-link to="#anschreiben-briefkopf">Briefkopf</b-link>
              </li>
              <li class="lead mt-3">
                <b-link to="#anschreiben-betreff">Betreff</b-link>
              </li>
              <li class="lead mt-3">
                <b-link to="#anschreiben-anrede">Anrede</b-link>
              </li>
              <li class="lead mt-3">
                <b-link to="#anschreiben-einleitung">Einleitung</b-link>
              </li>
              <li class="lead mt-3">
                <b-link to="#anschreiben-hauptteil">Hauptteil</b-link>
                <ol>
                  <li class="lead mt-3">
                    <b-link to="#anschreiben-hauptteil-qualifikationen"
                      >Qualifikationen</b-link
                    >
                  </li>
                  <li class="lead mt-3">
                    <b-link to="#anschreiben-hauptteil-motivation"
                      >Motivation & Ziele</b-link
                    >
                  </li>
                </ol>
              </li>
              <li class="lead mt-3">
                <b-link to="#anschreiben-schlussteil">Schlussteil</b-link>
                <ol>
                  <li class="lead mt-3">
                    <b-link to="#anschreiben-schlussteil-gehaltsvorstellungen"
                      >Gehaltsvorstellungen</b-link
                    >
                  </li>
                  <li class="lead mt-3">
                    <b-link to="#anschreiben-schlussteil-eintrittsdatum"
                      >Eintrittsdatum</b-link
                    >
                  </li>
                  <li class="lead mt-3">
                    <b-link to="#anschreiben-schlussteil-letzter-satz"
                      >Letzter Satz</b-link
                    >
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li class="lead mt-3">
            <b-link to="#lebenslauf">Lebenslauf</b-link>
          </li>
          <ol>
            <li class="lead mt-3">
              <b-link to="#lebenslauf-aufbau-persoenliche-daten"
                >Persönliche Daten</b-link
              >
            </li>
            <li class="lead mt-3">
              <b-link to="#lebenslauf-aufbau-berufliche-stationen"
                >Berufliche Stationen</b-link
              >
            </li>
            <li class="lead mt-3">
              <b-link to="#lebenslauf-aufbau-bildung">Bildung</b-link>
            </li>
            <li class="lead mt-3">
              <b-link to="#lebenslauf-aufbau-besondere-qualifikationen"
                >Besondere Qualifikationen und Kenntnisse</b-link
              >
            </li>
            <li class="lead mt-3">
              <b-link to="#lebenslauf-aufbau-hobbys"
                >Hobbys und weitere Interessen und Tätigkeiten</b-link
              >
            </li>
          </ol>
        </ol>
      </nav>

      <blockquote>
        Bevor Du Dich nicht bewirbst und Dir einen tollen Job entgehen lässt,
        nutze unsere Vorlage für eine Top Bewerbung inklusive Anschreiben und
        Lebenslauf.
      </blockquote>
      <div class="d-flex justify-content-center mb-5">
        <b-img
          class="mx-3 shadow1"
          style="width: 35vw; max-width: 300px; height: auto"
          src="@/assets/img/Vorlage_Bewerbungsanschreiben_300.jpg"
          alt="Bild von Mustervorlage für Motivationsschreiben"
          width="300"
          height="425"
        />
        <b-img
          class="mx-3 shadow1"
          style="width: 35vw; max-width: 300px; height: auto"
          src="@/assets/img/Vorlage_Lebenslauf_300.jpg"
          alt="Bild von Mustervorlage für Lebenslauf"
          width="300"
          height="425"
        />
      </div>

      <div class="d-flex justify-content-center mb-5">
        <b-button
          href="/downloads/Bewerbungsunterlagen.zip"
          variant="primary"
          size="lg"
          @click="track('download', 'bewerbungsunterlagen')"
          >Download</b-button
        >
      </div>

      <h2 class="mb-4">
        Mit einer Top-Bewerbung zum Vorstellungsgespräch
      </h2>
      <p>
        Auch wenn Medizinische Fachangestelle | Zahnmedizinische Fachangestellte
        heute sehr gefragt sind und sich Ihren Arbeitgeber in der Regel
        aussuchen können, ist es immer von Vorteil, mit seiner Bewerbung positiv
        hervorzustechen. Je nachdem, in welchem Bereich man sich bewirbt
        (Arztpraxis, MVZ, Krankenhaus, Verwaltung ...) sind mehr oder weniger
        spezialisierte Personaler für die Sichtung deiner Unterlagen
        verantwortlich. Auch die Qualität und Quantität der Konkurrenz kann sehr
        unterschiedlich sein.
      </p>
      <p>
        Erfahrungsgemäß ist es nicht besonders schwer positiv aufzufallen, da
        viele MitbewerberInnen oftmals nicht in der Lage sind, eine fehlerfreie
        und ansehnliche Bewerbung zusammenzustellen. Mit unseren Tipps gehörst
        Du garantiert nicht zu dieser Gruppe.
      </p>
      <h3 class="h5 bold">Der erste Eindruck muss stimmen</h3>
      <p>
        Die Bewerbung muss optisch ansprechend aussehen. Dafür brauchst Du keine
        Skills eines Grafikers, um eine gut strukturierte und übersichtliche
        Bewerbung zu erstellen. In unserer Vorlage musst Du nur noch deinen Text
        einfügen.
      </p>
      <p>
        Tipp: Passe die Farben in deiner Bewerbung denen des Unternehmens an.
        Das vermittelt direkt, dass Du Dich mit der Firma beschäftigt hast und
        Dich mit ihr identifizierst. Es wird bei der Person, die deine Bewerbung
        sichtet, ein positives Gefühl erzeugen. Außerdem wirken deine Unterlagen
        individueller.
      </p>
      <h3 class="h5 bold">Das Bewerbungsbild ist kein Muss mehr</h3>
      <p>
        Früher musste jeder Bewerbung ein Foto beigefügt sein. Heute ist das
        nicht mehr gängige Praxis und viele Arbeitgeber erwähnen es auch nicht
        mehr in den Anforderungen an eine Bewerbung.
      </p>
      <p>
        Wenn Du ein Bild von Dir mitschicken möchtest, sollte es von guter
        Qualität und kein offensichtliches Selfie oder Urlaubsfoto sein. Es muss
        nicht im Blazer sein, sollte aber seriös und sympathisch aussehen. Falls
        Du kein Foto von Dir hast, muss Du kein schlechtes Gewissen haben, wenn
        Du keins mitschickst. Ein Arbeitgeber sollte deine Qualitäten nicht nach
        dem Aussehen oder daran messen, ob Du ein Bild deiner Bewerbung
        anhängst.
      </p>

      <JobSeeksLargeBanner class="my-4 my-lg-5" />

      <h2 id="anschreiben" class="my-4">
        <span class="display-4 bold">Bewerbungs&shy;schreiben</span> <br />
        <span class="h5"
          >für Medizinische Fachangestellte (MFA) & Zahnmedizinische
          Fachangestellte (ZFA)</span
        >
      </h2>
      <h3 id="anschreiben-briefkopf">Briefkopf</h3>
      <p>
        Ein korrekter Briefkopf für Dein Anschreiben sollte folgende
        Bestandteile beinhalten:
      </p>
      <h4 class="h5 bold">Deine Anschrift</h4>
      <ul>
        <li>Vor- und Nachname</li>
        <li>Staße und Hausnummer</li>
        <li>PLZ und Wohnort</li>
        <li>Telefonnummer</li>
        <li>E-Mail Adresse</li>
      </ul>
      <h4 class="h5 bold">Die Adresse des Empfängers</h4>
      <ul>
        <li>Name des Arbeitgebers</li>
        <li>
          Idealerweise kennst Du die AnsprechpartnerIn für die offene Stelle mit
          Anrede, Vor- und Nachname
        </li>
        <li>Straße und Hausnummer</li>
        <li>PLZ und Wohnort</li>
      </ul>
      <h4 class="h5 bold mb-4">Aktuelles Datum und Ort</h4>

      <h3 id="anschreiben-betreff">Betreff</h3>
      <p>
        Im Betreff Deines Anschreibens weist Du direkt auf die Stellenanzeige
        hin. Gibt es eine Referenznummer zur Stellenanzeige, ist hier die
        richtige Stelle, um diese zu erwähnen. Für die Übersichtlichkeit der
        gesamten Bewerbung, ist es ratsam, den Betreff in fett zu formatieren.
        Deine Betreffzeile für das Anschreiben könnte beispielsweise wie folgt
        aussehen:
      </p>
      <blockquote class="lead mb-4">
        Bewerbung als Medizinische Fachangestellte im Bereich XY –
        Referenznummer XY
      </blockquote>

      <h3 id="anschreiben-anrede">Anrede</h3>
      <p>
        Für die Anrede im Anschreiben ist es ideal, wenn Du die korrekte
        AnsprechpartnerIn bereits per Namen kennst. In der Regel findest Du die
        AnsprechpartnerIn in der Stellenanzeige.
      </p>
      <p>
        Wenn Du vorab Fragen zur Stellenanzeige hast und eine in der Anzeige
        eine Telefonnummer ausgewiesen ist, kannst Du die Gelegenheit direkt
        nutzen und neben Antworten zu Deinen Fragen auch gleich den Namen der
        AnsprechpartnerIn herauszubekommen. Das unterstreicht auch noch einmal
        Deine Motivation und Du bleibst wahrscheinlich im Gedächtnis hängen.
      </p>
      <p>
        Achte unbedingt darauf, den Namen korrekt zu schreiben, sonst ist der
        erste Eindruck direkt dahin.
      </p>

      <h3 id="anschreiben-einleitung">Einleitung</h3>
      <p>
        Beginne mit einer kleinen Einleitung, die nicht mehr als 2-3 kurze Sätze
        beinhaltet. Wecke bei dem Gegenüber Interesse, beschreibe deine aktuelle
        Situation und warum Du Dich auf die Stelle bewerben willst.
      </p>
      <p>
        Fragen, die Du in Deiner Einleitung bereits beantworten kannst:
      </p>
      <ul>
        <li>
          Warum bewirbst Du Dich?
        </li>
        <li>
          Was interessiert Dich an dem Arbeitgeber?
        </li>
        <li>
          Warum bist Du die Richtige für die Stelle (mit 1-2 Stichworten passend
          zur Stellenausschreibung)?
        </li>
        <li>
          Welche Kompetenz / Erfahrung macht Dich zur idealen BewerberIn?
        </li>
      </ul>
      <p>
        Schreibe keine Standard-Floskeln, die auf jede Firma zutreffen können.
        Sei so individuell wie möglich und verfasse einen Text, der genau zu der
        Stelle und dem Arbeitgeber passt. Hier ein paar Beispiele:
      </p>
      <blockquote class="lead">
        Meine X Jahre Berufserfahrung als AbrechnungsmanagerIn in einer
        Arztpraxis möchte ich gern in einem neuen ambitionierten Arbeitsumfeld
        in Ihrem Team einbringen...
      </blockquote>
      <blockquote class="lead mb-4">
        Das Thema XY beschäftigt mich in meinem beruflichen Alltag als
        Medizinische Fachangestellte schon seit einiger Zeit. Gern würde ich
        meine erworbenen Kompetenzen in dem Bereich als XY in Ihrem Unternehmen
        einbringen...
      </blockquote>

      <h3 id="anschreiben-hauptteil">Hauptteil</h3>
      <h4 id="anschreiben-hauptteil-qualifikationen">Deine Qualifikationen</h4>
      <p>
        Beschreibe als nächstes deine Fertigkeiten, die zur Stelle passen.
        Orientiere Dich hier an der Stellenanzeige und finde Beispiele aus
        deiner bisherigen beruflichen Praxis und deinen Erfahrungen, die dazu
        passen. Erwähne auch Fortbildungen und Weiterbildungen, die für die
        Stelle relevant sein können.
      </p>
      <b-img
        style="width: 50vw; max-width: 350px"
        class="pr-3 pr-md-5 pb-3"
        left
        src="@/assets/img/innovation_.svg"
        alt="Person bearbeitet Bewerbungsunterlagen am Schreibtisch"
      />
      <p>
        Nenne zusätzlich ein konkretes Projekt oder Aufgabengebiet, in dem Du in
        der Vergangenheit gearbeitet hast. Dies sollte wieder zur Stelle und dem
        genannten Aufgabenprofil passen.
      </p>
      <p>
        Ein Beispiel: Du bewirbst Dich auf eine Stelle als Praxismanager/in in
        einer Praxis, die von Papier- auf digitale Akten umstellen will. Vor ein
        paar Jahren hast Du das Prozedere bei deinem alten Arbeitgeber schon
        durchlaufen. Nutze die Erfahrung und erzähle davon:
      </p>
      <p>
        „In der Praxis XY habe ich aktiv bei der Umstellung von Papierakte auf
        digitale Patientenkartei mitgewirkt. Dabei war ich verantwortlich für
        die digitale Archivierung der vorhanden Papierdokumente und die
        Einführung eines Online-Dokumentensystems.“
      </p>
      <p>
        Erwähne auch Erfolge, die Du in deinem Beruf erzielt hast. Beziehe Dich
        hierbei am besten auf Projekte und Aufgabengebieten, die zur Stelle
        passen. Zum Beispiel, dass Du für das Impfmanagement verantwortlich
        warst und ihr die durchschnittliche Impfquote in der Praxis durch dein
        Engagement deutlich erhöhen konntet.
      </p>
      <h4 id="anschreiben-hauptteil-motivation">Motivation und Ziele</h4>
      <p>
        Im letzten Absatz beschreibst du, was Dich motiviert bei dem
        ausgewählten Unternehmen zu arbeiten. Warum möchtest Du ausgerechnet in
        der Praxis oder der Firma arbeiten? Bessere Entwicklungsmöglichkeiten?
        Kleineres, familiäreres Team?
      </p>
      <h3 id="anschreiben-schlussteil">Schlussteil</h3>
      <p>
        Mit dem Schlussteil kannst Du Deine Bewerbung abrunden und noch einmal
        auf ein paar wichtige Eckpunkte Deiner Bewerbung eingehen.
      </p>
      <h4 id="anschreiben-schlussteil-gehaltsvorstellungen">
        Gehaltsvorstellungen
      </h4>
      <p>
        Insofern in der Stellenauschreibung nicht explizit darauf hingewiesen
        wird, einen Gehaltswunsch anzugeben, ist dieser Teil nicht zwingend
        notwendig. Möchtest Du jedoch auf Nummer sicher gehen, dass Dein
        Gehaltswunsch zum Budget der Stelle passt, ist es empfehlenswert hier
        einen Wert anzugeben. Wenn Du unsicher bist, wie viel Gehalt Du
        verlangen kannst, schau Dir unseren
        <b-link to="/karriere/mfa/gehalt#gehaltsrechner"
          >MFA Gehaltsrechner</b-link
        >
        bzw.
        <b-link to="/karriere/zfa/gehalt#gehaltsrechner"
          >ZFA Gehaltsrechner</b-link
        >
        an. Du solltest Dich in jedem Fall nicht unter Wert verkaufen.
      </p>
      <blockquote class="lead">
        Meine Gehaltsvorstellungen liegen bei 3.200,- Euro brutto im Monat.
      </blockquote>
      <h4 id="anschreiben-schlussteil-eintrittsdatum">Eintrittsdatum</h4>
      <p>
        Gib unbedingt auch Dein frühstmögliches Eintrittsdatum an. Schaue
        gegebenenfalls noch einmal in Deinen aktuellen Arbeitsvertrag, um Deine
        Kündigungsfrist zu prüfen.
      </p>
      <blockquote class="lead">
        Ab dem XY stehe ich Ihnen mit meinem vollen Engagement zur Verfügung.
      </blockquote>
      <h4 id="anschreiben-schlussteil-letzter-satz">Letzter Satz</h4>
      <p>
        Im letzten Satz des Anschreibens verabschiedest Du Dich höflich und
        bekräftigst, dass Du Dich über eine Einladung zum Vorstellungsgespräch
        freust.
      </p>
      <blockquote class="lead">
        Über eine Einladung zum persönlichen Gespräch freue ich mich.
      </blockquote>

      <h2 id="lebenslauf" class="my-4">
        <span class="display-4 bold">Lebenslauf</span> <br />
        <span class="h5"
          >für Medizinische Fachangestellte (MFA) & Zahnmedizinische
          Fachangestellte (ZFA)</span
        >
      </h2>
      <p>
        Achte auch hier auf eine übersichtliche Darstellung und passe das Design
        farblich dem Anschreiben an.
      </p>
      <h3 id="lebenslauf-aufbau">Aufbau und Inhalte</h3>
      <p>
        Was gehört alles in einen Lebenslauf? Hier geben wir Dir eine Übersicht.
      </p>
      <b-img
        style="width: 50vw; max-width: 350px"
        class="p-2"
        right
        src="@/assets/img/personal_data__monochromatic.svg"
        alt="Grafik von einem Lebenslauf"
      />
      <h4 id="lebenslauf-aufbau-persoenliche-daten">Persönliche Daten</h4>
      <p>
        Zu Deinen perönlichen Daten gehören
        <strong>Vor- und Nachname, Anschrift</strong>. Heutzutage haben Dinge
        wie Staatsangehörigkeit, Familienstand oder Geburtsdatum im Normalfall
        nicht in die Bewerbung. Das verhindert zumindest in gewissem Maße, dass
        Du wegen dieser Faktoren diskriminierst wirst. Sollte Dir so etwas im
        Laufe Deiner Bewerbung passieren, solltest Du Dich unbedingt an
        <b-link
          href="https://www.antidiskriminierungsstelle.de/DE/startseite/startseite-node.html"
          target="_blank"
          >entsprechende Stellen</b-link
        >
        wenden.
      </p>
      <h4 id="lebenslauf-aufbau-berufliche-stationen">Berufliche Stationen</h4>
      <p>
        Liste deine beruflichen Stationen auf und schreibe immer 2-3 Beispiele
        zu den Aufgaben, die Du bei den einzelnen Arbeitgebern hattest. Das
        macht deinen Lebenslauf etwas lebendiger und hebt Dich von anderen
        Bewerbern ab. Auch Praktika und Ausbildung gehören hierher. Achte
        darauf, dass Dein Lebenslauf speziell an dieser Stelle lückenlos ist.
        Hast Du berufliche Auszeiten genommen, gib diese an. Idealerweise kannst
        Du sogar persönliche Kompetenzgewinne aus der Auszeit ableiten.
      </p>
      <p>
        Du könntest beispielsweise aus Deiner Elternzeit auf Deine
        Stressresistenz und Organisationstalent hinweisen.
      </p>
      <h4 id="lebenslauf-aufbau-bildung">Bildung</h4>
      <p>
        Deinen Bildungsweg kannst Du ganz klassisch mit Name der Schule/
        Einrichtung, Dauer und dem erworbenen Abschluss aufführen. Bei guten und
        sehr guten Noten erwähne deine Abschlussnote. Man darf ruhig ein
        bisschen prahlen 😊.
      </p>
      <h4 id="lebenslauf-aufbau-besondere-qualifikationen">
        Besondere Qualifikationen und Kenntnisse
      </h4>
      <p>
        Gut ist immer, wenn Du zusätzliche Qualifikationen erworben hast, die
        Dich im Berufsleben weiterbringen. Diese solltest Du unbedingt erwähnen.
        Dazu zählen z. B. Weiterbildungen, Fortbildungen, ein berufsbegleitendes
        Studium oder auch erworbene Kenntnisse, die Du Dir privat angeeignet
        hast.
      </p>
      <p>
        Auch spezielle EDV-Kenntnisse, Sprachkenntnisse oder beispielsweise
        einen Führerschein solltest Du hier erwähnen.
      </p>
      <h4 id="lebenslauf-aufbau-hobbys">
        Hobbys und weitere Interessen und Tätigkeiten
      </h4>
      <p>
        Hier solltest Du nicht unbedingt alles aufzählen, was Dir einfällt.
        Achte stattdessen darauf, Tätigkeiten zu erwähnen, die Dich auch im
        beruflichen Leben an der einen oder anderen Stelle weiterbringen.
      </p>
      <p>
        In der Mustervorlage findest Du im Lebenslauf einen kleinen Abschnitt
        „Über mich“. Beschreibe Dich in einem Satz oder stichpunktartig. Beziehe
        Dich hier am besten auf die Anforderungen und Fertigkeiten von der
        Stellenanzeige und hebe deine Stärken hervor, die für die Stelle wichtig
        sind.
      </p>
      <p>
        Und jetzt, erstelle schnell deine Top-Bewerbung für deinen Traumjob. Mfa
        mal anders drückt Dir die Daumen für die Bewerbung und wünscht viel
        Erfolg!
      </p>
      <div class="d-flex justify-content-center my-5">
        <b-button
          href="/downloads/Bewerbungsunterlagen.zip"
          variant="primary"
          size="lg"
          @click="track('download', 'bewerbungsunterlagen')"
          >Download Bewerbungsunterlagen</b-button
        >
      </div>

      <ToJobboardBanner class="my-5 mx-auto" />
      <RandomArticlesContainer class="my-5 mx-auto" />
    </div>

    <ScrollToTopBtn />

    <Head
      :title="title + ' | Tipps | Beispiele | Vorlage'"
      desc="Bewerbungstipps für Medizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Lebenslauf | Anschreiben | Tipps und mehr"
      img="/img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import RandomArticlesContainer from "@/components/containers/RandomArticlesContainer.vue";
  import JobSeeksLargeBanner from "@/components/banners/JobSeeksLargeBanner.vue";
  import ScrollToTopBtn from "@/components/buttons/ScrollToTopBtn.vue";
  import { scrollToHashMixin } from "@/mixins/scrollToHashMixin";
  export default {
    name: "CareerBewerbung",
    components: {
      ToJobboardBanner,
      RandomArticlesContainer,
      JobSeeksLargeBanner,
      ScrollToTopBtn
    },
    mixins: [scrollToHashMixin],
    data() {
      return {
        title: "Bewerbung für MFA & ZFA",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          { text: "Bewerbung", to: "/karriere/bewerbung" }
        ],
        snippet: [
          {
            id: "breadcrumbs",
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
                                "name": "Bewerbung",
                                "item": "https://www.mfa-mal-anders.de/karriere/bewerbungs"
                            }]
                        }`
          }
        ]
      };
    },
    methods: {
      track(eventAction, eventLabel) {
        this.$gtag.event(eventAction, {
          event_label: eventLabel
        });
      }
    }
  };
</script>
