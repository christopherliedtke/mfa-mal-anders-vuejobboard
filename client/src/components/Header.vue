<template>
    <header class="py-2" id="header">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand to="/">
                <img src="@/assets/logo.png" height="40" alt="" />
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav @click="toggleNavbar">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="home" to="/">Home</b-nav-item>
                    <b-nav-item to="/jobboard">Jobboard</b-nav-item>
                    <b-nav-item to="/login" v-if="!userId">Login</b-nav-item>
                    <b-nav-item to="/register" v-if="!userId"
                        >Register</b-nav-item
                    >
                    <b-nav-item to="/dashboard" v-if="userId"
                        ><b-icon
                            class="mr-1"
                            icon="kanban"
                            font-scale="1.45"
                        ></b-icon
                        >Dashboard</b-nav-item
                    >
                    <b-nav-item to="/account" v-if="userId"
                        ><b-icon
                            class="mr-1"
                            icon="person-circle"
                            font-scale="1.45"
                        ></b-icon
                        >Account</b-nav-item
                    >
                    <b-nav-item v-if="userId"><Logout /></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
    import Logout from "@/components/Logout";
    export default {
        name: "Header",
        components: {
            Logout
        },
        methods: {
            toggleNavbar() {
                this.$root.$emit("bv::toggle::collapse", "nav-collapse");
            }
        },
        computed: {
            userId() {
                return this.$store.state.auth.userId;
            }
        }
    };
</script>

<style scoped lang="scss"></style>
