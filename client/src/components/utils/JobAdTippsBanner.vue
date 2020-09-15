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
                    src="@/assets/presentation.svg"
                    alt="Weitere Tipps für Stellenanzeigen für MFAs"
                ></b-img>
            </b-col>
            <b-col md="9">
                <b-card-body
                    class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
                    title="Weitere Tipps für Ihre Stellenanzeige"
                >
                    <p>
                        Erhalten Sie zusätzliche Details zu unseren Tipps und
                        erstellen Sie eine attraktive Stellenanzeige, die mehr
                        Bewerber*innen anzieht.
                    </p>
                    <b-button
                        to="/article/7-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas"
                        variant="primary"
                        >Weitere Informationen</b-button
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
