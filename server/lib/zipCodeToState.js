const data = require("../config/zipCodes");

const zipCodeToState = zip => {
  const zipCode = parseInt(zip);

  const state = data.find(set => set.plz == zipCode);

  return state ? state.bundesland : "";
};

module.exports = zipCodeToState;
