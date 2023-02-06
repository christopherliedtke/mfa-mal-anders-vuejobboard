<template>
  <div
    v-if="$store.state.utils.showCookieConsentBanner"
    id="CookieConsentBanner"
    class="bg-light shadow1 px-4 py-3"
  >
    <nav class="mb-3">
      <div :class="{ active: tab === 1 }" @click="() => (tab = 1)">
        Zustimmung
      </div>
      <div :class="{ active: tab === 2 }" @click="() => (tab = 2)">
        Details
      </div>
      <div :class="{ active: tab === 3 }" @click="() => (tab = 3)">
        Über Cookies
      </div>
    </nav>
    <div id="CookieConsentBannerBody" class="mb-2">
      <div v-if="tab === 1" class="d-flex flex-column flex-xl-row">
        <div class="pb-1">
          <div class="mb-2">
            <strong>Diese Webseite verwendet Cookie</strong>
          </div>
          <div class="position-relative">
            <div
              class="position-relative small mb-0 pr-3"
              style="max-height: 100px; overflow-y: auto"
            >
              Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren,
              Funktionen für soziale Medien anbieten zu können und die Zugriffe
              auf unsere Website zu analysieren. Außerdem geben wir
              Informationen zu Ihrer Verwendung unserer Website an unsere
              Partner für soziale Medien, Werbung und Analysen weiter. Unsere
              Partner führen diese Informationen möglicherweise mit weiteren
              Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im
              Rahmen Ihrer Nutzung der Dienste gesammelt haben. |
              <b-link to="/datenschutz">Datenschutzerklärung</b-link> |
              <b-link to="/impressum">Impressum</b-link>
            </div>
            <!-- <div class="overflow-scroll-gradient"></div> -->
          </div>
        </div>
      </div>

      <div v-if="tab === 2" class="mb-3">
        <div class="border-bottom border-light-shade">
          <div class="d-flex mb-1">
            <strong class="mr-2">Notwendig</strong>
            <b-form-checkbox
              v-model="acceptedCookies.necessary"
              name="check-button"
              switch
              disabled
            >
            </b-form-checkbox>
          </div>
          <p class="small mb-2">
            Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen,
            indem sie Grundfunktionen wie Seitennavigation und Zugriff auf
            sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne
            diese Cookies nicht richtig funktionieren.
          </p>
        </div>

        <div class="border-bottom border-light-shade mt-2">
          <div class="d-flex mb-1">
            <strong class="mr-2">Präferenzen</strong>
            <b-form-checkbox
              v-model="acceptedCookies.preferences"
              name="check-button"
              switch
            >
            </b-form-checkbox>
          </div>
          <p class="small mb-2">
            Präferenz-Cookies ermöglichen einer Webseite sich an Informationen
            zu erinnern, die die Art beeinflussen, wie sich eine Webseite
            verhält oder aussieht, wie z. B. Ihre bevorzugte Sprache oder die
            Region in der Sie sich befinden.
          </p>
        </div>

        <div class="border-bottom border-light-shade mt-2">
          <div class="d-flex mb-1">
            <strong class="mr-2">Statistiken</strong>
            <b-form-checkbox
              v-model="acceptedCookies.statistics"
              name="check-button"
              switch
            >
            </b-form-checkbox>
          </div>
          <p class="small mb-2">
            Statistik-Cookies helfen Webseiten-Besitzern zu verstehen, wie
            Besucher mit Webseiten interagieren, indem Informationen anonym
            gesammelt und gemeldet werden.
          </p>
        </div>

        <div class="border-bottom border-light-shade mt-2">
          <div class="d-flex mb-1">
            <strong class="mr-2">Marketing</strong>
            <b-form-checkbox
              v-model="acceptedCookies.marketing"
              name="check-button"
              switch
            >
            </b-form-checkbox>
          </div>
          <p class="small mb-2">
            Marketing-Cookies werden verwendet, um Besuchern auf Webseiten zu
            folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und
            ansprechend für den einzelnen Benutzer sind und daher wertvoller für
            Publisher und werbetreibende Drittparteien sind.
          </p>
        </div>

        <div class="mt-3 small">
          Mehr zu den jeweils verwendeten Cookies findest Du in unserer
          <b-link to="/datenschutz">Datenschutzerklärung</b-link>.
        </div>
      </div>
      <div v-if="tab === 3" class="mb-3">
        <p class="small mb-1">
          Cookies sind kleine Textdateien, die von Webseiten verwendet werden,
          um die Benutzererfahrung effizienter zu gestalten.
        </p>
        <p class="small mb-1">
          Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese
          für den Betrieb dieser Seite unbedingt notwendig sind. Für alle
          anderen Cookie-Typen benötigen wir Ihre Erlaubnis. Dies bedeutet, dass
          als notwendig kategorisierte Cookies auf der Grundlage von Art. 6 Abs.
          1 lit. f DSGVO verarbeitet werden. Alle anderen nicht notwendigen
          Cookies, d. h. diejenigen aus den Kategorien Präferenzen, Statistiken
          und Marketing, werden auf der Grundlage von Art. 6 Abs. 1 lit. a DSGVO
          verarbeitet.
        </p>
        <p class="small mb-1">
          Diese Seite verwendet unterschiedliche Cookie-Typen. Einige Cookies
          werden von Drittparteien platziert, die auf unseren Seiten erscheinen.
          Sie können Ihre Einwilligung jederzeit von der Cookie-Erklärung auf
          unserer Website ändern oder widerrufen.
        </p>
        <p class="small mb-1">
          Erfahren Sie in unserer
          <b-link to="/datenschutz">Datenschutzrichtlinie</b-link> mehr darüber,
          wer wir sind, wie Sie uns kontaktieren können und wie wir
          personenbezogene Daten verarbeiten.
        </p>
      </div>
    </div>

    <div class="d-flex justify-content-end">
      <button
        v-if="tab != 2"
        class="btn btn-primary btn-sm text-nowrap mr-1"
        @click="() => (tab = 2)"
      >
        Anpassen
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-chevron-right ml-1"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <button
        v-if="tab === 2"
        class="btn btn-outline-primary btn-sm text-nowrap mr-1"
        @click="acceptChosenCookies"
      >
        Auswahl zulassen
      </button>
      <button
        class="btn btn-secondary btn-sm text-nowrap"
        @click="acceptAllCookies"
      >
        Alle zulassen
      </button>
    </div>
  </div>
