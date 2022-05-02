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

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (typeof arr[i + 1] === 'string') {
        i += 2;
        break;
      }
      i += 1;
      break;
    }

    if (arr[i] === '--discard-prev' && result.length > 0) {
      result.pop();
      i++;
      break;
    }

    if (arr[i] === '--double-next') {
      result.push(arr[i + 1]);
      i++;
      break;
    }

    if (arr[i] === '--double-prev') {
      result.push(arr[i - 1]);
      i++;
      break;
    }

    result.push(arr[i]);
  }

  return result;
}

module.exports = {
  transform
};
