<template>
    <b-list-group>
        <b-list-group-item to="/page/mfa-career/jobs-und-berufsbilder">
            <h3 class="h5 bold">
                Jobs und Berufsbilder
            </h3></b-list-group-item
        >
        <b-list-group-item
            v-for="berufsbilderType in berufsbilderTypes"
            :key="berufsbilderType"
            :to="
                `/page/mfa-career/jobs-und-berufsbilder/${berufsbilderType.toLowerCase()}`
            "
            :active="berufsbilderType.toLowerCase() === $route.params.slug"
            >{{ berufsbilderType }}</b-list-group-item
        >
    </b-list-group>
</template>

<script>
    export default {
        name: "JobsBerufsbilderNav",
        computed: {
            berufsbilderTypes() {
                let data = this.$store.state.professions.professions.map(
                    profession => profession.berufsbildTypes.nodes[0].name
                );
                return data
                    .filter((value, index) => data.indexOf(value) === index)
                    .sort();
            }
        }
    };
</script>
