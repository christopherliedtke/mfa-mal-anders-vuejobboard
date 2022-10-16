<template>
  <div class="karriere">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <div class="header-img">
      <b-img-lazy
        class="header-img"
        style="object-position: center 70%"
        sizes="100vw"
        srcset="
          /img/coffeeMugBegin_qf1tz3_c_scale,w_350.jpg 350w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_850.jpg 850w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_1114.jpg 1114w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_1403.jpg 1403w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_1920.jpg 1920w
        "
        src="/img/coffeeMugBegin_qf1tz3_c_scale,w_1920.jpg"
        alt="Karriere starten für MFA & ZFA"
        width="1200"
        height="513"
        blank-width="1200"
        blank-height="513"
        offset="1000"
      />
      <div class="overlay"></div>
    </div>

    <div class="container">
      <div class="my-3 my-md-5 px-0">
        <h2 class="display-3 bold text-gray-dark">
          Dein nächster Karriereschritt
        </h2>
        <p class="lead mb-4">
          Informiere Dich über verschiedene Möglichkeiten als Medizinische
          Fachangestellte | Zahnmedizinische Fachangestellte im Gesundheitswesen
        </p>
        <div class="row row-cols-1 row-cols-md-3 flex-lg-row-reverse">
          <div class="col">
            <b-link to="/stellenangebote" class="icon-box shadow1">
              <b-img-lazy
                class="mr-4 mb-4 ml-4"
                src="@/assets/img/career_.svg"
                alt="MFA / ZFA macht nächsten Schritt in der Jobsuche"
                height="130"
                blank-width="184"
                blank-height="130"
                offset="1000"
              />
              <h2 class="bold">Stellenbörse für MFA & ZFA</h2>
              <p>
                Bist Du auf der Suche nach einer interessanten Stelle, die genau
                zu Dir passt? Schau direkt in unserer Stellenbörse nur für
                ArzthelferInnen (MFA & ZFA) vorbei!
              </p>
              <b-button variant="primary">Zur Stellenbörse</b-button>
            </b-link>
          </div>
          <div class="col">
            <b-link to="/stellengesuche/info" class="icon-box shadow1">
              <b-img-lazy
                class="mr-4 mb-4 ml-4"
                src="@/assets/img/LinkedIn_Monochromatic.svg"
                alt="Stellengesuche für MFA & ZFA"
                height="130"
                blank-width="167"
                blank-height="130"
                offset="1000"
              />
              <h2 class="bold">Stellengesuche für MFA & ZFA</h2>
              <p>
                Erstelle als MFA | ZFA Dein individuelles Stellengesuch und
                lasse Dich von Arbeitgebern mit passenden Angeboten finden.
              </p>
              <b-button variant="primary">Stellengesuch erstellen</b-button>
            </b-link>
          </div>
          <div class="col">
            <b-link
              to="/karriere/fort-und-weiterbildung"
              class="icon-box shadow1"
            >
              <b-img-lazy
                class="mr-4 mb-4 ml-4"
                src="@/assets/img/coach.svg"
                alt="MFA | ZFA studiert bei Weiterbildung"
                height="130"
                blank-width="167"
                blank-height="130"
                offset="1000"
              />
              <h2 class="bold">Fort- & Weiterbildungen</h2>
              <p>
                Auf der Suche nach Deinem nächsten Karriereschritt? Informiere
                Dich über verschiedene Fort- und Weiterbildungen für
                ArzthelferInnen – MFA & ZFA!
              </p>
              <b-button variant="primary">Zu den Weiterbildungen</b-button>
            </b-link>
          </div>
        </div>
        <div class="mb-4">
          <b-link
            to="/karriere/jobs-und-berufsbilder"
            class="d-flex flex-column flex-lg-row icon-box shadow1"
          >
            <b-img-lazy
              class="mr-4 mb-4 ml-4"
              src="@/assets/img/health_.svg"
              alt="MFA liest Fortbildungskatalog"
              height="130"
              blank-width="167"
              blank-height="130"
              offset="1000"
            />
            <div>
              <h2 class="bold">Jobs & Berufsbilder</h2>
              <p>
                Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen –
                MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst.
              </p>
              <b-button variant="primary">Zu den Berufsbildern</b-button>
            </div>
          </b-link>
        </div>
        <div class="mb-4">
          <b-link
            to="/fortbildungskatalog"
            class="d-flex flex-column flex-lg-row icon-box shadow1"
          >
            <b-img-lazy
              class="mr-4 mb-4 ml-4"
              src="@/assets/img/calendar.svg"
              alt="MFA liest Fortbildungskatalog"
              height="130"
              blank-width="167"
              blank-height="130"
              offset="1000"
            />
            <div>
              <h2 class="bold">Fortbildungskatalog</h2>
              <p>
                Finde die nächste Fort- oder Weiterbildung für ArzthelferInnen
                (MFA & ZFA) in Deiner Nähe oder bequem online von zu Hause!
              </p>
              <b-button variant="primary">Zum Fortbildungskatalog</b-button>
            </div>
          </b-link>
        </div>
      </div>

      <div class="clearfix pt-5">
        <h2 class="h1 mb-4 mb-md-5">
          <span class="display-3 bold d-block mb-1">Dein Karriereportal</span>
          für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte
        </h2>
        <b-img-lazy
          class="border-radius2 shadow1 mb-3 mr-4"
          left
          src="@/assets/img/KristinMaurach_portrait_800.jpg"
          style="width: 40vw; max-width: 250px; border-radius: 50% 50% 35px 50%"
          blank-width="150"
          blank-height="150"
          offset="1000"
        />
        <p>
          MFA mal anders ist ein Karriereportal speziell für Medizinische
          Fachangestellte & Zahnmedizinische Fachangestellte, die sich beruflich
          wie persönlich weiterentwickeln wollen, um mehr aus ihrem beruflichen
          Leben herauszuholen.
        </p>
        <p>
          Hier findest du
          <b-link to="/stellenangebote">Stellenangebote</b-link>,
          <b-link to="/karriere/fort-und-weiterbildung"
            >Fort- und Weiterbildungsmöglichkeiten</b-link
          >,
          <b-link to="/blog">Praxishacks</b-link>
          und Informationen zur persönlichen sowie beruflichen
          Weiterentwicklung.
        </p>
        <blockquote class="d-inline">
          Unser Ziel: Den Beruf der MFA & ZFA stärken und wieder attraktiver
          machen!
        </blockquote>
      </div>

      <h3 class="my-4">
        Wir helfen Dir bei der Suche nach deinem Traumjob
      </h3>
      <div class="row">
        <div class="col-12 col-md-6">
          <p>
            Auf MFA mal anders berichten wir über Aufstiegsmöglichkeiten in der
            Arztpraxis, aber auch über Karrierechancen, die Du als Medizinische
            Fachangestellte außerhalb der Praxis hast.
          </p>
          <p>
            Gerade Berufe im Gesundheitswesen sind meist kein Zuckerschlecken.
            Ganz im Gegenteil – sie sind verdammt anstrengend, oftmals schlecht
            bezahlt und mit familienunfreundlichen Arbeitszeiten. Aber sie sind
            auch sehr erfüllend. Deswegen machen wir Medizinengel diese Jobs
            doch, oder?! Immer dieses Helfersyndrom – Fluch und Segen zugleich.
          </p>
          <p>
            Trotzdem, es gibt auch Wege und Möglichkeiten mehr aus dem Beruf der
            Medizinischen Fachangestellten | Zahnmedizinischen Fachangestellten
            zu machen und wieder glücklicher und zufriedener im Arbeitsalltag zu
            sein.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <p>
            MFA mal anders ist ein Netzwerk unter Gleichgesinnten. Um deinen
            beruflichen Weg im Gesundheitswesen zu finden und erfolgreich deine
            Ziele zu erreichen. Mit Fachwissen und persönlichen Erfahrungen
            stehen wir Dir zur Seite und unterstützen Dich – egal, ob es darum
            geht für Dich die passende Fort- oder Weiterbildung zu finden, einen
            neuen Job zu finden, deine Gehaltswünsche durchzusetzen oder einfach
            nur durch den Praxisalltagswahnsinn zu helfen.
          </p>
        </div>
      </div>

      <h3 class="my-4">
        Wir helfen Dir dabei einen Job zu finden, den Du liebst. Und den du
        verdienst
      </h3>
      <p>
        Viele Praxen haben zum Glück erkannt, dass ohne uns MFAs & ZFAs nichts
        läuft. Und das zeigen die Chefs in einem wertschätzenden Umgang,
        familienfreundlichen Arbeitsbedingungen und einer guten Bezahlung. In
        der Regel trennt sich die Spreu vom Weizen von ganz allein. Wir sind
        trotzdem sehr bemüht, bei den veröffentlichten Stellenanzeigen auf
        unserer Plattform einen besonderen Augenmerk auf bestimmte Kriterien zu
        legen:
      </p>
      <ul>
        <li>Leistungsgerechte Bezahlung</li>
        <li>
          Tätigkeiten, die Du mit einer Ausbildung zur Medizinischen
          Fachangestellten | Zahnmedizinischen Fachangestellten ausüben kannst –
          auch wenn der ausgeschriebene Job nicht immer der typische
          ArzthelferIn Job ist
        </li>
        <li>
          Unbefristete Stellen oder befristete Stellen mit Aussicht auf
          Übernahme
        </li>
        <li>
          Keine Jobs über Zeitarbeitsfirmen oder Personaldienstleiter
        </li>
      </ul>
      <div class="d-flex justify-content-center my-5">
        <BannerJobboard />
      </div>

      <h3 class="my-4">Bock auf Veränderung?</h3>
      <p>
        Als MFA & ZFA hast Du einen anspruchsvollen Job in der Arztpraxis. Es
        gibt aber auch viele Karrierechancen darüber hinaus.
      </p>
      <p>
        Durch deine Ausbildung als MFA & ZFA und mit wachsender Berufserfahrung
        hast Du Dir eine Vielzahl an Fähigkeiten und Kompetenzen angeeignet.
      </p>
      <p>
        Du bist Organisationstalent, hast medizinisches Wissen, bist Profi im
        Office Management, Assistenz des Arztes bei chirurgischen Eingriffen,
        hast Abrechnungskenntnisse und weißt, wie man professionell mit
        Patienten- bzw. Kunden umgeht. Und dies sind nur ein Paar deiner
        Eigenschaften, die Dich zu einer begehrten Fachkraft machen. Auch bei
        Arbeitgebern außerhalb der Arztpraxis.
      </p>
      <p>
        Das kann z.B. als Sachbearbeiter, Office Manager oder Vertriebler in
        einem Unternehmen, das dem Gesundheitswesen angehört, sein.
      </p>
      <p>
        Auf Mfa mal anders findest Du deshalb auch viele alternative
        Jobmöglichkeiten, die Du mit deinen Kenntnissen und Fähigkeiten als
        Medizinische Fachangestellte ausüben kannst.
      </p>
      <p>
        Vielleicht möchtest Du Dich aber auch in deiner Fachrichtung
        spezialisieren? Finde eine
        <b-link to="/karriere/fort-und-weiterbildung/ueberblick"
          >Weiterbildung</b-link
        >, die zu Dir und deinen Karrierezielen passt.
      </p>
      <div class="row my-5">
        <div class="col my-2">
          <BannerTrainingOverview />
        </div>
        <div class="col my-2">
          <BannerProfessions />
        </div>
      </div>

      <h3 class="my-4">MFAs & ZFAs sind vernetzt und halten zusammen</h3>
      <p>
        Um unseren Beruf zu stärken und weiter voran zu bringen, müssen wir
        Medizinengel zusammenhalten.
      </p>
      <p>
        Jobs, die schlecht bezahlt werden, sollten wir nicht annehmen.
      </p>
      <p>
        Chefs, die unsere Arbeit nicht wertschätzen, sollen wir die Augen öffnen
        und auf den richtigen Kurs bringen.
      </p>
      <p>
        Man muss bedenken, dass Ärzte nun mal nicht Personalführung studiert
        haben. Manchen fehlt hier das richtige Fingerspitzengefühl und
        wahrscheinlich “vergessen” einige neben der Patientenversorgung,
        Abrechnung, dem Zeitdruck etc. einen wertschätzenden Umgang mit ihren
        Praxisperlen.
      </p>
      <p>
        MFA mal anders unterstützt Praxen bei der Suche nach neuem Personal.
        Dabei sensibilisieren wir die Praxisinhaber stets für ein positives
        Arbeitsklima und Mitarbeiterförderung, -führung und -entwicklung. Das
        bringt nicht nur dem Chef etwas, sondern der gesamten Praxis und die
        Personalsuche erleichert es ebenfalls.
      </p>
      <p>
        Wenn Du auf der Suche nach einer tollen Praxis bist, schau regelmäßig
        auf unserer
        <b-link to="/stellenangebote">Stellenbörse</b-link> vorbei.
      </p>
      <p>
        Wenn Du schon in einer tollen Praxis arbeitest und ihr neue Kollegen
        sucht, kannst Du bei uns
        <b-link to="/fuer-arbeitgeber"
          >eure Stellenanzeige veröffentlichen</b-link
        >.
      </p>
      <p>
        Wenn Du bereit bist, deiner Karriere als Medizinische Fachangestellte |
        Zahnmedizinische Fachangestellte neuen Aufschwung zu geben, reichen wir
        Dir die Hand und begleiten Dich auf deinem Weg.
      </p>
      <p>
        Wir freuen uns über jedes Feedback und da MFA mal anders eine
        Bereicherung für Dich sein soll, kannst Du uns gern jederzeit Themen
        nennen, die Dich aktuell beschäftigen und über die hier berichtet werden
        soll.
      </p>
      <p>Wir freuen uns auf Dich!</p>
      <p>Deine Kristin</p>
      <div class="mt-5">
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
      <TrainingListRandom class="mt-5" />
    </div>
    <Head
      :title="title"
      desc="Karriereportal für Zahnmedizinische | Medizinische Fachangestellte (ZFA / MFA) / ArzthelferIn || Jobperspektiven | Fortbildungen | Weiterbildungen | Gehalt | Bewerbung"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import BannerJobboard from "@/components/BannerJobboard.vue";
  import BannerTrainingOverview from "@/components/BannerTrainingOverview.vue";
  import BannerProfessions from "@/components/BannerProfessions.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  export default {
    name: "CareerHome",
    components: {
      BannerJobboard,
      BannerTrainingOverview,
      BannerProfessions,
      TrainingListRandom
    },
    data() {
      return {
        title: "Karriere für MFA & ZFA",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" }
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
                            }]
                        }`
          }
        ]
      };
    }
  };
</script>
