const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const privateUsersSchema = require("../utils/graphQL/schemas/privateUsersSchema");
const adminUsersSchema = require("../utils/graphQL/schemas/adminUsersSchema");
const authenticateToken = require("../utils/middleware/checkAuth");
const isAdmin = require("../utils/middleware/isAdmin");

// #route:  POST /api/users/private
// #desc:   CRUD users to private
// #access: Private
router.use(
    "/private",
    authenticateToken,
    expressGraphQL({
        schema: privateUsersSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

// #route:  POST /api/users/admin
// #desc:   CRUD users to admin
// #access: Private
router.use(
    "/admin",
    authenticateToken,
    isAdmin,
    expressGraphQL({
        schema: adminUsersSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

module.exports = router;
