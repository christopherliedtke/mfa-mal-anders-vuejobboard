<template>
    <b-card no-body>
        <b-card-img-lazy
            top
            src="@/assets/img/Weiterbildungsdschungel-Fragen-ueber-Fragen-1024x535.jpg"
            alt="Banner - Fort- und Weiterbildungen für MFA"
        />
        <b-card-body align="center">
            <b-card-title title="Fort- und Weiterbildungen für MFA" />
            <b-card-text>
                Hier findest du eine Übersicht von verschiedenen Fortbildungen
                und Weiterbildungen für medizinische Fachangestellte /
                ArzthelferInnen!
            </b-card-text>

            <b-button
                to="/page/mfa-career/fort-und-weiterbildungen"
                variant="primary"
                >Mehr erfahren!</b-button
            >
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "WeiterbildungenBanner"
    };
</script>
