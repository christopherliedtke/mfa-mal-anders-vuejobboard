// const aws = require("aws-sdk");
const nodemailer = require("nodemailer");
const aws = require("aws-sdk");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");

const ses = new aws.SES({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: "eu-central-1",
  defaultProvider,
});

module.exports.sesMailTransporter = nodemailer.createTransport({
  SES: { ses, aws },
  sendingRate: 14,
});

// module.exports.sendSesMail = data => {
//   return ses
//         .sendEmail({
//             Source: "Christopher Liedtke <ggwoods@gmx.de>", //verified email address
//             Destination: {
//                 ToAddresses: [],
//                 CcAddresses: [],
//                 BccAddresses: []
//             },
//             ReplyToAddresses: [],
//             Message: {
//                 Body: {
//                     Html: {
//                       Charset: 'UTF-8',
//                       Data: 'This is the body of my email!',
//                     }
//                 },
//                 Subject: {
//                   Charset: 'UTF-8',
//                   Data: `Hello!`,
//                 }
//             }
//         })
//         .promise()
//         .then(() => console.log("Email successfully sent!"))
//         .catch(err => console.log("Error in sendEmail() in ses.js", err));
// };
