const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const privateUsersSchema = require("../utils/graphQL/schemas/privateUsersSchema");
const adminUsersSchema = require("../utils/graphQL/schemas/adminUsersSchema");
const verifyToken = require("../utils/middleware/verifyToken");
const isAdmin = require("../utils/middleware/isAdmin");

// #route:  POST /api/user/private
// #desc:   CRUD users to private
// #access: Private
router.use(
    "/private",
    verifyToken,
    expressGraphQL({
        schema: privateUsersSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

// #route:  POST /api/user/admin
// #desc:   CRUD users to admin
// #access: Private
router.use(
    "/admin",
    verifyToken,
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
