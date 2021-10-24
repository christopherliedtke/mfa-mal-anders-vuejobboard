<template>
  <div class="privacy-policy">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <!-- eslint-disable-next-line -->
      <div v-html="content"></div>
    </div>
    <Head :title="title" desc="Datenschutzerklärung" img="" />
  </div>
</template>

<script>
  export default {
    name: "PrivacyPolicy",
    data() {
      return {
        title: "Datenschutzerklärung",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Datenschutzerklärung", to: "/datenschutz" }
        ],
        content: ""
      };
    },
    mounted() {
      this.getPage();
    },
    methods: {
      async getPage() {
        try {
          const response = await this.$axios.post(this.$config.cms.url, {
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
          this.content = `Beim Laden der Seite ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.`;
        }
      }
    }
  };
</script>
