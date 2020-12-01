<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="privacy-policy py-5">
            <div v-html="content"></div>
        </b-container>
        <Head :title="title" desc="Allgemeine Geschäftsbedingungen" img="" />
    </div>
</template>

<script>
    export default {
        name: "AGBs",
        data() {
            return {
                title: "Allgemeine Geschäftsbedingungen",
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
                                page(id: "allgemeine-geschaeftsbedingungen", idType: URI) {
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
