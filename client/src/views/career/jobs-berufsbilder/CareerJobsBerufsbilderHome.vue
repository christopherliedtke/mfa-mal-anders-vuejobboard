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
            srcset="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200-300x157.jpg 300w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-1024x538.jpg 1024w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-768x403.jpg 768w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg 1200w"
            sizes="(max-width: 992px) 100vw, 800px"
            src="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg"
            alt="50+ Alternative Jobs für MFA / ZFA / ArtzhelferInnen"
            width="1200"
            height="630"
            blank-width="1200"
            blank-height="630"
            offset="1000"
          />
          <h2 class="bold">
            Wo man als MFA / ZFA überall arbeiten kann?
          </h2>
          <p>
            Sprechstundenhilfe sind wir schon lange nicht mehr. Als Medizinische
            & Zahnmedizinische Fachangestellte (MFA / ZFA) und ArzthelferIn sind
            wir Organisationstalente, Medizinische Assistenten, SekretärInnen,
            Seelsorger, Logistiker, Abrechnungsprofis und Aushängeschild der
            gesamten Praxis. Du merkst schon: Die Aufgabenspektren und Jobs für
            Medizinische & Zahnmedizinische Fachangestellte und ArzthelferInnen
            sind wahnsinnig vielfältig.
          </p>
          <p>
            Weil wir so viele Kompetenzen mitbringen, sind MFAs nicht nur in der
            Arztpraxis beliebt. Der Job bietet in viele Richtungen des
            Gesundheitswesens verschiedene Aufstiegsmöglichkeiten. Auch
            verschiedenste alternative Jobs und Berufe mit der Ausbildung als
            Medizinische Fachangestellte sind möglich.
          </p>
          <p>
            Hast Du schon einmal gedacht:
            <strong>"Ich will keine MFA mehr sein"</strong>? Willst Du Deinem
            Job als Medizinische / Zahnmedizinische Fachangestellte neuen
            Schwung geben, Dein Gehalt aufbessern oder bist einfach auf der
            Suche nach alternativen Jobs für Medizinische / Zahnmedizinische
            Fachangestellte?
          </p>
          <p>
            Wenn du nicht weißt, welche Türen dir offen stehen, informiere Dich
            hier über Deine Chancen als ausgebildete/r ArzthelferIn. Ganz
            gleich, ob Du den direkten Patientenkontakt liebst, gerne
            organisatorische Aufgaben erledigst oder Dich lieber für einen
            alternativen Job außerhalb der Arztpraxis interessierst.
          </p>

          <ProfessionTypeContainer class="my-4" :col-md="12" :col-lg="6" />
          <ToJobboardBanner />
        </div>
      </div>
      <RandomTrainingsContainer class="mt-5" />
    </div>
    <Head
      :title="title"
      desc="50+ Alternative Jobs / Berufe für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Stellenangebote | Fortbildungen | Weiterbildungen"
      img="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg"
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
