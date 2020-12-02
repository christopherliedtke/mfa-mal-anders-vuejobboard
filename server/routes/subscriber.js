const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const adminSubscribersSchema = require("../database/graphQL/schemas/adminSubscribersSchema");
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

// #route:  POST /api/subscriber/admin
// #desc:   CRUD subscribers to admin
// #access: Private
router.use(
    "/admin",
    verifyToken,
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
