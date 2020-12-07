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
    export default {
        name: "PrivacyPolicy",
        data() {
            return {
                title: "Datenschutzerklärung",
                content: ""
            };
        },
        mounted() {
            this.getPage();
        },
        methods: {
            async getPage() {
                try {
                    const response = await this.$axios.post(
                        this.$config.cms.url,
                        {
                            query: `
                            query MyQuery {
                                page(id: "datenschutzerklaerung", idType: URI) {
                                    content
                                    title
                                }
                            }
                        `
                        }
                    );

                    this.title = response.data.data.page.title;
                    this.content = response.data.data.page.content;
                } catch (err) {
                    console.log("Error on getPage(): ", err);
                    this.content = `Beim Laden der Seite ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.`;
                }
            }
        }
    };
</script>
