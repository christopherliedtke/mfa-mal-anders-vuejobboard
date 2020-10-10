<template>
    <div>
        <h1 class="title">Seite nicht gefunden</h1>
        <b-container class="my-5">
            <b-img
                class="p-5"
                fluid
                src="@/assets/404_page_not_found_.svg"
                style="max-height: 400px"
            />
            <div class="text-center">
                <p>
                    Tut uns Leid, diese Seite existiert leider nicht.
                </p>
                <b-button
                    class="mr-2"
                    variant="secondary"
                    @click="$router.go(-1)"
                    >Zurück</b-button
                >
                <b-button variant="primary" to="/">Zur Startseite</b-button>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        mounted() {
            setTimeout(() => {
                this.$router.push("/");
            }, 3500);
        }
    };
</script>

<style></style>
