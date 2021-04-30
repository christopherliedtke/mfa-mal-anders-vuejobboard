require("dotenv").config();
const express = require("express");
const apolloVerifyToken = require("./middleware/apolloVerifyToken");
const { ApolloServer } = require("apollo-server-express");

const application = require("./database/apollo/application");
const apolloSchema = application.createSchemaForApollo();

const app = express();

const sslRedirect = require("heroku-ssl-redirect");
const cors = require("cors");
const compression = require("compression");
const csurf = require("csurf");
const config = require("./config/config.js");

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
if (process.env.PRERENDER_ACTIVE === "on") {
  app.use(prerender);
}

app.use(compression());
app.use(cors());
app.use(express.json());

// #Routes w/o csrf protection
app.use("/api/webhooks", require("./routes/webhooks"));

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

// #Middleware for production
if (process.env.NODE_ENV == "production") {
  app.use(csurf());
  app.use(function (err, req, res, next) {
    if (err.code !== "EBADCSRFTOKEN") return next(err);

    // handle CSRF token errors here
    res.sendStatus(403);
  });

  app.use((req, res, next) => {
    res.set("x-frame-options", "DENY");
    res.cookie("XSRF-TOKEN", req.csrfToken());
    next();
  });
  app.use(express.static(__dirname + "/public"));
}

// #ApolloServer
const apolloServer = new ApolloServer({
  schema: apolloSchema,
  context: ({ req }) => {
    const token = req.session && req.session.token ? req.session.token : "";

    const user = apolloVerifyToken(token);

    return { user, session: req.session };
  },
});
apolloServer.applyMiddleware({ app, path: "/graphql", cors: true });

// #Routes w csrf protection
app.use("/api/contact", require("./routes/contact"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/images", require("./routes/images"));
app.use("/api/stripe", require("./routes/stripe"));
app.use("/api/invoice", require("./routes/invoice"));
app.use("/api/send-email", require("./routes/sendEmail"));
app.use("/api/download", require("./routes/download"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/prerender", require("./routes/prerender"));
app.use("/api/external-jobs", require("./routes/externalJobs"));

// #Serve the built static files in production
app.use("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);

// #Set custom request timeout
server.setTimeout(20000);
