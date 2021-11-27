<template>
  <div class="jobs-berufsbilder-home">
    <div class="title">
      <h1>
        {{ title }}
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <div class="row">
        <div class="col-12 col-md-4 order-2 order-md-1 mb-4">
          <JobsBerufsbilderNav />
          <TrainingCatalogueSmallBanner class="my-3" />
        </div>
        <div class="col order-1 order-md-2 mb-4">
          <b-img-lazy
            class="border-radius1 shadow1 mb-3 mb-lg-5"
            fluid
            srcset="
              /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_350.jpg 350w,
              /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_579.jpg 579w,
              /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_782.jpg 782w,
              /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg 1200w
            "
            sizes="(max-width: 992px) 100vw, 800px"
            src="/img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg"
            alt="50+ Alternative Jobs für MFA / ZFA / ArtzhelferInnen"
            width="1200"
            height="630"
            blank-width="1200"
            blank-height="630"
            offset="1000"
          />
          <h2 class="bold">
            Wo man als MFA | ZFA überall arbeiten kann?
          </h2>
          <p>
            Sprechstundenhilfe sind wir schon lange nicht mehr. Als Medizinische
            Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) und
            ArzthelferIn sind wir Organisationstalente, Medizinische
            Assistenten, SekretärInnen, Seelsorger, Logistiker,
            Abrechnungsprofis und Aushängeschild der gesamten Praxis. Wahre
            Medizinengel eben. Du merkst schon: Das Aufgabenspektrum und Jobs
            für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte
            und ArzthelferInnen sind wahnsinnig vielfältig.
          </p>
          <p>
            Wenn du deine tagtäglichen Aufgaben als MFA in der Arztpraxis einmal
            auflisten würdest, wären darunter bestimmt folgende:
          </p>
          <ul>
            <li>Abrechnung</li>
            <li>Anmeldungstätigkeiten</li>
            <li>Termine vereinbaren</li>
            <li>Verband wechseln</li>
            <li>Blutabnehmen</li>
            <li>Patientengespräche</li>
            <li>Deeskalieren</li>
            <li>Planen, organisieren</li>
            <li>Bei medizinischen Eingriffen assistieren</li>
            <li>Labortätigkeiten</li>
            <li>Mit Krankenkassen, Heimen, etc. telefonieren</li>
            <li>Untersuchungen durchführen</li>
            <li>...</li>
          </ul>
          <p>
            Diese Liste könntest du sicherlich noch um einige Aufgaben mehr
            erweitern. Erkennst du, welch ein Multitalent du bist? MFA | ZFA zu
            sein, bedeutet nicht nur am Empfang zu sitzen, Termine zu vereinbare
            und die Versicherungskarte durch den Schlitz zu ziehen. Als MFA |
            ZFA bist du AllrounderIn. Schon während der Ausbildung zur
            Medizinischen Fachangestellten | Zahnmedizinischen Fachangestellten
            erwirbst du ein enormes medizinisches Wissen, welches sich im Laufe
            deiner Berufsjahre je nach Fachrichtung spezialisiert und vertieft
            oder sogar umfassend erweitert, wenn du Erfahrungen in
            unterschiedlichen Fachrichtungen sammelst.
          </p>
          <p>
            MFA | ZFA sind zudem wahre Organisationstalente, bleiben auch in
            hektischen Situationen ruhig und können den Praxisalltag so managen,
            dass sowohl Arzt als auch Patient einen reibungslosen Ablauf
            erfahren. Zudem hast du Kenntnisse über die kassen- und
            privatärztliche Abrechnung und kennst die Rahmenbedingungen und
            Maschinerie des deutschen Gesundheitswesens.
          </p>
          <p>
            Durch diverse
            <b-link class="bold" to="/karriere/fort-und-weiterbildung"
              >Fort- und Weiterbildungen</b-link
            >
            kannst du auf deinen Wissensstand aufbauen, ihn vertiefen,
            spezialisieren oder sogar ganz neue Karriererichtungen einschlagen.
          </p>
          <p>
            Weil wir so viele Kompetenzen mitbringen, sind MFA | ZFA nicht nur
            in der Arztpraxis beliebt. Der Job bietet in viele Richtungen des
            Gesundheitswesens verschiedene Aufstiegsmöglichkeiten. Auch
            verschiedenste alternative Jobs und Berufe mit der Ausbildung als
            Medizinische Fachangestellte | Zahnmedizinische Fachangestellte sind
            möglich.
          </p>
          <p>
            Hast Du schon einmal gedacht:
            <strong>"Ich will keine MFA mehr sein"</strong>? Willst Du Deinem
            Job als Medizinische Fachangestellte | Zahnmedizinische
            Fachangestellte neuen Schwung geben, Dein Gehalt aufbessern oder
            bist einfach auf der Suche nach alternativen Jobs für Medizinische
            Fachangestellte | Zahnmedizinische Fachangestellte?
          </p>
          <p>
            Wenn du nicht weißt, welche Türen dir offen stehen, informiere Dich
            hier über Deine Chancen als ausgebildete/r ArzthelferIn. Ganz
            gleich, ob Du den direkten Patientenkontakt liebst, gerne
            organisatorische Aufgaben erledigst oder Dich lieber für einen
            alternativen Job außerhalb der Arztpraxis interessierst.
          </p>

          <h2 class="mt-4">
            <span class="display-4 bold d-block mb-1"
              >50+ Jobmöglichkeiten</span
            >
            für MFA & ZFA in 5 Bereichen
          </h2>
          <ProfessionTypeContainer class="mb-4" :col-md="12" :col-lg="6" />

          <p>
            Das Gesundheitswesen besteht bekannterweise nicht nur aus
            Krankenhäusern und ambulanten Arztpraxen. Wenn du nach einem neuen
            Job für dich suchst, überlege einmal, welche "Anbieter" es im
            Gesundheitswesen und darüber hinaus noch gibt und schau auch nach
            nicht-MFA-typischen Jobs. Du wirst dich wundern, welche Firmen Jobs
            anzubieten haben, die du mit dem Hintergrundwissen aus der
            Arztpraxis sehr gut erfüllen kannst. Hier ein paar Anregungen:
          </p>
          <ul>
            <li>Physiotherapiepraxis</li>
            <li>Heilpraktikerpraxis</li>
            <li>Gerichtsmedizin</li>
            <li>Gesundheitsämter</li>
            <li>Andere Behörden, z.B. Jugendamt</li>
            <li>Arbeitsmedizinische Zentren</li>
            <li>
              Büros jeglicher Art (dies sind oft Positionen als Office Manager)
            </li>
            <li>Polizei</li>
            <li>Kassenärztliche Vereinigungen</li>
            <li>Ärztekammer</li>
            <li>Verbände (z.B. Hausärzteverband, VMF, etc.)</li>
            <li>Bildungsträger / Berufsschulen für MFA, ZFA</li>
            <li>Fortbildungsanbieter im Gesundheitswesen</li>
            <li>Medizinische Schreibbüros</li>
            <li>Bundeswehr</li>
            <li>MDK</li>
            <li>Krankenkassen</li>
            <li>Abrechnungsunternehmen/ Abrechnungsberatungen</li>
            <li>Pflegeheime / Ambulante Pflegedienste</li>
            <li>...</li>
          </ul>

          <p>
            In unserer
            <b-link class="bold" to="/stellenangebote">Stellenbörse</b-link>
            findest du außerdem regemäßig interessante Jobs für MFA | ZFA mit
            wertschätzenden Arbeitgebern aus der Arztpraxis oder darüber hinaus.
          </p>

          <ToJobboardBanner class="mt-5" />
        </div>
      </div>
      <RandomTrainingsContainer class="mt-5" />
    </div>
    <Head
      :title="title"
      desc="50+ Alternative Jobs / Berufe für Zahnmedizinische | Medizinische Fachangestellte (ZFA / MFA) / ArzthelferIn || Stellenangebote | Fortbildungen | Weiterbildungen"
      img="/img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import JobsBerufsbilderNav from "@/components/navs/JobsBerufsbilderNav.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import ProfessionTypeContainer from "@/components/containers/ProfessionTypeContainer.vue";
  import TrainingCatalogueSmallBanner from "@/components/banners/TrainingCatalogueSmallBanner.vue";
  export default {
    name: "CareerJobsBerufsbilderHome",
    components: {
      JobsBerufsbilderNav,
      RandomTrainingsContainer,
      ToJobboardBanner,
      ProfessionTypeContainer,
      TrainingCatalogueSmallBanner
    },
    data() {
      return {
        title: `50+ Alternative Jobs ${new Date().getFullYear()} für MFA & ZFA`,
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Jobs & Berufsbilder",
            to: "/karriere/jobs-und-berufsbilder"
          }
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
                "name": "Jobs und Berufsbilder",
                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"
              }]
            }`
          },
          {
            type: "application/ld+json",
            inner: `{
              "@context": "http://schema.org",
              "@type" : "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Welche alternativen Jobs gibt es für Medizinische Fachangestellte (MFA) / ArzthelferIn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Für Medizinische Fachangestellte (MFA) / ArzthelferInnen gibt es zahlreiche berufliche Alternativen. In verschiedenen Bereichen wie Beratung, Forschung, Management, Verwaltung oder im medizinische-technischen Bereich kann eine ausgebildete MFA Tätigkeiten z.B. als Study Nurse, PraxisberaterIn, AbrechnungsmanagerIn, PraxismanagerIn, VERAH und vieles mehr durchführen. Es gibt weit über 50 passende alternative Berufsfelder."
                }
              }]
            }`
          }
        ]
      };
    }
  };
</script>
