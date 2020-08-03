const express = require("express");
const app = express();

const cors = require("cors");
const compression = require("compression");

const csurf = require("csurf");

let secrets, port;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
    port = process.env.PORT;
} else {
    secrets = require("./utils/secrets");
    port = 5000;
}

// #mongoDB
require("./utils/db");

// #Middleware
app.use(compression());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.locals.secrets = secrets;
    next();
});

// #Cookie Session
const cookieSession = require("cookie-session");
app.use(
    cookieSession({
        secret: secrets.COOKIE_SESSION_SECRET,
        maxAge: 1000 * 60 * 60 * 24 * 14,
        httpOnly: true,
        secure: false,
    })
);

// #Routes w/o csrf protection
app.use("/api/webhooks", require("./routes/webhooks"));

// #Middleware for production
if (process.env.NODE_ENV == "production") {
    app.use(express.static(__dirname + "/public"));
    app.use(csurf());
    app.use((req, res, next) => {
        res.set("x-frame-options", "DENY");
        res.cookie("mytoken", req.csrfToken());
        next();
    });
}

// #Routes w csrf protection
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/companies", require("./routes/companies"));
app.use("/api/coupons", require("./routes/coupons"));
app.use("/api/images", require("./routes/images"));
app.use("/api/stripe", require("./routes/stripe"));
app.use("/", require("./routes/index"));

// Serve the built static files in production
app.get("*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.listen(port, () => console.log(`Server listening on port ${port}`));
