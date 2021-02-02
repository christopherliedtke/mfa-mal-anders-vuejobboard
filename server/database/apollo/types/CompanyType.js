const { gql } = require("graphql-modules");

const CompanyType = gql`
    extend type Query {
        company(_id: ID!): Company
        companies: [Company]
    }

    type Company {
        _id: ID!
        createdAt: Float
        updatedAt: Float
        name: String
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
    }

    extend type Job {
        company: Company!
    }

    extend type User {
        companies: [Company]
    }
`;

module.exports = CompanyType;
