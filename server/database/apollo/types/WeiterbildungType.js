const { gql } = require("graphql-modules");

const WeiterbildungType = gql`
  extend type Query {
    weiterbildung(slug: String!): Weiterbildung
    weiterbildungen(
      limit: Float
      random: Boolean
      exclude: String
    ): [Weiterbildung]
  }

  type Weiterbildung {
    id: String!
    title: String!
    content: String
    excerpt: String!
    slug: String
    featuredImage: FeaturedImage
    seo: Seo
    categories: [String]
  }
`;

module.exports = WeiterbildungType;
