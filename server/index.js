require("dotenv").config();
const express = require("express");
const apolloVerifyToken = require("./middleware/apolloVerifyToken");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./database/apollo/schema");

const app = express();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // Note! This example uses the `req` object to access headers,
        // but the arguments received by `context` vary by integration.
        // This means they will vary for Express, Koa, Lambda, etc.!
        //
        // To find out the correct arguments for a specific integration,
        // see the `context` option in the API reference for `apollo-server`:
        // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

        apolloVerifyToken(req);

        const user = req.user;

        console.log("user: ", user);

        // console.log("req.user: ", req.user);

        // Get the user token from the headers.
        // const token = req.headers.authorization || "";

        // try to retrieve a user with the token
        // const user = getUser(token);

        // add the user to the context
        return { user };
    },
});

const sslRedirect = require("heroku-ssl-redirect");
const cors = require("cors");
const compression = require("compression");
const csurf = require("csurf");
const config = require("./config/config.json");

// #mongoDB
const mongoose = require("./database/mongoDB");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const { createSitemap } = require("./middleware/createSitemap");
const { CRONNewsletter } = require("./middleware/CRONNewsletter");
const { CRONRefreshJobs } = require("./middleware/CRONRefreshJobs");
const { unpublishJobs } = require("./middleware/unpublishJobs");
const { CRONUnpublishedJobs } = require("./middleware/CRONUnpublishedJobs");

// #Set Up prerender.io
const prerender = require("prerender-node").set(
    "prerenderToken",
    process.env.PRERENDER_TOKEN
);
prerender.crawlerUserAgents = prerender.crawlerUserAgents.filter(
    (item) => config.prerender.exclude.indexOf(item) <= -1
);

// # SSL redirect
app.use(sslRedirect());

// #Create Sitemap CRON job
if (config.sitemap.active) {
    createSitemap.start();
}

// #Send Newsletter CRON job
if (config.newsletter.active) {
    CRONNewsletter.start();
}

// #Refresh jobs CRON job
if (config.refreshJobs.active) {
    CRONRefreshJobs.start();
}

// #Unpublish jobs CRON job
if (config.unpublishJobs.active) {
    unpublishJobs.start();
}

// #UnpublishedJobsReminder CRON job
if (config.unpublishedJobsReminder.active) {
    CRONUnpublishedJobs.start();
}

// #Redirects
if (config.redirect.active) {
    app.use(require("./middleware/redirect"));
}

// #Prerender w/o googlebot
if (
    config.prerender.active &&
    process.env.NODE_ENV == "production" &&
    process.env.WEBSITE_URL === "https://www.mfa-mal-anders.de"
) {
    app.use(prerender);
}

app.use(compression());
app.use(cors());
app.use(express.json());

// #Routes w/o csrf protection
app.use("/api/webhooks", require("./routes/webhooks"));
// app.use("/api/add-bulk-subscribers", require("./routes/addBulkSubscribers"));

// #Express Session
app.use(
    session({
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            touchAfter: 24 * 3600,
        }),
        secret: process.env.COOKIE_SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        },
    })
);

app.get("/sitemap.xml", (req, res) => {
    res.sendFile(__dirname + "/public/sitemap.xml");
});
app.get("/google01de2d715b667119.html", (req, res) => {
    res.sendFile(__dirname + "/public/google01de2d715b667119.html");
});

// #Middleware for production
if (process.env.NODE_ENV == "production") {
    app.use(csurf());
    app.use(function (err, req, res, next) {
        if (err.code !== "EBADCSRFTOKEN") return next(err);

        // handle CSRF token errors here
        res.sendStatus(403);
        // res.redirect(
        //     "/logout?error=Sie+werden+aus+Sicherheitsgründen+abgemeldet+und+können+sich+danach+erneut+anmelden"
        // );
    });

    app.use((req, res, next) => {
        res.set("x-frame-options", "DENY");
        res.cookie("XSRF-TOKEN", req.csrfToken());
        next();
    });
    app.use(express.static(__dirname + "/public"));
}

// #ApolloServer
apolloServer.applyMiddleware({ app });

// #Routes w csrf protection
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/subscriber", require("./routes/subscriber"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/companies", require("./routes/companies"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/coupons", require("./routes/coupons"));
app.use("/api/images", require("./routes/images"));
app.use("/api/stripe", require("./routes/stripe"));
app.use("/api/invoice", require("./routes/invoice"));
app.use("/api/send-email", require("./routes/sendEmail"));
app.use("/api/download", require("./routes/download"));

// #Serve the built static files in production
app.use("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}`)
);

// #Set custom request timeout
server.setTimeout(20000);
