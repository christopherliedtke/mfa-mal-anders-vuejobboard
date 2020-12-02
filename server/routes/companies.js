const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const privateCompaniesSchema = require("../database/graphQL/schemas/privateCompaniesSchema");
const adminCompaniesSchema = require("../database/graphQL/schemas/adminCompaniesSchema");
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

// #route:  POST /api/companies/private
// #desc:   CRUD companies to private
// #access: Private
router.use(
    "/private",
    verifyToken,
    expressGraphQL({
        schema: privateCompaniesSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

// #route:  POST /api/companies/admin
// #desc:   RUD companies to admin
// #access: Private
router.use(
    "/admin",
    verifyToken,
    isAdmin,
    expressGraphQL({
        schema: adminCompaniesSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

module.exports = router;
