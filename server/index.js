require("dotenv").config({ path: "./.env.local" });
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
const config = require("./config/config.js");
const sitemapCache = require("./cache/sitemapCache");

// #mongoDB
const mongoose = require("./database/mongoDB");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const { CRONNewsletter } = require("./CRON/CRONNewsletter");
const { CRONGenerateMatomoReport } = require("./CRON/CRONMatomo");
const { CRONSendUserReminder } = require("./CRON/CRONSendUserReminder");
const { CRONRefreshJobs } = require("./CRON/CRONRefreshJobs");
const { CRONUnpublishJobs } = require("./CRON/CRONUnpublishJobs");
const {
  CRONSendUnpublishedJobsReminder,
} = require("./CRON/CRONSendUnpublishedJobsReminder");
const {
  CRONSendUnpublishedJobSeeksReminder,
} = require("./CRON/CRONSendUnpublishedJobseeksReminder");
const jobLiftCache = require("./cache/jobliftCache");
const internalJobsCache = require("./cache/internalJobsCache");
const jobAdPackagesCache = require("./cache/jobAdPackagesCache");
const internalJobSeeksCache = require("./cache/publicJobSeeksCache");
const wpContentCache = require("./cache/wpContentCache");

// #Set Up rendertron
// const rendertron = require("rendertron-middleware");

// #Set Up prerender.io
// const prerender = require("prerender-node").set(
//   "prerenderToken",
//   process.env.PRERENDER_TOKEN
// );
// const prerender = require("prerender-node").set(
//   "prerenderServiceUrl",
//   "http://prerender.mfa-mal-anders.de"
// );
const prerender = require("prerender-node");
prerender.crawlerUserAgents = config.prerender.userAgents;

// # SSL redirect
if (process.env.HEROKU == "yes") {
  app.use(sslRedirect());
}

// #Send Newsletter CRON job
if (config.newsletter.active) {
  CRONNewsletter.start();
}

// #Generate Matomo report CRON job
if (config.generateMatomoReport.active) {
  CRONGenerateMatomoReport.start();
}

// #Send user reminder if no job or jobseek
if (config.sendUserReminder.active) {
  CRONSendUserReminder.start();
}

// #Refresh jobs CRON job
if (config.refreshJobs.active) {
  CRONRefreshJobs.start();
}

// #Unpublish jobs CRON job
if (config.unpublishJobs.active) {
  CRONUnpublishJobs.start();
}

// #UnpublishedJobsReminder CRON job
if (config.unpublishedJobsReminder.active) {
  CRONSendUnpublishedJobsReminder.start();
}

// #UnpublishedJobSeeksReminder CRON job
if (config.unpublishedJobSeeksReminder.active) {
  CRONSendUnpublishedJobSeeksReminder.start();
}

// #Redirects
// if (config.redirect.active) {
//   app.use(require("./middleware/redirect"));
// }

// #Prerender w/ rendertron
// app.use(
//   rendertron.makeMiddleware({
//     proxyUrl: "https://rendertron.mfa-mal-anders.de/render",
//     timeout: 25000,
//   })
// );

// #Prerender w/o googlebot
if (process.env.PRERENDER_ACTIVE === "on") {
  app.use(prerender);
}

// #Routes w/o csrf protection && cors protection && compression && express.json
app.use("/api/webhooks", require("./routes/webhooks"));

// #Cors implementation
if (process.env.NODE_ENV != "production") {
  app.use(cors());
}

app.use(compression());
app.use(express.json());

// # Routes w/o csrf protection && cors protection
app.use("/api/version", require("./routes/version"));

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
    // handle CSRF token errors here
    if (err.code !== "EBADCSRFTOKEN") {
      return next(err);
    }

    console.error(err, req.body);
    res.sendStatus(403);
  });

  app.use((req, res, next) => {
    res.set("x-frame-options", "DENY");
    res.cookie("XSRF-TOKEN", req.csrfToken());
    next();
  });
  app.use(
    express.static(__dirname + "/public", {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      acceptRanges: false,
    })
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
    cache: "bounded",
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      // {
      //   requestDidStart() {
      //     return {
      //       didEncounterErrors(requestContext) {
      //         if (requestContext.errors) {
      //           // requestContext.errors.forEach(e =>
      //           //   console.error(
      //           //     e.message,
      //           //     e.locations,
      //           //     requestContext.request.query
      //           //   )
      //           // );
      //           // console.log(requestContext);
      //         }
      //       },
      //     };
      //   },
      // },
    ],
    formatError: err => {
      if (
        (err.path.includes("company") &&
          err.extensions.exception.path === "_id" &&
          err.extensions.exception.kind === "ObjectId") ||
        (err.path.includes("register") &&
          err.extensions.argumentName === "registerRequirements")
        // || err.extensions.code === "BAD_USER_INPUT"
      ) {
        return err;
      }
      console.error(err);
      return err;
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql", cors: true });

  // #Routes w csrf protection
  app.use("/api/contact", require("./routes/contact"));
  app.use("/api/newsletter", require("./routes/newsletter"));
  app.use("/api/images", require("./routes/images"));
  app.use("/api/customers", require("./routes/customers"));
  app.use("/api/products", require("./routes/products"));
  app.use("/api/coupons", require("./routes/coupons"));
  app.use("/api/checkout", require("./routes/checkout"));
  app.use("/api/invoice", require("./routes/invoice"));
  app.use("/api/send-email", require("./routes/sendEmail"));
  app.use("/api/admin", require("./routes/admin"));
  app.use("/api/analytics", require("./routes/analytics"));
  // app.use("/api/prerender", require("./routes/prerender"));

  // #Redirects
  if (config.redirect.active) {
    app.use(require("./middleware/redirect"));
  }

  // #Serve the built static files in production
  app.use("/404", (req, res) => {
    // res.status(404).sendFile(__dirname + "/public/index.html");
    res.status(404).sendFile(__dirname + "/public/index.html");
  });
  app.use("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  const server = app.listen(process.env.PORT, () => {
    console.log(
      `Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );

    // #Fill caches on server start
    internalJobsCache.get("jobs");
    jobLiftCache.get("jobs");
    jobAdPackagesCache.get("jobAdPackages");
    internalJobSeeksCache.get("jobSeeks");
    wpContentCache.get("articles");
    wpContentCache.get("weiterbildungen");
    wpContentCache.get("professions");
    sitemapCache.get("sitemap");
  });

  // #Set custom request timeout
  server.setTimeout(26000);
}

startServer();
