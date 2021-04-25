<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="py-3 py-lg-5">
      <b-row>
        <b-col md="4" class="mb-4">
          <FortWeiterbildungenNav />
        </b-col>
        <b-col>
          <b-img
            class="border-radius1 shadow1 mb-3 mb-lg-5"
            fluid
            src="/img/Banner_Weiterbildungsdschungel_1200.jpg"
            alt="Banner - So viel verdienst Du wirklich"
            width="1200"
            height="630"
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
            <b-link to="/blog/article/fortbildung-weiterbildung-oder-studium"
              >Fortbildung, Weiterbildung oder Studium für MFA / ZFA</b-link
            >, finde deinen richtigen Weg.
          </p>
          <p>
            In der Rubrik "Fort- und Weiterbildungen" kannst du dich
            informieren, welche Möglichkeiten du als Medizinische
            Fachangestellte in und außerhalb der Arztpraxis hast.
          </p>
          <div class="d-flex justify-content-center">
            <BCard
              style="max-width: 600px"
              title="Die richtige Weiterbildung für dich?!"
              img-src="@/assets/img/Banner_In6SchrittenZurRichtigenWeiterbildung_1200.jpg"
              img-alt="Banner - In 6 Schritten zur richtigen Weiterbildung für MFA / ZFA und ArzthelferIn"
              img-top
              align="center"
              class="bg-light-shade shadow1 mt-4 mb-5"
            >
              <BCardText>
                Hier findest du eine kleine Anleitung, wie du Schritt für
                Schritt vorgehen kannst.
              </BCardText>

              <b-button to="/karriere/jobs-und-berufsbilder" variant="primary"
                >Los geht's!</b-button
              >
            </BCard>
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
        </b-col>
      </b-row>
      <RandomTrainingsContainer class="mt-5" />
    </b-container>
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
  import Vue from "vue";
  import { BCard, BCardText } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardText", BCardText);
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
        title: "Fort- und Weiterbildungen für MFA & ZFA",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fort- & Weiterbildungen",
            to: "/karriere/fort-und-weiterbildungen"
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
                                "name": "Karriere",
                                "item": "https://www.mfa-mal-anders.de/karriere"
                            },{
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Fort- und Weiterbildungen",
                                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen"
                            }]
                        }`
          }
        ]
      };
    }
  };
</script>
