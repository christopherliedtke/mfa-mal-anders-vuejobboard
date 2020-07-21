<template>
    <b-jumbotron
        :container-fluid="true"
        header="BootstrapVue Jobboard"
        lead="Jobboard made with Bootstrap v4 Components for Vue.js 2"
    >
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
</template>

<script>
    export default {
        name: "Home",
        head: {
            title: function() {
                return {
                    inner: "Home"
                };
            },
            meta: function() {
                return [
                    {
                        name: "description",
                        content: "This is the meta of home...",
                        id: "desc"
                    }
                ];
            }
        }
    };
</script>
