const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const arr = [];
  const array = n.toString().split('');

  for (let i = 0; i < array.length; i++) {
    const variant = array.reduce((acc, item, index) => {
      if (index !== i) {
        acc += item;
      }
      return acc;
    }, '')

    arr.push(variant);
  }

  const nums = arr.map(item => +item);

  return Math.max(...nums);
}

module.exports = {
  deleteDigit
};
