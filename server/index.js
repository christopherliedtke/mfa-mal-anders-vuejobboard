const express = require("express");
const app = express();

const sslRedirect = require("heroku-ssl-redirect");
const cors = require("cors");
const compression = require("compression");
const csurf = require("csurf");
const config = require("./utils/config");

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

// #mongoDB
const mongoose = require("./utils/db");

// #Send Newsletter CRON job
const { sendNewsletter } = require("./utils/sendNewsletter");
if (config.newsletter.active) {
    sendNewsletter.start();
}

// #Redirects
app.use(require("./utils/middleware/redirect"));

// #Middleware
app.use(compression());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.locals.secrets = secrets;
    next();
});

// #Prerender w/o googlebot
const prerender = require("prerender-node");
prerender.crawlerUserAgents = prerender.crawlerUserAgents.filter(
    (item) => item != "googlebot"
);
app.use(prerender);

// #Routes w/o csrf protection
app.use("/api/webhooks", require("./routes/webhooks"));

// #Express Session
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
app.use(
    session({
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        secret: secrets.COOKIE_SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14,
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
        },
    })
);

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
