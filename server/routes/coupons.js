const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const adminCouponsSchema = require("../utils/graphQL/schemas/adminCouponsSchema");
const authenticateToken = require("../utils/middleware/checkAuth");
const isAdmin = require("../utils/middleware/isAdmin");

// #route:  POST /api/coupons/admin
// #desc:   CRUD coupons to admin
// #access: Private
router.use(
    "/admin",
    authenticateToken,
    isAdmin,
    expressGraphQL({
        schema: adminCouponsSchema,
        graphiql: true,
    })
);

module.exports = router;
