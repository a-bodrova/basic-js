const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const fromStr1 = s1.split('').reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  const fromStr2 = s2.split('').reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  let difference = 0;

  for (let key in fromStr1) {
    if (fromStr2[key]) {
      difference += Math.min(fromStr1[key], fromStr2[key]);
    }
  }

  return difference;
}

// getCommonCharacterCount("aabcc", "adcaa");

module.exports = {
  getCommonCharacterCount
};