</template>

<script>
  import { setOptions, bootstrap } from "vue-gtag";
  export default {
    name: "BannerCookieConsent",
    data() {
      return {
        tab: 1,
        acceptedCookies: {
          necessary: true,
          preferences: true,
          statistics: true,
          marketing: true
        }
      };
    },
    created() {
      const options = {
        config: {
          id: process.env.VUE_APP_GTAG
        }
      };

      if (process.env.VUE_APP_GADSTAG) {
        options.includes = [{ id: process.env.VUE_APP_GADSTAG }];
      }

      setOptions(options);

      // if (consentState) {
      //   this.acceptedCookies = {
      //     necessary: consentState.necessary || false,
      //     preferences: consentState.preferences || false,
      //     statistics: consentState.statistics || false,
      //     marketing: consentState.marketing || false
      //   };
      // }

      bootstrap().then(() => {
        const consentState = this.$cookies.get("CookieConsent");

        if (consentState) {
          this.acceptedCookies = {
            necessary: consentState.necessary || true,
            preferences: consentState.preferences || false,
            statistics: consentState.statistics || false,
            marketing: consentState.marketing || false
          };

          this.setGtagConsent("default");
        } else {
          this.$gtag.query("consent", "default", {
            ad_storage: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "denied"
          });
        }

        this.$gtag.pageview(this.$route);
      });
    },
    methods: {
      acceptAllCookies() {
        this.acceptedCookies = {
          necessary: true,
          preferences: true,
          statistics: true,
          marketing: true
        };

        this.setConsent();
      },
      acceptChosenCookies() {
        this.setConsent();
        this.deleteCookies();
      },
      setConsent() {
        this.$cookies.set("CookieConsent", this.acceptedCookies);
        this.setGtagConsent();
        this.$store.commit("setShowCookieConsentBanner", false);
      },
      setGtagConsent(type = "update") {
        this.$gtag.query("consent", type, {
          ad_storage: this.acceptedCookies.marketing ? "granted" : "denied",
          analytics_storage: this.acceptedCookies.statistics
            ? "granted"
            : "denied",
          functionality_storage: "denied",
          personalization_storage: "denied",
          security_storage: "denied"
        });
      },
      deleteCookies() {
        const cookieKeys = this.$cookies.keys();

        const statisticsCookies = cookieKeys.filter(
          key =>
            key.startsWith("_ga") ||
            key.startsWith("_gid") ||
            key.startsWith("_gat") ||
            key.startsWith("_fbp")
        );

        const marketingCookies = cookieKeys.filter(
          key =>
            key.startsWith("_gac_") ||
            key.startsWith("_gcl") ||
            key.startsWith("_fbc")
        );

        if (
          !this.acceptedCookies.statistics &&
          !this.acceptedCookies.marketing &&
          !this.acceptedCookies.preferences
        ) {
          cookieKeys
            .filter(key => key != "CookieConsent")
            .forEach(key => this.$cookies.remove(key));
        } else {
          if (
            !this.acceptedCookies.statistics &&
            statisticsCookies.length > 0
          ) {
            statisticsCookies.forEach(cookie => {
              this.$cookies.remove(cookie);
            });
          }

          if (!this.acceptedCookies.marketing && marketingCookies.length > 0) {
            marketingCookies.forEach(cookie => {
              this.$cookies.remove(cookie);
            });
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  #CookieConsentBanner {
    z-index: 435899;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    nav {
      display: flex;

      div {
        flex: 1;
        text-align: center;
        font-weight: 600;
        border-bottom: solid 4px $light-shade;
        padding: 4px 0;
        cursor: pointer;

        &.active {
          border-color: $secondary;
        }
      }
    }

    // #CookieConsentBannerBody {
    //   .overflow-scroll-gradient {
    //     position: absolute;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     width: 100%;
    //     height: 20px;
    //     background: linear-gradient(rgba(255, 255, 255, 0.001), $light);
    //   }
    // }
  }
</style>
