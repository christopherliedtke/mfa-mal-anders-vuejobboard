const NodeCache = require("node-cache");
const axios = require("axios");

class Cache {
  constructor(ttlSeconds = 60 * 60) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false,
    });
  }

  async get(key) {
    const value = this.cache.get(key);
    if (value) {
      return Promise.resolve(value);
    }

    if (key === "articles") {
      const articles = await getArticles();

      try {
        this.cache.set("articles", articles);
      } catch (error) {
        console.log("error: ", error);
        return null;
      }
      return this.cache.get("articles");
    }

    if (key === "weiterbildungen") {
      const weiterbildungen = await getWeiterbildungen();

      try {
        this.cache.set("weiterbildungen", weiterbildungen);
      } catch (error) {
        console.log("error: ", error);
        return null;
      }
      return this.cache.get("weiterbildungen");
    }

    if (key === "professions") {
      const professions = await getProfessions();

      try {
        this.cache.set("professions", professions);
      } catch (error) {
        console.log("error: ", error);
        return null;
      }
      return this.cache.get("professions");
    }

    return null;
  }

  del(keys) {
    this.cache.del(keys);
  }

  delStartWith(startStr = "") {
    if (!startStr) {
      return;
    }

    const keys = this.cache.keys();
    for (const key of keys) {
      if (key.indexOf(startStr) === 0) {
        this.del(key);
      }
    }
  }

  flush() {
    this.cache.flushAll();
  }
}

const wpContentCache = new Cache(60 * 60 * 6);

wpContentCache.cache.on("expired", key => {
  wpContentCache.get(key);
});
wpContentCache.cache.on("flush", () => {
  wpContentCache.get("articles");
  wpContentCache.get("weiterbildungen");
  wpContentCache.get("professions");
});

module.exports = wpContentCache;

async function getArticles() {
  let articles = null;

  try {
    articles = await axios.post(process.env.WP_API_URL, {
      query: `
          query MyQuery {
            posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
              nodes {
                id
                title
                content
                excerpt
                date
                modified
                slug
                author {
                  node {
                    avatar {
                      url
                    }
                    firstName
                    lastName
                    seo {
                      social {
                        facebook
                        instagram
                      }
                    }
                  }
                }
                featuredImage {
                  node {
                    altText
                    sourceUrl
                    srcSet
                    sizes
                  }
                }
                seo {
                  metaDesc
                  title
                }
                tags {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        `,
    });

    articles = articles.data.data.posts.nodes.map(article => {
      return {
        id: article.id,
        title: article.title,
        content: article.content,
        excerpt: article.excerpt,
        date: article.date,
        modified: article.modified,
        slug: article.slug,
        author: {
          firstName: article.author ? article.author.node.firstName : "",
          lastName: article.author ? article.author.node.lastName : "",
          avatarUrl: article.author ? article.author.node.avatar.url : "",
          fbUrl: article.author ? article.author.node.seo.social.facebook : "",
          igUrl: article.author ? article.author.node.seo.social.instagram : "",
        },
        featuredImage: {
          sourceUrl: article.featuredImage
            ? article.featuredImage.node.sourceUrl
            : "",
          srcSet: article.featuredImage
            ? article.featuredImage.node.srcSet
            : "",
          sizes: article.featuredImage ? article.featuredImage.node.sizes : "",
          altText: article.featuredImage
            ? article.featuredImage.node.altText
            : "",
        },
        seo: {
          title: article.seo ? article.seo.title : "",
          metaDesc: article.seo ? article.seo.metaDesc : "",
        },
        tags: article.tags ? article.tags.nodes.map(tag => tag.name) : [],
      };
    });
  } catch (err) {
    console.error("Error in getArticles() for wpContentCache: ", err);
  }

  return articles;
}

async function getWeiterbildungen() {
  let weiterbildungen = null;

  try {
    weiterbildungen = await axios.post(process.env.WP_API_URL, {
      query: `
          query MyQuery {
            weiterbildungen(first: 100, where: {orderby: {field: TITLE, order: ASC}}) {
              nodes {
                id
                title
                content
                excerpt
                slug
                featuredImage {
                  node {
                    altText
                    sourceUrl
                    srcSet
                    sizes
                  }
                }
                seo {
                  metaDesc
                  title
                }
                categories {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        `,
    });

    weiterbildungen = weiterbildungen.data.data.weiterbildungen.nodes.map(
      weiterbildung => {
        return {
          id: weiterbildung.id,
          title: weiterbildung.title,
          content: weiterbildung.content,
          excerpt: weiterbildung.excerpt,
          slug: weiterbildung.slug,
          featuredImage: {
            sourceUrl: weiterbildung.featuredImage
              ? weiterbildung.featuredImage.node.sourceUrl
              : "",
            srcSet: weiterbildung.featuredImage
              ? weiterbildung.featuredImage.node.srcSet
              : "",
            sizes: weiterbildung.featuredImage
              ? weiterbildung.featuredImage.node.sizes
              : "",
            altText: weiterbildung.featuredImage
              ? weiterbildung.featuredImage.node.altText
              : "",
          },
          seo: {
            title: weiterbildung.seo ? weiterbildung.seo.title : "",
            metaDesc: weiterbildung.seo ? weiterbildung.seo.metaDesc : "",
          },
          categories: weiterbildung.categories
            ? weiterbildung.categories.nodes.map(category => category.name)
            : [],
        };
      }
    );
  } catch (err) {
    console.error("Error in getWeiterbildungen() for wpContentCache: ", err);
  }

  return weiterbildungen;
}

async function getProfessions() {
  let professions = null;

  try {
    professions = await axios.post(process.env.WP_API_URL, {
      query: `
          query MyQuery {
            berufsbilder(first: 100, where: {orderby: {field: TITLE, order: ASC}}) {
              nodes {
                id
                title
                content
                slug
                berufsbildTypes {
                  nodes {
                    name
                    description
                    slug
                    seo {
                      metaDesc
                    }
                  }
                }
                seo {
                  metaDesc
                  title
                }
              }
            }
          }
        `,
    });

    professions = professions.data.data.berufsbilder.nodes.map(profession => {
      return {
        id: profession.id,
        title: profession.title,
        content: profession.content,
        slug: profession.slug,
        professionType: {
          name: profession.berufsbildTypes
            ? profession.berufsbildTypes.nodes[0].name
            : "",
          description: profession.berufsbildTypes
            ? profession.berufsbildTypes.nodes[0].description
            : "",
          slug: profession.berufsbildTypes
            ? profession.berufsbildTypes.nodes[0].slug
            : "",
          metaDesc: profession.berufsbildTypes
            ? profession.berufsbildTypes.nodes[0].seo.metaDesc
            : "",
        },
        seo: {
          title: profession.seo ? profession.seo.title : "",
          metaDesc: profession.seo ? profession.seo.metaDesc : "",
        },
      };
    });
  } catch (err) {
    console.error("Error in getWeiterbildungen() for wpContentCache: ", err);
  }

  return professions;
}
