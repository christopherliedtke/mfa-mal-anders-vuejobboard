const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const publicJobsSchema = require("../utils/graphQL/schemas/publicJobsSchema");
const privateJobsSchema = require("../utils/graphQL/schemas/privateJobsSchema");
const adminJobsSchema = require("../utils/graphQL/schemas/adminJobsSchema");
const authenticateToken = require("../utils/middleware/checkAuth");
const isAdmin = require("../utils/middleware/isAdmin");

// #route:  POST /api/jobs/public
// #desc:   Get jobs available to public
// #access: Public
router.use(
    "/public",
    expressGraphQL({
        schema: publicJobsSchema,
        graphiql: true,
    })
);

// #route:  POST /api/jobs/private
// #desc:   CRUD jobs to private
// #access: Private
router.use(
    "/private",
    authenticateToken,
    expressGraphQL({
        schema: privateJobsSchema,
        graphiql: true,
    })
);

// #route:  POST /api/jobs/admin
// #desc:   CRUD jobs to admin
// #access: Private
router.use(
    "/admin",
    authenticateToken,
    isAdmin,
    expressGraphQL({
        schema: adminJobsSchema,
        graphiql: true,
    })
);

module.exports = router;
