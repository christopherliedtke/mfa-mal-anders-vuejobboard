<template>
    <b-container class="edit-job py-5">
        <h2>Stellenanzeige bearbeiten</h2>
        <p>
            Bearbeiten Sie hier Ihre Stellenanzeige. <strong>Tipps </strong>
            <b-icon
                id="popover-job-ad-tipps"
                class="position-relative"
                style="top: -5px; cursor: pointer"
                icon="info-circle-fill"
                scale="1"
                variant="info"
            />
            <b-popover
                target="popover-job-ad-tipps"
                triggers="hover"
                placement="bottomleft"
            >
                <template v-slot:title>Tipps für Ihre Stellenanzeige</template>
                <b-link
                    href="/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas"
                    target="_blank"
                    >Hier</b-link
                >
                haben wir Ihnen aus unseren Erfahrungen einige Tipps für eine
                attraktive Stellenanzeige zusammengestellt.
            </b-popover>
        </p>
        <JobForm :jobId="$route.params.jobId" apiJobsSchema="private"></JobForm>
    </b-container>
</template>

<script>
    import JobForm from "@/components/forms/JobForm.vue";
    export default {
        name: "UserDashboardEditJob",
        components: {
            JobForm
        }
    };
</script>
