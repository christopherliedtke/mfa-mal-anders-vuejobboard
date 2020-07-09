const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const privateUsersSchema = require("../utils/graphQL/schemas/privateUsersSchema");
const authenticateToken = require("../utils/middleware/checkAuth");

router.use(
    "/private",
    authenticateToken,
    expressGraphQL({
        schema: privateUsersSchema,
        graphiql: true,
    })
);

module.exports = router;
