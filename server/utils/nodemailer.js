const nodemailer = require("nodemailer");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("./secrets");
}

const emailService = nodemailer.createTransport({
    host: secrets.EMAIL_HOST,
    port: secrets.EMAIL_PORT,
    secure: false,
    pool: true,
    tls: {
        servername: secrets.EMAIL_HOST,
    },
    auth: {
        user: secrets.EMAIL_USERNAME,
        pass: secrets.EMAIL_PW,
    },
});

module.exports = emailService;
