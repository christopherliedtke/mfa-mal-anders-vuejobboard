<template>
  <div class="newsletter-unsubscribe-success">
    <h1 class="title">{{ title }}</h1>
    <b-container class="py-3 py-lg-5">
      <p>
        Du hast dich erfolgreich von unserem Job-Newsletter abgemeldet.
      </p>
      <b-button to="/stellenangebote" variant="secondary"
        >Weiter zur Stellenbörse</b-button
      >
      <RandomArticlesContainer style="margin-top: 5rem" />
    </b-container>
    <Head :title="title" desc="Job-Newsletter Abmeldung erfolgreich" img="" />
  </div>
</template>

<script>
  import RandomArticlesContainer from "@/components/containers/RandomArticlesContainer.vue";

  export default {
    name: "NewsletterUnsubscriptionSuccess",
    components: {
      RandomArticlesContainer
    },
    data() {
      return {
        title: "Job Newsletter Abmeldung erfolgreich"
      };
    }
  };
</script>
