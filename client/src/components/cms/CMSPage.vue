<template>
    <div class="cms-page">
        <h1>{{ page.title }}</h1>
        <div v-html="page.content"></div>
    </div>
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    export default {
        name: "CMSPage",
        data() {
            return {
                page: {
                    title: "",
                    content: ""
                }
            };
        },
        watch: {
            $route(to, from) {
                this.title = "";
                this.content = "";

                if (to.params.path != from.params.path) {
                    this.getPageContent();
                }
            }
        },
        methods: {
            async getPageContent() {
                const response = await axios.post(config.cms.url, {
                    query: `
                        query MyQuery {
                            page(id: "/${this.$route.params.path}/", idType: URI) {
                                content
                                title
                            }
                        }
                    `
                });

                if (!response.data.data.page) {
                    this.$router.push("/404");
                    return;
                }

                this.page = response.data.data.page;
            }
        },
        created() {
            this.getPageContent();
        }
    };
</script>

<style></style>
