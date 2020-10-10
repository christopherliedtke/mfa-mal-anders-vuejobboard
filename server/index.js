const express = require("express");
const app = express();

const sslRedirect = require("heroku-ssl-redirect");
const cors = require("cors");
const compression = require("compression");
const csurf = require("csurf");
const config = require("./utils/config");

// #mongoDB
const mongoose = require("./utils/db");

const prerender = require("prerender-node");
prerender.crawlerUserAgents = prerender.crawlerUserAgents.filter(
    (item) => config.prerender.exclude.indexOf(item) > -1
);

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const { createSitemap } = require("./utils/createSitemap");
const { sendNewsletter } = require("./utils/sendNewsletter");
const { refreshJobs } = require("./utils/refreshJobs");
const { unpublishJobs } = require("./utils/unpublishJobs");

let secrets, port;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
    port = process.env.PORT;
} else {
    secrets = require("./utils/secrets");
    port = 5000;
}

// # SSL redirect
app.use(sslRedirect());

// #Create Sitemap CRON job
if (config.sitemap.active) {
    createSitemap.start();
}

// #Send Newsletter CRON job
if (config.newsletter.active) {
    sendNewsletter.start();
}

// #Refresh jobs CRON job
if (config.refreshJobs.active) {
    refreshJobs.start();
}

// #Unpublish jobs CRON job
if (config.unpublishJobs.active) {
    unpublishJobs.start();
}

// #Redirects
if (config.redirect.active) {
    app.use(require("./utils/middleware/redirect"));
}

// #Prerender w/o googlebot
if (config.prerender.active && process.env.NODE_ENV == "production") {
    console.log("Prerender...");
    console.log("prerender: ", prerender);

    app.use(prerender);
}

app.use(compression());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.locals.secrets = secrets;
    next();
});

// #Routes w/o csrf protection
app.use("/api/webhooks", require("./routes/webhooks"));

// #Express Session
app.use(
    session({
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            touchAfter: 24 * 3600,
        }),
        secret: secrets.COOKIE_SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14,
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        },
    })
);

app.get("/sitemap.xml", (req, res) => {
    res.sendFile(__dirname + "/public/sitemap.xml");
});

// #Middleware for production
if (process.env.NODE_ENV == "production") {
    app.use(csurf());
    app.use((req, res, next) => {
        res.set("x-frame-options", "DENY");
        res.cookie("XSRF-TOKEN", req.csrfToken());
        next();
    });
    app.use(express.static(__dirname + "/public"));
}

// #Routes w csrf protection
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/companies", require("./routes/companies"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/coupons", require("./routes/coupons"));
app.use("/api/images", require("./routes/images"));
app.use("/api/stripe", require("./routes/stripe"));
app.use("/api/download", require("./routes/download"));

// #Serve the built static files in production
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
