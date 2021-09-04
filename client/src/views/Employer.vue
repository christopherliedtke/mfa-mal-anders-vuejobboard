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
      <b-row
        style="max-width: 1600px; overflow-x: hidden"
        class="px-3 py-5 px-md-5 mx-auto ml-lg-auto position-relative"
      >
        <div class="bg-logo"></div>
        <b-col cols="12" md="8" style="z-index: 1">
          <h2 class="display-4 bold mb-4">
            <em>Motivierte</em> und <em>qualifizierte</em> MFA & ZFA{{
              $route.query.location ? ` in ${$route.query.location}` : ""
            }}
            gesucht?
          </h2>
          <ul class="lead no-bullets my-4 my-lg-5">
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                Einfach und bequem
                <span class="text-secondary">in wenigen Minuten</span>
                Ihre Stellenanzeige veröffentlichen
              </div>
            </li>
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                Erreichen Sie
                <span class="text-secondary"
                  >engagierte potentielle MitarbeiterInnen</span
                >
                über unsere spezielle Karriereplattform nur für MFA & ZFA
              </div>
            </li>
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                <span class="text-secondary"
                  >Erhalten Sie mit uns mehr Reichweite</span
                >
                über Google, Google Jobs, Social Media und unsere MFA & ZFA
                Community
              </div>
            </li>
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                Veröffentlichen Sie Ihre Stellenanzeige
                <b-link class="text-secondary" href="#preise"
                  >ab
                  {{ $config.pricingPackages[0].price / 100 }}
                  {{ $config.payment.currency }}</b-link
                >
              </div>
            </li>
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
              href="#advantages"
              variant="outline-light"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Mehr erfahren</b-button
            >
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="4"
          class="d-none d-lg-flex justify-content-center align-items-center"
        >
          <!-- <b-img
            style="width: 450px; opacity: 0.9; right: 0"
            class="position-absolute p-0"
            src="@/assets/img/handshake.svg"
            alt="MFA / ZFA trifft Arzt zum Bewerbungsgespräch"
          /> -->
        </b-col>
      </b-row>
    </div>

    <!-- <b-container class="py-3 py-lg-5 px-md-5">
      <b-row
        style="overflow-x: hidden"
        class="bg-primary text-light border-radius2 shadow1 w-100 p-3 py-4 p-md-5 mx-auto position-relative"
      >
        <div class="bg-logo"></div>
        <b-col cols="12" lg="8" style="z-index: 1">
          <h2 class="display-4 bold mb-4">
            <em>Motivierte</em> und <em>qualifizierte</em> MFA & ZFA{{
              $route.query.location ? ` in ${$route.query.location}` : ""
            }}
            gesucht?
          </h2>
          <ul class="lead no-bullets my-4 my-lg-5">
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                Einfach und bequem
                <span class="text-secondary">in wenigen Minuten</span>
                Ihre Stellenanzeige veröffentlichen
              </div>
            </li>
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                <span class="text-secondary"
                  >Erhalten Sie mit uns mehr Reichweite</span
                >
                über Google Jobs, Social Media und unsere MFA & ZFA Community
              </div>
            </li>
            <li class="d-flex">
              <Fa icon="check" class="mr-3 mt-1" />
              <div>
                Veröffentlichen Sie Ihre Stellenanzeige
                <b-link class="text-secondary" href="#preise"
                  >ab
                  {{ $config.pricingPackages[0].price / 100 }}
                  {{ $config.payment.currency }}</b-link
                >
              </div>
            </li>
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
              href="#advantages"
              variant="outline-light"
              size="lg"
              class="d-block d-md-inline-block my-2 mr-md-2"
              >Mehr erfahren</b-button
            >
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="4"
          class="d-none d-lg-flex justify-content-center align-items-center"
        >
          <b-img
            style="width: 450px; opacity: 0.9; right: 0"
            class="position-absolute p-0"
            src="@/assets/img/handshake.svg"
            alt="MFA / ZFA trifft Arzt zum Bewerbungsgespräch"
          />
        </b-col>
      </b-row>
    </b-container> -->

    <b-container id="advantages" class="my-5 py-3 py-lg-5">
      <h2 class="h5 text-center">
        Stellenanzeige schalten bei MFA mal anders
      </h2>
      <p class="bold display-4 text-center">
        Ihre Zielgruppe genau im Blick
      </p>
      <h3 class="h3 text-center">
        Stellenangebote nur für ArzthelferInnen – MFA & ZFA
      </h3>

      <b-row class="my-4 my-md-5">
        <b-col>
          <div class="icon-box shadow1 py-5 px-4">
            <Fa class="m-0" :icon="['fa', 'user-nurse']" size="3x" />
            <h4 class="h4 mt-4 mb-3">Genau Ihre Zielgruppe</h4>
            <p>
              Bei uns erreichen Sie
              <strong>exklusiv motivierte ArzthelferInnen – MFA & ZFA</strong>
              und damit genau Ihre Zielgruppe.
            </p>
          </div>
        </b-col>
        <b-col>
          <div class="icon-box shadow1 py-5 px-4">
            <Fa class="m-0" :icon="['fa', 'credit-card']" size="3x" />
            <h4 class="h4 mt-4 mb-3">Niedrige Kosten</h4>
            <p>
              Veröffentlichen Sie Ihre Stellenanzeige und wählen Sie eines
              unserer Pakete
              <strong>
                ab
                {{ $config.pricingPackages[0].price / 100 }}
                {{ $config.payment.currency }}
                für {{ $config.pricingPackages[0].duration }} Tage.
              </strong>
            </p>
          </div>
        </b-col>
        <b-col>
          <div class="icon-box shadow1 py-5 px-4">
            <Fa class="m-0" :icon="['fa', 'paper-plane']" size="3x" />
            <h4 class="h4 mt-4 mb-3">Einfach und bequem</h4>
            <p>
              <strong
                >Sie erstellen Ihre Anzeige, wir sorgen für den Rest</strong
              >
              - Reichweite auf MFA mal anders, Google Jobs, Facebook und
              <b-link to="#more-info">mehr...</b-link>
            </p>
          </div>
        </b-col>
      </b-row>
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
            href="#more-info"
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
    </b-container>

    <b-container fluid class="bg-light-shade py-4 py-lg-5 px-0">
      <b-container id="preise">
        <h2 class=" display-4 bold text-center">
          Unsere Pakete in der Übersicht
        </h2>
        <div class="my-4 my-lg-5 text-center text-lg-left">
          <p>
            Mit MFA mal anders möchten wir Medizinischen & Zahnmedizinischen
            Fachangestellten die Möglichkeit geben, einen attraktiven Job zu
            finden. Aber auch Ihnen als Arbeitgeber eine alternative Plattform
            bereitstellen, die Ihre Stellenangebote an die richtige Zielgruppe
            ausspielt und so Ihre Chancen erhöht, qualifizierte Bewerbungen zu
            erhalten.
          </p>
          <p>
            Zur Veröffentlichung Ihrer Stellenanzeige bieten wir verschiedene
            Pakete an, um Sie bei Ihrer MitarbeiterInnen-Suche optimal
            unterstützen und ergänzen zu können.
          </p>
        </div>
        <b-row cols="1" cols-lg="3" class="mb-4">
          <b-col
            v-for="pricingPackage in $config.pricingPackages"
            :key="pricingPackage.name"
          >
            <PricingCard :pricing="pricingPackage" />
          </b-col>
        </b-row>
        <p>
          Sie haben die Möglichkeit, Ihre Stellenanzeige nach
          <b-link to="/auth/register">Registrierung</b-link> auf unserem Portal
          zu erstellen und in einer Vorschau zu betrachten. Anschließend können
          Sie Ihre Stellenanzeige mit einem der drei Pakete veröffentlichen.
          Auch für das Professional Paket bitten wir Sie, Ihre Stellenanzeige
          anhand unserer vorgegebenen Struktur zu erstellen. Wir setzen uns dann
          umgehend mit Ihnen in Verbindung, um Ihre Stellenanzeige gemeinsam für
          die Veröffentlichung und Reichweitenmaximierung zu optimieren.
        </p>
        <p>
          Gern bieten wir Ihnen nach Absprache auch individuelle Pakete an, wenn
          Sie beispielsweise eine Stellenanzeige dauerhaft bei uns schalten
          möchten. Kontaktieren Sie uns dazu gern über unser
          <b-link to="/kontakt?role=employer&subject=Stellenpakete"
            >Kontaktformular</b-link
          >.
        </p>
      </b-container>
    </b-container>

    <b-container class="my-4 my-md-5">
      <h2 class="display-4 text-center bold">
        Wir kooperieren mit
      </h2>
      <b-row class="py-4" cols="1" cols-md="2">
        <b-col
          v-for="partner in partners"
          :key="partner.name"
          class="d-flex flex-column justify-content-start align-items-center"
        >
          <b-link :href="partner.url" target="_blank">
            <img
              fluid
              :src="partner.img"
              :alt="`Logo - ${partner.name}`"
              style="max-height: 75px; max-width: 220px"
              class="m-5 blend"
            />
          </b-link>
          <!-- eslint-disable-next-line -->
          <div v-html="partner.html"></div>
          <b-button
            v-if="partner.html"
            class="align-self-start"
            size="sm"
            variant="outline-primary"
            :href="partner.url"
            target="_blank"
            rel="noopener"
            >Mehr erfahren</b-button
          >
        </b-col>
      </b-row>
    </b-container>

    <b-container id="numbers-and-facts" class="mb-5 py-md-5">
      <h2 class="h1 text-center bold mb-4">
        Ein paar Zahlen und Fakten
        <span style="font-size: 0.8rem">(01/2021)</span>
      </h2>
      <b-row cols="1" cols-md="3">
        <b-col
          v-for="item in numbersAndFacts"
          :key="item.desc"
          class="text-center"
        >
          <Fa
            class="mt-3 mb-4 text-secondary"
            :icon="['fab', item.icon]"
            size="4x"
          />
          <div class="display-4 bold mb-3">
            {{ Math.floor(item.number).toLocaleString() }}+
          </div>
          <p>{{ item.desc }}</p>
        </b-col>
      </b-row>
    </b-container>

    <!-- <b-container id="testimonials" class="mb-5 pb-md-5" fluid>
            <h2 class="h4 text-center">Feedback</h2>
            <h3 class="h1 text-center bold mb-4">Was unsere Kunden sagen</h3>
            <b-container
                style="max-width: 600px"
                class="position-relative bg-light-shade border-radius2 shadow1 p-5"
            >
                <Fa
                    style="right: 15%; top: 25%"
                    class="position-absolute text-primary icon-transparent"
                    icon="quote-right"
                    size="7x"
                />
                <b-row>
                    <b-col cols="12" md="3" class="d-flex py-2 px-4">
                        <b-img
                            class="rounded-circle shadow1"
                            height="100"
                            src="@/assets/img/kinderarztpraxis_ostertor_200.jpg"
                        />
                    </b-col>
                    <b-col cols="12" md="9" class="d-flex flex-column py-2">
                        <p>
                            Durch die Online-Suche haben wir deutlich mehr und
                            auch besser qualifizierte Zuschriften erhalten.
                            Vielen Dank noch einmal für Ihre Unterstützung und
                            die wertvollen Tipps.
                        </p>
                        <p class="h6 mb-0">
                            &ndash; Franziska Fritz |
                            <em>Kinderarztpraxis Ostertor</em>
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-container> -->

    <b-container id="more-info" fluid class="bg-light-shade py-5 mb-5">
      <b-container>
        <h2 class="bold mb-4">
          Ihre Jobbörse nur für ArzthelferInnen – MFA & ZFA – MFA mal anders
        </h2>
        <b-row cols="1" cols-md="2">
          <b-col>
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
              die richtige Zielgruppe für Ihr Unternehmen: Medizinische &
              Zahnmedizinische Fachangestellte.
            </p>
            <h3>Wo wir Ihre Stellenanzeige ausspielen</h3>
            <p>
              Ihre Stellenanzeige wird dort ausgespielt, wo Sie Ihre Zielgruppe
              findet: bei
              <strong>
                Social Media, Google Jobs und auf unserer Webseite
              </strong>
              . Zusätzlich versenden wir Ihre Anzeige in unserem
              <strong>
                wöchentlichen Newsletter
              </strong>
              .
            </p>
          </b-col>
          <b-col>
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
              wirklich motivierten MFAs & ZFAs.
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
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container id="tipps-stellenanzeigen" class="mb-5">
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
        hier eine kleine Übersicht an Tipps. Zusätzlich können Sie sich unsere
        <b-link
          href="/downloads/MfaMalAnders_Beispiel_Stellenanzeige.pdf"
          target="_blank"
          class="bold"
          >Beispiel Stellenanzeige</b-link
        >
        zur Inspiration ansehen.
      </p>
      <b-row>
        <b-col
          v-for="jobAdTipp in jobAdTipps"
          :key="jobAdTipp.title"
          cols="12"
          md="6"
          lg="4"
        >
          <div class="icon-box shadow1">
            <div
              style="width: 75px; height: 75px"
              class="bg-light border-radius1 shadow3 d-flex justify-content-center align-items-center mb-3"
            >
              <Fa class="m-0" :icon="['fa', jobAdTipp.icon]" size="3x" />
            </div>
            <h3 class="bold">{{ jobAdTipp.title }}</h3>
            <p class="mb-0">
              {{ jobAdTipp.desc }}
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <div class="icon-box shadow1 py-4">
            <h4 class="bold mb-3">
              Jetzt Stellenanzeige erstellen
            </h4>
            <p>
              Erstellen Sie jetzt Ihre attraktive Stellenanzeige und erreichen
              Sie unsere große Community von MFAs & ZFAs! Mit unseren
              <b-link class="text-secondary" href="#preise">Paketen</b-link>
              unterstützen wir Sie optimal und individuell bei der
              Personalsuche.
            </p>
            <b-button to="/auth/register" variant="secondary"
              >Zur Registrierung</b-button
            >
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="12">
          <JobAdTippsBanner />
        </b-col>
        <b-col cols="12">
          <ApplicationProcessBanner />
        </b-col>
      </b-row>
    </b-container>

    <b-container id="faq" class="mb-5">
      <h2 class="h1 bold text-center mb-4">
        Häufige Fragen
      </h2>
      <b-row cols="1" cols-md="2">
        <b-col>
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
        </b-col>
        <b-col>
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
        </b-col>
      </b-row>
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
    </b-container>

    <Head
      title="Stellenanzeige schalten – MFA & ZFA finden!"
      desc="MFA mal anders ist das Jobportal speziell nur für Medizinische / Zahnmedizinische Fachangestellte. Gesucht – Gefunden! Mit günstigen Stellenanzeigen, die wirklich ankommen."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import JobAdTippsBanner from "@/components/banners/JobAdTippsBanner.vue";
  import ApplicationProcessBanner from "@/components/banners/ApplicationProcessBanner.vue";
  import PricingCard from "@/components/ui/PricingCard.vue";
  export default {
    name: "Employer",
    components: {
      JobAdTippsBanner,
      ApplicationProcessBanner,
      PricingCard
    },
    data() {
      return {
        title: "Für Arbeitgeber",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Für Arbeitgeber", to: "/fuer-arbeitgeber" }
        ],
        jobAdTipps: [
          {
            icon: "drafting-compass",
            title: "Präziser Stellentitel",
            desc:
              "Beschreiben Sie die Stelle in wenigen Worten so konkret wie möglich. Heben Sie bereits hier die Vorteile für die Arbeit bei Ihnen hervor. Versuchen Sie positiv aufzufallen!"
          },
          {
            icon: "hospital",
            title: "Interessanter Einstiegstext",
            desc:
              "Erzählen Sie ein wenig über die Praxis bzw. Ihr Unternehmen. Wie viele MitarbeiterInnen gibt es? Seit wann gibt es die Praxis? Was zeichnet Sie aus? Wie ist die Arbeitskultur?"
          },
          {
            icon: "tasks",
            title: "Konkrete Aufgaben",
            desc:
              "Beschreiben Sie die konkreten und wichtigsten Aufgaben, sodass BewerberInnen ein gutes Bild bekommen und wissen, was sie potentiell erwartet."
          },
          {
            icon: "users",
            title: "Sympathisches Teambild",
            desc:
              "Bilder sagen mehr als 1000 Worte. Das gilt auch hier und speziell in Zeiten von Social Media. Ein nettes Bild von Ihrem Praxisteam kann die Zahl der Bewerbungen um ein Vielfaches erhöhen."
          },
          {
            icon: "syringe",
            title: "Adäquates Stellenprofil",
            desc:
              "Werden Sie auch hier konkret und unterscheiden Sie zwischen erforderlichen und wünschenswerten Kenntnissen. Zu viele oder hohe Anforderungen können BewerberInnen abschrecken, die eigentlich geeignet wären."
          },
          {
            icon: "gift",
            title: "Lukrative Benefits",
            desc:
              "Vergessen Sie nicht das wesentliche für die KandidatInnen. Was macht einen Wechsel zu Ihnen lohnenswert? Neben Gehalt und Urlaub können auch Dinge wie Weiterbildungen, spezielle Arbeitszeitmodelle oder Zuschüsse attraktiv sein."
          },
          {
            icon: "door-open",
            title: "Einfaches Bewerben",
            desc:
              "Ermöglichen Sie das einfache Bewerben nur per Lebenslauf. So können Sie die innerliche Hürde für BewerberInnen beträchtlich senken. Das persönliche Gespräch ist letztlich ohnehin entscheidend."
          },
          {
            icon: "desktop",
            title: "Moderner Webauftritt",
            desc:
              "Platzieren Sie sich als moderner Arbeitgeber. Potentielle BewerberInnen informieren sich meist auf Ihrer Webseite über Ihr Unternehmen. Hier können Sie punkten und positiv herausstechen."
          }
        ],
        partners: [
          {
            name: "PKV Institut",
            img: "/img/pkvverlag_logo.png",
            url:
              "https://www.pkv-institut.de/?utm_source=MFA%20mal%20anders&utm_medium=affiliate",
            html: `
              <p>Die PKV Institut GmbH entwickelt seit 1990 Fort- und Weiterbildungsangebote speziell für medizinische Fachangestellte (MFA) und zahnmedizinische Fachangestellte (ZFA). Alle Fernlehrgänge sind von der staatlichen Zentralstelle für Fernunterricht zertifiziert. Das PKV Institut ist als Bildungsdienstleister ISO-zertifiziert (DIN 29990) sowie AZAV-zertifiziert und gehört zu den TOP-Fernschulen in Deutschland.</p>
              <p>Mit dem jährlich in München stattfindenden „MFA-Tag & ZFA-Tag“ richtet das PKV Institut den größten deutschsprachigen Kongress für MFAs und ZFAs aus. Seit 8 Jahren bietet das PKV Institut auch Online-Seminare bzw. Webinare an.</p>
              <p>Es arbeitet unabhängig von Industrie, Politik und Pharmaunternehmen und ist allein den MFAs und ZFAs sowie den Arzt- und Zahnarztpraxen verpflichtet. Es steht nach dem Motto <strong>„Nah an der Praxis. Nah am Leben.“</strong> für einen verbesserten Praxisalltag, mehr Erfolg und Chancen im Beruf.</p>
            `
          },

          {
            name: "Hausärzteverband Westfalen-Lippe",
            img: "/img/hvwl_logo.png",
            url:
              "https://www.hausaerzteverband-wl.de/index.php/hausaerzte/personal-finden-mfa-mal-anders",
            html: `
              <p>Der Hausärzteverband Westfalen-Lippe e.V. ist ein Zusammenschluss und
                die Interessenvertretung hausärztlich tätiger Ärztinnen und Ärzte in
                Westfalen-Lippe und der drittgrößte der 17 Landesverbände des
                Deutschen Hausärzteverbandes.
              </p>
              <p>
                Mit knapp 30.000 Mitgliedern bundesweit ist der Deutsche
                Hausärzteverband e.V. der größte Berufsverband niedergelassener Ärzte
                in Deutschland und Europa.
              </p>
              <p>
                Die 17 Landesverbände setzen sich für die Interessen der Hausärztinnen
                und Hausärzte regional gegenüber Ärztekammern, Kassenärztlichen
                Vereinigungen, Krankenkassen und Landesministerien ein. Das Büro des
                Bundesvorsitzenden in Berlin nimmt die Interessen auf
                bundespolitischer Ebene wahr.
              </p>
              <p>
                Der Hausärzteverband Westfalen-Lippe e.V. vertritt mehr als 4.500
                Ärztinnen und Ärzte, die in Westfalen-Lippe an der hausärztlichen
                Versorgung teilnehmen.
              </p>
              <p>
                <strong>
                  Als Kooperationspartner des Hausärzteverbandes Westfalen-Lippe
                  unterstützt „MFA mal anders“ Mitglieder des Hausärzteverbandes mit
                  einem Vorzugsangebot zur Schaltung von Stellenanzeigen.
                </strong>
              </p>
            `
          },
          {
            name: "Landarzt sein.",
            img: "/img/landarztSein_logo.png",
            url:
              "https://www.landarzt-sein.de/?utm_source=mfa-mal-anders&utm_medium=linkref&utm_campaign=other"
          },
          {
            name: "Hausärzteverband HH",
            img: "/img/hzv-logo-hamburg2.png",
            url: "https://www.hausaerzteverband-hamburg.de/"
          }

          // {
          //   name: "Ihre „gesunde“ Arztpraxis",
          //   img: "/img/ihreGesundeArztpraxis_logo2.png",
          //   url: "https://www.facebook.com/ihregesundearztpraxis/"
          // }
        ],
        numbersAndFacts: [
          {
            icon: "google",
            number: 423000,
            current: 0,
            desc: "Menschen sehen uns monatlich bei Google"
          },
          {
            icon: "facebook",
            number: 28000,
            current: 0,
            desc: "Monatliche Reichweite bei Facebook"
          },
          {
            icon: "chrome",
            number: 53000,
            current: 0,
            desc: "Monatliche Seitenaufrufe auf der Webseite"
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
                                "name": "Für Arbeitgeber",
                                "item": "https://www.mfa-mal-anders.de/fuer-arbeitgeber"
                            }]
                        }`
          }
        ]
      };
    },
    mounted() {
      // const elem = window.document.getElementById("numbers-and-facts");
      // let intervalId = setInterval(() => {
      //   if (elem.offsetTop < window.scrollY + window.innerHeight * 0.66) {
      //     clearInterval(intervalId);
      //     this.startCounters();
      //   }
      // }, 500);
    },
    methods: {
      startCounters() {
        this.numbersAndFacts.forEach(element => {
          setInterval(() => {
            if (element.current < element.number) {
              element.current = element.current + element.number / 100;
            }
          }, 1);
        });
      }
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

    .blend {
      // filter: grayscale(0.5);
      transition: linear 0.3s;

      &:hover {
        // filter: grayscale(0);
        transform: scale(0.95);
      }
    }
  }
</style>
