<template>
    <b-card no-body>
        <b-card-img-lazy
            top
            src="@/assets/img/jobsUndBerufsbilder_1200x627.jpg"
            alt="Banner - Jobs und Berufsbilder für MFA und ArzthelferInnen"
        />
        <b-card-body align="center">
            <b-card-title title="Alternative Jobs und Berufsbilder für MFA" />

            <b-card-text>
                Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und
                Berufen inklusive vieler Alternativen für medizinische
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
