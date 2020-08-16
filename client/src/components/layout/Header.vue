<template>
    <header class="" id="header">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand to="/">
                <img
                    src="@/assets/Logo_mfa-mal-anders-white.png"
                    height="70"
                    alt="MFA mal anders - Logo"
                />
            </b-navbar-brand>

            <b-navbar-toggle class="ui-hamburger-05" target="nav-collapse">
                <span></span>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav @click="toggleNavbar">
                <b-navbar-nav class="m-auto">
                    <b-nav-item class="home" to="/">Home</b-nav-item>
                    <b-nav-item to="/jobboard">Stellenangebote</b-nav-item>

                    <div
                        class="sub-container"
                        @mouseleave="hideSub('sub-career')"
                        @click="hideSub('sub-career')"
                    >
                        <b-nav-item
                            to="/page/mfa-career"
                            @mouseover="showSub('sub-career')"
                            >MFA Karriere
                            <b-icon
                                class="ml-1 icon"
                                icon="chevron-down"
                                font-scale="0.9"
                            ></b-icon
                        ></b-nav-item>
                        <div id="sub-career" class="sub-menu">
                            <div
                                class="sub-container"
                                @mouseleave="hideSub('sub-jobs-berufsbilder')"
                                @click="hideSub('sub-jobs-berufsbilder')"
                            >
                                <b-nav-item to="/page/mfa-career/gehalt"
                                    >Gehalt
                                </b-nav-item>
                                <b-nav-item
                                    to="/page/mfa-career/jobs-und-berufsbilder"
                                    @mouseover="
                                        showSub('sub-jobs-berufsbilder')
                                    "
                                    >Jobs- und Berufsbilder
                                    <b-icon
                                        class="ml-1"
                                        icon="chevron-right"
                                        font-scale="0.9"
                                    ></b-icon
                                ></b-nav-item>
                                <div
                                    id="sub-jobs-berufsbilder"
                                    class="sub-menu"
                                >
                                    <b-nav-item
                                        to="/page/mfa-career/jobs-und-berufsbilder/medizinisch-technisch"
                                        >Medizinisch-Technisch
                                    </b-nav-item>
                                    <b-nav-item
                                        to="/page/mfa-career/jobs-und-berufsbilder/verwaltung"
                                        >Verwaltung
                                    </b-nav-item>
                                    <b-nav-item
                                        to="/page/mfa-career/jobs-und-berufsbilder/management"
                                        >Management
                                    </b-nav-item>
                                    <b-nav-item
                                        to="/page/mfa-career/jobs-und-berufsbilder/beratung"
                                        >Beratung
                                    </b-nav-item>
                                    <b-nav-item
                                        to="/page/mfa-career/jobs-und-berufsbilder/forschung"
                                        >Forschung
                                    </b-nav-item>
                                </div>
                            </div>
                            <b-nav-item
                                to="/page/mfa-career/fort-und-weiterbildungen"
                                >Fort- und Weiterbildungen
                            </b-nav-item>
                        </div>
                    </div>

                    <b-nav-item
                        v-if="config.cms.active"
                        :to="`/page/${config.cms.postsPath}`"
                        >{{ config.cms.postsPageTitle }}</b-nav-item
                    >
                    <b-nav-item to="/page/fuer-arbeitgeber"
                        >Für Arbeitgeber</b-nav-item
                    >
                    <b-nav-item to="/page/about">Über</b-nav-item>

                    <!-- <b-nav-item to="/login" v-if="!userId"
                            >Anmelden</b-nav-item
                        > -->
                    <!-- <b-nav-item to="/register" v-if="!userId"
                            >Registrieren</b-nav-item
                        > -->

                    <!-- <b-nav-item-dropdown v-if="userId" text="User" right>
                            <b-dropdown-item v-if="userId" to="/dashboard"
                                ><b-icon
                                    class="mr-1"
                                    icon="kanban"
                                    font-scale="1.45"
                                ></b-icon
                                >Dashboard</b-dropdown-item
                            >
                            <b-dropdown-item v-if="userId" to="/account"
                                ><b-icon
                                    class="mr-1"
                                    icon="person-circle"
                                    font-scale="1.45"
                                ></b-icon
                                >Account</b-dropdown-item
                            >
                            <b-dropdown-item
                                v-if="userRole === 'admin'"
                                to="/admin"
                                ><b-icon
                                    class="mr-1"
                                    icon="shield-lock"
                                    font-scale="1.45"
                                ></b-icon
                                >Admin</b-dropdown-item
                            >
                            <b-dropdown-item v-if="userId"
                                ><Logout
                            /></b-dropdown-item>
                        </b-nav-item-dropdown> -->

                    <b-nav-item to="/dashboard" v-if="userId"
                        ><b-icon
                            class="mr-1"
                            icon="kanban"
                            font-scale="1.45"
                        ></b-icon
                        >Dashboard</b-nav-item
                    >
                    <b-nav-item to="/account" v-if="userId"
                        ><b-icon icon="person-circle" font-scale="1.45"></b-icon
                    ></b-nav-item>
                    <b-nav-item to="/admin" v-if="userRole === 'admin'"
                        ><b-icon icon="shield-lock" font-scale="1.45"></b-icon
                    ></b-nav-item>
                    <b-nav-item v-if="userId"><Logout /></b-nav-item>
                </b-navbar-nav>
                <b-button variant="secondary" to="/login" v-if="!userId"
                    >Login</b-button
                >
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
    import config from "@/utils/config.json";
    import Logout from "@/components/utils/Logout";
    export default {
        name: "Header",
        components: {
            Logout
        },
        data() {
            return {
                config
            };
        },
        methods: {
            toggleNavbar() {
                this.$root.$emit("bv::toggle::collapse", "nav-collapse");
            },
            showSub(id) {
                window.document.getElementById(id).classList.add("show");
            },
            hideSub(id) {
                window.document.getElementById(id).classList.remove("show");
            }
        },
        computed: {
            userId() {
                return this.$store.state.auth.userId;
            },
            userRole() {
                return this.$store.state.auth.userRole;
            }
        }
    };
</script>

<style scoped lang="scss"></style>
