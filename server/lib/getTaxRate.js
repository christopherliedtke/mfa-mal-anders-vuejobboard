const getTaxRate = (date = new Date()) => {
  return new Date(date).getTime() < new Date("2022-01-01 00:00:00").getTime()
    ? 0
    : 0.19;
};

module.exports = getTaxRate;
