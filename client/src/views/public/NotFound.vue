<template>
    <div>
        <h1 class="title">Seite nicht gefunden</h1>
        <b-container class="my-5">
            <b-img
                class="p-5"
                fluid
                src="@/assets/img/404_page_not_found_.svg"
                style="max-height: 400px"
            />
            <div class="text-center mx-auto" style="max-width: 500px">
                <p>
                    Tut uns Leid, diese Seite existiert leider nicht mehr oder
                    ist während unseres Re-Launches umgezogen. Schau Dich doch
                    auf unserer Seite einmal um.
                </p>
                <b-button to="/jobboard" class="mr-2" variant="secondary"
                    >Zur Stellenbörse</b-button
                >
                <b-button variant="primary" to="/">Zur Startseite</b-button>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    };
</script>
