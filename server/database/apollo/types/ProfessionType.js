const { gql } = require("graphql-modules");

const ProfessionType = gql`
  extend type Query {
    profession(slug: String!): Profession
    professions(type: String): [Profession]
  }

  type Profession {
    id: String!
    title: String!
    content: String
    slug: String
    seo: Seo
    professionType: ProfessionType
  }

  type ProfessionType {
    name: String
    description: String
    slug: String
    metaDesc: String
  }
`;

module.exports = ProfessionType;
