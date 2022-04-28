const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');

  let res = '';
  let counter = 1;
  
  for (let i = 0; i < str.length - 1; i++) {

    if (str[i] === str[i + 1]) {
      counter += 1;
    } else {
      if (counter > 1) {
        res += `${counter}${str[i]}`;
      } else {
        res += str[i];
      }
      counter = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
