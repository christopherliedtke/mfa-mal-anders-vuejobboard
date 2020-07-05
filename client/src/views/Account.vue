<template>
    <b-container class="dashboard py-5">
        <h2>Account</h2>
        <b-tabs content-class="mt-3">
            <b-tab title="Account Data" active
                ><h3>Account Data</h3>
                <DeleteAccountButton
            /></b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import DeleteAccountButton from "@/components/DeleteAccountButton.vue";
    export default {
        name: "Account",
        components: {
            DeleteAccountButton
        },
        methods: {},
        mounted: function() {},
        data() {
            return {};
        }
    };
</script>
