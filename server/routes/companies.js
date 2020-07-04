const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const privateCompaniesSchema = require("../utils/graphQL/schemas/privateCompaniesSchema");
const authenticateToken = require("../utils/middleware/checkAuth");

// #route:  POST /api/companies/private
// #desc:   CRUD companies to private
// #access: Private
router.use(
    "/private",
    authenticateToken,
    expressGraphQL({
        schema: privateCompaniesSchema,
        graphiql: true,
    })
);

module.exports = router;
