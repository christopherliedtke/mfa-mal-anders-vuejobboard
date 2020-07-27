<template>
    <div id="app">
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";
    import Footer from "@/components/layout/Footer";
    export default {
        components: {
            Header,
            Footer
        }
    };
</script>

<style lang="scss">
    @import "@/styles/custom_bootstrap.scss";
    @import "node_modules/bootstrap/scss/bootstrap";
    @import "node_modules/bootstrap-vue/src/index.scss";
    @import "@/styles/custom.scss";
</style>
