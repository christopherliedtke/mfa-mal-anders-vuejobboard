const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const adminCouponsSchema = require("../utils/graphQL/schemas/adminCouponsSchema");
const verifyToken = require("../utils/middleware/verifyToken");
const isAdmin = require("../utils/middleware/isAdmin");

// #route:  POST /api/coupons/admin
// #desc:   CRUD coupons to admin
// #access: Private
router.use(
    "/admin",
    verifyToken,
    isAdmin,
    expressGraphQL({
        schema: adminCouponsSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

module.exports = router;
