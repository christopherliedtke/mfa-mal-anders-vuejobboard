const axios = require("axios");

const getLocation = async (q, country = "Germany") => {
  try {
    const location = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?apiKey=${process.env.HERE_REST_APIKEY}`,
      {
        params: {
          q: `${q}+${country}&in=countryCode:DEU`,
        },
      }
    );

    if (location.data.items.length === 0) {
      // throw new Error(`No items found for ${q}!`);
      return null;
    }

    return location.data.items;
  } catch (err) {
    console.info("Error in getGeocode(): ", err);
    return null;
  }
};

module.exports = getLocation;
