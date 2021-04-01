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
                        Das Job- und Karriereportal für Medizinische &
                        Zahnmedizinische Fachangestellte.
                    </h2>
                    <div class="small">
                        <div class="pt-5 mt-5">
                            <h2 class="h6"><strong>Hinweis</strong></h2>
                            <p>
                                Hinter den mit (*) gekennzeichneten Links
                                stecken Affiliate-Links. Das heißt, wenn Du ein
                                Produkt über den Link kaufst, erhalten wir eine
                                kleine Provision.
                            </p>
                            <p>
                                <strong
                                    >Wichtig: Der Preis erhöht sich dadurch
                                    nicht für dich.</strong
                                >
                            </p>
                            <p>
                                Kristin Maurach ist Teilnehmerin des
                                Amazon-Partnerprogramm, das zur Bereitstellung
                                eines Mediums für Webseiten konzipiert wurde,
                                mittels dessen durch die Platzierung von
                                Partner-Links zu Amazon.de Entgelte verdient
                                werden können.
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
                                href="/api/download/public/bewerbungsunterlagen"
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
                            :href="
                                `https://www.facebook.com/${$config.fb.path}`
                            "
                            class="mr-3"
                            target="_blank"
                            rel="noopener"
                            aria-label="Facebook"
                        >
                            <Fa :icon="['fab', 'facebook']" size="2x" />
                        </b-link>
                        <b-link
                            :href="
                                `https://twitter.com/${$config.twitter.path}`
                            "
                            class="mr-3"
                            target="_blank"
                            rel="noopener"
                            aria-label="Twitter"
                        >
                            <Fa :icon="['fab', 'twitter']" size="2x" />
                        </b-link>
                        <b-link
                            :href="
                                `https://www.instagram.com/${$config.ig.path}`
                            "
                            class="mr-3"
                            target="_blank"
                            rel="noopener"
                            aria-label="Instagram"
                        >
                            <Fa :icon="['fab', 'instagram']" size="2x" />
                        </b-link>
                    </div>
                    <b-nav vertical class="justify-content-end">
                        <b-nav-item to="/stellenangebote"
                            >Stellenangebote</b-nav-item
                        >
                        <b-nav-item to="/karriere/bewerbungstipps"
                            >Bewerbungstipps</b-nav-item
                        >
                        <b-nav-item to="/karriere/gehalt"
                            >Gehaltsrechner</b-nav-item
                        >
                        <b-nav-item to="/dashboard"
                            >Stellenanzeige schalten</b-nav-item
                        >

                        <b-nav-item class="mt-5" to="/kontakt"
                            >Kontakt</b-nav-item
                        >
                        <b-nav-item to="/datenschutz"
                            >Datenschutzerklärung</b-nav-item
                        >
                        <b-nav-item to="/impressum">Impressum</b-nav-item>
                        <b-nav-item to="/agbs">AGBs</b-nav-item>
                    </b-nav>
                </b-col>
            </b-row>
        </b-container>
        <hr />
        <b-container class="px-3 px-lg-5">
            <p class="text-right">
                &copy; {{ new Date().getFullYear() }} MFA mal anders
            </p>
        </b-container>
    </footer>
</template>

<script>
    import NewsletterSignUpForm from "@/components/forms/NewsletterSignUpForm.vue";
    export default {
        name: "Footer",
        components: {
            NewsletterSignUpForm
        }
    };
</script>
