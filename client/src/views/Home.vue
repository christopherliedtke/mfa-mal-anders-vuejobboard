<template>
  <div class="home">
    <div
      class="container-fluid hero d-flex justify-content-center align-items-center"
    >
      <div style="max-width: 850px" class="container p-0">
        <div class="hero-text mt-4 mb-5 my-lg-5 p-4">
          <h1>
            <span
              class="display-2"
              style="font-weight: 800; letter-spacing: -0.04em"
            >
              MFA <br class="d-md-none" />
              mal anders
            </span>
            <br />
            <span
              class="h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"
              style="font-weight: 600"
            >
              Das Stellen- & Karriereportal nur für MFA & ZFA
            </span>
          </h1>
          <p class="lead mt-2 mt-md-3 mb-0">
            Informiere Dich über berufliche Perspektiven, Fort- und
            Weiterbildungen, Stellenangebote und vieles mehr<span
              class="d-none d-md-inline"
            >
              – speziell für ArzthelferInnen | Medizinische Fachangestellte
              (MFA) | Zahnmedizinische Fachangestellte (ZFA)</span
            >.
          </p>
        </div>
        <SearchWidgetJob size="lg" />
      </div>
    </div>

    <div class="container mt-4 mt-lg-0">
      <JobListTeaser />
    </div>

    <div class="container my-3 my-md-5 py-3 py-md-5">
      <h2
        class="d-none d-lg-block bold display-4 text-left text-lg-center mb-lg-5"
      >
        Deine berufliche Weiterentwicklung
      </h2>
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
              Erstelle als MFA | ZFA Dein individuelles Stellengesuch und lasse
              Dich von Arbeitgebern mit passenden Angeboten finden.
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
          to="/fortbildungskatalog"
          class="d-flex flex-column flex-lg-row icon-box shadow1"
        >
          <b-img-lazy
            class="mr-4 mb-4 ml-4"
            src="@/assets/img/Online_lesson_Monochromatic.svg"
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
      <div class="mb-4">
        <b-link
          to="/karriere/jobs-und-berufsbilder"
          class="d-flex flex-column flex-lg-row icon-box shadow1"
        >
          <b-img-lazy
            class="mr-4 mb-4 ml-4"
            src="@/assets/img/health_.svg"
            alt="MFA in der Praxis"
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
    </div>

    <div class="container-fluid bg-primary text-light py-5">
      <div class="container py-0 py-md-3">
        <h2 class="h1 mb-4 bold display-4">Warum MFA mal anders?</h2>
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col">
            <b-img-lazy
              fluid
              left
              class="border-radius2 mr-3 mb-2"
              style="max-width: 170px; height: auto"
              src="@/assets/img/KristinMaurach_portrait_800.jpg"
              alt="Portrait Kristin Maurach"
              width="800"
              height="800"
              blank-width="800"
              blank-height="800"
              blank-color="#f7f6f9"
              offset="1000"
            />
            <p>
              Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich
              meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit
              immer frustrierter, was bestimmte Punkte anging: ich stand auf der
              Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch
              nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass
              ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen
              etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt
              nicht viel. In Anbetracht dessen, was ich an Tätigkeiten
              übernommen habe, nicht angemessen.
            </p>
          </div>
          <div class="col">
            <p>
              Gesellschaft und Politik sprechen immer nur von katastrophalen
              Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem
              Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine
              Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist
              und Ärzte auch hier händeringend nach Personal suchen. Ich will
              kein Mitleid erzeugen, sondern den Beruf würdigen und mehr
              Aufmerksamkeit schenken.
            </p>
            <p>
              Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA &
              ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie
              <b-link
                class="text-secondary"
                to="/karriere/fort-und-weiterbildung"
                >Weiterbildungsmöglichkeiten</b-link
              >,
              <b-link
                class="text-secondary"
                to="/karriere/jobs-und-berufsbilder"
                >Karrierechancen</b-link
              >
              aber auch
              <b-link to="/karriere/mfa/gehalt" class="text-secondary"
                >Gehalt</b-link
              >
              (inkl. Gehaltsrechner),
              <b-link to="/karriere/bewerbung" class="text-secondary"
                >Bewerbungen</b-link
              >
              und vieles, vieles mehr geben.
            </p>
          </div>
          <div class="col">
            <p>
              Auf der anderen Seite weiß ich auch um die Probleme bei der
              Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner
              Expertise und Erfahrung aus dem Personal Recruiting unterstützen,
              um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte
              zusammenzubringen. Am Ende des Tages ist entscheidend, dass das
              Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und
              Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf
              lange Sicht für alle Beteiligten positiv gestaltet werden.
            </p>
            <p>
              <b-link
                class="text-secondary"
                to="/blog/artikel/warum-es-mfa-mal-anders-gibt"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                  />
                </svg>
                Mehr über die Story dahinter</b-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5 py-0 py-md-5 d-flex justify-content-center">
      <BannerJobPublish />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 mb-5">
          <h2 class="bold">
            Fort- und Weiterbildungen
          </h2>
          <h3 class="h4">Informiere Dich</h3>
          <p>
            Als Medizinische Fachangestelle | Zahnmedizinische Fachangestellte
            haben wir viele Möglichkeiten uns zu qualifizieren und im Job
            aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens
            Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für
            Medizinische Fachangestellte so stark bewachsen und
            undurchdringlich, dass es nicht leicht fällt, den Durchblick zu
            behalten.
          </p>
          <p>
            Wir haben einige
            <b-link to="/karriere/fort-und-weiterbildung/ueberblick"
              >Fort- und Weiterbildungen</b-link
            >
            speziell für ArzthelferInnen (MFA & ZFA) für Dich zusammengestellt
            und erweitern die Auswahl stetig, sodass Du Dich ein wenig
            inspirieren lassen kannst. Schau doch gleich mal rein!
          </p>
          <b-button
            to="/karriere/fort-und-weiterbildung/ueberblick"
            variant="primary"
            >Zu den Fort- und Weiterbildungen</b-button
          >
        </div>
        <div class="col-12 col-md-8">
          <TrainingListRandom :number="2" />
        </div>
      </div>
    </div>

    <div class="container-fluid bg-light-shade my-5 py-5 px-0">
      <div class="container">
        <h2 class="h1 bold display-4 text-center">Blog</h2>
        <h3 class="lead text-center mb-4">
          Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere,
          Persönlichkeitsentwicklung und vieles mehr...
        </h3>
        <ArticleListRandom />
      </div>
    </div>

    <Head
      title="Das Karriereportal nur für MFA & ZFA"
      desc="MFA mal anders ist dein Job- und Karriereportal speziell für ArzthelferIn | Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import BannerJobPublish from "@/components//BannerJobPublish.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  import ArticleListRandom from "@/components/ArticleListRandom.vue";
  import JobListTeaser from "@/components/JobListTeaser.vue";
  import SearchWidgetJob from "@/components/SearchWidgetJob.vue";
  export default {
    name: "Home",
    components: {
      BannerJobPublish,
      TrainingListRandom,
      ArticleListRandom,
      JobListTeaser,
      SearchWidgetJob
    },
    data() {
      return {
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
              }]
            }`
          },
          {
            rel: "canonical",
            href: `${process.env.VUE_APP_WEBSITE_URL}`,
            id: "canonical"
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    .hero {
      background: linear-gradient(
          0deg,
          #fffcfd 0%,
          #fffcfd66 50%,
          #6d023077 100%
        ),
        image-set(
            url("~@/assets/img/medizinischesPersonal-1200x513.jpg") 1x,
            url("~@/assets/img/medizinischesPersonal.jpg") 2x
          )
          center center;

      background-size: cover;
      background-blend-mode: normal;
      min-height: 70vh;

      @media screen and (max-width: $break-menu) {
        min-height: calc(82vh - 70px);
      }

      .hero-text {
        border-radius: $border-radius2;
        background-color: transparentize($light, $amount: 0.15);
        box-shadow: $shadow1;
      }
    }
  }
</style>
