<template>
  <div id="linktree">
    <div id="links">
      <div class="bg-logo"></div>
      <div class="container position-relative py-3 py-lg-5">
        <nav class="d-flex flex-column align-items-center">
          <b-button block to="/">📌 mfa-mal-anders.de</b-button>
          <b-button block to="/stellengesuche/info"
            >🔎 Stellengesuch schalten</b-button
          >
          <b-button block to="/jobs">📬 Aktuelle Stellenangebote</b-button>
          <b-button block to="/karriere/jobs-und-berufsbilder"
            >💼 50+ Alternative Jobmöglichkeiten</b-button
          >
          <b-button block to="/karriere/mfa/gehalt"
            >🧮 MFA Gehaltsrechner</b-button
          >
          <b-button block to="/karriere/zfa/gehalt"
            >🧮 ZFA Gehaltsrechner</b-button
          >
          <b-button block to="/karriere/fort-und-weiterbildung"
            >🎓 Fort- und Weiterbildungen</b-button
          >
          <b-button
            block
            to="/karriere/fort-und-weiterbildung/fortbildungskatalog"
            >📆 Fortbildungskatalog</b-button
          >
          <b-button block to="/blog">📰 Blog</b-button>
          <b-button block to="/fuer-arbeitgeber">🏥 Für Arbeitgeber</b-button>
        </nav>
      </div>
    </div>
    <div v-if="articles" class="container py-3 py-lg-5">
      <div class="grid">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="mb-3"
        />
      </div>
    </div>

    <Head
      title="Linktree | Sitemap"
      desc="Dein Job- und Karriereportal für ArzthelferInnen – Zahnmedizinische | Medizinische Fachangestellte (ZFA / MFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ArticleCard from "@/components/ArticleCard.vue";
  export default {
    name: "Linktree",
    components: {
      ArticleCard
    },
    data() {
      return {
        snippet: [
          {
            id: "breadcrumbs",
            type: "application/ld+json",
            inner: `{
                "@context": "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "MFA mal anders",
                    "item": "https://www.mfa-mal-anders.de"
                },{
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Linktree",
                    "item": "https://www.mfa-mal-anders.de/linktree"
                }]
            }`
          }
        ]
      };
    },
    computed: {
      articles() {
        return this.$store.state.articles.articles;
      }
    },
    created() {
      this.$store.dispatch("getArticles");
    }
  };
</script>

<style lang="scss">
  #linktree {
    min-height: 100vh;

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 798px) {
        grid-template-columns: 1fr;
      }
    }

    #links {
      .container {
        max-width: 600px;
      }

      position: relative;
      background: linear-gradient(
          0deg,
          #fffcfd 0%,
          #fffcfd66 50%,
          #6d023077 100%
        ),
        image-set(
            url("~@/assets/img/medizinischesPersonal-1200x513.jpg") 1x,
            url("~@/assets/img/medizinischesPersonal.jpg") 2x
          )
          center center;

      background-size: cover;
      background-blend-mode: normal;

      .btn {
        border-radius: $border-radius2;
        padding: 1rem 1.5rem;
        background-color: transparentize($light, $amount: 0.5);
        color: $dark;
        font-weight: bold;
        font-size: 110%;

        &:hover {
          background-color: transparentize($light, $amount: 0.8);
          border-color: $primary;
          color: $primary;
        }
      }
    }
  }
</style>
