<template>
    <header id="header">
        <b-container class="px-0">
            <b-navbar toggleable="xl" type="dark">
                <b-navbar-brand to="/">
                    <b-img
                        src="@/assets/img/Logo_mfa-mal-anders-white_1200.png"
                        height="70"
                        alt="MFA mal anders - Logo"
                    />
                </b-navbar-brand>

                <b-navbar-toggle class="ui-hamburger-05" target="nav-collapse">
                    <span></span>
                </b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav @click="toggleNavbar">
                    <b-navbar-nav class="m-auto">
                        <b-nav-item
                            v-for="link in headerLinks"
                            :key="link.title"
                            :to="link.path"
                            @mouseover="link.children && showSub(link.title)"
                            @mouseleave="link.children && hideSub(link.title)"
                            >{{ link.title }}
                            <Fa
                                v-if="link.icon"
                                class="ml-1 icon"
                                :icon="link.icon"
                                size="xs"
                            />
                            <div
                                v-if="link.children"
                                :id="link.title"
                                class="sub-menu"
                            >
                                <b-nav-item
                                    v-for="subLink in link.children"
                                    :key="subLink.title"
                                    :to="subLink.path"
                                    @mouseover="
                                        subLink.children &&
                                            showSub(subLink.title)
                                    "
                                    @mouseleave="
                                        subLink.children &&
                                            hideSub(subLink.title)
                                    "
                                    >{{ subLink.title }}
                                    <Fa
                                        v-if="subLink.icon"
                                        class="ml-1 icon"
                                        :icon="subLink.icon"
                                        size="xs"/>
                                    <div
                                        v-if="subLink.children"
                                        :id="subLink.title"
                                        class="sub-menu"
                                    >
                                        <b-nav-item
                                            v-for="subSubLink in subLink.children"
                                            :key="subSubLink.title"
                                            :to="subSubLink.path"
                                            >{{ subSubLink.title }}
                                            <Fa
                                                v-if="subSubLink.icon"
                                                class="ml-1 icon"
                                                :icon="subSubLink.icon"
                                                size="xs"
                                        /></b-nav-item></div
                                ></b-nav-item>
                            </div>
                        </b-nav-item>
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
                headerLinks: [
                    {
                        title: "Home",
                        path: "/"
                    },
                    {
                        title: "Stellenangebote",
                        path: "/jobboard"
                    },
                    {
                        title: "Karriere",
                        path: "/page/mfa-career",
                        icon: "chevron-down",
                        children: [
                            {
                                title: "Gehalt",
                                path: "/page/mfa-career/gehalt"
                            },
                            {
                                title: "Bewerbungstipps",
                                path: "/page/mfa-career/bewerbungstipps"
                            },
                            {
                                title: "Jobs und Berufsbilder",
                                path: "/page/mfa-career/jobs-und-berufsbilder",
                                icon: "chevron-right",
                                children: [
                                    {
                                        title: "Medizinisch-Technisch",
                                        path:
                                            "/page/mfa-career/jobs-und-berufsbilder/medizinisch-technisch"
                                    },
                                    {
                                        title: "Verwaltung",
                                        path:
                                            "/page/mfa-career/jobs-und-berufsbilder/verwaltung"
                                    },
                                    {
                                        title: "Management",
                                        path:
                                            "/page/mfa-career/jobs-und-berufsbilder/management"
                                    },
                                    {
                                        title: "Beratung",
                                        path:
                                            "/page/mfa-career/jobs-und-berufsbilder/beratung"
                                    },
                                    {
                                        title: "Forschung",
                                        path:
                                            "/page/mfa-career/jobs-und-berufsbilder/forschung"
                                    }
                                ]
                            },
                            {
                                title: "Fort- und Weiterbildungen",
                                path:
                                    "/page/mfa-career/fort-und-weiterbildungen"
                            }
                        ]
                    },
                    {
                        title: "Blog",
                        path: "/page/blog"
                    },
                    {
                        title: "Für Arbeitgeber",
                        path: "/page/fuer-arbeitgeber"
                    },
                    {
                        title: "Über",
                        path: "/page/about"
                    },
                    {
                        title: "Kontakt",
                        path: "/page/contact"
                    }
                ],
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
