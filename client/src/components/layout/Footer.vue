<template>
  <footer id="footer" class="py-5">
    <b-container class="px-3 px-lg-5">
      <b-row cols="1" cols-lg="3">
        <b-col order="3" order-lg="1">
          <b-img
            src="/img/MfaMalAnders_Logo_white.svg"
            height="110"
            alt="MFA mal anders - Logo"
            class="mb-4"
          />
          <h2 class="h6">
            Das Stellen- und Karriereportal für Medizinische & Zahnmedizinische
            Fachangestellte.
          </h2>
          <div class="small" style="font-size: 65%">
            <div class="pt-5 mt-5">
              <h2 class="h6"><strong>Hinweis</strong></h2>
              <p>
                Hinter den mit (*) gekennzeichneten Links stecken
                Affiliate-Links. Das heißt, wenn Du ein Produkt über den Link
                kaufst, erhalten wir eine kleine Provision.
              </p>
              <p>
                <strong
                  >Wichtig: Der Preis erhöht sich dadurch nicht für
                  dich.</strong
                >
              </p>
              <p>
                MFA mal anders - Kristin Maurach & Christopher Liedtke GbR ist
                Teilnehmer des Amazon-Partnerprogramm, das zur Bereitstellung
                eines Mediums für Webseiten konzipiert wurde, mittels dessen
                durch die Platzierung von Partner-Links zu Amazon.de Entgelte
                verdient werden können.
              </p>
            </div>
            <!-- <div class="mt-5">
                            <h6><strong>Links</strong></h6>
                            <p><a href="https://de.jooble.org/">Jooble</a></p>
                        </div> -->
          </div>
        </b-col>
        <b-col order="2" order-lg="2">
          <NewsletterSignUpForm />
          <!-- <div class="mt-5">
                        <div class="d-flex justify-content-center mb-4">
                            <b-link
                                to="/karriere/bewerbungstipps"
                                class="d-flex justify-content-center flex-nowrap"
                            >
                                <b-img-lazy
                                    fluid
                                    class="mx-3 shadow1"
                                    style="width: 35vw; max-width: 120px"
                                    src="@/assets/img/Vorlage_Bewerbungsanschreiben_150.jpg"
                                    alt="Bild von Mustervorlage für Motivationsschreiben"
                                />
                                <b-img-lazy
                                    fluid
                                    class="mx-3 shadow1"
                                    style="width: 35vw; max-width: 120px"
                                    src="@/assets/img/Vorlage_Lebenslauf_150.jpg"
                                    alt="Bild von Mustervorlage für Lebenslauf"
                                />
                            </b-link>
                        </div>

                        <div class="d-flex justify-content-center mb-5">
                            <b-button
                                href="/downloads/bewerbungsunterlagen"
                                target="_blank"
                                variant="secondary"
                                >Download Bewerbungsunterlagen</b-button
                            >
                        </div>
                    </div> -->
        </b-col>
        <b-col order="1" order-lg="3">
          <div class="mb-4">
            <b-link
              :href="`https://www.facebook.com/${$config.fb.path}`"
              class="mr-3"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <Fa :icon="['fab', 'facebook']" size="2x" />
            </b-link>
            <b-link
              :href="`https://twitter.com/${$config.twitter.path}`"
              class="mr-3"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <Fa :icon="['fab', 'twitter']" size="2x" />
            </b-link>
            <b-link
              :href="`https://www.instagram.com/${$config.ig.path}`"
              class="mr-3"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <Fa :icon="['fab', 'instagram']" size="2x" />
            </b-link>
          </div>
          <nav>
            <router-link to="/stellenangebote">Stellenangebote</router-link>
            <router-link to="/karriere/bewerbungstipps"
              >Bewerbungstipps</router-link
            >
            <router-link to="/karriere/mfa/gehalt">Gehaltsrechner</router-link>
            <router-link to="/user/dashboard?tab=1"
              >Stellenanzeige schalten</router-link
            >

            <router-link class="mt-5" to="/kontakt">Kontakt</router-link>
            <router-link to="/datenschutz">Datenschutzerklärung</router-link>
            <router-link to="/impressum">Impressum</router-link>
            <router-link to="/agbs">AGBs</router-link>
          </nav>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <b-container class="px-3 px-lg-5">
      <p class="text-right">
        &copy; {{ new Date().getFullYear() }} MFA mal anders
      </p>
    </b-container>
    <PrerenderRecache />
  </footer>
</template>

<script>
  import NewsletterSignUpForm from "@/components/forms/NewsletterSignUpForm.vue";
  // import PrerenderRecache from "@/components/buttons/PrerenderRecache.vue";
  const PrerenderRecache = () =>
    import(
      /* webpackChunkName: "PrerenderRecache" */ "@/components/buttons/PrerenderRecache.vue"
    );
  export default {
    name: "Footer",
    components: {
      NewsletterSignUpForm,
      PrerenderRecache
    }
  };
</script>

<style lang="scss" scoped>
  #footer {
    position: relative;
    background-color: $primary;
    padding: 1rem 0;
    color: $light;
    margin-top: 2rem;

    hr {
      border-top: 1px solid transparentize($color: $light, $amount: 0.75);
    }

    .container {
      max-width: 1300px;

      .col {
        padding: 0 2rem;

        @media screen and (max-width: $break-menu) {
          padding: 1rem 2rem;
        }
      }

      a {
        color: $light;

        &:hover.nav-link {
          color: transparentize($color: $light, $amount: 0.5);
        }
      }

      nav {
        display: flex;
        flex-direction: column;

        a {
          padding: 0.4rem 0;
          color: $light;
          font-family: $headings-font-family;
          font-size: 1.1rem;

          :not(.home) > .router-link-active {
            color: darken($light, 5%);
          }

          .router-link-exact-active {
            color: darken($light, 5%);
          }
        }
      }
    }
  }
</style>
