<template>
    <div>
        <b-jumbotron :container-fluid="true">
            <b-container>
                <h1 class="display-4">BootstrapVue Jobboard</h1>
                <h4>Jobboard made with Bootstrap v4 Components for Vue.js 2</h4>
                <p>For more information visit website</p>
                <b-button variant="primary" href="#">More Info</b-button>
                <FacebookBtn />
                <FacebookShareBtn />
            </b-container>
        </b-jumbotron>

        <b-container>
            <NewsletterSignUpForm />
        </b-container>

        <Head title="Home" desc="This is the meta of home..." img="" />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import FacebookBtn from "@/components/utils/FacebookBtn.vue";
    import FacebookShareBtn from "@/components/utils/FacebookShareBtn.vue";
    import NewsletterSignUpForm from "@/components/utils/NewsletterSignUpForm.vue";
    export default {
        name: "Home",
        components: {
            Head,
            FacebookBtn,
            FacebookShareBtn,
            NewsletterSignUpForm
        }
    };
</script>
