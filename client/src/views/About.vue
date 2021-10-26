<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="about container py-3 py-lg-5">
      <div class="row">
        <div class="col-12 col-md-3 order-2 order-md-1">
          <b-img
            class="border-radius2 my-3 p-3 p-md-0 my-md-0"
            fluid
            src="@/assets/img/KristinMaurach_portrait_800.jpg"
            alt="Portrait Kristin Maurach"
            width="800"
            height="800"
          />
        </div>
        <div class="col order-1 oder-md-2">
          <p class="lead bold mb-4">
            MFA mal anders ist ein Karriereportal für Medizinische /
            Zahnmedizinische Fachangestellte sowie auf die professionelle
            Personalsuche für Arztpraxen und Medizinische Versorgungszentren und
            Zahnkliniken spezialisiert.
          </p>
          <p>
            Als Praxismanagerin mit Führungsverantwortung, als Assistentin des
            Ärztlichen Direktors, als Referentin in der Qualitätssicherung sowie
            im Personalbereich als Recruiterin und HR Managerin. In allen meinen
            beruflichen Stationen gab es immer ein gemeinsames Problem:
            unterschiedliche Sichtweisen von Arbeitgeber und Mitarbeitern,
            Konflikte im Team, Personalmangel.
          </p>
          <p>
            Das ist der Grund, weshalb ich mich von meinem ursprünglich
            erlernten Beruf als ArzthelferIn entfernt und mich mehr und mehr auf
            das Thema Personalführung und Human Ressources spezialisiert habe.
          </p>
          <p>
            Es ist mir eine Herzensangelegenheit Arbeitgeber und Arbeitnehmer
            zusammenzubringen.
          </p>
        </div>
      </div>
      <div>
        <blockquote>
          MFA mal anders hat die Mission, Medizinische / Zahnmedizinische
          Fachangestellte und Arztpraxen erfolgreich zusammen zu bringen.
        </blockquote>
        <p>
          Auf MFA mal anders veröffentliche ich Informationen über die
          berufliche Weiterbildung und Karrieremöglichkeiten für medizinische
          Fachangestellte. Unser Portal soll ein Ort sein, der Informationen
          über den MFA-Beruf vereint. Wir stehen für Wertschätzung, Respekt und
          faire Arbeitsbedingungen für Medizinische und Zahnmedizinische
          Fachangestellte.
        </p>
        <p>
          Jobsuchende MFAs / ZFAs finden bei uns eine große Auswahl an freien
          Stellen in Arztpraxen und MVZs. Den Arbeitgebern bieten wir eine
          kostengünstige Möglichkeit ihre Stellenanzeige effektiv an ihre
          Zielgruppe auszuspielen. Dafür erwarten wir, dass die Arbeitgeber
          dieselben Werte, wie wir in ihrer täglichen Arbeit mit den MFAs / ZFAs
          teilen.
        </p>
        <h2>
          Mein Arbeitsstil
        </h2>
        <p>
          …ist in erster Linie selbst sehr nah an den MFAs. Im Human Ressource
          Bereich arbeite ich täglich mit Menschen, ihren Emotionen, Wünschen
          und Ängsten. Daher spielen in meiner täglichen Arbeit Werte wie
          Respekt und Wertschätzung genauso eine wichtige Rolle wie
          Verlässlichkeit, Ehrgeiz und Anspruch. Vor diesem Hintergrund habe ich
          das Angebot von MFA mal anders geschaffen und entwickle dieses
          kontinuierlich weiter, um den MFA / ZFA Beruf wieder attraktiver
          werden zu lassen!
        </p>
        <p>
          Vor diesem Hintergrund habe ich das Angebot von MFA mal anders
          geschaffen und entwickle dieses kontinuierlich weiter!
        </p>
        <p class="h5 my-5">Kristin Maurach</p>
        <div class="mt-3">
          <b-link class="mr-3" to="/kontakt">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-text mr-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"
              />
              <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
              />
            </svg>
            Kontaktformular
          </b-link>
          <b-link class="mr-3" :href="`mailto:${$config.website.contactEmail}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-fill mr-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
            {{ $config.website.contactEmail }}
          </b-link>
        </div>
      </div>
    </div>
    <Head
      :title="title"
      desc="MFA mal anders ist ein Job- und Karriereportal für MFA / ZFA / ArzthelferInnen sowie auf die Personalsuche für Arztpraxen und MVZs spezialisiert."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  export default {
    name: "About",
    data() {
      return {
        title: "Über MFA mal anders",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Über", to: "/ueber" }
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
                                "name": "Über",
                                "item": "https://www.mfa-mal-anders.de/ueber"
                            }]
                        }`
          },
          {
            type: "application/ld+json",
            inner: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "url": this.$config.website.url,
              "logo": "/img/MfaMalAnders_logo_circle_dark.png"
            })
          }
        ]
      };
    }
  };
</script>
