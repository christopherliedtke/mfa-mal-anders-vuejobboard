<template>
    <b-card no-body class="overflow-hidden p-3" align="center">
        <b-row no-gutters>
            <b-col md="3">
                <b-img
                    class="p-4 w-100 h-100"
                    src="@/assets/img/success_.svg"
                    alt="Karriereschritt für MFA"
                ></b-img>
            </b-col>
            <b-col md="9">
                <b-card-body
                    class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
                >
                    <h3 class="bold">Zu den Stellenangeboten</h3>
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

<style scoped lang="scss">
    .card {
        background: radial-gradient(closest-side, #f8faf9cc 0%, #f8faffff 100%),
            url("~@/assets/img/hero_map_1828.jpg") center center;
        background-size: cover;
        background-blend-mode: lighten;

        .card-body {
            background-color: #f8faf977;
        }
    }
</style>
