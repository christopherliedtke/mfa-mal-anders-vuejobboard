const request = require("request");
const { google } = require("googleapis");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("../secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

const jwtClient = new google.auth.JWT(
    secrets.GOOGLE_API_CLIENT_EMAIL,
    null,
    secrets.GOOGLE_API_PRIVATE_KEY,
    ["https://www.googleapis.com/auth/indexing"],
    null
);

module.exports.googleIndexing = function (url = "", type = "URL_UPDATED") {
    if (secrets.GOOGLE_API_CLIENT_EMAIL) {
        try {
            jwtClient.authorize(function (err, tokens) {
                if (err) {
                    console.log(
                        "Error on googleIndexing() jwtClient.authorize(): ",
                        err
                    );
                    return;
                }
                let options = {
                    url:
                        "https://indexing.googleapis.com/v3/urlNotifications:publish",
                    method: "POST",
                    // Your options, which must include the Content-Type and auth headers
                    headers: {
                        "Content-Type": "application/json",
                    },
                    auth: { bearer: tokens.access_token },
                    // Define contents here. The structure of the content is described in the next step.
                    json: {
                        url: url,
                        type: type,
                    },
                };
                request(options, function (error, response, body) {
                    // Handle the response
                    console.log(body);
                });
            });
        } catch (err) {
            console.log("Error on googleIndexing(): ", err);
        }
    }
};
