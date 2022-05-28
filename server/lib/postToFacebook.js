const axios = require("axios");

// https://developers.facebook.com/docs/pages/publishing/

module.exports.postToFacebook = async function (
  message,
  link,
  schedulePublishTime
) {
  try {
    const data = {
      access_token: process.env.FACEBOOK_ACCESS_TOKEN,
      message,
      link,
    };

    if (schedulePublishTime) {
      data.published = false;
      data.schedule_publish_time = schedulePublishTime;
    }

    const response = await axios.post(
      `https://graph.facebook.com/${process.env.FACEBOOK_PAGE_ID}/feed`,
      data
    );

    console.log("response: ", response);

    if (response.status === 200) {
      return response.data.id;
    } else {
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error("Error on postToFacebook(): ", err, "link: ", link);

    return null;
  }
};
