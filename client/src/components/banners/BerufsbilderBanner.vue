<template>
    <b-card no-body>
        <b-card-img-lazy
            top
            src="/img/jobsUndBerufsbilder_1200.jpg"
            :srcset="[
                `/img/jobsUndBerufsbilder_1200.jpg 1200w`,
                `/img/jobsUndBerufsbilder_800.jpg 800w`,
                `/img/jobsUndBerufsbilder_450.jpg 450w`
            ]"
            :sizes="[
                `(min-width: 1200px) 1200px`,
                `(min-width: 450px) 800px`,
                `100vw`
            ]"
            alt="Banner - Jobs und Berufsbilder für MFA und ArzthelferInnen"
        />
        <b-card-body align="center">
            <b-card-title title="Alternative Jobs und Berufsbilder für MFA" />

            <b-card-text>
                Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und
                Berufen inklusive vieler Alternativen für Medizinische
                Fachangestellte / ArzthelferInnen!
            </b-card-text>

            <b-button
                to="/page/mfa-career/jobs-und-berufsbilder"
                variant="primary"
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
