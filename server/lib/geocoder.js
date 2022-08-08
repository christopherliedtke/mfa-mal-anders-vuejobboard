const axios = require("axios");

const getLocation = async (q, country) => {
  try {
    const location = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?apiKey=${process.env.HERE_REST_APIKEY}`,
      {
        params: {
          q: `${q}${country ? "+" + country : ""}`,
          // at: "52.51604,13.37691",
          in: "countryCode:DEU,AUT,CHE,LUX",
        },
        timeout: 6000,
        headers: {
          "accept-encoding": "gzip,deflate",
        },
      }
    );

    if (location.data.items.length === 0) {
      // throw new Error(`No items found for ${q}!`);
      return null;
    }

    // console.log("location.data.items: ", location.data.items);

    return location.data.items;
  } catch (err) {
    if (err.response.response.status === 429) {
      console.error("Error in getGeocode(): ", err.message);
    } else {
      console.error("Error in getGeocode(): ", err);
    }
    return null;
  }
};

module.exports = getLocation;
