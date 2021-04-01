<template>
    <b-list-group>
        <b-list-group-item to="/karriere/jobs-und-berufsbilder">
            <h3 class="h5 bold">
                Jobs und Berufsbilder
            </h3></b-list-group-item
        >
        <b-list-group-item
            v-for="berufsbilderType in berufsbilderTypes"
            :key="berufsbilderType"
            :to="
                `/karriere/jobs-und-berufsbilder/${berufsbilderType.toLowerCase()}`
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
                    profession =>
                        profession.berufsbildTypes.nodes.length > 0
                            ? profession.berufsbildTypes.nodes[0].name
                            : null
                );
                return data
                    .filter(
                        (value, index) => value && data.indexOf(value) === index
                    )
                    .sort();
            }
        }
    };
</script>
