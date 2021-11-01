const { gql } = require("graphql-modules");

const CompanyType = gql`
  extend type Query {
    company(_id: ID!): Company
    companies: [Company]
    myCompanies: [Company]
  }

  extend type Mutation {
    addCompany(
      name: String
      description: String
      street: String
      zipCode: String
      location: String
      state: String
      country: String
      geoCodeLat: Float
      geoCodeLng: Float
      url: String
      logoUrl: String
      size: String
    ): Company
    updateCompany(
      _id: ID!
      name: String
      description: String
      street: String
      zipCode: String
      location: String
      state: String
      country: String
      geoCodeLat: Float
      geoCodeLng: Float
      url: String
      logoUrl: String
      size: String
    ): Company
    deleteCompany(_id: ID!): Company
    adminUpdateCompany(
      _id: ID!
      name: String
      description: String
      street: String
      zipCode: String
      location: String
      state: String
      country: String
      geoCodeLat: Float
      geoCodeLng: Float
      url: String
      logoUrl: String
      size: String
    ): Company
    adminDeleteCompany(_id: ID!): Company
  }

  type Company {
    _id: ID!
    createdAt: Float
    updatedAt: Float
    name: String
    description: String
    street: String
    zipCode: String
    location: String
    state: String
    country: String
    geoCodeLat: Float
    geoCodeLng: Float
    url: String
    logoUrl: String
    size: String
    slug: String
  }

  extend type Job {
    company: Company
  }

  extend type User {
    companies: [Company]
  }
`;

module.exports = CompanyType;
