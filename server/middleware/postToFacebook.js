const axios = require("axios");

module.exports.postToFacebook = async function (message, link) {
  try {
    // const response = await axios.get(
    //     `https://graph.facebook.com/v8.0/${process.env.FACEBOOK_APP_ID}`
    // );
    const response = await axios.post(
      `https://graph.facebook.com/${process.env.FACEBOOK_PAGE_ID}/feed`,
      {
        access_token: process.env.FACEBOOK_ACCESS_TOKEN,
        message: `
            Medizinische Fachangestellte (m/w/d) | Orthopädie und Dermatologie | MVZ Gesundheitszentrum Göttingen
            https://www.mfa-mal-anders.de/2020/08/08/medizinische-fachangestellte-m-w-d-orthopaedie-und-dermatologie-goettingen-mvz-gesundheitszentrum-goettingen-goettingen/
        `,
        link: "https://www.mfa-mal-anders.de/2020/08/08/medizinische-fachangestellte-m-w-d-orthopaedie-und-dermatologie-goettingen-mvz-gesundheitszentrum-goettingen-goettingen/",
      }
    );

    console.log("response: ", response);
  } catch (err) {
    console.log("Error on postToFacebook(): ", err);
  }
};
