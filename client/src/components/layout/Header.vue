<template>
    <header id="header">
        <b-container class="px-0">
            <b-navbar toggleable="xl" type="dark">
                <b-navbar-brand to="/">
                    <b-img
                        src="@/assets/img/Logo_mfa-mal-anders-white.png"
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

                        <li
                            class="sub-container"
                            @mouseleave="hideSub('sub-career')"
                            @click="hideSub('sub-career')"
                        >
                            <b-nav-item
                                to="/page/mfa-career"
                                @mouseover="showSub('sub-career')"
                                >Karriere
                                <Fa
                                    class="ml-1 icon"
                                    icon="chevron-down"
                                    size="xs"
                            /></b-nav-item>
                            <div id="sub-career" class="sub-menu">
                                <div
                                    class="sub-container"
                                    @mouseleave="
                                        hideSub('sub-jobs-berufsbilder')
                                    "
                                    @click="hideSub('sub-jobs-berufsbilder')"
                                >
                                    <b-nav-item to="/page/mfa-career/gehalt"
                                        >Gehalt
                                    </b-nav-item>
                                    <b-nav-item
                                        to="/page/mfa-career/bewerbungstipps"
                                        >Bewerbungstipps
                                    </b-nav-item>
                                    <b-nav-item
                                        to="/page/mfa-career/jobs-und-berufsbilder"
                                        @mouseover="
                                            showSub('sub-jobs-berufsbilder')
                                        "
                                        >Jobs- und Berufsbilder
                                        <Fa
                                            class="ml-1 d-none d-md-block"
                                            icon="chevron-right"
                                            size="xs"
                                    /></b-nav-item>
                                    <div
                                        id="sub-jobs-berufsbilder"
                                        class="sub-menu d-none d-md-block"
                                    >
                                        <b-nav-item
                                            to="/page/mfa-career/jobs-und-berufsbilder/Medizinisch-Technisch"
                                            >Medizinisch-Technisch
                                        </b-nav-item>
                                        <b-nav-item
                                            to="/page/mfa-career/jobs-und-berufsbilder/Verwaltung"
                                            >Verwaltung
                                        </b-nav-item>
                                        <b-nav-item
                                            to="/page/mfa-career/jobs-und-berufsbilder/Management"
                                            >Management
                                        </b-nav-item>
                                        <b-nav-item
                                            to="/page/mfa-career/jobs-und-berufsbilder/Beratung"
                                            >Beratung
                                        </b-nav-item>
                                        <b-nav-item
                                            to="/page/mfa-career/jobs-und-berufsbilder/Forschung"
                                            >Forschung
                                        </b-nav-item>
                                    </div>
                                </div>
                                <b-nav-item
                                    to="/page/mfa-career/fort-und-weiterbildungen"
                                    >Fort- und Weiterbildungen
                                </b-nav-item>
                            </div>
                        </li>

                        <b-nav-item
                            v-if="$config.cms.active"
                            :to="`/page/${$config.cms.postsPath}`"
                            >{{ $config.cms.postsPageTitle }}</b-nav-item
                        >
                        <b-nav-item to="/page/fuer-arbeitgeber"
                            >Arbeitgeber</b-nav-item
                        >
                        <b-nav-item to="/page/about">Über</b-nav-item>
                        <b-nav-item to="/page/contact">Kontakt</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="mt-3 mt-lg-0">
                        <b-nav-item to="/user/dashboard" v-if="loggedIn"
                            ><Fa class="mr-1" icon="columns" size="lg" />Meine
                            Anzeigen</b-nav-item
                        >
                        <b-nav-item to="/user/account" v-if="loggedIn"
                            ><Fa class="mr-1" icon="user-circle" size="lg" />
                            <span
                                v-if="
                                    $store.state.auth.user.firstName &&
                                        $store.state.auth.user.lastName
                                "
                            >
                                {{
                                    $store.state.auth.user.firstName.substring(
                                        0,
                                        1
                                    ) +
                                        $store.state.auth.user.lastName.substring(
                                            0,
                                            1
                                        )
                                }}
                            </span>
                        </b-nav-item>
                        <b-nav-item to="/admin" v-if="user.role === 'admin'"
                            ><Fa icon="key" size="lg"
                        /></b-nav-item>
                        <b-nav-item v-if="loggedIn"><LogoutBtn /></b-nav-item>
                        <b-nav-item v-else
                            ><b-button variant="secondary" to="/auth/login"
                                >Login</b-button
                            ></b-nav-item
                        >
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </header>
</template>

<script>
    import LogoutBtn from "@/components/buttons/LogoutBtn";
    export default {
        name: "Header",
        components: {
            LogoutBtn
        },
        data() {
            return {
                previousScrollPositionY:
                    window.document.documentElement.scrollTop
            };
        },
        computed: {
            user() {
                return this.$store.state.auth.user;
            },
            loggedIn() {
                return this.$store.state.auth.loggedIn;
            }
        },
        mounted() {
            window.addEventListener("scroll", () => {
                this.showHeader();
            });
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
            },
            showHeader() {
                const header = document.getElementById("header");
                const navCollapse = document.getElementById("nav-collapse");
                let currentPositionY =
                    window.document.documentElement.scrollTop;

                if (
                    currentPositionY > this.previousScrollPositionY &&
                    currentPositionY > header.offsetHeight &&
                    !navCollapse.classList.contains("collapsing") &&
                    !navCollapse.classList.contains("show") &&
                    !header.classList.contains("hide")
                ) {
                    header.classList.add("hide");
                } else if (
                    currentPositionY <= this.previousScrollPositionY &&
                    header.classList.contains("hide")
                ) {
                    header.classList.remove("hide");
                }

                this.previousScrollPositionY =
                    window.document.documentElement.scrollTop;
            }
        }
    };
</script>
