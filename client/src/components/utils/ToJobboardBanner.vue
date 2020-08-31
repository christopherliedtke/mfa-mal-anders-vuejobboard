<template>
    <b-card
        no-body
        class="overflow-hidden"
        align="center"
        style="max-width: 840px;"
    >
        <b-row no-gutters>
            <b-col md="3">
                <b-img
                    class="p-4 w-100 h-100"
                    src="@/assets/success_.svg"
                    alt="Karriereschritt für MFA"
                ></b-img>
            </b-col>
            <b-col md="9">
                <b-card-body
                    class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
                    title="Zu den Stellenanzeigen"
                >
                    <p>
                        Sieh dir unsere Stellenbörse an und schau, ob das
                        Richtige für dich dabei ist!
                    </p>
                    <b-button to="/jobboard" variant="primary"
                        >Los geht's!</b-button
                    >
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "ToJobboardBanner"
    };
</script>

<style></style>
