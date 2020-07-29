const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const privateCompaniesSchema = require("../utils/graphQL/schemas/privateCompaniesSchema");
const adminCompaniesSchema = require("../utils/graphQL/schemas/adminCompaniesSchema");
const authenticateToken = require("../utils/middleware/checkAuth");
const isAdmin = require("../utils/middleware/isAdmin");

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

// #route:  POST /api/companies/admin
// #desc:   RUD companies to admin
// #access: Private
router.use(
    "/admin",
    authenticateToken,
    isAdmin,
    expressGraphQL({
        schema: adminCompaniesSchema,
        graphiql: true,
    })
);

module.exports = router;
