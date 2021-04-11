<template>
  <div>
    <h1 class="title">{{ title }}</h1>

    <b-container class="my-5" style="max-width: 600px">
      <h3 class="text-center">Schade, dass Du gehst!</h3>
      <b-form>
        <label for="email"
          >Gib die E-Mail Adresse an, mit welcher Du Dich vom Newsletter
          abmelden möchtest. *</label
        >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="E-Mail Adresse eingeben..."
          required
        />
      </b-form>
      <b-button class="mt-3" variant="danger" @click.prevent="unsubscribe"
        >Abmelden</b-button
      >

      <b-alert
        v-if="error"
        class="position-fixed fixed-bottom m-0 rounded-0 mt-3"
        show
        dismissible
        variant="danger"
        style="z-index: 2000;"
        >{{ error }}</b-alert
      >
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "NewsletterUnsubscribe",
    data() {
      return {
        title: "Abmeldung vom Newsletter",
        form: {
          email: ""
        },
        error: false
      };
    },
    methods: {
      async unsubscribe() {
        const subscriber = await this.$axios.post("/graphql", {
          query: `
                        mutation {
                            deleteSubscriber (email: "${this.form.email}") {
                                email
                            }
                        }
                    `
        });

        if (subscriber.data.errors) {
          this.error =
            "Die angegebene E-Mail Adresse konnte nicht vom Newsletter abgemeldet werden. Bitte überprüfe die E-Mail Adresse und versuche es noch einmal. Achte gegebenenfalls auch auf Groß- und Keinschreibung.";
        } else {
          this.$router.push("/newsletter/unsubscribed-successful");
        }
      }
    }
  };
</script>
