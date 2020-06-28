<template>
    <div class="dashboard container py-5">
        <h2>Dashboard</h2>
        <b-tabs content-class="mt-3">
            <b-tab title="Jobs" active
                ><p>Your Jobs</p>
                <b-button
                    to="/dashboard/new-job"
                    class="d-inline-flex align-items-center"
                    variant="outline-primary"
                    ><b-icon class="mr-2" scale="1" icon="plus-circle"></b-icon
                    >New Job</b-button
                ></b-tab
            >
            <b-tab title="Companies"><p>Your Companies</p></b-tab>
        </b-tabs>
    </div>
</template>

<script>
import axios from "@/axios";
export default {
    name: "Dashboard",
    methods: {
        async getJobsByUserId() {
            const response = await axios.get("/api/user/data");
            this.testData = response.data;
        }
    },
    mounted: function() {
        this.getJobsByUserId();
    },
    data() {
        return {
            testData: [],
            error: false
        };
    }
};
</script>
