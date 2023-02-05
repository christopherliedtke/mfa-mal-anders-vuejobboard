<template>
  <div class="about">
    <div class="title">
      <h1>
        <strong>{{ title }}</strong>
      </h1>
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
        sizes="100vw"
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
      <h2 class="display-2 bold text-gray-dark" style="letter-spacing: -0.04em">
        MFA mal&nbsp;anders
      </h2>
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
      <TheNumbersAndFacts class="my-5" />
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
        <b-link to="/kontakt"><strong>Kontaktformular</strong></b-link
        >.
      </p>

      <TheCooperationPartners />
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
            alt="Portrait Christopher Liedtke"
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
            Im Rahmen unserer Zusammenarbeit bin ich dabei speziell für die
            technische Umsetzung der Karriereplattform verantwortlich und
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

        <div class="row mt-lg-5">
          <div class="col-12 col-lg-4 mb-4">
            <p>
              Bei Anfragen oder Hinweisen können Sie uns gern jederzeit
              kontaktieren. Wir freuen uns auf Ihre Nachricht.
            </p>
            <!-- <p>
              <strong class="mr-3">E-Mail:</strong>
              <b-link href="mailto:kontakt@mfa-mal-anders.de" target="_blank"
                >kontakt@mfa-mal-anders.de</b-link
              >
            </p> -->
          </div>
          <div class="col-6 col-lg-2 mb-4">
            <b-link
              class="d-flex flex-column align-items-center justify-content-center text-muted"
              to="/kontakt"
            >
              <div
                class="d-inline-block bg-secondary text-light rounded-circle shadow1 p-4 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
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
              <strong>Kontaktformular</strong>
            </b-link>
          </div>
          <div class="col-6 col-lg-2 mb-4">
            <b-link
              class="d-flex flex-column align-items-center justify-content-center text-muted"
              href="mailto:kontakt@mfa-mal-anders.de"
              target="_blank"
            >
              <div
                class="d-inline-block bg-secondary text-light rounded-circle shadow1 p-4 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                  />
                </svg>
              </div>
              <strong>E-Mail</strong>
            </b-link>
          </div>
          <div class="col-6 col-lg-2 mb-4">
            <b-link
              class="d-flex flex-column align-items-center justify-content-center text-muted"
              href="https://wa.me/4917645282858"
              target="_blank"
            >
              <div
                class="d-inline-block bg-secondary text-light rounded-circle shadow1 p-4 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  />
                </svg>
              </div>
              <strong>WhatsApp</strong>
            </b-link>
          </div>
          <div class="col-6 col-lg-2 mb-4">
            <b-link
              class="d-flex flex-column align-items-center justify-content-center text-muted"
              href="tel:+4917645282858"
              target="_blank"
            >
              <div
                class="d-inline-block bg-secondary text-light rounded-circle shadow1 p-4 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                  />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <strong>Telefon</strong>
            </b-link>
          </div>
        </div>
      </div>
    </div>

    <Head
      :title="title"
      desc="Unsere Vision | Kooperationen | Zahlen & Fakten |  Die GründerInnen"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import TheNumbersAndFacts from "@/components/TheNumbersAndFacts.vue";
  import TheCooperationPartners from "@/components/TheCooperationPartners.vue";
  export default {
    name: "Ueber",
    components: {
      TheNumbersAndFacts,
      TheCooperationPartners
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
              "url": process.env.VUE_APP_WEBSITE_URL,
              "logo": "/img/MfaMalAnders_logo_circle_bgdark_white.png"
            })
          }
        ]
      };
    }
  };
</script>
