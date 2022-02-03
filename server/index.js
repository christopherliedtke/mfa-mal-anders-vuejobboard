require("dotenv").config({ path: "./.env.dev" });
const express = require("express");
const apolloVerifyToken = require("./middleware/apolloVerifyToken");
const { ApolloServer } = require("apollo-server-express");

const application = require("./database/apollo/application");
const apolloSchema = application.createSchemaForApollo();
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const app = express();

const sslRedirect = require("heroku-ssl-redirect");
const cors = require("cors");
const compression = require("compression");
const csurf = require("csurf");
// const rateLimit = require("express-rate-limit");
const config = require("./config/config.js");
const sitemapCache = require("./cache/sitemapCache");

// #mongoDB
const mongoose = require("./database/mongoDB");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const { CRONNewsletter } = require("./middleware/CRONNewsletter");
const { CRONRefreshJobs } = require("./middleware/CRONRefreshJobs");
const { unpublishJobs } = require("./middleware/unpublishJobs");
const { CRONUnpublishedJobs } = require("./middleware/CRONUnpublishedJobs");

// #Set Up prerender.io
const prerender = require("prerender-node").set(
  "prerenderToken",
  process.env.PRERENDER_TOKEN
);
prerender.crawlerUserAgents = config.prerender.userAgents;

// # SSL redirect
if (process.env.HEROKU == "yes") {
  app.use(sslRedirect());
}

// # Rate Limiter
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 minutes
//   max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
//   standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });
// app.use("/api", limiter);
// app.use("/graphql", limiter);

// #Create Sitemap CRON job
// if (config.sitemap.active) {
//   createSitemap.start();
// }

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

// #Cors implementation
// TODO update for dev vs prod (consider webhooks)
if (process.env.NODE_ENV != "production") {
  app.use(cors());
}

app.use(compression());
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

app.get("/sitemap.xml", async (req, res) => {
  const sitemap = await sitemapCache.get("sitemap");
  res.set("Content-Type", "text/xml");
  res.send(sitemap);
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
  app.use(
    express.static(__dirname + "/public", { maxAge: 1000 * 60 * 60 * 24 * 7 })
  );
}

// #ApolloServer
async function startServer() {
  const apolloServer = new ApolloServer({
    schema: apolloSchema,
    context: ({ req }) => {
      const token = req.session && req.session.token ? req.session.token : "";
      const user = apolloVerifyToken(token);

      return { user, session: req.session };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql", cors: true });

  // #Routes w csrf protection
  app.use("/api/contact", require("./routes/contact"));
  app.use("/api/newsletter", require("./routes/newsletter"));
  app.use("/api/images", require("./routes/images"));
  app.use("/api/stripe", require("./routes/stripe"));
  app.use("/api/invoice", require("./routes/invoice"));
  app.use("/api/send-email", require("./routes/sendEmail"));
  app.use("/api/admin", require("./routes/admin"));
  app.use("/api/prerender", require("./routes/prerender"));

  // #Serve the built static files in production
  app.use("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  const server = app.listen(process.env.PORT, () =>
    console.log(
      `Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    )
  );

  // #Set custom request timeout
  server.setTimeout(20000);
}

startServer();
