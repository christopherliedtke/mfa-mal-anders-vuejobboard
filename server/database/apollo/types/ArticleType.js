const { gql } = require("graphql-modules");

const ArticleType = gql`
  extend type Query {
    article(slug: String!): Article
    articles(limit: Float, random: Boolean, exclude: String): [Article]
  }

  type Article {
    id: String
    date: String
    modified: String
    title: String
    content: String
    excerpt: String
    slug: String
    author: Author
    featuredImage: FeaturedImage
    seo: Seo
    tags: [String]
  }

  type Author {
    firstName: String
    lastName: String
    avatarUrl: String
    fbUrl: String
    igUrl: String
  }

  type FeaturedImage {
    sourceUrl: String
    srcSet: String
    sizes: String
    altText: String
  }

  type Seo {
    metaDesc: String
    title: String
  }
`;

module.exports = ArticleType;
