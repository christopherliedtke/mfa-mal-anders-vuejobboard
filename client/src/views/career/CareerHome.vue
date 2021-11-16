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
        sizes="(max-width: 1920px) 100vw, 1920px"
        srcset="
          /img/coffeeMugBegin_qf1tz3_c_scale,w_350.jpg 350w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_850.jpg 850w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_1114.jpg 1114w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_1403.jpg 1403w,
          /img/coffeeMugBegin_qf1tz3_c_scale,w_1920.jpg 1920w
        "
        src="/img/coffeeMugBegin_qf1tz3_c_scale,w_1920.jpg"
        alt="Fort- und Weiterbildung für MFA & ZFA"
        width="1200"
        height="513"
        blank-width="1200"
        blank-height="513"
        offset="1000"
      />
      <div class="overlay"></div>
    </div>

    <div class="container">
      <div class="container my-3 my-md-5 px-0">
        <h2 class="display-3 bold text-gray-dark">
          Dein nächster Karriereschritt
        </h2>
        <p class="lead mb-4">
          Informiere Dich über verschiedene Möglichkeiten im Gesundheitswesen
          als Medizinische & Zahnmedizinische Fachangestellte
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
            <b-link
              to="/karriere/jobs-und-berufsbilder"
              class="icon-box shadow1"
            >
              <b-img-lazy
                class="mr-4 mb-4 ml-4"
                src="@/assets/img/health_.svg"
                alt="Medizinische Fachangestellte im Untersuchungsraum"
                height="130"
                blank-width="167"
                blank-height="130"
                offset="1000"
              />
              <h2 class="bold">Jobs & Berufsbilder</h2>
              <p>
                Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen –
                MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst.
              </p>
              <b-button variant="primary">Zu den Berufsbildern</b-button>
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
                alt="MFA studiert bei Weiterbildung"
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
        <div>
          <b-link
            to="/karriere/fort-und-weiterbildung/fortbildungskatalog"
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

      <div class="clearfix">
        <h2 class="h1 mb-4 mb-md-5">
          <span class="display-3 bold">Dein Karriereportal</span> <br />
          für Medizinische & Zahnmedizinische Fachangestellte
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
          MFA mal anders ist ein Karriereportal speziell für Medizinische &
          Zahnmedizinische Fachangestellte, die sich beruflich wie persönlich
          weiterentwickeln wollen, um mehr aus ihrem beruflichen Leben
          herauszuholen.
        </p>
        <p>
          Hier findest du
          <b-link to="/stellenangebote">Stellenangebote</b-link>,
          <b-link to="/karriere/fort-und-weiterbildung"
            >Fort- und Weiterbildungsmöglichkeiten</b-link
          >,
          <b-link :to="`/${$config.cms.postsPath}`">Praxishacks</b-link>
          und Informationen zur persönlichen sowie beruflichen
          Weiterentwicklung.
        </p>
        <blockquote class="d-inline">
          Unser Ziel: Den Beruf der MFA & ZFA stärken und wieder attraktiver
          machen!
        </blockquote>
      </div>

      <h3 class="my-4">
        Wir helfen dir bei der Suche nach deinem Traumjob
      </h3>
      <div class="row">
        <div class="col-12 col-md-6">
          <p>
            Auf MFA mal anders berichte ich über Aufstiegsmöglichkeiten in der
            Arztpraxis, aber auch über Karrierechancen, die du als Medizinische
            Fachangestellte außerhalb der Praxis hast.
          </p>
          <p>
            Gerade Berufe im Gesundheitswesen sind meist kein Zuckerschlecken.
            Ganz im Gegenteil – sie sind verdammt anstrengend, oftmals schlecht
            bezahlt und mit familienunfreundlichen Arbeitszeiten. Aber sie sind
            auch sehr erfüllend. Deswegen machen wir diese Jobs doch, oder?!
            Immer dieses Helfersyndrom – Fluch und Segen zugleich.
          </p>
          <p>
            Trotzdem, es gibt auch Wege und Möglichkeiten mehr aus dem Beruf der
            medizinischen Fachangestellten zu machen und wieder glücklicher und
            zufriedener im Arbeitsalltag zu sein.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <p>
            MFA mal anders ist ein Netzwerk unter Gleichgesinnten. Um deinen
            beruflichen Weg im Gesundheitswesen zu finden und erfolgreich deine
            Ziele zu erreichen. Mit Fachwissen und persönlichen Erfahrungen
            stehen wir dir zur Seite und unterstützen dich – egal, ob es darum
            geht für dich die passende Fort- oder Weiterbildung zu finden, einen
            neuen Job zu finden, deine Gehaltswünsche durchzusetzen oder einfach
            nur durch den Praxisalltagswahnsinn zu helfen.
          </p>
        </div>
      </div>

      <h3 class="my-4">
        Wir helfen dir dabei einen Job zu finden, den du liebst. Und den du
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
          Tätigkeiten, die du mit einer Ausbildung zur ArzthelferIn
          (Medizinischen & Zahnmedizinischen Fachangestellten) ausüben kannst –
          auch wenn der ausgeschriebene Job nicht immer der typische
          ArzthelferIn-Job ist
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
        <ToJobboardBanner />
      </div>

      <h3 class="my-4">Bock auf Veränderung?</h3>
      <p>
        Als MFA & ZFA hast du einen anspruchsvollen Job in der Arztpraxis. Es
        gibt aber auch viele Karrierechancen darüber hinaus.
      </p>
      <p>
        Durch deine Ausbildung als MFA & ZFA und mit wachsender Berufserfahrung
        hast du dir eine Vielzahl an Fähigkeiten und Kompetenzen angeeignet.
      </p>
      <p>
        Du bist Organisationstalent, hast medizinisches Wissen, bist Profi im
        Office Management, Assistenz des Arztes bei chirurgischen Eingriffen,
        hast Abrechnungskenntnisse und weißt, wie man professionell mit
        Patienten- bzw. Kunden umgeht. Und dies sind nur ein Paar deiner
        Eigenschaften, die dich zu einer begehrten Fachkraft machen. Auch bei
        Arbeitgebern außerhalb der Arztpraxis.
      </p>
      <p>
        Das kann z.B. als Sachbearbeiter, Office Manager oder Vertriebler in
        einem Unternehmen, das dem Gesundheitswesen angehört, sein.
      </p>
      <p>
        Auf Mfa mal anders findest du deshalb auch viele alternative
        Jobmöglichkeiten, die du mit deinen Kenntnissen und Fähigkeiten als
        Medizinische Fachangestellte ausüben kannst.
      </p>
      <p>
        Vielleicht möchtest du dich aber auch in deiner Fachrichtung
        spezialisieren? Finde eine
        <b-link to="/karriere/fort-und-weiterbildung/ueberblick"
          >Weiterbildung</b-link
        >, die zu dir und deinen Karrierezielen passt.
      </p>
      <div class="row my-5">
        <div class="col my-2">
          <WeiterbildungenBanner />
        </div>
        <div class="col my-2">
          <BerufsbilderBanner />
        </div>
      </div>

      <h3 class="my-4">MFAs & ZFAs sind vernetzt und halten zusammen</h3>
      <p>
        Um unseren Beruf zu stärken und weiter voran zu bringen, müssen wir
        zusammenhalten.
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
        “Praxisperlen”.
      </p>
      <p>
        Mfa mal anders unterstützt Praxen bei der Suche nach neuem Personal.
        Dabei sensibilisieren wir die Praxisinhaber stets für ein positives
        Arbeitsklima und Mitarbeiterförderung- führung und – entwicklung. Das
        bringt nicht nur dem Chef was, sondern der gesamten Praxis und die
        Personalsuche erleichert sich ebenfalls.
      </p>
      <p>
        Wenn du auf der Suche nach einer tollen Praxis bist, schau regelmäßig
        auf unserer
        <b-link to="/stellenangebote">Stellenbörse</b-link> vorbei.
      </p>
      <p>
        Wenn du schon in einer tollen Praxis arbeitest und ihr neue Kollegen
        sucht, kannst du
        <b-link to="/fuer-arbeitgeber">hier</b-link>
        eure Stellenanzeige veröffentlichen.
      </p>
      <p>
        Wenn du bereit bist, deiner Karriere als Medizinische oder
        Zahnmedizinische Fachangestellte neuen Aufschwung zu geben, reiche ich
        dir die Hand und begleite dich auf deinem Weg.
      </p>
      <p>
        Ich freue mich über jedes Feedback und da MFA mal anders eine
        Bereicherung für dich sein soll, kannst du mir gerne jederzeit Themen
        nennen, die dich aktuell beschäftigen und über die hier berichtet werden
        soll.
      </p>
      <p>Ich freue mich auf dich!</p>
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
      <RandomTrainingsContainer class="mt-5" />
    </div>
    <Head
      :title="title"
      desc="Karriereportal für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Jobperspektiven | Fortbildungen | Weiterbildungen | Gehalt | Bewerbung"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import WeiterbildungenBanner from "@/components/banners/WeiterbildungenBanner.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  export default {
    name: "CareerHome",
    components: {
      ToJobboardBanner,
      WeiterbildungenBanner,
      BerufsbilderBanner,
      RandomTrainingsContainer
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
