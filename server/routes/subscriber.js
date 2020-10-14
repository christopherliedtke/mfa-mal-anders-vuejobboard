const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const adminSubscribersSchema = require("../utils/graphQL/schemas/adminSubscribersSchema");
const authenticateToken = require("../utils/middleware/checkAuth");
const isAdmin = require("../utils/middleware/isAdmin");

// #route:  POST /api/subscriber/admin
// #desc:   CRUD subscribers to admin
// #access: Private
router.use(
    "/admin",
    authenticateToken,
    isAdmin,
    expressGraphQL({
        schema: adminSubscribersSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

module.exports = router;
