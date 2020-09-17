<template>
    <footer id="footer" class="py-5">
        <b-container class="px-3 px-lg-5">
            <b-row cols="1" cols-lg="3">
                <b-col order="3" order-lg="1">
                    <b-img
                        src="@/assets/Logo_mfa-mal-anders-white.png"
                        height="130"
                        alt="MFA mal anders - Logo"
                        class="mb-4"
                    />
                    <h6>
                        Das Job- und Karriereportal für medizinische
                        Fachangestellte.
                    </h6>
                    <div class="small">
                        <div class="pt-5 mt-5">
                            <h6><strong>Hinweis</strong></h6>
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
                    <a :href="`https://www.facebook.com/${config.fb.path}`">
                        <font-awesome-icon
                            class="mb-4"
                            :icon="['fab', 'facebook-square']"
                            size="3x"
                        />
                    </a>
                    <NewsletterSignUpForm />
                </b-col>
                <b-col order="1" order-lg="3">
                    <b-nav vertical class="justify-content-end">
                        <div>
                            <div class="d-flex justify-content-center mb-4">
                                <b-img-lazy
                                    class="mx-3 shadow"
                                    style="width: 35vw; max-width: 120px"
                                    src="@/assets/Vorlage_Bewerbungsanschreiben.jpg"
                                    alt="Bild von Mustervorlage für Motivationsschreiben"
                                />
                                <b-img-lazy
                                    class="mx-3 shadow"
                                    style="width: 35vw; max-width: 120px"
                                    src="@/assets/Vorlage_Lebenslauf.jpg"
                                    alt="Bild von Mustervorlage für Lebenslauf"
                                />
                            </div>

                            <div class="d-flex justify-content-center mb-5">
                                <b-button
                                    href="/api/download/public/bewerbungsunterlagen"
                                    variant="secondary"
                                    >Download Bewerbungsunterlagen</b-button
                                >
                            </div>
                        </div>
                        <b-nav-item to="/page/mfa-career/bewerbungstipps"
                            >Bewerbungstipps</b-nav-item
                        >
                        <b-nav-item to="/page/mfa-career/gehalt"
                            >Gehaltsrechner</b-nav-item
                        >
                        <b-nav-item to="/dashboard"
                            >Stellenanzeige schalten</b-nav-item
                        >
                        <hr />
                        <b-nav-item to="/page/contact">Kontakt</b-nav-item>
                        <b-nav-item to="/page/privacy-policy"
                            >Datenschutzerklärung</b-nav-item
                        >
                        <b-nav-item to="/page/impressum">Impressum</b-nav-item>
                        <b-nav-item to="/page/agbs">AGBs</b-nav-item>
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
    import config from "@/utils/config.json";
    import NewsletterSignUpForm from "@/components/utils/NewsletterSignUpForm.vue";
    export default {
        name: "Footer",
        components: {
            NewsletterSignUpForm
        },
        data() {
            return {
                config
            };
        }
    };
</script>
