<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="py-3 py-lg-5">
      <b-img-lazy
        class="border-radius1 shadow1 mb-3 mb-lg-5 w-100"
        fluid
        srcset="/img/MfaMalAnders_Bewerbungstipps_1200-300x157.jpg 300w, /img/MfaMalAnders_Bewerbungstipps_1200-1024x538.jpg 1024w, /img/MfaMalAnders_Bewerbungstipps_1200-768x404.jpg 768w, /img/MfaMalAnders_Bewerbungstipps_1200.jpg 1200w"
        sizes="(max-width: 1200px) 100vw, 1200px"
        src="/img/MfaMalAnders_Bewerbungstipps_1200.jpg"
        alt="Banner - Schnell und einfach eine Top-Bewerbung schreiben"
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
        offset="1000"
      />
      <p>
        Hast du eine Stellenanzeige entdeckt, die dir richtig gut gefällt? Am
        liebsten würdest du dich bewerben, wäre da nicht der innere
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
      <blockquote>
        Bevor du dich nicht bewirbst und dir einen tollen Job entgehen lässt,
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
          href="/api/download/public/bewerbungsunterlagen"
          variant="primary"
          size="lg"
          @click="track('download', 'bewerbungsunterlagen')"
          >Download</b-button
        >
      </div>

      <h2 class="mb-4">
        Was braucht eine Top-Bewerbung damit du garantiert zum
        Vorstellungsgespräch eingeladen wirst?
      </h2>
      <h3 class="h5 bold">1. Der erste Eindruck muss stimmen</h3>
      <p>
        Die Bewerbung muss optisch ansprechend aussehen. Dafür brauchst du keine
        Skills eines Grafikers, um eine gut strukturierte und übersichtliche
        Bewerbung zu erstellen. In unserer Vorlage musst du nur noch deinen Text
        einfügen.
      </p>
      <p>
        Tipp: Passe die Farben in deiner Bewerbung denen des Unternehmens an.
        Das vermittelt direkt, dass du dich mit der Firma beschäftigt hast und
        dich mit ihr identifizierst. Es wird bei der Person, die deine Bewerbung
        sichtet, ein positives Gefühl erzeugen. Außerdem wirken deine Unterlagen
        individueller.
      </p>
      <h3 class="h5 bold">2. Das Bewerbungsbild ist kein Muss mehr</h3>
      <p>
        Früher musste jeder Bewerbung ein Foto beigefügt sein. Heute ist das
        nicht mehr gängige Praxis und viele Arbeitgeber erwähnen es auch nicht
        mehr in den Anforderungen an eine Bewerbung.
      </p>
      <p>
        Wenn du ein Bild von dir mitschicken möchtest, sollte es von guter
        Qualität und kein offensichtliches Selfie oder Urlaubsfoto sein. Es muss
        nicht im Blazer sein, sollte aber seriös und sympathisch aussehen. Falls
        du kein Foto von dir hast, muss du kein schlechtes Gewissen haben, wenn
        du keins mitschickst. Ein Arbeitgeber sollte deine Qualitäten nicht nach
        dem Aussehen oder daran messen, ob du ein Bild deiner Bewerbung
        anhängst.
      </p>
      <h2 class="mb-4">Das Motivationsschreiben</h2>
      <h3 class="h5 bold">1. Einleitung</h3>
      <p>
        Beginne mit einer kleinen Einleitung, die nicht mehr als 2-3 kurze Sätze
        beinhaltet. Wecke bei dem Gegenüber Interesse, beschreibe deine aktuelle
        Situation und warum du dich auf die Stelle bewerben willst.
      </p>
      <p>
        Schreibe keine Standard-Floskeln, die auf jede Firma treffen können. Sei
        so individuell wie möglich und verfasse einen Text, der genau zu der
        Stelle und dem Arbeitgeber passt.
      </p>
      <h3 class="h5 bold">2. Deine Qualifikationen</h3>
      <p>
        Beschreibe als nächstes deine Fertigkeiten, die zur Stelle passen.
        Orientiere dich hier an der Stellenanzeige und finde Beispiele aus
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
        Nenne zusätzlich ein konkretes Projekt oder Aufgabengebiet, in dem du in
        der Vergangenheit gearbeitet hast. Dies sollte wieder zur Stelle und dem
        genannten Aufgabenprofil passen.
      </p>
      <p>
        Ein Beispiel: Du bewirbst dich auf eine Stelle als Praxismanager/in in
        einer Praxis, die von Papier- auf digitale Akten umstellen will. Vor ein
        paar Jahren hast du das Prozedere bei deinem alten Arbeitgeber schon
        durchlaufen. Nutze die Erfahrung und erzähle davon:
      </p>
      <p>
        „In der Praxis XY habe ich aktiv bei der Umstellung von Papierakte auf
        digitale Patientenkartei mitgewirkt. Dabei war ich verantwortlich für
        die digitale Archivierung der vorhanden Papierdokumente und die
        Einführung eines Online-Dokumentensystems.“
      </p>
      <p>
        Erwähne auch Erfolge, die du in deinem Beruf erzielt hast. Beziehe dich
        hierbei am besten auf Projekte und Aufgabengebieten, die zur Stelle
        passen. Zum Beispiel, dass du für das Impfmanagement verantwortlich
        warst und ihr die durchschnittliche Impfquote in der Praxis durch dein
        Engagement deutlich erhöhen konntet.
      </p>
      <h3 class="h5 bold">3. Motivation und Ziele</h3>
      <p>
        Im letzten Absatz beschreibst du, was dich motiviert bei dem
        ausgewählten Unternehmen zu arbeiten. Warum möchtest du ausgerechnet in
        der Praxis oder der Firma arbeiten? Bessere Entwicklungsmöglichkeiten?
        Kleineres, familiäreres Team?
      </p>
      <h2 class="mb-4">Der Lebenslauf</h2>
      <p>
        Achte auch hier auf eine übersichtliche Darstellung und passe das Design
        farblich dem Anschreiben an.
      </p>
      <h3 class="h5 bold">Zum Aufbau</h3>
      <b-img
        style="width: 50vw; max-width: 350px"
        class="p-2"
        right
        src="@/assets/img/personal_data__monochromatic.svg"
        alt="Grafik von einem Lebenslauf"
      />
      <p>
        Liste deine beruflichen Stationen auf und schreibe immer 2-3 Beispiele
        zu den Aufgaben, die du bei den einzelnen Arbeitgebern hattest. Das
        macht deinen Lebenslauf etwas lebendiger und hebt dich von anderen
        Bewerbern ab.
      </p>
      <p>
        Deinen Bildungsweg kannst du ganz klassisch mit Name der Schule/
        Einrichtung, Dauer und dem erworbenen Abschluss aufführen. Bei guten und
        sehr guten Noten erwähne deine Abschlussnote. Man darf ruhig ein
        bisschen prahlen 😊.
      </p>
      <p>
        Gut ist immer, wenn du zusätzliche Qualifikationen erworben hast, die
        dich im Berufsleben weiterbringen. Diese solltest du unbedingt erwähnen.
        Dazu zählen z. B. Weiterbildungen, Fortbildungen, ein berufsbegleitendes
        Studium oder auch erworbene Kenntnisse, die du dir privat angeeignet
        hast.
      </p>
      <p>
        In der Mustervorlage findest du im Lebenslauf einen kleinen Abschnitt
        „Über mich“. Beschreibe dich in einem Satz oder stichpunktartig. Beziehe
        dich hier am besten auf die Anforderungen und Fertigkeiten von der
        Stellenanzeige und hebe deine Stärken hervor, die für die Stelle wichtig
        sind.
      </p>
      <p>
        Und jetzt, erstelle schnell deine Top-Bewerbung für deinen Traumjob. Mfa
        mal anders drückt dir die Daumen für die Bewerbung und wünscht viel
        Erfolg!
      </p>
      <div class="d-flex justify-content-center my-5">
        <b-button
          href="/api/download/public/bewerbungsunterlagen"
          variant="primary"
          size="lg"
          @click="track('download', 'bewerbungsunterlagen')"
          >Download Bewerbungsunterlagen</b-button
        >
      </div>

      <ToJobboardBanner class="my-5 mx-auto" />
      <RandomArticlesContainer class="my-5 mx-auto" />
    </b-container>

    <Head
      :title="title"
      desc="Bewerbungstipps für Medizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Kostenlose Bewerbungsvorlage | Tipps und mehr"
      img="/img/MfaMalAnders_Bewerbungstipps_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import RandomArticlesContainer from "@/components/containers/RandomArticlesContainer.vue";

  export default {
    name: "CareerBewerbungstipps",
    components: {
      ToJobboardBanner,
      RandomArticlesContainer
    },
    data() {
      return {
        title: "Bewerbungstipps für MFAs / ZFAs",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          { text: "Bewerbungstipps", to: "/karriere/bewerbungstipps" }
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
                                "name": "Karriere",
                                "item": "https://www.mfa-mal-anders.de/karriere"
                            },{
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Bewerbungstipps",
                                "item": "https://www.mfa-mal-anders.de/karriere/bewerbungstipps"
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

        this.$matomo &&
          this.$matomo.trackEvent("engagement", eventAction, eventLabel);
      }
    }
  };
</script>
