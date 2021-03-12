const nodemailer = require("nodemailer");

const emailService = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    pool: true,
    maxConnections: 3,
    maxMessages: 45,
    tls: {
        servername: process.env.EMAIL_HOST,
    },
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PW,
    },
    dkim: {
        domainName: "mfa-mal-anders.de",
        keySelector: "webgo",
        privateKey: process.env.WEBGO_PRIVATE_KEY,
        // cacheDir: "/tmp",
        // cacheTreshold: 100 * 1024,
    },
});

module.exports = emailService;
