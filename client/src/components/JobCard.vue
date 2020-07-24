<template
    ><b-link :to="`/jobboard/job/${job._id}`">
        <b-card class="my-3">
            <b-card-text>
                <h4>
                    {{ job.title }}
                    <b-badge
                        pill
                        :variant="job.status === 'draft' ? 'light' : 'success'"
                        >{{ job.status }}</b-badge
                    >
                </h4>
                <p>
                    Published at:
                    {{ new Date(parseInt(job.paidAt)).toLocaleDateString() }}
                </p>
                <p
                    v-html="
                        $sanitize(job.description, {
                            allowedTags: []
                        }).substring(0, 100) + '...'
                    "
                ></p>
            </b-card-text>
        </b-card>
    </b-link>
</template>

<script>
    export default {
        name: "JobCard",
        props: ["job"]
    };
</script>

<style scoped lang="scss"></style>
