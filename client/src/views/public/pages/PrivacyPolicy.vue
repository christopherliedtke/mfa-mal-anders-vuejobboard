<template>
    <div class="privacy-policy">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <div v-html="content"></div>
        </b-container>
        <Head :title="title" desc="Datenschutzerklärung" img="" />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import axios from "@/axios";
    import config from "@/utils/config.json";
    export default {
        name: "PrivacyPolicy",
        components: {
            Head
        },
        data() {
            return {
                title: "Datenschutzerklärung",
                content: ""
            };
        },
        methods: {
            async getPage() {
                try {
                    const response = await axios.post(config.cms.url, {
                        query: `
                            query MyQuery {
                                page(id: "datenschutzerklaerung", idType: URI) {
                                    content
                                    title
                                }
                            }
                        `
                    });

                    this.title = response.data.data.page.title;
                    this.content = response.data.data.page.content;
                } catch (err) {
                    console.log("Error on getPage(): ", err);
                    this.content = `Beim Laden der Seite ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.`;
                }
            }
        },
        mounted: function() {
            this.getPage();
        }
    };
</script>
