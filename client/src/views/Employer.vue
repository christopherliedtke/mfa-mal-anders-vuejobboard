<template>
  <div class="employer">
    <div class="title">
      <h1>{{ title }}</h1>
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
                über unsere spezielle Karriereplattform
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
                <span class="text-secondary">Erhalten Sie mehr Reichweite</span>
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
                  {{ $config.pricingPackages[0].price / 100 }}
                  {{ $config.payment.currency }}</b-link
                >
                <span v-if="$config.payment.tax" class="small">
                  (zzgl. USt.)</span
                >
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
      <h2 class="h5 text-center">
        Stellenanzeige schalten bei MFA mal anders
      </h2>
      <p class="bold display-4 text-center">
        Ihre Zielgruppe genau im Blick
      </p>
      <h3 class="text-center d-md-none">
        Die reichweitenstärkste Karriereplattform speziell für <br />
        Medizinische Fachangestellte&nbsp;| Zahnmedizinische Fachangestellte
      </h3>

      <div class="row my-4 my-md-5">
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
            <h4 class="mt-2 mb-3">Genau Ihre Zielgruppe</h4>
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
            <h4 class="mt-2 mb-3">Niedrige Kosten</h4>
            <p>
              Veröffentlichen Sie Ihre Stellenanzeige und wählen Sie eines
              unserer Pakete
              <strong>
                ab
                {{ $config.pricingPackages[0].price / 100 }}
                {{ $config.payment.currency }}
                für {{ $config.pricingPackages[0].duration }} Tage</strong
              ><span v-if="$config.payment.tax" class="small">
                (zzgl. USt.)</span
              >.
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
              class="bi bi-puzzle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Einfach und bequem</h4>
            <p>
              <strong
                >Sie erstellen Ihre Anzeige, wir sorgen für den Rest</strong
              >
              - Reichweite auf
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
        <div class="row row-cols-1 row-cols-lg-3 mb-4">
          <div
            v-for="pricingPackage in $config.pricingPackages"
            :key="pricingPackage.name"
            class="col"
          >
            <PricingCard :pricing="pricingPackage" />
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
          <b-link to="/stellengesuche">Stellengesuche</b-link> zu antworten und
          Kontakt zu potentiellen neuen MitarbeiterInnen aufzunehmen.
        </p>
        <p>
          Gern bieten wir Ihnen nach Absprache auch individuelle Pakete an, wenn
          Sie beispielsweise eine Stellenanzeige dauerhaft bei uns schalten
          möchten. Kontaktieren Sie uns dazu gern über unser
          <b-link to="/kontakt?role=employer&subject=Stellenpakete"
            >Kontaktformular</b-link
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

    <!-- <div id="testimonials" class="container mb-5 pb-md-5" fluid>
      <h2 class="h4 text-center">Feedback</h2>
      <h3 class="h1 text-center bold mb-4">Was unsere Kunden sagen</h3>
      <div
        style="max-width: 600px"
        class="container position-relative bg-light-shade border-radius2 shadow1 p-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 512 512"
          class="position-absolute text-primary icon-transparent"
          style="right: 15%; top: 25%;"
        >
          <path
            data-v-64b4b916=""
            fill="currentColor"
            d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
            class=""
          ></path>
        </svg>
        <div class="row">
          <div class="col-12 col-md-3 d-flex py-2 px-4">
            <b-img
              class="rounded-circle shadow1"
              height="100"
              src="@/assets/img/kinderarztpraxis_ostertor_200.jpg"
            />
          </div>
          <div class="col-12 col-md-9 d-flex flex-column py-2">
            <p>
              Durch die Online-Suche haben wir deutlich mehr und auch besser
              qualifizierte Zuschriften erhalten. Vielen Dank noch einmal für
              Ihre Unterstützung und die wertvollen Tipps.
            </p>
            <p class="h6 mb-0">
              &ndash; Franziska Fritz |
              <em>Kinderarztpraxis Ostertor</em>
            </p>
          </div>
        </div>
      </div>
    </div> -->

    <div
      id="mehr-informationen"
      class="container-fluid bg-light-shade py-5 mb-5"
    >
      <div class="container">
        <h2 class="bold mb-4">
          Ihre Jobbörse nur für MFA | ZFA | ArzthelferIn – MFA mal anders
        </h2>
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col">
            <p>
              Wir bieten speziell Arztpraxen, MVZs und allen weiteren
              Einrichtungen aus dem Gesundheitswesen eine vertrauensvolle
              Plattform mit
              <strong>Fokus auf Ihre Zielgruppe</strong>.
            </p>
            <p>
              Aufgrund persönlicher Erfahrungen als MFA und im
              Gesundheitsbereich bringen wir als Initiatoren von MFA mal anders
              detaillierte Branchenkenntnisse mit. Da wir um die
              <strong>
                Probleme beim Finden von qualifiziertem Personal
              </strong>
              wissen, können wir unser Angebot punktgenau ausrichten.
            </p>
            <p>
              Ihre Stellenanzeige ist bei uns bestens platziert. Im Gegensatz zu
              anderen allgemeinen Stellenbörsen, finden Sie hier ausschließlich
              die richtige Zielgruppe für Ihr Unternehmen: Medizinische
              Fachangestellte & Zahnmedizinische Fachangestellte.
            </p>
            <h3>Wo wir Ihre Stellenanzeige ausspielen</h3>
            <p>
              Ihre Stellenanzeige wird dort ausgespielt, wo Sie Ihre Zielgruppe
              findet: bei
              <strong>
                Social Media, Google Jobs und auf unserer Webseite
              </strong>
              . Zusätzlich versenden wir Ihre Anzeige in unserem
              <strong> wöchentlichen Newsletter</strong>.
            </p>
          </div>
          <div class="col">
            <p>
              Erhöhen Sie die Chance, dass Ihre Stellenanzeige von der richtigen
              Person gesehen wird.
            </p>
            <b-img
              class="p-2 p-md-4"
              right
              style="max-width: 50%"
              src="@/assets/img/marketing_.svg"
              alt="Stellenanzeige für MFA / ZFA wird über verschiedene Kanäle veröffentlicht"
            />
            <p>
              Damit grenzen wir uns gezielt von allgemeinen Jobbörsen, die eine
              breite Masse an unterschiedlichen Berufsgruppen ansprechen und
              hohe Streuverluste haben, ab. Da wir
              <strong>mehr als eine reine Jobbörse</strong> sind, erreichen wir
              mit unserem Angebot zudem eine deutlich größere Anzahl von
              wirklich motivierten Medizinischen Fachangestellten |
              Zahnmedizinischen Fachangestellten.
            </p>
            <p>
              Wir arbeiten
              <strong>nicht mit Personalvermittlern</strong>,
              <strong>Zeitarbeitsfirmen oder Headhuntern</strong>
              zusammen.
            </p>

            <p>
              Bei uns können Sie Ihre Stellenanzeige zudem
              <strong>kostengünstig</strong> veröffentlichen und so Ihrem Budget
              anpassen sowie zusätzliche Reichweite und qualifizierte
              Bewerbungen erzielen.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="tipps-stellenanzeigen" class="container mb-5">
      <h2 class="bold mb-4">
        Tipps für Ihre Stellenanzeige
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
          >Muster Stellenanzeige für MFA | ZFA</b-link
        >
        zur Inspiration ansehen.
      </p>

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
  import JobAdTipsContainer from "@/components/containers/JobAdTipsContainer.vue";
  import NumbersAndFacts from "@/components/containers/NumbersAndFacts.vue";
  import CooperationPartners from "@/components/containers/CooperationPartners.vue";
  import PricingCard from "@/components/ui/PricingCard.vue";
  import ScrollToTopBtn from "@/components/buttons/ScrollToTopBtn.vue";
  import { scrollToHashMixin } from "@/mixins/scrollToHashMixin";
  export default {
    name: "Employer",
    components: {
      JobAdTipsContainer,
      NumbersAndFacts,
      CooperationPartners,
      PricingCard,
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
          },
          {
            id: "canonical",
            rel: "canonical",
            href: `${this.$config.website.url}/fuer-arbeitgeber`
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .employer {
    #testimonials {
      .icon-transparent {
        opacity: 0.1;
      }
    }

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
