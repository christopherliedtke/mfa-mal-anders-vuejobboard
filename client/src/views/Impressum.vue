<template>
  <div class="impressum">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="py-3 py-lg-5">
      <!-- eslint-disable-next-line -->
      <div v-html="content"></div>
    </b-container>
    <Head :title="title" desc="Impressum" img="" />
  </div>
</template>

<script>
  export default {
    name: "Impressum",
    data() {
      return {
        title: "Impressum",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Impressum", to: "/impressum" }
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
                                page(id: "impressum", idType: URI) {
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
