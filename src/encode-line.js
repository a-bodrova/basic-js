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

function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');

  let res = '';
  let counter = 1;
  
  for (let i = 1; i < str.length; i++) {

    if (str[i] === str[i - 1]) {
      counter += 1;
      if (i === str.length - 1) {
        res += `${counter}${str[i - 1]}`;
        break;
      }
    }  else {
      if (counter > 1) {
        res += `${counter}${str[i - 1]}`;
      } else {
        res += `${str[i - 1]}`;
      };
      if (i === str.length - 1) {
        res += `${str[i]}`;
        break;
      }
      counter = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
