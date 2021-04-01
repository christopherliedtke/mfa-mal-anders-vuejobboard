<template>
    <b-card no-body class="shadow1">
        <b-card-img-lazy
            top
            src="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg"
            alt="Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen"
        />
        <b-card-body align="center">
            <b-card-title
                title="Alternative Jobs und Berufsbilder für MFA / ZFA"
            />

            <b-card-text>
                Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und
                Berufen inklusive vieler Alternativen für Medizinische
                Fachangestellte / ArzthelferInnen!
            </b-card-text>

            <b-button to="/karriere/jobs-und-berufsbilder" variant="primary"
                >Mehr erfahren!</b-button
            >
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "BerufsbilderBanner"
    };
</script>
