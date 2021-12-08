<template>
  <div class="about">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="header-img">
      <b-img-lazy
        class="header-img"
        style="object-position: center top"
        :srcset="
          `
          ${require('@/assets/img/medizinischesPersonal-1200x513_300.jpg')} 300w,
          ${require('@/assets/img/medizinischesPersonal-1200x513_768.jpg')} 768w, 
          ${require('@/assets/img/medizinischesPersonal-1200x513_1024.jpg')} 1024w, 
          ${require('@/assets/img/medizinischesPersonal-1200x513.jpg')} 1200w
        `
        "
        sizes="(max-width: 992px) 100vw, 800px"
        src="@/assets/img/medizinischesPersonal-1200x513.jpg"
        alt="Fort- und Weiterbildung für MFA & ZFA"
        width="1200"
        height="513"
        blank-width="1200"
        blank-height="513"
        offset="1000"
      />
      <div class="overlay"></div>
    </div>

    <div id="intro" class="container mb-5" style="max-width: 1000px">
      <h2 class="display-2 bold text-gray-dark">MFA mal&nbsp;anders</h2>
      <p class="lead">
        Das Stellen- & Karriereportal speziell für Medizinische Fachangestellte
        (MFA) | Zahnmedizinische Fachangestellte (ZFA)
      </p>
      <p>
        MFA mal anders ist Deutschlands größtes Karriereportal exklusiv für
        Medizinische Fachangestellte & Zahnmedizinische Fachangestellte. Wir
        informieren über Themen wie Fort- und Weiterbildung, Gehalt, Ausbildung,
        Berufsbilder, Bewerbung und mehr. Mit unserer Stellenbörse sowie der
        Möglichkeit für MFA & ZFA Stellengesuche aufzugeben, leisten wir einen
        Beitrag dazu, motivierte ArzthelferInnen und Arbeitgeber zusammen zu
        bringen. Damit bieten wir attraktiven Arbeitgebern eine Plattform für
        die professionelle Personalsuche – ideal für verschiedenste
        Einrichtungen im Gesundheitswesen (Arztpraxen, Medizinische
        Versorgungszentren, Zahnkliniken, Kliniken etc.).
      </p>
      <p>
        MFA mal anders soll ein Ort sein, der Informationen über den Beruf der
        MFA & ZFA vereint. Mit all unseren Kanälen wollen wir eine Plattform
        bieten, auf der sich Medizinische und Zahnmedizinische Angestellte
        vernetzen und austauschen können. Wir stehen für Wertschätzung, Respekt
        und faire Arbeitsbedingungen für MFA & ZFA.
      </p>
    </div>

    <div class="container my-5 pt-lg-5" style="max-width: 1000px">
      <h2 id="zahlen" class="display-4 bold text-gray-dark text-right">
        In Zahlen
      </h2>
      <p class="lead text-right">
        Ein paar Zahlen & Fakten zu <em>MFA&nbsp;mal&nbsp;anders</em>
      </p>
      <NumbersAndFacts class="my-5" />
    </div>

    <div class="container my-5 " style="max-width: 1000px">
      <h2 class="display-4 bold text-gray-dark">
        Kooperationen
      </h2>
      <p class="lead">
        Unsere Kooperationspartner im Gesundheitswesen
      </p>
      <p>
        Wir kooperieren mit verschiedenen Organisationen aus dem
        Gesundheitswesen, die sich für die Stärkung des Berufes der
        Medizinischen Fachangestellten | Zahnmedizinischen Fachangestellten
        einsetzen. Sollten auch Sie Interesse an einer Kooperation mit uns
        haben, melden Sie sich gern jederzeit über unser
        <b-link class="bold" to="/kontakt">Kontaktformular</b-link>.
      </p>

      <CooperationPartners />
    </div>

    <div class="container my-5 " style="max-width: 1000px">
      <h2 id="gruender" class="display-4 bold text-gray-dark text-right">
        Die GründerInnen
      </h2>
      <p class="lead text-right">
        Wer steckt hinter der Idee von <em>MFA&nbsp;mal&nbsp;anders</em>
      </p>

      <div class="row row-cols-1 row-cols-lg-2 mt-5 pt-md-4">
        <div class="col px-4 mb-4">
          <b-img-lazy
            class="mr-4 mb-3 float-md-left shadow1"
            style="border-radius: 50% 50% 35px 50%"
            fluid
            src="@/assets/img/KristinMaurach_portrait_800.jpg"
            alt="Portrait Kristin Maurach"
            width="200"
            height="200"
          />
          <h3 class="bold">
            Kristin <br class="d-none d-md-inline" />
            Maurach <br />
            <span class="small text-muted">B.A.</span>
          </h3>
          <p class="lead">
            Spezialistin im Gesundheitswesen
          </p>
          <p class="text-md-justify">
            Als Praxismanagerin mit Führungsverantwortung, als Assistentin des
            Ärztlichen Direktors, als Referentin in der Qualitätssicherung sowie
            im Personalbereich als Recruiterin und HR Managerin. In allen meinen
            beruflichen Stationen gab es immer ein gemeinsames Problem:
            Unterschiedliche Sichtweisen von Arbeitgeber und Mitarbeitern,
            Konflikte im Team, Personalmangel.
          </p>
          <p class="text-md-justify">
            Das ist der Grund, weshalb ich mich von meinem ursprünglich
            erlernten Beruf als ArzthelferIn entfernt und mich mehr und mehr auf
            das Thema Personalführung und Human Ressources spezialisiert habe.
            So ist die Idee von MFA mal anders geboren. Es ist mir eine
            Herzensangelegenheit Arbeitgeber und Arbeitnehmer zusammenzubringen.
          </p>
        </div>
        <div class="col px-4 mb-4 text-right text-md-left">
          <b-img-lazy
            class="ml-4 mb-3 float-md-right shadow1"
            style="border-radius: 50% 50% 50% 35px"
            fluid
            src="@/assets/img/ChristopherLiedtke.jpeg"
            alt="Portrait Kristin Maurach"
            width="200"
            height="200"
          />
          <h3 class="bold">
            Christopher <br class="d-none d-md-inline" />
            Liedtke <br />
            <span class="small text-muted">M.Sc.</span>
          </h3>
          <p class="lead">Produktmanager und Software Developer</p>
          <p class="text-md-justify">
            Nach dem Studium habe ich über einige Jahre als Projektmanager in
            unterschiedlichen Themenbereichen gearbeitet. In dieser Funktion
            habe ich viel Erfahrung im Erstellen von validen Strategien und
            Konzepten, aber speziell auch in der effizienten Projektorganisation
            gewonnen. Zum Thema Gesundheitswesen bin ich dank Kristin gekommen.
            Mit meiner zusätzlichen Ausbildung zum Softwareentwickler konnten
            wir gemeinsam unsere Vision von MFA mal anders umsetzen.
          </p>
          <p class="text-md-justify">
            Im Rahmen unserer Zusammenarbeit bin ich dabei speziell in der
            technischen Umsetzung der Karriereplattform verantwortlich und
            erarbeite zusammen mit Kristin die strategische Ausrichtung.
          </p>
        </div>
      </div>

      <div class="container my-lg-5" style="max-width: 1000px">
        <h2 id="kontakt" class="display-4 bold text-gray-dark">
          Kontakt
        </h2>
        <p class="lead">
          So erreichen Sie uns
        </p>

        <div class="row row-cols-1 row-cols-md-3 mt-lg-5">
          <div class="col mb-4">
            <p>
              Bei Anfragen oder Hinweisen können Sie uns gern jederzeit
              kontaktieren. Wir freuen uns auf Ihre Nachricht.
            </p>
            <p>
              <strong class="mr-3">E-Mail:</strong>
              <b-link href="mailto:kontakt@mfa-mal-anders.de" target="_blank"
                >kontakt@mfa-mal-anders.de</b-link
              >
            </p>
          </div>
          <div class="col mb-4">
            <b-link
              class="d-flex flex-column align-items-center justify-content-center lead bold text-muted"
              to="/kontakt"
            >
              <div
                class="d-inline-block bg-secondary text-light rounded-circle shadow1 p-4 mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-file-text"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"
                  />
                  <path
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
                  />
                </svg>
              </div>
              Kontaktformular
            </b-link>
          </div>
          <div class="col mb-4">
            <b-link
              class="d-flex flex-column align-items-center justify-content-center lead bold text-muted"
              href="mailto:kontakt@mfa-mal-anders.de"
              target="_blank"
            >
              <div
                class="d-inline-block bg-secondary text-light rounded-circle shadow1 p-4 mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                  />
                </svg>
              </div>
              E-Mail
            </b-link>
          </div>
        </div>
      </div>
    </div>

    <Head
      :title="title"
      desc="Unsere Vision | Kooperationen | Zahlen & Fakten |  Die GründerInnen"
      img=""
    />
  </div>
</template>

<script>
  import NumbersAndFacts from "@/components/containers/NumbersAndFacts.vue";
  import CooperationPartners from "@/components/containers/CooperationPartners.vue";
  export default {
    name: "Ueber",
    components: {
      NumbersAndFacts,
      CooperationPartners
    },
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
              "logo": "/img/MfaMalAnders_logo_circle_bgdark_white.png"
            })
          }
        ]
      };
    }
  };
</script>
