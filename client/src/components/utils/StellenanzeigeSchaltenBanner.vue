<template>
    <b-card
        no-body
        class="overflow-hidden"
        align="center"
        style="max-width: 840px;"
    >
        <b-row class="p-4">
            <b-col md="4">
                <b-img
                    class="p-3 w-100 h-100"
                    src="@/assets/health_2.svg"
                    alt="Bewerbungsgespräch zwischen Arzt und MFA / Arzthelfer*in"
                ></b-img>
            </b-col>
            <b-col md="8">
                <b-card-body
                    class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
                >
                    <h2 class="bold">
                        <em>Schneller</em> motivierte MFAs und Arzthelfer*innen
                        finden!
                    </h2>
                    <p>
                        Erstellen Sie noch heute Ihre Stellenanzeige und
                        erreichen Sie unsere aktive Community von MFAs! Mit
                        unserem “Pay What You Want” Model veröffentlichen Sie
                        Ihre Stellenanzeige bereits ab 29€.
                    </p>
                    <b-button
                        to="/page/fuer-arbeitgeber"
                        variant="secondary"
                        size="lg"
                        >Stellenanzeige schalten</b-button
                    >
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "StellenanzeigeSchaltenBanner"
    };
</script>

<style></style>
