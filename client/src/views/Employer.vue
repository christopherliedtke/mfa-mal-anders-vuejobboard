<template>
  <div class="employer">
    <div class="title">
      <h1 class="bold">{{ title }}</h1>
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
        <div class="col-12 col-md-8" style="z-index: 1">
          <h2 class="display-4 bold mb-4">
            <em>Motivierte</em> und <em>qualifizierte</em> <br />
            MFA & ZFA{{
              $route.query.location ? ` in ${$route.query.location}` : ""
            }}
            gesucht?
          </h2>
          <h3 class="d-none d-md-block">
            <em>
              Die reichweitenstärkste Karriereplattform <br />
              speziell für Medizinische Fachangestellte | Zahnmedizinische
              Fachangestellte
            </em>
          </h3>
          <ul class="lead no-bullets my-4 mt-lg-5">
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
                Einfach und bequem
                <span class="text-secondary">in wenigen Schritten</span>
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
                Erreichen Sie exklusiv
                <span class="text-secondary">engagierte MFA & ZFA</span>
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
                <span class="text-secondary"
                  >Erhalten Sie mehr relevante Reichweite</span
                >
                über unseren Jobnewsletter, Google, Google Jobs, Social Media
                und unsere MFA & ZFA Community
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
                Veröffentlichen Sie Ihre Stellenanzeige
                <b-link class="text-secondary" href="#preise"
                  >ab
                  <span v-if="pricingPackages">{{
                    pricingPackages[0].stripePrice.price / 100
                  }}</span>
                  {{ $config.payment.currency }}</b-link
                >
                <span class="small"> (zzgl. USt.)</span>
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
                Erhalten Sie Zugriff auf unsere Stellengesuche mit der
                Möglichkeit Kontakt zu potentiellen MitarbeiterInnen aufzunehmen
              </div>
            </li> -->
          </ul>

          <div class="my-3">
            <b-button
              to="/auth/register"
              variant="secondary"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Stellenanzeige erstellen</b-button
            >
            <b-button
              href="#vorteile"
              variant="outline-light"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Mehr erfahren</b-button
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
      <p class="h3 text-center">
        Die Jobbörse speziell für Medizinische Fachangestellte&nbsp;& <br />
        Zahnmedizinische Fachangestellte
      </p>

      <div class="row row-cols-1 row-cols-lg-3 my-4 my-md-5">
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
            <h4 class="bold mt-2 mb-3">Speziell für MFA & ZFA</h4>
            <p>
              Bei uns erreichen Sie
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
        </div>
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
            <h4 class="bold mt-2 mb-3">Reichweite erhöhen</h4>
            <p>
              Sie erstellen Ihre Anzeige, wir sorgen für den Rest &ndash;
              <strong>Relevante Reichweite auf </strong>
              <b-link to="/stellenangebote">MFA mal anders</b-link>,
              <a
                href="https://www.google.com/search?q=mfa+mal+anders&ibp=htl;jobs#htivrt=jobs&htilrad=-1.0"
                target="_blank"
                >Google Jobs</a
              >,
              <a
                :href="`https://www.facebook.com/${$config.fb.path}`"
                target="_blank"
                >Facebook</a
              >
              und
              <b-link to="#mehr-informationen">mehr...</b-link>
            </p>
          </div>
        </div>
      </div>

      <div class="text-center">
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
      </div>
      <div class="d-flex flex-column align-items-center mt-4">
        <div class="mb-3">
          <b-button
            to="/auth/register"
            variant="secondary"
            size="lg"
            class="d-block d-lg-inline-block mx-1 my-1"
            >Stellenanzeige erstellen</b-button
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
            >Tipps für Stellenanzeigen</b-button
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
      <TestimonialsContainer />
    </div>

    <div class="container-fluid bg-light-shade py-4 py-lg-5 px-0">
      <div id="preise" class="container">
        <h2 class=" display-4 bold text-center">
          Unsere Stellenpakete
        </h2>
        <div class="my-4  text-center text-lg-left">
          <p>
            Mit MFA mal anders möchten wir Medizinischen Fachangestellten |
            Zahnmedizinischen Fachangestellten die Möglichkeit geben, einen
            attraktiven Job zu finden. Aber auch Ihnen als Arbeitgeber eine
            alternative Plattform bereitstellen, die Ihre Stellenangebote an die
            richtige Zielgruppe ausspielt und so Ihre Chancen erhöht,
            qualifizierte Bewerbungen zu erhalten.
          </p>
          <p>
            Zur Veröffentlichung Ihrer Stellenanzeige bieten wir verschiedene
            Pakete an, um Sie bei Ihrer MitarbeiterInnen-Suche optimal
            unterstützen und ergänzen zu können. In der Regel empfehlen wir
            Ihnen unser beliebtes
            <strong class="text-secondary">Standard Paket</strong>, um die
            Reichweite Ihrer Stellenanzeige zu optimieren.
          </p>
        </div>

        <div v-if="pricingPackages" class="row row-cols-1 row-cols-lg-3 mb-4">
          <div
            v-for="pricingPackage in pricingPackages"
            :key="pricingPackage.name"
            class="col"
          >
            <PricingCard :pricing="pricingPackage" />
          </div>
        </div>

        <div v-else class="row row-cols-1 row-cols-lg-3 mb-4">
          <div v-for="index in 3" :key="index" class="col">
            <PricingCardPlaceholder />
          </div>
        </div>

        <p>
          Sie haben die Möglichkeit, Ihre Stellenanzeige nach der
          <b-link to="/auth/register">Registrierung</b-link> auf unserem Portal
          zu erstellen und in einer Vorschau zu betrachten. Anschließend können
          Sie Ihre Stellenanzeige mit einem der drei Pakete veröffentlichen.
          Auch für das Professional Paket bitten wir Sie, Ihre Stellenanzeige
          anhand unserer vorgegebenen Struktur zu erstellen. Wir setzen uns dann
          umgehend mit Ihnen in Verbindung, um Ihre Stellenanzeige gemeinsam für
          die Veröffentlichung und Reichweitenmaximierung zu optimieren.
        </p>
        <p>
          Mit der Veröffentlichung Ihrer Stellenanzeige bekommen Sie zusätzlich
          die Möglichkeit, auf unsere
          <router-link class="bold" to="/stellengesuche"
            >Stellengesuche</router-link
          >
          zu antworten und Kontakt zu potentiellen neuen MitarbeiterInnen
          aufzunehmen. Die Stellengesuche befinden sich aktuell im Aufbau und
          werden stetig erweitert.
        </p>
        <p>
          <strong
            >Gern bieten wir Ihnen nach Absprache auch individuelle Pakete
            an</strong
          >, wenn Sie beispielsweise eine Stellenanzeige dauerhaft bei uns
          schalten möchten. Kontaktieren Sie uns dazu gern über unser
          <router-link
            class="bold"
            to="/kontakt?role=employer&subject=Stellenpakete"
            >Kontaktformular</router-link
          >.
        </p>
      </div>
    </div>

    <div class="container my-4 my-md-5">
      <h2 class="display-4 text-center bold">
        Wir kooperieren mit
      </h2>
      <CooperationPartners />
    </div>

    <div id="numbers-and-facts2" class="container mb-5 py-md-5">
      <h2 class="h1 text-center bold mb-4">
        Ein paar Zahlen und Fakten
      </h2>
      <NumbersAndFacts class="mt-5" />
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
          findet: bei
          <strong
            >Social Media<span class="text-muted">*</span>, Google Jobs und auf
            unserer Webseite</strong
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
          <strong>mehr als eine reine Jobbörse</strong> sind, erreichen wir mit
          unserem Angebot zudem eine deutlich größere Anzahl von wirklich
          motivierten Medizinischen Fachangestellten | Zahnmedizinischen
          Fachangestellten.
        </p>
        <p>
          Wir arbeiten
          <strong>nicht mit Personalvermittlern</strong>,
          <strong>Zeitarbeitsfirmen oder Headhuntern</strong>
          zusammen.
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

    <div id="tipps-stellenanzeigen" class="container mb-5">
      <h2 class="bold mb-4">
        8 Tipps &ndash; Stellenanzeige für Medizinische Fachangestellte (MFA) &
        Zahnmedizinische Fachangestellte (ZFA)
      </h2>
      <p>
        Ihre Stellenanzeige ist eine Einladung für BewerberInnen zum Dialog –
        denn bestenfalls wird daraus ein Vorstellungsgespräch. Eine gute
        Stellenanzeige beschreibt nicht nur die zu besetzende Stelle, sondern
        geht auch auf die Bedürfnisse der Zielgruppe ein. Machen Sie ein
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
          class="bold"
          >Beispiel & Muster Stellenanzeige für MFA | ZFA | ArzthelferIn</b-link
        >
        zur Inspiration ansehen.
      </p>

      <div class="d-flex justify-content-center mt-4 mb-5">
        <b-button
          variant="primary"
          href="/downloads/MfaMalAnders_Beispiel_Stellenanzeige.pdf"
          target="_blank"
          >Download Muster-Stellenanzeige</b-button
        >
      </div>

      <JobAdTipsContainer class="my-4" />
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
            Für die Zahlung Ihrer Stellenanzeige können Sie eine Kreditkarte
            nutzen, per GooglePay oder per GiroPay bezahlen. Bei diesen
            Zahlungsmethoden wird Ihre Stellenanzeige sofort veröffentlicht.
            Ebenso steht Ihnen die Zahlung per Rechnung zur Verfügung. Bitte
            beachten Sie hierbei, dass Ihre Stellenanzeige erst dann
            veröffentlicht wird, wenn Ihre Zahlung bei uns eingegangen ist.
          </p>
          <h3 class="h5 bold">
            Wie lange dauert es bis zur Veröffentlichung meiner Stellenanzeige?
          </h3>
          <p>
            Je nach Zahlungsmethode ist Ihre Stellenanzeige sofort online
            (GiroPay, GooglePay, Kreditkarte) oder Zahlung auf Rechnung erst
            nach erfolgtem Zahlungseingang.
          </p>
          <h3 class="h5 bold">
            Kann ich auch per Rechnung zahlen?
          </h3>
          <p>
            Ja, die Möglichkeit besteht. Ihre Stellenanzeige wird von uns
            freigeschaltet sobald wir einen Zahlungseingang von Ihnen verbuchen
            können.
          </p>
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
            Stelle ist so lange online, wie Ihre gewählte Laufzeit sowie Ihre
            angegebene Bewerbungsfrist nicht abgelaufen sind. Über Ihren Account
            können Sie Ihre Stellenanzeige jederzeit selbst offline nehmen oder
            löschen. Für individuelle Stellenpakete können Sie uns direkt über
            das
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
            Newsletter sowie je nach Paket über unsere Social Media Kanäle.
          </p>
          <h3 class="h5 bold">
            Ich benötige Hilfe bei der Erstellung einer attraktiven
            Stellenanzeige. Kann ich Unterstützung von Ihnen bekommen?
          </h3>
          <p>
            In unserem "Professional" Paket erhalten Sie individuelle und
            persönliche Beratung bei der Erstellung und Optimierung Ihrer
            Stellenanzeige. Zudem geben wir Ihnen mit unseren
            <b-link href="#tipps-stellenanzeigen"
              >Tipps für attraktive Stellenanzeigen</b-link
            >
            wichtige Hinweise an die Hand. Benötigen Sie darüber hinaus Hilfe,
            melden Sie sich gern auch über das
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
            können Sie individuell für jede Stellenanzeige hinterlegen. Da wir
            nicht mit Personalvermittlungen zusammen arbeiten, ist wichtig, dass
            Sie als Agentur nicht als Dritte im Bewerbungsprozess auftreten.
            D.h. Bewerbungen laufen ausschließlich über Ihre Kunden.
          </p>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center mt-4">
        <b-button
          to="/kontakt?role=employer"
          variant="primary"
          size="lg"
          class="mx-1 my-1"
          >Kontakt</b-button
        >
        <b-button
          to="/auth/register"
          variant="secondary"
          size="lg"
          class="d-block d-md-inline-block my-2 mr-md-2"
          >Stellenanzeige erstellen</b-button
        >
      </div>
    </div>

    <ScrollToTopBtn />

    <Head
      title="Stellenanzeige schalten – MFA & ZFA finden!"
      desc="MFA mal anders ist das Jobportal für die Suche nach Zahnmedizinischen | Medizinischen Fachangestellten. Gesucht – Gefunden! Mit günstigen Stellenanzeigen, die wirklich ankommen."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ScrollToTopBtn from "@/components/buttons/ScrollToTopBtn.vue";
  import JobAdTipsContainer from "@/components/containers/JobAdTipsContainer.vue";
  import NumbersAndFacts from "@/components/containers/NumbersAndFacts.vue";
  import CooperationPartners from "@/components/containers/CooperationPartners.vue";
  import TestimonialsContainer from "@/components/containers/TestimonialsContainer.vue";
  import PricingCard from "@/components/ui/PricingCard.vue";
  import PricingCardPlaceholder from "@/components/ui/PricingCardPlaceholder.vue";
  import { scrollToHashMixin } from "@/mixins/scrollToHashMixin";
  export default {
    name: "Employer",
    components: {
      JobAdTipsContainer,
      NumbersAndFacts,
      CooperationPartners,
      TestimonialsContainer,
      PricingCard,
      PricingCardPlaceholder,
      ScrollToTopBtn
    },
    mixins: [scrollToHashMixin],
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
