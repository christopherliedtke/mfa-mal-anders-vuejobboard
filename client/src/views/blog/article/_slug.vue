<template>
  <div v-if="article">
    <article>
      <div class="title">
        <h1>{{ article.title }}</h1>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </div>
      <div class="cms-article container mt-3 mb-5">
        <div class="position-relative">
          <b-img-lazy
            v-if="article.featuredImage"
            :srcset="article.featuredImage ? article.featuredImage.srcSet : ''"
            sizes="(max-width: 1200px) 100vw, 1200px"
            :src="article.featuredImage ? article.featuredImage.sourceUrl : ''"
            :alt="article.featuredImage ? article.featuredImage.altText : ''"
            width="1200"
            height="630"
            blank-width="1200"
            blank-height="630"
            offset="1000"
            class="mt-3 mb-4"
            fluid
          />
          <div
            v-if="article.author.avatarUrl && article.featuredImage"
            class="position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1"
            style="bottom: 0; right: 5%"
          >
            <b-img
              :src="article.author.avatarUrl"
              :alt="article.author.firstName"
              class="mr-2 rounded-circle"
              style="height: 37.5px"
            />
            <div v-if="article.author.firstName">
              von {{ article.author.firstName }}
            </div>
          </div>
        </div>
        <!-- eslint-disable-next-line -->
        <div class="mt-3" v-html="article.content"></div>
        <p class="mt-4">
          Hast Du Interesse an Themen rund um Deine Karriere im
          Gesundheitswesen? Dann folge uns gern auf
          <b-link
            class="bold"
            :href="`https://www.facebook.com/${$config.fb.path}`"
            target="_blank"
            >Facebook</b-link
          >
          und
          <b-link
            class="bold"
            :href="`https://www.instagram.com/${$config.ig.path}`"
            target="_blank"
            >Instagram</b-link
          >.
        </p>
        <div
          class="d-flex flex-wrap justify-content-between align-items-center mt-5"
        >
          <div class="mb-4 mb-lg-0">
            <div
              v-if="article.author.avatarUrl"
              class="d-flex align-items-center mb-3"
            >
              <b-img
                :src="article.author.avatarUrl"
                :alt="article.author.firstName"
                class="mr-3 rounded-circle"
                style="height: 60px"
              />
              <div class="h6">
                <span>
                  Liebe Grüße,
                </span>
                <br />
                <span>{{ article.author.firstName }}</span>
              </div>
            </div>
            <div class="text-primary">
              <b-link
                v-if="article.author.fbUrl"
                class="mr-2"
                :href="article.author.fbUrl"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  />
                </svg>
              </b-link>
              <b-link
                v-if="article.author.igUrl"
                class="mr-2"
                :href="article.author.igUrl"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  />
                </svg>
              </b-link>
            </div>
          </div>
          <div>
            <FacebookShareBtn class="mb-2 mb-lg-0 mr-2" />
            <TwitterShareBtn class="mb-2 mb-lg-0 mr-2" />
            <WhatsAppShareBtn class="mb-2 mb-lg-0" />
          </div>
          <div
            v-if="article.tags.some(tag => tag == 'Erfahrungsbericht')"
            class="small mt-4"
          >
            Wenn auch Du von einer interessanten Weiterbildung oder Deiner
            Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns
            über das
            <b-link to="/kontakt">Kontaktformular</b-link>.
          </div>
        </div>
      </div>
    </article>
    <div class="container">
      <JobSeeksLargeBanner class="my-4 my-lg-5" />
      <RandomArticlesContainer />
    </div>

    <Head
      v-if="article.seo.title"
      :title="article.seo.title"
      :desc="article.seo.metaDesc"
      :img="article.featuredImage ? article.featuredImage.sourceUrl : ''"
      :script="snippet"
    />
    <ArticleStructuredData :article="article" />
  </div>
</template>

<script>
  import ArticleStructuredData from "@/components/utils/ArticleStructuredData.vue";
  import RandomArticlesContainer from "@/components/containers/RandomArticlesContainer.vue";
  import JobSeeksLargeBanner from "@/components/banners/JobSeeksLargeBanner.vue";
  import FacebookShareBtn from "@/components/buttons/FacebookShareBtn.vue";
  import TwitterShareBtn from "@/components/buttons/TwitterShareBtn.vue";
  import WhatsAppShareBtn from "@/components/buttons/WhatsAppShareBtn.vue";
  export default {
    name: "Article",
    components: {
      ArticleStructuredData,
      RandomArticlesContainer,
      JobSeeksLargeBanner,
      FacebookShareBtn,
      TwitterShareBtn,
      WhatsAppShareBtn
    },
    data() {
      return {
        article: null
      };
    },
    computed: {
      breadcrumbs() {
        return [
          { text: "Home", to: "/" },
          { text: "Blog", to: "/blog" },
          {
            text: "Artikel",
            to: `/blog/artikel/${this.$route.params.slug}`
          }
        ];
      },
      snippet: function() {
        return [
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
                "name": "Blog",
                "item": "https://www.mfa-mal-anders.de/blog"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": "${this.$route.params.slug
                  .split("-")
                  .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
                  .join(" ")}",
                "item": "https://www.mfa-mal-anders.de/blog/artikel/${
                  this.$route.params.slug
                }"
              }]
            }`
          },
          {
            id: "canonical",
            rel: "canonical",
            href: `${this.$config.website.url}/blog/artikel/${this.$route.params.slug}`
          }
        ];
      }
    },
    watch: {
      async "$route.params.slug"() {
        await this.getArticle();
      }
    },
    async created() {
      await this.getArticle();
    },
    methods: {
      async getArticle() {
        try {
          const article = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  article(slug: "${this.$route.params.slug}") {
                    date
                    modified
                    title
                    content
                    tags
                    author {
                      firstName
                      lastName
                      avatarUrl
                      fbUrl
                      igUrl
                    }
                    featuredImage {
                      sourceUrl
                      srcSet
                      sizes
                      altText
                    }
                    seo {
                      title
                      metaDesc
                    }
                  }
                }
              `
            }
          });

          if (!article.data.data.article) {
            throw new Error();
          }

          this.article = article.data.data.article;
        } catch (err) {
          this.$router.push("/blog");
        }
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
