<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <FortWeiterbildungenNav />
        </div>
        <div class="col-12 col-md-8 mb-5">
          <b-img-lazy
            class="border-radius1 shadow1 mb-3 mb-lg-5"
            fluid
            srcset="/img/Banner_Weiterbildungsdschungel_1200-300x157.jpg 300w, /img/Banner_Weiterbildungsdschungel_1200-1024x538.jpg 1024w, /img/Banner_Weiterbildungsdschungel_1200-768x404.jpg 768w, /img/Banner_Weiterbildungsdschungel_1200.jpg 1200w"
            sizes="(max-width: 992px) 100vw, 800px"
            src="/img/Banner_Weiterbildungsdschungel_1200.jpg"
            alt="Banner - So viel verdienst Du wirklich"
            width="1200"
            height="630"
            blank-width="1200"
            blank-height="630"
            offset="1000"
          />
          <p>
            Als Medizinische & Zahnmedizinische Fachangestellte haben wir viele
            Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder
            sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur
            leider ist der Dschungel an Fort- und Weiterbildungen für
            Medizinische Fachangestellte so stark bewachsen und
            undurchdringlich, dass es nicht leicht fällt, den Durchblick zu
            behalten.
          </p>
          <p>
            MFA mal anders bietet dir die Informationen, die du brauchst. Und
            das komprimiert und zusammengefasst auf einer Seite. Ohne, dass du
            dich endlos durchs Internet klicken musst, um einen Überblick über
            deine Chancen zu bekommen.
          </p>
          <p>
            Ob
            <b-link to="/blog/artikel/fortbildung-weiterbildung-oder-studium"
              >Fortbildung, Weiterbildung oder Studium für MFA / ZFA</b-link
            >, finde deinen richtigen Weg.
          </p>
          <p>
            In der Rubrik "Fort- und Weiterbildungen" kannst du dich
            informieren, welche Möglichkeiten du als Medizinische
            Fachangestellte in und außerhalb der Arztpraxis hast.
          </p>
          <div class="d-flex justify-content-center">
            <div
              style="max-width: 600px"
              class="card text-center bg-light-shade shadow1 mt-4 mb-5"
            >
              <b-img-lazy
                src="@/assets/img/Banner_In6SchrittenZurRichtigenWeiterbildung_1200.jpg"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Banner - In 6 Schritten zur richtigen Weiterbildung für MFA / ZFA und ArzthelferIn"
                width="1200"
                height="630"
                blank-width="1200"
                blank-height="630"
                blank-color="#f7f6f9"
                offset="1000"
                class="card-img-top"
                fluid
              />

              <div class="card-body">
                <h4 class="card-title">
                  Die richtige Weiterbildung für dich?!
                </h4>
                <p class="card-text">
                  Hier findest du eine kleine Anleitung, wie du Schritt für
                  Schritt vorgehen kannst.
                </p>
                <b-button to="/karriere/jobs-und-berufsbilder" variant="primary"
                  >Los geht's!</b-button
                >
              </div>
            </div>
          </div>
          <p>
            Wir beschreiben anerkannte Fortbildungen der Ärztekammer,
            zertifizierte Weiterbildungen, Lehrgänge, Studiengänge und andere
            Weiterentwicklungsmöglichkeiten für MFA / ZFA. Die Eckdaten wie
            Kosten, Dauer, Inhalte und Lernkonzepte werden für dich
            übersichtlich und verständlich dargestellt. Daneben zeigen wir dir
            vor allem auch, was du mit welchem Abschluss anschließend anfangen
            kannst. Und natürlich auch wo. Das Gesundheitswesen bietet dir
            zahlreiche Karrierewege.
          </p>
          <p>
            Die Liste ist noch lange nicht vollständig. Nach und nach erstellen
            wir für dich eine grandiose Übersicht über deine
            Karrieremöglichkeiten in- und außerhalb der Arztpraxis
            zusammenstellen.
          </p>
          <p>Also bleib dran!</p>
          <p>
            PS: Wenn du interessiert an einer bestimmten Weiterbildung für MFA /
            ZFA bist, die wir noch nicht aufgeführt haben, schreib uns doch.
            Oder vielleicht hast du schon eine Fortbildung gemacht von der deine
            Kolleginnen unbedingt wissen sollten?!
          </p>
          <p>
            Wir freuen uns über
            <b-link to="/kontakt">eure Nachrichten</b-link>.
          </p>
        </div>
      </div>
      <RandomTrainingsContainer class="mt-5" />
    </div>
    <Head
      title="Fort- und Weiterbildung für ArzthelferInnen – MFA & ZFA"
      :desc="
        `Fortbildungen und Weiterbildungen für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) im Gesundheitswesen || Karriere | Gehalt ${new Date().getFullYear()} | Stellenangebote`
      "
      img="/img/Banner_Weiterbildungsdschungel_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import FortWeiterbildungenNav from "@/components/navs/FortWeiterbildungenNav.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  export default {
    name: "CareerFortWeiterbildungen",
    components: {
      FortWeiterbildungenNav,
      RandomTrainingsContainer
    },
    data() {
      return {
        title: "Fort- und Weiterbildung für MFA & ZFA",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fort- & Weiterbildung",
            to: "/karriere/fort-und-weiterbildung"
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
                                "name": "Fort- und Weiterbildung",
                                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"
                            }]
                        }`
          }
        ]
      };
    }
  };
</script>
