<template>
  <div class="employer">
    <div class="title">
      <h1>
        <strong>{{ title }}</strong>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <div
      id="hero"
      class="text-light bg-primary shadow1 border-radius2 my-3 mr-2 mr-lg-5 my-lg-5 position-relative"
      style="border-top-left-radius: 0; border-bottom-left-radius: 0"
    >
      <div
        style="max-width: 1600px; overflow-x: hidden"
        class="row px-3 py-5 px-md-5 mx-auto ml-lg-auto position-relative"
      >
        <div class="bg-logo"></div>
        <div class="col-12 col-md-9" style="z-index: 1">
          <h2 class="display-4 bold mb-4">
            <em>Motivierte</em> und <em>qualifizierte</em> <br />
            MFA & ZFA{{
              $route.query.location ? ` in ${$route.query.location}` : ""
            }}
            gesucht?
          </h2>
          <h3 class="" style="font-weight: 400">
            <em>
              <span class="text-secondary"
                >155.000+&nbsp;monatl. Seitenaufrufen</span
              >
              speziell von Medizinische Fachangestellte | Zahnmedizinische
              Fachangestellte
            </em>
          </h3>
          <ul class="lead no-bullets my-4 mt-lg-5">
            <!-- <li class="d-flex mb-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-check-lg mr-3"
                  style="vertical-align: top;"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                  />
                </svg>
              </span>
              <div>
                Einfach und bequem
                <span class="text-secondary">in wenigen Schritten</span> zu
                Ihrer Stellenanzeige
              </div>
            </li> -->

            <li class="d-flex mb-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-check-lg mr-3"
                  style="vertical-align: top;"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                  />
                </svg>
              </span>
              <div>
                Erreichen Sie exklusiv
                <span class="text-secondary" style="font-weight: 600"
                  >engagierte MFA & ZFA</span
                >
                <!-- über Ihre Stellenanzeige auf <em>MFA mal anders</em> (inkl.
                Platzierung in unserem wöchentlichen Job-Newsletter sowie auf
                Google, Google Jobs und Social Media) -->
              </div>
            </li>
            <li class="d-flex mb-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-check-lg mr-3"
                  style="vertical-align: top;"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                  />
                </svg>
              </span>
              <div>
                <!-- <span class="text-secondary" style="font-weight: 600"
                  >Nehmen Sie</span
                >
                exklusiv und direkt über unsere Stellengesuche -->
                <b-link
                  to="/stellengesuche"
                  class="text-secondary"
                  style="font-weight: 600"
                  >Direkt Kontakt<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right position-relative"
                    style="top: -0.3em; margin-left: 2px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    /></svg
                ></b-link>
                zu suchenden MFA & ZFA aufnehmen
                <!-- auf -->
              </div>
            </li>
            <li class="d-flex mb-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-check-lg mr-3"
                  style="vertical-align: top;"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                  />
                </svg>
              </span>
              <div>
                <span class="text-light">Mehr KandidatInnen mit unserer </span>

                <b-link
                  to="#kurzbewerbung"
                  class="text-secondary"
                  style="font-weight: 600"
                  >2&#8209;Minuten&nbsp;Kurzbewerbung<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right position-relative"
                    style="top: -0.3em; margin-left: 2px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    /></svg
                ></b-link>
              </div>
            </li>
            <!-- <li class="d-flex mb-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-check-lg mr-3"
                  style="vertical-align: top;"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                  />
                </svg>
              </span>
              <div>
                Stellenanzeige bereits
                <b-link class="text-secondary" href="#preise"
                  >ab
                  <span v-if="pricingPackages">{{
                    pricingPackages[0].stripePrice.price / 100
                  }}</span
                  >€</b-link
                >
                <span class="small"> (zzgl. USt.)</span> veröffentlichen
              </div>
            </li> -->
            <li class="d-flex mb-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-check-lg mr-3"
                  style="vertical-align: top;"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                  />
                </svg>
              </span>
              <div>
                Stellenpakete – von
                <b-link
                  to="#preise"
                  class="text-secondary"
                  style="font-weight: 600"
                  >Basis</b-link
                >
                bis
                <b-link
                  to="#professional"
                  class="text-secondary"
                  style="font-weight: 600"
                  >Professional mit individueller Werbekampagne für Ihren
                  Standort<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right position-relative"
                    style="top: -0.3em; margin-left: 2px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    /></svg
                ></b-link>
              </div>
            </li>
            <!-- <li class="d-flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-check-lg mr-3"
                  style="vertical-align: top;"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                  />
                </svg>
              </span>
              <div>
                <span class="text-secondary">10% Neukunden-Rabatt</span> mit
                Aktionscode
                <strong class="bg-secondary bold px-1">MFAMA10</strong>
                sichern
              </div>
            </li> -->
          </ul>

          <div class="my-3">
            <b-button
              to="#vorteile"
              variant="secondary"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Mehr erfahren</b-button
            >
            <b-button
              href="#preise"
              variant="outline-secondary"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Unsere Stellenpakete</b-button
            >
            <b-button
              href="#tipps-stellenanzeigen"
              variant="outline-light"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Muster Stellenanzeige + 8 Tipps</b-button
            >
          </div>
        </div>
        <div
          class="col-12 col-lg-4 d-none d-lg-flex justify-content-center align-items-center"
        ></div>
      </div>
    </div>

    <div id="vorteile" class="container my-5 py-3 py-lg-5">
      <h2 class="display-4 bold text-center">
        Warum MFA mal anders?
      </h2>
      <p
        class="h3 d-block mx-auto text-center"
        style="font-weight: 400; max-width: 35em"
      >
        Die Jobbörse speziell für Medizinische Fachangestellte&nbsp;& <br />
        Zahnmedizinische Fachangestellte
      </p>
      <!-- <p>
        MFA mal anders ist keine weitere beliebige Stellenbörse, hinter der eine
        Marketingagentur steckt, die Ihnen Kampagnen für Ihre unbesetzten
        Stellen verkauft. Wir sind eine
        <strong class="text-secondary"
          >authentische Stellen- und Karriereplattform, die sich ausschließlich
          an genau Ihre Zielgruppe – MFA bzw. ZFA – richtet
        </strong>
        und diese ganzheitlich informiert. Das was wir machen, machen wir aus
        Überzeugung und weil wir genau wissen, wo es auf Seiten der MFA & ZFA
        aber auch auf Seiten der Arbeitgeber brennt. Heute ist es schwieriger
        denn je, qualifiziertes Praxispersonal zu finden. Wir helfen Ihnen bei
        der Suche!
      </p> -->

      <div
        class="row row-cols-1 row-cols-lg-2 my-4 my-md-5 justify-content-center"
      >
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
              <path
                fill-rule="evenodd"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
              />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
            <h4 class="bold mt-2 mb-3">Ausschließlich für MFA & ZFA</h4>
            <p>
              Über eine
              <router-link to="/stellenangebote"
                ><strong>Stellenanzeige</strong></router-link
              >
              auf <em>MFA mal anders</em> erreichen Sie
              <strong>exklusiv motivierte MFA | ZFA | ArzthelferIn</strong>
              und damit genau Ihre Zielgruppe.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-send-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
              />
              <path
                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"
              />
            </svg>
            <h4 class="bold mt-2 mb-3">MFA & ZFA direkt kontaktieren</h4>
            <p>
              Mit Ihrer Stellenanzeige erhalten Sie automatisch
              <strong>Zugriff auf</strong>
              hunderte
              <router-link to="/stellengesuche"
                ><strong>Stellengesuche</strong></router-link
              >
              und können
              <strong>passendes Personal direkt kontaktieren</strong>.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-journal-plus"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
              />
              <path
                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
              />
              <path
                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
              />
            </svg>
            <h4 class="bold mt-2 mb-3">Einfach mit Kurzbewerbungen</h4>
            <p>
              Mit unserer optionalen
              <b-link to="#kurzbewerbung"><strong>Kurzbewerbung</strong></b-link
              >-Funktion senken Sie die Hürde zum Abschicken einer Bewerbung und
              erhalten so
              <strong>mehr Anfragen passender KandidatInnen</strong>.
            </p>
          </div>
        </div>
        <!-- <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-credit-card-2-front-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
              />
            </svg>
            <h4 class="bold mt-2 mb-3">Kosteneffizient</h4>
            <p>
              Als Spezial Karriereplattform sprechen wir Ihre Zielgruppe
              passgenau an und können so ein
              <router-link to="#preise"
                ><strong>attraktives Preismodell</strong></router-link
              >
              anbieten.
            </p>
          </div>
        </div> -->
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-broadcast"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
              />
            </svg>
            <h4 class="bold mt-2 mb-3">Erhöhen Sie Ihre Reichweite</h4>
            <p>
              Steigern Sie Ihre Chancen auf passende BewerberInnen mit
              <strong>zielgerichteter Reichweite auf </strong>
              <b-link to="/stellenangebote"
                ><strong>MFA mal anders</strong></b-link
              >, Google,
              <a
                href="https://www.google.com/search?q=mfa+mal+anders&ibp=htl;jobs#htivrt=jobs&htilrad=-1.0"
                target="_blank"
                ><strong>Google Jobs</strong></a
              >,
              <span class="text-tertiary"><strong>Social Media</strong></span>
              <!-- <a
                :href="`https://www.facebook.com/MFAmalanders`"
                target="_blank"
                >Facebook</a
              > -->
              und
              <b-link to="#mehr-informationen">mehr...</b-link>
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="text-center">
        <strong
          >Sie benötigen Hilfe beim Erstellen einer attraktiven
          Stellenanzeige?</strong
        >
        Kein Problem, mit unserem
        <router-link to="#preise" class="bold"
          >Stellenpaket Professional</router-link
        >
        erhalten Sie persönliche und professionelle Unterstützung beim Verfassen
        Ihrer Stellenanzeige.
      </div> -->
      <div class="d-flex flex-column align-items-center mt-4">
        <div class="mb-3">
          <b-button
            to="/auth/register"
            variant="secondary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Stellenanzeige schalten</b-button
          >
          <b-button
            href="#preise"
            variant="primary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Preise</b-button
          >
        </div>
        <div>
          <b-button
            href="#tipps-stellenanzeigen"
            variant="outline-secondary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Muster Stellenanzeige + 8 Tipps</b-button
          >
          <b-button
            href="#mehr-informationen"
            variant="outline-primary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Weitere Informationen</b-button
          >
          <b-button
            href="#faq"
            variant="outline-primary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Fragen oder Hilfe benötigt?</b-button
          >
        </div>
      </div>
    </div>

    <div class="container mb-4 mb-lg-5">
      <h2 class="text-center">Feedback</h2>
      <h3 class="display-4 text-center bold mb-4 mb-lg-5">
        Was unsere Kunden sagen
      </h3>
      <TheTestimonials />
    </div>

    <div class="container-fluid bg-light-shade py-4 py-lg-5 px-0 mb-4">
      <div id="preise" class="container">
        <h2 class=" display-4 bold text-center">
          Unsere Stellenpakete
        </h2>
        <p
          class="h3 d-block mx-auto text-center mb-4 mb-lg-g"
          style="font-weight: 400; max-width: 35em"
        >
          Zur Veröffentlichung Ihrer Stellenanzeige stehen folgende
          Stellenpakete zur Verfügung.
        </p>
        <!-- <div class="my-4  text-center text-lg-left">
          <p>
            Mit der
            <strong><b-link to="/stellenangebote">Stellenbörse</b-link></strong>
            auf <em>MFA mal anders</em> möchten wir Medizinischen
            Fachangestellten | Zahnmedizinischen Fachangestellten die
            Möglichkeit geben, einen attraktiven Job zu finden. Aber auch Ihnen
            als Arbeitgeber eine alternative Plattform bereitstellen, die Ihre
            Stellenanzeigen an die richtige Zielgruppe ausspielt und so Ihre
            Chancen erhöht, qualifizierte Bewerbungen zu erhalten.
          </p>
          <p>
            Zur Veröffentlichung Ihrer Stellenanzeige in unserer
            <strong><b-link to="/stellenangebote">Stellenbörse</b-link></strong>
            bieten wir verschiedene Pakete an, um Sie bei Ihrer
            MitarbeiterInnen-Suche optimal unterstützen und ergänzen zu können.
            In der Regel empfehlen wir Ihnen unser beliebtes
            <strong class="text-secondary">Standard Paket</strong>, um die
            Reichweite Ihrer Stellenanzeige zu optimieren. Ist Ihre Stelle nur
            schwierig zu besetzen oder benötigen Sie zusätzliche Unterstützung,
            empfehlen wir Ihnen unser
            <strong class="text-secondary">Professional Paket</strong>, mit dem
            Sie Ihre Reichweite mit Hilfe von individuellen Werbekampagnen
            maximieren können. Sollten Sie sich unsicher sein, welches Paket das
            richtige für Sie ist, kontaktieren Sie uns gern über unser
            <b-link to="/kontakt?subject=Beratung zum richtigen Stellenpaket"
              >Kontaktformular</b-link
            >.
          </p>
        </div> -->

        <div v-if="pricingPackages" class="row row-cols-1 row-cols-lg-3 mb-4">
          <div
            v-for="pricingPackage in pricingPackages"
            :key="pricingPackage.name"
            class="col"
          >
            <PricingCard :pricing="pricingPackage" :professional-more="true" />
          </div>
        </div>

        <div v-else class="row row-cols-1 row-cols-lg-3 mb-4">
          <div v-for="index in 3" :key="index" class="col">
            <PricingCardPlaceholder />
          </div>
        </div>

        <p>
          <b-link to="/auth/register"><strong>Registrieren</strong></b-link> Sie
          sich, um Ihre Stellenanzeige individuell selbst einzustellen und
          jederzeit anpassen zu können. Sie sind bereits registriert? Sie können
          sich hier <b-link to="/auth/login"><strong>anmelden</strong></b-link
          >.
        </p>
        <p>
          <strong>Alternativ</strong> senden Sie uns Ihre Stellenanzeige an
          <b-link
            href="mailto:stellenanzeigen@mfa-mal-anders.de?subject=Veröffentlichung meine Stellenanzeige auf MFA mal anders&body=[Bitte fügen Sie folgendes bei: Gewähltes Stellenpaket (Basis, Standard, Professional), Stellentitel, Stellenbeschreibung, Anstellungsart (Vollzeit/Teilzeit/520€/Ausbildung), Kurzbewerbung (ja/nein), E-Mail Adresse für Bewerbungen, Unternehmensname, Straße + Hausnr., PLZ, Ort, (optional: Unternehmenswebseite, Logo, Titelbild für Stellenanzeige, Gehaltsspanne, Kontaktdaten für Nachfragen, abweichende Rechnungsadresse)]"
            ><strong>stellenanzeigen@mfa-mal-anders.de</strong></b-link
          >
          und wir veröffentlichen diese schnell und ohne Aufpreis für Sie.
        </p>

        <p>
          <strong
            >Gern bieten wir Ihnen nach Absprache auch individuelle Pakete
            an</strong
          >, wenn Sie beispielsweise eine Stellenanzeige dauerhaft bei uns
          schalten oder größere Kontingente buchen möchten. Kontaktieren Sie uns
          dazu gern über unser
          <router-link to="/kontakt?role=employer&subject=Stellenpakete"
            ><strong>Kontaktformular</strong></router-link
          >.
        </p>
        <!-- <p>
          Sie haben die Möglichkeit, Ihre Stellenanzeige nach der
          <b-link to="/auth/register"><strong>Registrierung</strong></b-link>
          auf unserem Portal zu erstellen und in einer Vorschau zu betrachten.
          Anschließend können Sie Ihre Stellenanzeige mit einem der drei Pakete
          veröffentlichen.
        </p>
        <p>
          Mit der Veröffentlichung Ihrer Stellenanzeige bekommen Sie zusätzlich
          die Möglichkeit, auf unsere
          <router-link to="/stellengesuche"
            ><strong>Stellengesuche</strong></router-link
          >
          zu antworten und Kontakt zu potentiellen neuen MitarbeiterInnen
          aufzunehmen.
        </p> -->
      </div>
    </div>

    <div id="numbers-and-facts2" class="container mb-3 py-3 py-md-5">
      <h2 class="h1 text-center bold mb-4">
        Ein paar Zahlen und Fakten
      </h2>
      <TheNumbersAndFacts class="mt-5" />
    </div>

    <div id="tipps-stellenanzeigen" class="container mb-5">
      <h2 class="display-4 bold mb-2">
        MFA Stellenanzeige – Muster
      </h2>
      <h3 class="h4">
        + 8 Tipps &ndash; Attraktive Stellenanzeige für Medizinische
        Fachangestellte (MFA) & Zahnmedizinische Fachangestellte (ZFA)
      </h3>
      <p>
        Ihre Stellenanzeige ist eine Einladung für BewerberInnen zum Dialog –
        denn bestenfalls wird daraus ein Vorstellungsgespräch. Eine gute
        Stellenausschreibung beschreibt nicht nur die zu besetzende Stelle,
        sondern geht auch auf die Bedürfnisse der Zielgruppe ein. Machen Sie ein
        Angebot, dass so attraktiv ist, dass man nicht anders kann, als sich zu
        bewerben!
      </p>
      <p>
        Durch unsere Arbeit hatten wir die Gelegenheit eine Vielzahl von
        Bewerbungsprozessen zu begleiten und aus erster Hand zu erfahren, was
        bei potentiellen BewerberInnen ankommt und was nicht. Deshalb geben wir
        hier eine kleine Übersicht an Tipps, die wir Ihnen ans Herz legen
        möchten. Zusätzlich können Sie sich unsere
        <b-link
          href="/downloads/MfaMalAnders_Beispiel_Stellenanzeige.pdf"
          target="_blank"
          ><strong
            >Muster Stellenanzeige für MFA | ZFA | ArzthelferIn</strong
          ></b-link
        >
        zur Inspiration ansehen.
      </p>

      <div class="d-flex justify-content-center mt-4 mb-5">
        <b-button
          variant="primary"
          href="/downloads/MfaMalAnders_Beispiel_Stellenanzeige.pdf"
          target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-download mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
            /></svg
          >MFA Stellenanzeige Muster | Download</b-button
        >
      </div>

      <TheJobAdTipsList class="my-4" />
    </div>

    <div id="professional" class="container my-4 my-md-5">
      <h2 class="display-4 text-center bold">
        Unser Professional Paket
      </h2>
      <h3 class="text-center">Ihre Vorteile im Überblick</h3>
      <TheProfessionalPackageInfo />
    </div>

    <div class="container-fluid bg-light-shade py-4 py-lg-5 px-0 mb-5">
      <div id="kurzbewerbung" class="container">
        <h2 class="display-4 text-center bold">
          Unser Modus für Kurzbewerbungen
        </h2>
        <h3 class="text-center" style="font-weight: 400">
          Mehr KandidatInnen durch einfaches Bewerben
        </h3>
        <p>
          Sie haben optional die Möglichkeit, für Ihre Stellenanzeige die
          Kurzbewerbung-Funktion zu aktivieren. Damit
          <strong
            >erleichtern Sie den potentiellen KandidatInnen den
            Bewerbungsprozess</strong
          >
          erheblich und senken damit die Schwelle, auch tatsächlich eine
          Bewerbung abzugeben.
        </p>
        <p>
          Aktivieren Sie die Option <em>Kurzbewerbung</em> in Ihrer
          Stellenanzeige, müssen die KandidatInnen lediglich
          <strong>wenige voreingestellte Fragen beantworten</strong>, die Ihnen
          einen ersten
          <strong
            >Einblick in die aktuelle Situation sowie die individuellen
            Qualifikationen</strong
          >
          der BewerberInnen geben. Mit diesen Informationen können Sie
          entscheiden, ob Sie die BewerberInnen direkt einladen, vorher
          zusätzlich einen Lebenslauf anfordern oder beispielsweise direkt
          absagen möchten.
        </p>
        <p>
          Es lässt sich sicherlich darüber streiten, wie einfach es
          BewerberInnen gemacht werden sollte, aber in Zeiten von großem
          Personalmangel im deutschen Gesundheitssystem gilt es erst einmal
          überhaupt, qualifizierte KandidatInnen zu generieren. Deshalb
          ermöglichen wir die Kurzbewerbungen und empfehlen diese Option zu
          nutzen.
          <strong
            >Schließlich gilt: Lieber eine Bewerbung mehr aussortieren, als zu
            wenige Bewerbungen erhalten</strong
          >. Am Ende ist das persönliche Gespräch ohnehin entscheidend.
        </p>
        <h3 class="text-center mt-4" style="font-weight: 400">
          Beispiel für Kurzbewerbung zum durchklicken
        </h3>
        <SimpleApplicationDataForm
          class="mt-3 mt-lg-4 mb-4"
          :job="{ profession: 'MFA', company: { name: 'Ihr Unternehmen' } }"
          :disabled="true"
        />
        <p>
          <strong>Tipp:</strong> Das Optimum an Reichweite erreichen Sie
          übrigens bei aktivierten Kurzbewerbungen in Verbindung mit unserem
          <b-link to="#professional"><strong>Professional-Paket</strong></b-link
          >.
        </p>
      </div>
    </div>

    <div class="container my-4 my-md-5">
      <h2 class="display-4 text-center bold">
        Wir kooperieren mit
      </h2>
      <TheCooperationPartners />
    </div>

    <div
      id="mehr-informationen"
      class="container-fluid bg-light-shade py-5 mb-5"
    >
      <div class="container">
        <h2 class="bold mb-4">
          Ihre Jobbörse nur für MFA | ZFA | ArzthelferIn
        </h2>

        <p>
          Wir bieten speziell Arztpraxen, MVZs und allen anderen Einrichtungen
          aus dem Gesundheitswesen eine vertrauensvolle Plattform mit Fokus auf
          Ihre Zielgruppe.
        </p>
        <p>
          Aufgrund persönlicher Erfahrungen als MFA und im Gesundheitsbereich
          bringen wir als Initiatoren von MFA mal anders detaillierte
          Branchenkenntnisse mit. Da wir um die Probleme beim Finden von
          qualifiziertem Personal wissen, können wir unser Angebot punktgenau
          ausrichten.
        </p>
        <p>
          Ihre Stellenanzeige ist bei uns bestens platziert. Im Gegensatz zu
          anderen allgemeinen Stellenbörsen, finden Sie hier ausschließlich die
          richtige Zielgruppe für Ihr Unternehmen: Medizinische Fachangestellte
          & Zahnmedizinische Fachangestellte.
        </p>
        <h3>Wo wir Ihre Stellenanzeige ausspielen</h3>
        <p>
          Ihre Stellenanzeige wird dort ausgespielt, wo Sie Ihre Zielgruppe
          findet: auf <strong>unserer Plattform</strong>, sämtlichen
          Suchmaschinen wie
          <strong>Google, Google Jobs, Bing, Ecosia</strong> und mehr, sowie
          über <strong>Social Media<span class="text-muted">*</span></strong
          >. Zusätzlich versenden wir Ihre Anzeige in unserem
          <strong> wöchentlichen Newsletter</strong>.
        </p>

        <div
          class="row row-cols-2 row-cols-md-3 row-cols-lg-6 my-4 my-lg-5 py-4  border-radius2 shadow1"
        >
          <div class="col d-flex justify-content-center text-primary py-3">
            <b-img-lazy
              src="/img/MfaMalAnders_logo_circle_bgdark_white.svg"
              alt="Logo - MFA mal anders - Das Stellen- und Karriereportal für MFA & ZFA"
              width="75px"
              height="75px"
            />
          </div>
          <div class="col d-flex justify-content-center text-secondary py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
              alt="Newsletter Logo"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
              />
            </svg>
          </div>
          <div class="col d-flex justify-content-center text-secondary py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="75"
              height="75"
              alt="Google Logo"
            >
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
          </div>
          <div class="col d-flex justify-content-center text-primary py-3">
            <b-img-lazy
              src="~@/assets/img/GOOGLE-JOBS-LOGO.png"
              alt="Google For Jobs Logo"
              height="75px"
            />
          </div>
          <div
            class="col d-flex justify-content-center py-3"
            style="color: #4267B2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
              alt="Facebook Logo"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </div>
          <div class="col d-flex justify-content-center text-secondary py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              fill="currentColor"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
              alt="Instagram Logo"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </div>
        </div>

        <p>
          Erhöhen Sie die Chance, dass Ihre Stellenanzeige von der richtigen
          Person gesehen wird.
        </p>
        <p>
          Damit grenzen wir uns gezielt von allgemeinen Jobbörsen, die eine
          breite Masse an unterschiedlichen Berufsgruppen ansprechen und hohe
          Streuverluste haben, ab. Da wir
          <strong>mehr als eine reine Stellenbörse</strong> sind, erreichen wir
          mit unserem Angebot zudem eine deutlich größere Anzahl von wirklich
          motivierten Medizinischen Fachangestellten | Zahnmedizinischen
          Fachangestellten.
        </p>
        <!-- <p>
          Bei uns können Sie Ihre Stellenanzeige zudem
          <strong>kostengünstig</strong> veröffentlichen und so Ihrem Budget
          anpassen sowie zusätzliche Reichweite und qualifizierte Bewerbungen
          erzielen.
        </p> -->
        <p class="text-right mb-0">
          <small class="text-muted"
            >* Abhängig vom gewählten Stellenpaket</small
          >
        </p>
      </div>
    </div>

    <div id="faq" class="container mb-5">
      <h2 class="h1 bold text-center mb-4">
        Häufige Fragen
      </h2>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <h3 class="h5 bold">
            Welche Zahlungsarten stehen zur Verfügung?
          </h3>
          <p>
            Für die Zahlung Ihrer Stellenanzeige fordern Sie über unsere
            Plattform eine Rechnung an. Anschließend können Sie per Kreditkarte,
            GiroPay, Sofortüberweisung oder manueller Überweisung auf unser
            Verrechnungskonto den Rechnungsbetrag begleichen.
          </p>
          <h3 class="h5 bold">
            Wie lange dauert es bis zur Veröffentlichung meiner Stellenanzeige?
          </h3>
          <p>
            Nach erfolgreicher Rechnungsanforderung wird Ihre Stellenanzeige
            sofort auf unserer Plattform veröffentlicht.
          </p>
          <!-- <h3 class="h5 bold">
            Kann ich auch per Rechnung zahlen?
          </h3>
          <p>
            Ja, die Möglichkeit besteht. Ihre Stellenanzeige wird von uns
            freigeschaltet sobald wir einen Zahlungseingang von Ihnen verbuchen
            können.
          </p> -->
          <h3 class="h5 bold">
            Kann ich meine Stellenanzeige im Nachhinein ändern?
          </h3>
          <p>
            Über Ihren registrierten Account können Sie Ihre Stellenanzeige
            jederzeit anpassen. Die Änderungen werden sofort automatisch
            übernommen.
          </p>
          <h3 class="h5 bold">
            Wie lange ist meine Stellenanzeige online?
          </h3>
          <p>
            Die Laufzeit Ihrer Stellenanzeige können Sie über die verfügbaren
            Stellenpakete auswählen. Die Mindestlaufzeit beträgt 60 Tage. Ihre
            Stelle ist so lange online, wie Ihre gewählte Laufzeit sowie ggfls.
            Ihre angegebene Bewerbungsfrist nicht abgelaufen sind. Über Ihren
            Account können Sie Ihre Stellenanzeige jederzeit selbst offline
            nehmen oder löschen. Für individuelle Stellenpakete können Sie uns
            direkt über das
            <b-link to="/kontakt?role=employer">Kontaktformular</b-link>
            kontaktieren.
          </p>
        </div>
        <div class="col">
          <h3 class="h5 bold">
            Wo wird meine Stellenanzeige veröffentlicht?
          </h3>
          <p>
            Mit der Veröffentlichung Ihrer Stellenanzeige auf unserer Webseite
            wird diese automatisch bei Google Jobs gelistet (es kann ein wenig
            Zeit in Anspruch nehmen, bis Google Ihre Anzeige integriert).
            Darüber hinaus verteilen wir Ihre Stellenanzeige über unseren Jobs
            Newsletter sowie je nach Paket über unsere Social Media Kanäle und
            weitere.
          </p>
          <h3 class="h5 bold">
            Ich benötige Hilfe bei der Erstellung einer attraktiven
            Stellenanzeige. Kann ich Unterstützung von Ihnen bekommen?
          </h3>
          <p>
            In unserem "Professional" Paket erhalten Sie nach der Erstellung
            Ihrer Stellenanzeige zusärtliche Tipps zur Optimierung durch Ihren
            persönlichen Ansprechpartner. Zudem geben wir Ihnen mit unseren
            <b-link to="#tipps-stellenanzeigen"
              ><strong>Tipps für attraktive Stellenanzeigen</strong></b-link
            >
            wichtige Hinweise inkl. einer Musterstellenanzeige an die Hand.
            Haben Sie darüber hinaus Fragen, melden Sie sich gern auch über das
            <b-link to="/kontakt?role=employer">Kontaktformular</b-link> bei
            uns.
          </p>
          <h3 class="h5 bold">
            Kann ich als Agentur eine Stellenanzeige veröffentlichen?
          </h3>
          <p>
            Ja, Sie können als Vertreter einer Agentur Stellenanzeigen bei MFA
            mal anders veröffentlichen. Dazu registrieren Sie sich als
            Arbeitgeber und erstellen anschließend wie gewünscht Ihre
            Stellenanzeige. Die zu den Kunden zugehörigen Kontaktdaten
            (Unternehmen, AnsprechpartnerIn, E-Mail oder Link für Bewerbungen)
            können Sie individuell für jede Stellenanzeige hinterlegen.
          </p>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center mt-4">
        <div class="d-flex flex-wrap justify-content-center my-1">
          <b-button
            to="/kontakt?role=employer"
            variant="primary"
            class="mx-1 mb-1 mb-lg-0"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-text mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"
              />
              <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
              /></svg
            >Kontaktformular</b-button
          >
          <b-button
            href="https://wa.me/4917645282858"
            target="_blank"
            variant="primary"
            class="mx-1 mb-1 mb-lg-0"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              /></svg
            >WhatsApp</b-button
          >
          <b-button
            href="tel:+4917645282858"
            target="_blank"
            variant="primary"
            class="mx-1 mb-1 mb-lg-0"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-phone mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg
            >Telefon</b-button
          >
        </div>
        <b-button
          to="/auth/register"
          variant="secondary"
          size="lg"
          class="d-block d-md-inline-block my-2 mr-md-2"
          >Stellenanzeige erstellen</b-button
        >
      </div>
    </div>

    <ScrollTopButton />

    <Head
      title="MFA & ZFA gesucht? – Stellenanzeige schalten!"
      desc="MFA | ZFA gesucht? Jetzt Stellenanzeige schalten auf MFA mal anders! Die exklusive Jobbörse für Zahnmedizinische | Medizinische Fachangestellten."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ScrollTopButton from "@/components/ScrollTopButton.vue";
  import TheJobAdTipsList from "@/components/TheJobAdTipsList.vue";
  import TheNumbersAndFacts from "@/components/TheNumbersAndFacts.vue";
  import TheProfessionalPackageInfo from "@/components/TheProfessionalPackageInfo.vue";
  import TheCooperationPartners from "@/components/TheCooperationPartners.vue";
  import TheTestimonials from "@/components/TheTestimonials.vue";
  import PricingCard from "@/components/PricingCard.vue";
  import PricingCardPlaceholder from "@/components/PricingCardPlaceholder.vue";
  import { scrollToHashMixin } from "@/mixins/scrollToHashMixin";
  import { setPromotionCodeMixin } from "@/mixins/setPromotionCodeMixin";
  import SimpleApplicationDataForm from "@/components/SimpleApplicationDataForm.vue";
  export default {
    name: "Employer",
    components: {
      TheJobAdTipsList,
      TheNumbersAndFacts,
      TheCooperationPartners,
      TheTestimonials,
      PricingCard,
      PricingCardPlaceholder,
      ScrollTopButton,
      TheProfessionalPackageInfo,
      SimpleApplicationDataForm
    },
    mixins: [scrollToHashMixin, setPromotionCodeMixin],
    data() {
      return {
        title: "Für Arbeitgeber",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Für Arbeitgeber", to: "/fuer-arbeitgeber" }
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
                "name": "Für Arbeitgeber",
                "item": "https://www.mfa-mal-anders.de/fuer-arbeitgeber"
              }]
            }`
          },
          {
            id: "faqs",
            type: "application/ld+json",
            inner: `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Welche Zahlungsarten stehen zur Verfügung?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Für die Zahlung Ihrer Stellenanzeige fordern Sie über unsere Plattform eine Rechnung an. Anschließend können Sie per Kreditkarte, GiroPay, Sofortüberweisung oder manueller Überweisung auf unser Verrechnungskonto den Rechnungsbetrag begleichen."
                }
              }, {
                "@type": "Question",
                "name": "Wie lange dauert es bis zur Veröffentlichung meiner Stellenanzeige?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nach erfolgreicher Rechnungsanforderung wird Ihre Stellenanzeige sofort auf unserer Plattform veröffentlicht."
                }
              }, {
                "@type": "Question",
                "name": "Kann ich meine Stellenanzeige im Nachhinein ändern?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Über Ihren registrierten Account können Sie Ihre Stellenanzeige jederzeit anpassen. Die Änderungen werden sofort automatisch übernommen."
                }
              }, {
                "@type": "Question",
                "name": "Wie lange ist meine Stellenanzeige online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Laufzeit Ihrer Stellenanzeige können Sie über die verfügbaren Stellenpakete auswählen. Die Mindestlaufzeit beträgt 60 Tage. Ihre Stelle ist so lange online, wie Ihre gewählte Laufzeit sowie ggfls. Ihre angegebene Bewerbungsfrist nicht abgelaufen sind. Über Ihren Account können Sie Ihre Stellenanzeige jederzeit selbst offline nehmen oder löschen. Für individuelle Stellenpakete können Sie uns direkt über das Kontaktformular kontaktieren."
                }
              }, {
                "@type": "Question",
                "name": "Wo wird meine Stellenanzeige veröffentlicht?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":"Mit der Veröffentlichung Ihrer Stellenanzeige auf unserer Webseite wird diese automatisch bei Google Jobs gelistet (es kann ein wenig Zeit in Anspruch nehmen, bis Google Ihre Anzeige integriert). Darüber hinaus verteilen wir Ihre Stellenanzeige über unseren Jobs Newsletter sowie je nach Paket über unsere Social Media Kanäle und weitere."
                }
              }, {
                "@type": "Question",
                "name": "Ich benötige Hilfe bei der Erstellung einer attraktiven Stellenanzeige. Kann ich Unterstützung von Ihnen bekommen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":"In unserem 'Professional' Paket erhalten Sie nach der Erstellung Ihrer Stellenanzeige zusärtliche Tipps zur Optimierung durch Ihren persönlichen Ansprechpartner. Zudem geben wir Ihnen mit unseren Tipps für attraktive Stellenanzeigen wichtige Hinweise inkl. einer Musterstellenanzeige an die Hand. Haben Sie darüber hinaus Fragen, melden Sie sich gern auch über das Kontaktformular bei uns."
                }
              }, {
                "@type": "Question",
                "name": "Kann ich als Agentur eine Stellenanzeige veröffentlichen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":"Ja, Sie können als Vertreter einer Agentur Stellenanzeigen bei MFA mal anders veröffentlichen. Dazu registrieren Sie sich als Arbeitgeber und erstellen anschließend wie gewünscht Ihre Stellenanzeige. Die zu den Kunden zugehörigen Kontaktdaten (Unternehmen, AnsprechpartnerIn, E-Mail oder Link für Bewerbungen) können Sie individuell für jede Stellenanzeige hinterlegen."
                }
              }]
            }`
          },
          {
            rel: "canonical",
            href: `${process.env.VUE_APP_WEBSITE_URL}/fuer-arbeitgeber`,
            id: "canonical"
          }
        ],
        pricingPackages: null
      };
    },
    async created() {
      await this.getPricingPackages();
    },
    methods: {
      async getPricingPackages() {
        try {
          const response = await this.$axios.get(
            "/api/products/job-ad-packages"
          );

          if (!response.data.jobAdPackages) {
            throw new Error("Stellenpakete konnten nicht geladen werden");
          }

          this.pricingPackages = response.data.jobAdPackages;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Unsere Stellenpakete konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .employer {
    #hero {
      @media screen and (min-width: 768px) {
        background: linear-gradient(
            90deg,
            #6d0230 0%,
            #6d0230 50%,
            #6d023077 100%
          ),
          image-set(
              url("~@/assets/img/medizinischesPersonal-1200x513.jpg") 1x,
              url("~@/assets/img/medizinischesPersonal.jpg") 2x
            )
            400px center;

        background-size: cover;
        background-blend-mode: normal;
        border-radius: $border-radius2;
      }
    }
  }
</style>
