<template>
    <b-card
        title="Zu den Weiterbildungen"
        img-src="@/assets/Weiterbildungsdschungel-Fragen-ueber-Fragen-1024x535.jpg"
        img-alt="Banner - Weiterbildungen für MFA"
        img-top
        align="center"
        class="mb-2"
    >
        <b-card-text>
            Hier findest du eine Übersicht von verschiedenen Fortbildungen und
            Weiterbildungen für medizinische Fachangestellte!
        </b-card-text>

        <b-button
            to="/page/mfa-career/fort-und-weiterbildungen"
            variant="primary"
            >Mehr erfahren!</b-button
        >
    </b-card>
</template>

<script>
    export default {
        name: "WeiterbildungenBanner"
    };
</script>

<style></style>
