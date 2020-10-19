<template>
    <b-card
        no-body
        class="overflow-hidden bg-light-shade shadow1 m-3 p-4"
        align="center"
    >
        <b-row no-gutters>
            <b-col md="3">
                <b-img
                    class="p-1 w-100 h-100"
                    src="@/assets/profiling_monochromatic.svg"
                    alt="Tipps für einen effizienten Bewerbungsprozess für MFAs / ArzthelferInnen"
                ></b-img>
            </b-col>
            <b-col md="9">
                <b-card-body
                    class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
                >
                    <h4 class="bold">
                        Unsere Tipps für einen effizienten Bewerbungsprozess
                    </h4>
                    <p>
                        Die Einstellung neuer MitarbeiterInnen kostet viel Zeit,
                        Geld und Mühe. Aus diesem Grund sollte ein
                        Bewerbungsprozess so effizient und gründlich wie möglich
                        etabliert werden. Hier haben wir Ihnen einen kleinen
                        Leitfaden zusammengestellt.
                    </p>
                    <b-button
                        to="/article/tipps-fuer-einen-effizienten-bewerbungsprozess"
                        variant="primary"
                        >Mehr erfahren</b-button
                    >
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "JobAdTippsBanner"
    };
</script>

<style></style>
