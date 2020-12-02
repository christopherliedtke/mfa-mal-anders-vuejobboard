const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const privateUsersSchema = require("../database/graphQL/schemas/privateUsersSchema");
const adminUsersSchema = require("../database/graphQL/schemas/adminUsersSchema");
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

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
