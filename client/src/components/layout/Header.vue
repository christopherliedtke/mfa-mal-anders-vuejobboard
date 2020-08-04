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

                    <div v-for="item in cmsMenu" :key="item.id">
                        <b-nav-item
                            v-if="!item.childItems.length"
                            :to="item.path"
                            >{{ item.name }}</b-nav-item
                        >

                        <b-nav-item-dropdown v-else :text="item.name" left>
                            <div
                                v-for="childItem in item.childItems"
                                :key="childItem.id"
                            >
                                <b-dropdown-item :to="childItem.path">{{
                                    childItem.name
                                }}</b-dropdown-item>
                            </div>
                        </b-nav-item-dropdown>
                    </div>

                    <!-- <b-nav-item
                        v-for="item in cmsMenu"
                        :key="item.id"
                        :to="item.path"
                        >{{ item.name }}</b-nav-item
                    > -->

                    <b-nav-item to="/login" v-if="!userId">Login</b-nav-item>
                    <b-nav-item to="/register" v-if="!userId"
                        >Register</b-nav-item
                    >

                    <b-nav-item-dropdown v-if="userId" text="User" right>
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
                        <b-dropdown-item v-if="userRole === 'admin'" to="/admin"
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
                    </b-nav-item-dropdown>

                    <!-- <b-nav-item to="/dashboard" v-if="userId"
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
                    <b-nav-item to="/admin" v-if="userRole === 'admin'"
                        ><b-icon
                            class="mr-1"
                            icon="shield-lock"
                            font-scale="1.45"
                        ></b-icon
                        >Admin</b-nav-item
                    >
                    <b-nav-item v-if="userId"><Logout /></b-nav-item> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    import Logout from "@/components/utils/Logout";
    export default {
        name: "Header",
        components: {
            Logout
        },
        data() {
            return {
                cmsMenu: []
            };
        },
        methods: {
            toggleNavbar() {
                this.$root.$emit("bv::toggle::collapse", "nav-collapse");
            },
            openDropdown() {
                console.log("test");
            },
            async fetchMenu() {
                const response = await axios.post(config.cms.url, {
                    query: `
                        query MyQuery {
                            menu(id: "header", idType: NAME) {
                                menuItems {
                                    nodes {
                                        id
                                        path
                                        label
                                        parentId
                                        childItems {
                                            nodes {
                                                path
                                                label
                                                id
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    `
                });

                this.cmsMenu = response.data.data.menu.menuItems.nodes
                    .filter(node => !node.parentId)
                    .map(node => {
                        return {
                            id: node.id,
                            name: node.label,
                            path: "/page" + node.path,
                            childItems:
                                node.childItems.nodes.length > 0 &&
                                node.childItems.nodes.map(childNode => {
                                    return {
                                        id: childNode.id,
                                        name: childNode.label,
                                        path: "/page" + childNode.path
                                    };
                                })
                        };
                    });
            }
        },
        computed: {
            userId() {
                return this.$store.state.auth.userId;
            },
            userRole() {
                return this.$store.state.auth.userRole;
            }
        },
        created() {
            if (config.cms.active) {
                this.fetchMenu();
            }
        }
    };
</script>

<style scoped lang="scss"></style>
