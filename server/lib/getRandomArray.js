const getRandom = (arr, n) => {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n >= len) return arr;
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

module.exports = getRandom;
