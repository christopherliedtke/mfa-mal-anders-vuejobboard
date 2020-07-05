<template>
    <b-container class="home py-5">
        <h2>Home</h2>
        <!-- <div>
            <b-card
                v-for="job in jobs"
                :key="job.id"
                :title="job.title"
                :sub-title="
                    new Date(parseInt(job.createdAt)).toLocaleString()
                "
                class="my-3"
            >
                <b-card-text>
                    <p>{{ job.description }}</p>
                    <a href="#" class="card-link">Card link</a>
                </b-card-text>
            </b-card>
        </div> -->
    </b-container>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    export default {
        name: "Home",
        methods: {
            ...mapActions(["getJobs"])
        },
        data() {
            return {};
        },
        mounted: function() {
            this.getJobs({
                query: `
                query {
                    jobs {
                        _id
                        title
                        description
                        createdAt
                    }
                }
            `
            });
        },
        computed: mapGetters(["jobs"])
    };
</script>
