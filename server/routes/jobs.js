const express = require("express");
const router = express.Router();
const expressGraphQL = require("express-graphql");
const publicJobsSchema = require("../database/graphQL/schemas/publicJobsSchema");
const privateJobsSchema = require("../database/graphQL/schemas/privateJobsSchema");
const adminJobsSchema = require("../database/graphQL/schemas/adminJobsSchema");
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

// #route:  POST /api/jobs/public
// #desc:   Get jobs available to public
// #access: Public
router.use(
    "/public",
    expressGraphQL({
        schema: publicJobsSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

// #route:  POST /api/jobs/private
// #desc:   CRUD jobs to private
// #access: Private
router.use(
    "/private",
    verifyToken,
    expressGraphQL({
        schema: privateJobsSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

// #route:  POST /api/jobs/admin
// #desc:   RUD jobs to admin
// #access: Private
router.use(
    "/admin",
    verifyToken,
    isAdmin,
    expressGraphQL({
        schema: adminJobsSchema,
        graphiql: true,
        customFormatErrorFn: (error) => {
            console.log(error);
        },
    })
);

module.exports = router;
