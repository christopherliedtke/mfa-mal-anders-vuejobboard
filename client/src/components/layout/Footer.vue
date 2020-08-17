<template>
    <footer id="footer" class="py-5">
        <b-container class="px-5">
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
                        <div class="mt-5">
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
                        <div class="mt-5">
                            <h6><strong>Links</strong></h6>
                            <p><a href="https://de.jooble.org/">Jooble</a></p>
                        </div>
                    </div>
                </b-col>
                <b-col order="2" order-lg="2">Col 2</b-col>
                <b-col order="1" order-lg="3">
                    <b-nav vertical class="justify-content-end">
                        <b-nav-item to="/page/contact">Kontakt</b-nav-item>
                        <b-nav-item to="/page/privacy-policy"
                            >Datenschutzerklärung</b-nav-item
                        >
                        <b-nav-item to="/page/impressum">Impressum</b-nav-item>
                    </b-nav>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    };
</script>
