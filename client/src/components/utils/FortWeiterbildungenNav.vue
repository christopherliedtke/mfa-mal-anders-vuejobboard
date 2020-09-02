<template>
    <b-list-group v-if="trainings">
        <b-list-group-item to="/page/mfa-career/fort-und-weiterbildungen">
            <h3 class="h5 bold">
                Fort- und Weiterbildungen
            </h3></b-list-group-item
        >
        <b-list-group-item
            v-for="training in trainings"
            :key="training.id"
            :to="`/page/mfa-career/fort-und-weiterbildungen/${training.slug}`"
            :active="training.slug === $route.params.title"
            >{{ training.title }}</b-list-group-item
        >
    </b-list-group>
</template>

<script>
    export default {
        name: "FortWeiterbildungenNav",

        computed: {
            trainings: function() {
                return this.$store.state.trainings.trainings;
            }
        }
    };
</script>

<style></style>
