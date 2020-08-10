<template>
    <div>
        <b-jumbotron
            :container-fluid="true"
            header="BootstrapVue Jobboard"
            lead="Jobboard made with Bootstrap v4 Components for Vue.js 2"
        >
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>

        <FacebookBtn />
        <FacebookShareBtn />

        <Head title="Home" desc="This is the meta of home..." img="" />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import FacebookBtn from "@/components/utils/FacebookBtn.vue";
    import FacebookShareBtn from "@/components/utils/FacebookShareBtn.vue";
    export default {
        name: "Home",
        components: { Head, FacebookBtn, FacebookShareBtn }
    };
</script>
