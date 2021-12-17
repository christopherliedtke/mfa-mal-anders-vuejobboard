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
      // TODO get articles
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
      // TODO get weiterbildungen
      const weiterbildungen = null;

      try {
        this.cache.set("weiterbildungen", weiterbildungen);
      } catch (error) {
        console.log("error: ", error);
        return null;
      }
      return this.cache.get("weiterbildungen");
    }

    if (key === "professions") {
      // TODO get professions
      const professions = null;

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

const sitemapCache = new Cache(60 * 60 * 6);

sitemapCache.cache.on("expired", key => {
  sitemapCache.get(key);
});
sitemapCache.cache.on("flush", () => {
  sitemapCache.get("articles");
  sitemapCache.get("weiterbildungen");
  sitemapCache.get("professions");
});

module.exports = sitemapCache;

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
          firstName: article.author.node.firstName,
          lastName: article.author.node.lastName,
          avatarUrl: article.author.node.avatar.url,
          fbUrl: article.author.node.seo.social.facebook,
          igUrl: article.author.node.seo.social.instagram,
        },
        featuredImage: {
          sourceUrl: article.featuredImage.node.sourceUrl,
          srcSet: article.featuredImage.node.srcSet,
          sizes: article.featuredImage.node.sizes,
          altText: article.featuredImage.node.altText,
        },
        seo: {
          title: article.seo.title,
          metaDesc: article.seo.metaDesc,
        },
        tags: article.tags.nodes.map(tag => tag.name),
      };
    });
  } catch (err) {
    console.error("Error in getArticles() for wpContentCache: ", err);
  }

  return articles;
}
