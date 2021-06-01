<template>
  <article v-if="article">
    <div class="title">
      <h1>{{ article.title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="cms-article mt-3 mb-5">
      <div class="position-relative">
        <b-img-lazy
          v-if="article.featuredImage"
          :srcset="
            article.featuredImage ? article.featuredImage.node.srcSet : ''
          "
          sizes="100vw"
          :src="
            article.featuredImage ? article.featuredImage.node.sourceUrl : ''
          "
          :alt="article.featuredImage ? article.featuredImage.node.altText : ''"
          width="1200"
          height="630"
          blank-width="1200"
          blank-height="630"
          offset="1000"
          class="mt-3 mb-4"
          fluid
        />
        <div
          v-if="article.author.node.avatar && article.featuredImage"
          class="position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1"
          style="bottom: 0; right: 5%"
        >
          <b-img
            :src="article.author.node.avatar.url"
            :alt="article.author.node.name"
            class="mr-2 rounded-circle"
            style="height: 37.5px"
          />
          <div v-if="article.author.node.name">
            by {{ article.author.node.name }}
          </div>
        </div>
      </div>
      <!-- eslint-disable-next-line -->
      <div class="mt-3" v-html="article.content"></div>
      <div
        class="d-flex flex-wrap justify-content-between align-items-center mt-5"
      >
        <div class="mb-4 mb-lg-0">
          <div
            v-if="article.author.node.avatar"
            class="d-flex align-items-center mb-3"
          >
            <b-img
              :src="article.author.node.avatar.url"
              :alt="article.author.node.name"
              class="mr-3 rounded-circle"
              style="height: 60px"
            />
            <div class="h6">
              <span>
                Liebe Grüße,
              </span>
              <br />
              <span>{{ article.author.node.name }}</span>
            </div>
          </div>
          <div class="text-primary">
            <b-link
              v-if="article.author.node.url"
              class="mr-2"
              :href="article.author.node.url"
              target="blank"
            >
              <Fa :icon="['fa', 'globe']" size="2x" />
            </b-link>
            <b-link
              v-if="article.author.node.seo.social.facebook"
              class="mr-2"
              :href="article.author.node.seo.social.facebook"
              target="blank"
            >
              <Fa :icon="['fab', 'facebook-square']" size="2x" />
            </b-link>
            <b-link
              v-if="article.author.node.seo.social.instagram"
              class="mr-2"
              :href="article.author.node.seo.social.instagram"
              target="blank"
            >
              <Fa :icon="['fab', 'instagram']" size="2x" />
            </b-link>
          </div>
        </div>
        <div>
          <FacebookShareBtn class="mb-2 mb-lg-0 mr-2" />
          <TwitterShareBtn class="mb-2 mb-lg-0 mr-2" />
          <WhatsAppShareBtn class="mb-2 mb-lg-0" />
        </div>
        <div
          v-if="article.tags.nodes[0].name === 'Erfahrungsbericht'"
          class="small mt-4"
        >
          Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit
          als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das
          <b-link to="/kontakt">Kontaktformular</b-link>.
        </div>
      </div>
    </b-container>
    <b-container>
      <RandomArticlesContainer />
    </b-container>
    <Head
      v-if="article.title"
      :title="article.title"
      :desc="article.excerpt"
      :img="article.featuredImage ? article.featuredImage.node.sourceUrl : ''"
      :script="snippet"
    />
  </article>
</template>

<script>
  import RandomArticlesContainer from "@/components/containers/RandomArticlesContainer.vue";
  import FacebookShareBtn from "@/components/buttons/FacebookShareBtn.vue";
  import TwitterShareBtn from "@/components/buttons/TwitterShareBtn.vue";
  import WhatsAppShareBtn from "@/components/buttons/WhatsAppShareBtn.vue";
  export default {
    name: "Article",
    components: {
      RandomArticlesContainer,
      FacebookShareBtn,
      TwitterShareBtn,
      WhatsAppShareBtn
    },
    data() {
      return {
        snippet: [
          {
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
                "name": "Blog",
                "item": "https://www.mfa-mal-anders.de/blog"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": "${this.$route.params.slug
                  .split("-")
                  .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
                  .join(" ")}",
                "item": "https://www.mfa-mal-anders.de/article/${
                  this.$route.params.slug
                }"
              }]
            }`
          }
        ]
      };
    },
    computed: {
      article() {
        return this.$store.state.articles.articles.find(
          article => article.slug === this.$route.params.slug
        );
      },
      breadcrumbs() {
        return [
          { text: "Home", to: "/" },
          { text: "Blog", to: "/blog" },
          {
            text: "Artikel",
            to: `/blog/article/${this.$route.params.slug}`
          }
        ];
      }
    }
  };
</script>

<style lang="scss">
  .cms-article {
    padding: 3rem;
    box-shadow: $shadow1;
    border-radius: $border-radius2;

    img {
      border-radius: $border-radius1;
      max-width: 100%;
      height: auto;
    }

    .summary {
      background-color: $primary;
      color: $light;
      border-radius: $border-radius2;
      padding: 2rem;
      margin: 2rem 0;
    }

    @media screen and (max-width: $break-menu) {
      padding: 0 1rem;
      box-shadow: none;
      border-radius: none;
    }
  }
</style>
