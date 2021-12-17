const { gql } = require("graphql-modules");

const WeiterbildungType = gql`
  extend type Query {
    weiterbildung(slug: String!): Weiterbildung
    weiterbildungen: [Weiterbildung]
  }

  type Weiterbildung {
    id: String!
    date: Float
    modified: Float
    title: String!
    content: String
    excerpt: String!
    slug: String
  }
`;

module.exports = WeiterbildungType;
