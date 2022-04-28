const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const counter = matrix.reduce((acc, array) => {
    const sum = array.reduce((acc, item) => {
      if (item === '^^') {
        acc += 1;
      }
      return acc;
    }, 0);
    acc += sum;
    return acc;
  }, 0)

  return counter;
}

module.exports = {
  countCats
};
