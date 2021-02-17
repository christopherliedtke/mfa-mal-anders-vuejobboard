const UserType = require("../types/UserType");
const UserResolvers = require("../resolvers/UserResolvers");
const { createModule } = require("graphql-modules");

const UserModule = createModule({
    id: "user-module",
    dirname: __dirname,
    typeDefs: [UserType],
    resolvers: [UserResolvers],
});

module.exports = UserModule;
