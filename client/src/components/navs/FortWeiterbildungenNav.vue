<template>
    <div>
        <b-list-group v-if="trainings">
            <b-list-group-item to="/page/mfa-career/fort-und-weiterbildungen">
                <h3 class="h5 bold">
                    Fort- und Weiterbildungen
                </h3></b-list-group-item
            >
            <b-list-group-item
                v-for="training in trainings"
                :key="training.id"
                :to="
                    `/page/mfa-career/fort-und-weiterbildungen/${training.slug}`
                "
                :active="training.slug === $route.params.slug"
                >{{ training.title }}</b-list-group-item
            >
        </b-list-group>
        <div>
            <SgdBanner class="my-2" />
        </div>
    </div>
</template>

<script>
    import SgdBanner from "@/components/banners/SgdBanner.vue";
    export default {
        name: "FortWeiterbildungenNav",
        components: {
            SgdBanner
        },
        computed: {
            trainings: function() {
                return this.$store.state.trainings.trainings;
            }
        }
    };
</script>
