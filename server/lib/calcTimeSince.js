const calcTimeSince = date => {
  if (!date) {
    return "";
  }

  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return (
      "vor " +
      Math.floor(interval) +
      " Jahr" +
      (Math.floor(interval) > 1 ? "en" : "")
    );
  }

  interval = seconds / (60 * 60 * 24 * 7);
  if (interval > 1) {
    return (
      "vor " +
      Math.floor(interval) +
      " Woche" +
      (Math.floor(interval) > 1 ? "n" : "")
    );
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return (
      "vor " +
      Math.floor(interval) +
      " Tag" +
      (Math.floor(interval) > 1 ? "en" : "")
    );
  }

  return "heute";
};

module.exports = calcTimeSince;
