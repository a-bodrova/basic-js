const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  const array = [...arr];
  const res = [];

  const controls = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];

  for (let i = 0; i < array.length - 1; i++) {

    res.push(array[i]);

    if (array[i + 1] === '--discard-prev' && i > 0 && !controls.includes(array[i - 1])) {
      res.pop();
    } else if (array[i - 1] === '--discard-next' && !controls.includes(array[i + 1])) {
      res.pop();

    } else if (array[i - 1] === '--double-next' && !controls.includes(array[i + 1])) {
      res.push(array[i]);

    } else if (array[i + 1] === '--double-prev' && i > 0 && !controls.includes(array[i - 1])) {
      res.push(array[i]);

    }

    if (controls.includes(array[i])) {
      res.pop();
    }
  }
  return res;
}

module.exports = {
  transform
};
